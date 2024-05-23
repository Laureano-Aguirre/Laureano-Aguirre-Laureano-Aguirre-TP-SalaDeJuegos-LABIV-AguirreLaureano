import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'fir-hostingutn-93fc9',
          appId: '1:211725096150:web:625a638645ec2205b6a577',
          storageBucket: 'fir-hostingutn-93fc9.appspot.com',
          apiKey: 'AIzaSyCmF_2AUZOBVNobxCy-TUZ8q03cilnNr1Y',
          authDomain: 'fir-hostingutn-93fc9.firebaseapp.com',
          messagingSenderId: '211725096150',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
