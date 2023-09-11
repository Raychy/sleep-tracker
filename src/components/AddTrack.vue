<script setup>
import { computed, ref } from "vue";
import firebase from "firebase/compat/app";
import axios from "axios";
import { useAuthStore } from "@/store";
import { successToastAlert, failedToastAlert } from "@/utils/toaster";
import { diff } from "@/utils/timeDiff";
const authStore = useAuthStore();
const trackerRef = firebase.database().ref(`/allTrackers/${authStore.uuid}`);
const sleepDuration = ref("");

// const database = firebase.database();
defineProps(["closeBtn"]);
const emit = defineEmits(["closeBtn"]);
const loading = ref(false);
const durationHandle = computed(() => {
  return diff(formInput.value.sleepTime, formInput.value.wakeTime);
});
const formInput = ref({
  setDate: "",
  sleepTime: "",
  wakeTime: "",
});
const resetInput = () => {
  formInput.value = {};
};

function savesleep() {
  try {
    loading.value = true;
    trackerRef.push({
      ...formInput.value,
      duration: durationHandle.value,
    });
    loading.value = false;
    successToastAlert("New track added successfully!");
    resetInput();
  } catch (err) {
    loading.value = false;
  }
}
const cancelRequest = () => {
  emit("closeBtn");
};
</script>
<template>
  <div class="modal flex justify-center flex-row-reverse">
    <div
      class="bg-slate-100 shadow-xl w-[550px] h-[400px] rounded-xl absolute z-20 top-12 px-11 py-5"
    >
      <div
        @click="$emit('closeBtn')"
        class="float-right text-sm cursor-pointer hover:bg-teal-500 hover:text-white hover:border-teal-500 border border-gray-300 rounded-full text-center w-6 h-6 text-gray-600"
      >
        x
      </div>
      <h4 class="py-3 text-center mt-4">Add new track</h4>
      <form action="" @submit.prevent="savesleep()">
        <div
          class="md:flex items-start align-middle gap-4 justify-between py-2"
        >
          <label class="text-gray-800 text-sm w-[200px]">Set Date</label>
          <input
            type="date"
            name=""
            v-model="formInput.setDate"
            required
            id=""
            class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div
          class="md:flex items-start align-middle gap-4 justify-between py-2"
        >
          <label class="text-gray-800 text-sm w-[200px]">Sleep Time</label>
          <input
            type="time"
            name=""
            required
            id=""
            v-model="formInput.sleepTime"
            class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div
          class="md:flex items-start align-middle gap-4 justify-between py-2"
        >
          <label class="text-gray-800 text-sm w-[200px]">Wakeup Time</label>
          <input
            type="time"
            name=""
            required
            id=""
            v-model="formInput.wakeTime"
            class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none"
          />
        </div>
        <div
          class="md:flex items-start align-middle gap-4 justify-between py-2"
        >
          <label class="text-gray-800 text-sm w-[200px]"
            >Total Sleep Duration</label
          >
          <input
            type="text"
            readonly
            name=""
            :value="durationHandle +'HRS' "
            id=""
            class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-300 focus:outline-none"
          />
        </div>
        <!-- {{ durationHandle }} -->
        <div
          class="md:flex items-start align-middle gap-4 justify-between py-2"
        >
          <div class="">
            <button
              class="bg-yellow-400 text-white px-3 py-1 text-sm"
              @click.prevent="resetInput"
            >
              Reset
            </button>
          </div>
          <div>
            <button
              class="bg-red-400 text-white px-3 py-1 text-sm mr-1"
              type="button"
              @click.prevent="cancelRequest"
            >
              Cancel
            </button>
            <button
              class="bg-teal-400 text-white px-3 py-1 text-sm"
              type="submit"
            >
              {{ loading ? "Please wait..." : "Submit" }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
