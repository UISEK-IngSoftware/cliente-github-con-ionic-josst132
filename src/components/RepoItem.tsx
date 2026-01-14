import { IonItem, IonLabel, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import './RepoItem.css';
import { RepositoryItem } from '../interfaces/RepositoryItem';

const RepoItem: React.FC<{ repo: RepositoryItem, onDelete?: (r: RepositoryItem)=>void, onEdit?: (r: RepositoryItem)=>void }> = ({ repo, onDelete, onEdit }) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={repo.imageUrl || "https://via.placeholder.com/120"} alt={repo.name || 'repo'}/>
        </IonThumbnail>
        <IonLabel>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <p>Propietario: {repo.owner}</p>
          <p>Lenguaje: {repo.language}</p>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="primary" onClick={() => onEdit && onEdit(repo)}>
          Editar
        </IonItemOption>
        <IonItemOption color="danger" onClick={() => onDelete && onDelete(repo)}>
          Eliminar
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default RepoItem;