<script setup>
import { ref, onBeforeMount, computed } from "vue";
import AddTrack from "@/components/AddTrack.vue";
import Header from "@/components/Header.vue";
import firebase from "firebase/compat/app";
import { useAuthStore } from "../../store";
import Statistics from "../../components/Statistics.vue";
import Chart from "../../components/Chart.vue";
const authStore = useAuthStore();
const isOpen = ref(false);
function openHandle() {
  isOpen.value = true;
}
function closeHandle() {
  isOpen.value = false;
}
onBeforeMount(() => {
  authStore.getAlltracks();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      authStore.uuid = uid;
      // ...
    } else {
      authStore.uuid = "";
      console.log("error from auth");
    }
  });
});
</script>
<!-- #2DD4BF -->

<template>
  <div>
    <Header class="px-6 pt-6" />
    <div class="my-10 relative">
      <h1 class="text-gray-800 text-2xl text-center">Daily Sleep Tracker</h1>
      <div class="text-center">
        <button
          class="bg-teal-500 text-white rounded-[30px] py-1 px-4 my-4 text-sm text-center"
          @click="openHandle()"
        >
          + New Entry
        </button>
      </div>
      <div class="block md:flex justify-center gap-6 items-start text-center">
        <div>
          <h3 class="py-2">Sleep Duration</h3>
          <Chart :tracks="authStore.tracks.reverse()" :categories="authStore.categories" :duration="authStore.duration" />
        </div>
        <div>
          <h3 class="py-2">Sleep Stats</h3>
          <!-- {{ tracks }} -->
          <Statistics :tracks="authStore.tracks.reverse()"/>
        </div>
      </div>
      <AddTrack v-if="isOpen" @closeBtn="closeHandle" />
    </div>
  </div>
</template>

<style scoped></style>
