import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img alt="Silhouette of mountains" src="https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-1/541342838_122143541636840131_6792192992448100576_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=qacI06KppckQ7kNvwHNMUy7&_nc_oc=AdmR1-zQhgV1hWZAyelTvAjkz3SixHCJWYJEMVCh6RD1EB3IMFQwFuI190kK2z2w9uoVo33oFjOffL1ruWCkW7w9&_nc_zt=24&_nc_ht=scontent-lga3-3.xx&_nc_gid=YdTPLFf6vuYdzsywz5I8Kg&oh=00_AfnwHhoWaxtmnmtn7ag4svdr1_Pxn5mR50-PYqfc89XUSg&oe=693618D0" />
          <IonCardHeader>
            <IonCardTitle>Patrick Goyez</IonCardTitle>
            <IonCardSubtitle>Patrick_Goyez</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Soy un desarrollador de software apasionado</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;