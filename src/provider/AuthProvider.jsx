import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

   


    const createUser = (name, email, password, photoURL) => {
       
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Add the user's first name and last name to their profile
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: `${name}`,
              photoURL: photoURL || "" ,
            });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            throw error; // Propagate the error to the caller
          });
      };




    const authInfo = {
        createUser,
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;

