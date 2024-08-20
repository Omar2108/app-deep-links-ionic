import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app-deep-links',
  webDir: 'dist',
  server: {
    url: 'http://localhost:8100', // Tu servidor local
    cleartext: true // Permite el tráfico HTTP sin cifrar
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    },
    // Configuración del esquema URL del plugin App
    App: {
      deepLinking: true
    }
  }
};

export default config;
