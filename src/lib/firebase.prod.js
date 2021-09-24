import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDGqnQXia8-jnU70I1FTqL39YRfaeexx84',
  authDomain: 'react-clone-netflix-d4a7a.firebaseapp.com',
  projectId: 'react-clone-netflix-d4a7a',
  storageBucket: 'react-clone-netflix-d4a7a.appspot.com',
  messagingSenderId: '858715108872',
  appId: '1:858715108872:web:0e93be807fd10b004dc3bd',
  measurementId: 'G-28E6LPYQWS',
};

const firebase = Firebase.initializeApp(config);

// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
