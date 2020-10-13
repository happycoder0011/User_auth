import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmzwQv7CS_wWjN3YZjbIYTZ11gYuJYZrY",
    authDomain: "userauth-376a5.firebaseapp.com",
    databaseURL: "https://userauth-376a5.firebaseio.com",
    projectId: "userauth-376a5",
    storageBucket: "userauth-376a5.appspot.com",
    messagingSenderId: "554539809112",
    appId: "1:554539809112:web:3fdcdf044df09897ed0d2d",
    measurementId: "G-ZVRTD5SSZ8"
  };
  // Initialize Firebase


  class Firebase{
      constructor(){
          app.initializeApp(firebaseConfig);
          this.auth = app.auth()
          this.db = app.firestore()
      }

      login(email,password){
          return this.auth.signInWithEmailAndPassword(email,password)
      }

      logout() {
          return this.auth.signOut()
      }

      async register(name,email,password){
          await this.auth.createUserWithEmailAndPassword(email,password)
          return this.auth.currentUser.updateProfile({
              displayName: name
          })
      }

      addQuote(qoute){
          if(!this.auth.currentUser){
              return alert('not authorized')
          }

          return this.db.doc(`users_codedago`)
      }
  }

  export default new Firebase()