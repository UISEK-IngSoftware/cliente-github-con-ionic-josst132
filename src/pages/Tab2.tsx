import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonToast } from '@ionic/react';
import { IonInput, IonTextarea } from '@ionic/react';
import './Tab2.css';
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import { createRepository, updateRepository } from '../services/GithubService';

const Tab2: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const _state = location.state as unknown as { repo?: RepositoryItem };
  const editingRepo: RepositoryItem | undefined = _state?.repo;

  const [formData, setFormData] = useState<RepositoryItem>({
    name: editingRepo?.name || '',
    description: editingRepo?.description || '',
    imageUrl: editingRepo?.imageUrl || null,
    owner: editingRepo?.owner || null,
    language: editingRepo?.language || null,
    id: editingRepo?.id,
    full_name: editingRepo?.full_name,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setRepoForm = (value: string) => {
    setFormData(prev => ({ ...prev, name: value }));
  };
  const setRepoDescription = (value: string) => {
    setFormData(prev => ({ ...prev, description: value }));
  };

  const saveRepository = async () => {
    setError(null);
    if (!formData.name || formData.name.trim() === '') {
      setError('El nombre del repositorio es obligatorio.');
      return;
    }
    setLoading(true);
    try {
      if (editingRepo && editingRepo.owner && editingRepo.name) {
        await updateRepository(editingRepo.owner, editingRepo.name, { name: formData.name, description: formData.description });
      } else {
        await createRepository(formData);
      }
      history.push('/tab1');
    } catch (e: unknown) {
      console.error(e);
      const resp = (e as { response?: { data?: { message?: string } } }).response;
      const msg = resp?.data?.message || (e as Error).message || 'Error al guardar el repositorio.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput label="Nombre del repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="android-project"
            className="form-field"
            value={formData.name}
            onIonChange={e => setRepoForm(e.detail.value!)}
            ></IonInput>
          <IonTextarea
            label="Descripción del repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="Este es mi repositorio de Android"
            className="form-field"
            value={formData.description || ''}
            onIonChange={e => setRepoDescription(e.detail.value!)}
          ></IonTextarea>
          <IonButton expand="block" className="form-field" onClick={saveRepository}>
            {editingRepo ? 'Actualizar' : 'Guardar'}
          </IonButton>
        </div>
        <IonLoading isOpen={loading} message="Guardando..." />
        <IonToast isOpen={!!error} message={error || ''} duration={2000} color="danger" onDidDismiss={() => setError(null)} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;