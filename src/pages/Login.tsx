import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { logoGithub } from "ionicons/icons";
import AuthService from "../services/AuthService";
import { useState } from "react";
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [token, setToken] =  useState('');
    const [error, setError] =  useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!username || !token){
            setError('Por favor ingresa tu usuario y token de Github');
            return;
        }
        const success = AuthService.login(username, token);
        if (success){
            window.location.href = '/tab1';
        } else {
            setError('Error al iniciar sesión. Por favor verifica tus credenciales.');
        }
    };
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <IonTitle>Iniciar Sesión</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className= "Ion-padding">
                <div className= "login-container">
                    <IonIcon icon= {logoGithub} className= "login-logo"/>
                    <h1>Inicio de sesión a Github</h1>
                    <form className="login-form" onSubmit={handleLogin}>
                        <IonInput
                        className= "login-field"
                        label= "Usuario de Github"
                        labelPlacement= "floating"
                        fill= "outline"
                        type= "text"
                        value={username}
                        onIonInput= {e => setUsername(e.detail.value!)}
                        required
                        ></IonInput>
                        <IonInput
                        className= "login-field"
                        label= "Token de acceso personal"
                        labelPlacement= "floating"
                        fill= "outline"
                        type= "password"
                        value={token}
                        onIonInput= {e => setToken(e.detail.value!)}
                        required
                        />
                        {error && (
                            <IonText color="danger" className= "login-error">
                                {error}
                                </IonText>
                        )}
                        <IonButton expand= "block" type= "submit">
                            Iniciar Sesión
                        </IonButton>
                        <IonText color="medium" className= "login-hint">
                            <p>Ingresa tu usuario y tu token de Github</p>
                        </IonText>
                    </form>
                </div>
                </IonContent>
        </IonPage>
    );

}
export default Login;