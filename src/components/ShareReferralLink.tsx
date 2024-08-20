import React from 'react';
import { IonButton } from '@ionic/react';
import { Share } from '@capacitor/share';

const ShareReferralLink: React.FC = () => {

    const referralCode = 'test123456'

    const shareLink = async () => {
        const shareUrl = `http://localhost:8100/signup?referral_code=${referralCode}`;

        try {
            await Share.share({
                title: '¡Únete a Wallib usando mi código de referido!',
                text: 'Regístrate en Wallib App y usa mi código de referido para comenzar.',
                url: shareUrl,
                dialogTitle: 'Compartir tu código de referido',
            });
        } catch (error) {
            console.error("Error compartiendo el código de referido:", error);
        }
    };

    return (
        <IonButton onClick={shareLink}>
            Compartir Código de Referido
        </IonButton>
    );
};

export default ShareReferralLink;
