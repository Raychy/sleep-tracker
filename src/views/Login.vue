<template>
     <div>
          <!-- <h3>Login</h3> -->
          <div class="">
               <form action="" @submit.prevent="googleSignin()" class="w-[500px] h-[400px] bg-slate-200 py-3 px-5 md:mt-[10%] md:ml-[30%] rounded-xl">
                    <h4 class="py-3 text-center mt-4 text-xl">Login</h4>
                   <div class="">
                     <label class="text-gray-800 text-sm w-32">Email</label>
                     <input type="text" name="" id="" class="bg-white text-gray-600 w-full py-2 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none">
                   </div>
                   <div class="">
                    <label class="text-gray-800 text-sm w-32">Password</label>
                    <input type="password" name="" id="" class="bg-white text-gray-600 w-full py-2 px-2 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none">
                  </div>
                  <div class="text-right">
                    <button class="bg-teal-400 text-white px-3 py-1 text-sm mt-2" type="submit">Submit</button>
                  </div>
                  
                  <div class="text-gray-500 text-center text-sm pt-11 pb-2">
                    OR
                  </div>
                  <div class="text-center">
                    <i class="ri-google-fill text-red-600 text-2xl pr-2 cursor-pointer"></i>
                    <i class="ri-facebook-circle-fill text-blue-600 text-2xl cursor-pointer"></i>
                    
                  </div>
                  
               </form>
          </div>
     </div>
</template>
<script setup>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
let provider = new firebase.auth.GoogleAuthProvider();
function googleSignin(){
  firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {

         let credential = result.credential;
         let token = credential.accessToken;
          let user = result.user;

    }).catch((error) => {
       // Handle Errors here.
       let errorCode = error.code;
       let errorMessage = error.message;
       let email = error.email;
       // The firebase.auth.AuthCredentil type that was used.
       let credential = error.credential;
    
    });
}
</script>