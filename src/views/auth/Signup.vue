<template>
    <!-- <h3>Signup</h3> -->
    <div class="bg-slate-200 h-[100vh] w-full mt-0 block">
      <!-- <h3>Login</h3> -->
      <div class="md:flex justify-center items-center pt-5">
      <div class="w-[500px] bg-white py-3 px-5 rounded-xl">
        <h4 class="py-3 text-center mt-0 text-xl pb-5">Sign Up</h4>
        <form
        action=""
        
        @submit.prevent="SignupUser()"
      >
        <div class="pb-2">
          <label class="text-gray-800 text-sm w-32">Email</label>
          <input
            type="email"
            name=""
            v-model="userDetails.email"
            required
            placeholder="Enter email"
            id=""
            class="bg-white rounded-md text-gray-600 w-full py-3 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div class="pb-3">
          <label class="text-gray-800 text-sm w-32">Password</label>
          <input
            type="password"
            name=""
            v-model="userDetails.password"
            required
            id=""
            placeholder="********"
            class="bg-white rounded-md text-gray-600 w-full py-3 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div class="pb-3">
          <label class="text-gray-800 text-sm w-32">Confirm Password</label>
          <input
            type="password"
            name=""
            v-model="userDetails.confirmPassword"
            id=""
            placeholder="********"
            required
            class="bg-white rounded-md text-gray-600 w-full py-3 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div class="">
          <button
            class="bg-teal-400 text-white px-3 py-3 text-[16px] mt-2 w-full rounded-md"
            type="submit"
          >
          {{  loading ? 'Please wait...' : ' Sign-up' }}
           
          </button>
        </div>
      </form>
      <div class="text-gray-500 text-center text-sm pt-3 pb-0">OR</div>
        <div class="mt-3">
          <button
          class="w-full bg-white rounded-full px-4 py-2 md:flex justify-center gap-x-8 cursor-pointer border border-gray-300"
          @click="googleSignup()">
          <span class="text-center">Signup with Google</span>
          <img src="@/assets/google-icon.svg" alt="google-icon" class="w-6 h-6 cursor-pointer">
        </button>
        <button @click.prevent="facebookSignup()"
          class="w-full bg-white rounded-full px-4 py-1 md:flex justify-center gap-x-8 mt-3 cursor-pointer border border-gray-300"
        >
          <span class="text-center">Signup with Facebook</span>
          <img src="@/assets/facebook.svg" alt="facebook" class="w-8 h-8 cursor-pointer"  >
        </button>
        </div>

        <p class="mt-8 text-center">Already have an Account? <router-link to="/login" class="text-teal-500">Login</router-link> </p>
      </div>
    </div>
    </div>
</template>
<script setup>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ref } from "vue";
import { useAuthStore } from "../../store";
import { successToastAlert, failedToastAlert } from "@/utils/toaster";
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbkProvider = new firebase.auth.FacebookAuthProvider();
const authStore = useAuthStore();
const loading = ref(false);
const userDetails = ref({
  email: "",
  password: "",
  confirmPassword: "",
})
function googleSignup() {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const credential = result.credential;
      const accessToken = credential.accessToken;
      const user = result.user;
      //     console.log(credential, token, user);
      localStorage.setItem("ST_token", accessToken);
      authStore.user = user;
      // successToastAlert('')
      window.location.href = '/home';
    })
    .catch((error) => {
      // Handle Errors here.
      //  const errorCode = error.code;
      //  const email = error.email;
      //  const credential = error.credential;
      const errorMessage = error.message;
      failedToastAlert(errorMessage)
      // console.log(errorMessage);
      // console.log('credential', credential)
    });
}
function facebookSignup(){
  firebase
  .auth()
  .signInWithPopup(fbkProvider)
  .then((result) => {
    const credential = result.credential;
    const user = result.user;
    const accessToken = credential.accessToken;
    localStorage.setItem("ST_token", accessToken);
    authStore.user = user;
    window.location.href = '/home';
  })
  .catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.email;
    // const credential = error.credential;
    // console.log('errorMessage', errorMessage)
    failedToastAlert(errorMessage)
  });
}
function SignupUser(){
  loading.value = true;
  if(userDetails.value.password !== userDetails.value.confirmPassword ){
    loading.value = false;
    failedToastAlert("Password & confirm password must be the same")
  }
  if(userDetails.value.password.length < 6 || userDetails.value.confirmPassword.length < 6 ){
    loading.value = false;
    failedToastAlert("Password cannot be less than 6 characters")
  }
  else{
    loading.value = true;
  firebase
  .auth()
  .createUserWithEmailAndPassword(userDetails.value.email, userDetails.value.password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // const accessToken = userCredential.accessToken;
    // localStorage.setItem("ST_token", accessToken);
    successToastAlert('Account creation successfull');
    loading.value = false;
    setTimeout(() => {
      window.location.href = '/login';
    }, 4000);
    // window.location.href = '/login';
    // ...
  })
  .catch((error) => {
    loading.value = false;
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode == "auth/email-already-in-use"){
      failedToastAlert('The email address is already in use by another account');
    }
    else{
      failedToastAlert(errorMessage)
    }
    // const errorMessage = error.message;
    // console.log('errorCode', errorCode);
   
    // ..
  });
  }
}
</script>
