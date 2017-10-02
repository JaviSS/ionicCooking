import firebase from 'firebase';

export class AutenticacionServicio {
  registrar(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
