<template>
  <div>
    <nav class="flex items- justify-between flex-wrap bg-white">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Tracker</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-400 hover:text-black hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <span class="inline-block" v-if="authStore.token">
            <span
              @click.prevent="logoutHandle()"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 cursor-pointer"
              >Logout</span
            >
          </span>
          <span class="inline-block" v-else>
            <router-link
              to="/login"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 cursor-pointer"
              >Login/Signup</router-link
            >
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { useAuthStore } from "../store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const authStore = useAuthStore();
function logoutHandle() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.clear();
      window.location.href = "/login";
    })
    .catch((error) => {
      // An error happened.
    });
}
</script>
