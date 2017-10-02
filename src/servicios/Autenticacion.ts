import firebase from 'firebase';

export class AutenticacionServicio {

  registrar(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  iniciarSesion(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  cerrarSesion() {
    return firebase.auth().signOut();
  }
}
