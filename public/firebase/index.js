import * as Firebase from 'firebase';
import { config } from './config';

const app = Firebase.initializeApp(config);
const db = app.database();
const appsRef = db.ref().child('applications');
const flagsRef = db.ref().child('flags');

export {
   flagsRef,
   appsRef,
}