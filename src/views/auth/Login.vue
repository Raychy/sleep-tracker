<template>
  <div class="bg-slate-200 h-[100vh] w-full mt-0 block">
    <!-- <h3>Login</h3> -->
    <div class="md:flex justify-center items-center pt-32">
      <form
        action=""
        @submit.prevent="loginUser()"
        class="w-[500px] bg-white py-3 px-5 rounded-xl"
      >
        <h4 class="py-3 text-center mt-4 text-xl">Login</h4>
        <div class="mb-2">
          <label class="text-gray-800 text-sm w-32">Email</label>
          <input
            type="text"
            name=""
            id=""
            v-model="userDetails.email"
            class="bg-white text-gray-600 w-full py-2 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div class="mb-2">
          <label class="text-gray-800 text-sm w-32">Password</label>
          <input
            type="password"
            name=""
            v-model="userDetails.password"
            id=""
            class="bg-white text-gray-600 w-full py-2 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div class="text-right">
          <button
            class="bg-teal-400 w-full text-white px-3 py-2 text-sm mt-2"
            type="submit"
          >
            {{ loading ? "Please wait..." : " Login" }}
          </button>
        </div>

        <div class="text-gray-500 text-center text-sm pt-11 pb-2">OR</div>
        <div class="text-center flex justify-center items-center gap-3">
          <img
            src="@/assets/google-icon.svg"
            alt="google-icon"
            class="w-6 h-6 cursor-pointer"
            @click="googleSignin()"
          />
          <img
            src="@/assets/facebook.svg"
            alt="facebook"
            class="w-8 h-8 cursor-pointer"
            @click="facebookSignup()"
          />
        </div>
        <p class="mt-10 text-center">
          Don't have an Account?
          <router-link to="/signup" class="text-teal-500">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
<script setup>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ref } from "vue";
import { useAuthStore } from "../../store";
import { successToastAlert, failedToastAlert } from "@/utils/toaster";
let provider = new firebase.auth.GoogleAuthProvider();
const authStore = useAuthStore();
const fbkProvider = new firebase.auth.FacebookAuthProvider();
const loading = ref(false);
const userDetails = ref({
  email: "",
  password: "",
});
function googleSignin() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      let credential = result.credential;
      let accessToken = credential.accessToken;
      let user = result.user;
      localStorage.setItem("ST_token", accessToken);
      // successToastAlert("Login successfull");
      authStore.user = user;
      loading.value = false;
      window.location.href = "/home";
    })
    .catch((error) => {
      let errorMessage = error.message;
      console.log(errorMessage);
    });
}
function facebookSignup() {
  firebase
    .auth()
    .signInWithPopup(fbkProvider)
    .then((result) => {
      const credential = result.credential;
      const user = result.user;
      const accessToken = credential.accessToken;
      localStorage.setItem("ST_token", accessToken);
      // successToastAlert("Login successfull");
      authStore.user = user;
      loading.value = false;
      window.location.href = "/home";
    })
    .catch((error) => {
      const errorMessage = error.message;
      failedToastAlert(errorMessage);
    });
}
function loginUser() {
  loading.value = true;
  // console.log(userDetails);
  firebase
    .auth()
    .signInWithEmailAndPassword(
      userDetails.value.email,
      userDetails.value.password
    )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const accessToken = user._delegate.accessToken;
      // console.log(userCredential)
      // console.log(accessToken)
      localStorage.setItem("ST_token", accessToken);
      successToastAlert("Login successfull");
      authStore.user = user;
      loading.value = false;
      setTimeout(() => {
        window.location.href = "/home";
      }, 4000);
      //
      // ...
    })
    .catch((error) => {
      loading.value = false;
      const errorCode = error.code;
      // const errorMessage = error.message;
      switch (errorCode) {
          case 'auth/invalid-email':
              failedToastAlert('Invalid email')
              break
          case 'auth/user-not-found':
              failedToastAlert('No account with that email was found')
              break
          case 'auth/wrong-password':
              failedToastAlert('Incorrect password')
              break
          default:
              failedToastAlert('Email or password was incorrect')
              break
        }
      // const errorMessage = error.message;
      // console.log('errorMessage', errorMessage);

      // ..
    });
}
</script>
