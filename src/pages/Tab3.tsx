import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';
import { getUserInfo } from '../services/GithubService';
import { UserInfo } from '../interfaces/UserInfo';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';
import AuthService from '../services/AuthService';
const Tab3: React.FC = () => {

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const history = useHistory();


  const loadUserInfo = async () => {
    const info = await getUserInfo();
    setUserInfo(info);
  }

  useIonViewDidEnter(() => {
    loadUserInfo();
  });

  const handleLoginout = () => {
    AuthService.logout();
    history.replace('/login');
  };

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
          <img alt={userInfo?.name} 
          src={userInfo?.avatar_url} />
          <IonCardHeader>
            <IonCardTitle>{userInfo?.name}</IonCardTitle>
            <IonCardSubtitle>{userInfo?.login}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            {userInfo?.bio}
          </IonCardContent>
        </IonCard>
        <IonButton
        expand='block'
        color='danger'
        onClick={handleLoginout}>
          <IonIcon slot='start' icon={logOutOutline} />
          cerrar sesión
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;