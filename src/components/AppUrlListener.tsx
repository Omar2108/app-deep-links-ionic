import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App, URLOpenListenerEvent } from '@capacitor/app';

const AppUrlListener: React.FC<any> = () => {
    let history = useHistory();
    useEffect(() => {
      App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
        // Example url: http://localhost:8100/signup/step1
        // slug = /signup/step1
        const slug = event.url.split(':8100').pop();
        if (slug) {
          history.push(slug);
        }
        // If no match, do nothing - let regular routing
        // logic take over
      });
    }, []);
  
    return null;
  };
  
  export default AppUrlListener;