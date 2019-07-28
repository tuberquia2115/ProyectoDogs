import firebase from "firebase";
const CreateUsers = async (user, pass, nombres) => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(user, pass);
    await result.user.updateProfile({
      displayName: nombres
    });
    const configuracion = {
      url: "https://proyectodogs-8ace1.firebaseapp.com"
    };
    await result.user.sendEmailVerification(configuracion);
    await firebase.auth().signOut();
    return true;
  } catch (error) {
    console.log("Huvo un problema al crear el usuario");
  }
};

export default CreateUsers;
