import React, { useEffect, useState } from 'react';
import { IonButton, IonInput, IonLabel } from '@ionic/react';
import { useLocation } from 'react-router';
import './Signupt.css';


const Signup: React.FC = () => {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('referral_code');
    if (code) {
      setReferralCode(code);
    }
  }, [location]);

  return (
    <div className='container'>
      <h1>Registro</h1>
      <form>
        <IonLabel>Email</IonLabel>
        <IonInput placeholder="Email" />

        <IonLabel>Código de Referido</IonLabel>
        <IonInput value={referralCode || ''} placeholder="Código de Referido" />

        <IonButton expand="block">Registrar</IonButton>
      </form>
    </div>
  );
};

export default Signup;
