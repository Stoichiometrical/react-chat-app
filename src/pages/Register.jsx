import "../styles.scss"
import {  createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth , storage , db } from "../firebase"
import {useState} from "react";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";

export default function Register(){

    const[err,setError] = useState(false)
    const login = useNavigate()
    const signup = useNavigate()
    const loggingIn = ()=>{
        login('/login')
    }
    const signingUp = ()=>{
        signup("")
    }

    const handleSubmit =  async (e)=>{
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const picture = e.target[3].files[0];
        // console.log(picture);

          try{
              //Create user using email and password and store that in res
              const res = await createUserWithEmailAndPassword(auth, email, password)

              ///Create reference to storage using displayName
              const storageRef = ref(storage, displayName);
              //Upload data to the storage reference
              const uploadTask = uploadBytesResumable(storageRef, picture);
              console.log("Email Added successfully")

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
              uploadTask.on(
                  (err) => {  setError(true); console.log("Could not upload"); },
                  () => {
                      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                          console.log("File uploaded at" + downloadURL);
                         await updateProfile( res.user, {displayName, photoURL : downloadURL});
                         await setDoc(doc( db,"users", res.user.uid ),
                             {uid : res.user.uid, displayName, email, photoUrl : downloadURL})
                      });
                  }
              );


          }catch(err){
             // setError(true)
              console.log("Process Failed")
              // console.log(err)
          }




    }
    return(
        //This form currently doesnt have implemnented functionallity
        <div className="formContainer">

            <div className="formWrapper">
                <span className="logo">SMT Chat App</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input placeholder="display name" className="input" />
                    <input type="email" placeholder="email" className="input" />
                    <input type="password" placeholder="password" className="input" />
                    <input type="file" id="img"/>
                    <label htmlFor="img">
                      <img src="img/add.png" alt="M"/>
                        <span className="labelTxt">Add An Avatar</span>
                    </label>
                    <button onClick={signingUp} >Sign Up</button>
                    {  err && <span>Something went wrong</span> }
                </form>
                <p className="text" onClick={loggingIn}>Already have  an account?Login</p>
            </div>
        </div>
    )
}