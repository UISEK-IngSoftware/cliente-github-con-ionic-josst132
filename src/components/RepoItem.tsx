import { IonItem, IonLabel, IonThumbnail} from '@ionic/react';
import './RepoItem.css';
import { RepositoryItem } from '../interfaces/RepositoryItem';

const RepoItem: React.FC<{ repo: RepositoryItem }> = ({ repo }) => {
  return (
    <IonItem>
      <IonThumbnail slot="start">
        <img src={repo.imageUrl || "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/541342838_122143541636840131_6792192992448100576_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=STGnq0HEVdwQ7kNvwHnNLMC&_nc_oc=AdnDW3TcaosdWy_07BR-JibnqGJvv_8CKd3rveIRCLkaroCcRPFj7ioAbUQkKEiEh_4&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=HFc_OoDo5NFH0RUTbA9YZA&oh=00_AfnUO-BrsJHCsZ4AIhuAXd6BCNDuAuwKU3Ud91Q7voos1A&oe=693F75AB" } alt="repo.name"/>
      </IonThumbnail>
      <IonLabel>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <p>Propietario: {repo.owner}</p>
        <p>Lenguaje: {repo.language}</p>
      </IonLabel>
    </IonItem>
  );
};

export default RepoItem;