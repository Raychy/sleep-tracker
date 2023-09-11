import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
export const useAuthStore = defineStore({
     id: 'auth',

     state: () => ({
          token: localStorage.getItem('ST_token') ?? '',
          user: {},
          uuid: "",
          tracks: [],
          categories: [],
          duration:[]
     }),
     getters: {

     },
     actions: {
          getAlltracks() {
               const trackerRef = firebase.database().ref(`/allTrackers` + this.uuid);
               try {
                    trackerRef.on("value", (snapshot) => {
                         const data = snapshot.val();
                         const res = Object.keys(data)
                              .filter((key) => this.uuid === key)
                              .reduce((obj, key) => {
                                   obj[key] = data[key];
                                   return Object.values(obj);
                              }, {});

                         // tracks.value = Object.values(res[0]);
                         //     console.log(res);
                         for (let index = 0; index < 7; index++) {
                              const element = Object.values(res[0])[index];
                              this.tracks.push(element);
                              // console.log(`${element}`)
                         }
                         for (let index = 0; index < 7; index++) {
                              const element = index + 1;
                              this.categories.push(`S/${element}`)
                         }
                         for (let index = 0; index < 7; index++) {
                              const element = Object.values(res[0])[index];
                              this.duration.push(`${element.duration}H`)
                         }
                    });

               } catch (err) { }
          }
     },

})