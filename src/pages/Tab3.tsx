import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img alt="User Image" src="https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/541342838_122143541636840131_6792192992448100576_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=STGnq0HEVdwQ7kNvwHnNLMC&_nc_oc=AdnDW3TcaosdWy_07BR-JibnqGJvv_8CKd3rveIRCLkaroCcRPFj7ioAbUQkKEiEh_4&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=HFc_OoDo5NFH0RUTbA9YZA&oh=00_AfnUO-BrsJHCsZ4AIhuAXd6BCNDuAuwKU3Ud91Q7voos1A&oe=693F75AB" />
          <IonCardHeader>
            <IonCardTitle>Patrick Goyez</IonCardTitle>
            <IonCardSubtitle>Patrick_Goyez</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Soy un desarrollador de software apasionado
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;