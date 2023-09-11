import { createApp } from 'vue'
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
// import './style.css'
import './index.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import router from "./router";
import "remixicon/fonts/remixicon.css";
import { createPinia } from 'pinia'
// import { VueFire, VueFireAuth } from 'vuefire'

const firebaseConfig = {
  apiKey: "AIzaSyB1hBCu0a24bng9ikJefEN46VDi5XR5gGI",
  authDomain: "sleep-tracker-f615e.firebaseapp.com",
  projectId: "sleep-tracker-f615e",
  storageBucket: "sleep-tracker-f615e.appspot.com",
  messagingSenderId: "263311293599",
  appId: "1:263311293599:web:5193dd9c08267bdc2136aa",
  measurementId: "G-X549JQ2W5P",
  databaseURL: "https://sleep-tracker-f615e-default-rtdb.firebaseio.com",

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app
  .use(VueApexCharts).mount('#app')
