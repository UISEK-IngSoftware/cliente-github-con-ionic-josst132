import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonLoading, IonToast } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import { useState } from 'react';
import { fetchRepositories, deleteRepository } from '../services/GithubService';
import { useHistory } from 'react-router';

const Tab1: React.FC = () => {
  const [repos, setRepos] = useState<RepositoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();
  const loadRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const reposData = await fetchRepositories();
      setRepos(reposData);
    } catch (err: unknown) {
      console.error(err);
      setError('Error al cargar repositorios');
    } finally {
      setLoading(false);
    }
  };
  useIonViewDidEnter(() => {
    console.log("IonViewDidEnter: Cargando repositorios");
    loadRepos();
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {repos.map((repo, index) => (
            <RepoItem
              key={index}
              repo={repo}
              onEdit={(r) => history.push('/tab2', { repo: r })}
              onDelete={async (r) => {
                const ok = window.confirm(`¿Eliminar el repositorio "${r.name}"? Esta acción no se puede deshacer.`);
                if (!ok) return;
                try {
                  setLoading(true);
                  if (r.owner && r.name) {
                    await deleteRepository(r.owner, r.name);
                    await loadRepos();
                  }
                } catch (e: unknown) {
                  console.error(e);
                  const resp = (e as { response?: { data?: { message?: string } } }).response;
                  const msg = resp?.data?.message || (e as Error).message || 'Error al eliminar repositorio';
                  setError(msg);
                } finally {
                  setLoading(false);
                }
              }}
            />
          ))}
        </IonList>
        <IonLoading isOpen={loading} message="Cargando..." />
        <IonToast isOpen={!!error} message={error || ''} duration={2000} color="danger" onDidDismiss={() => setError(null)} />
      </IonContent>
    </IonPage>
  );
} ;
export default Tab1;