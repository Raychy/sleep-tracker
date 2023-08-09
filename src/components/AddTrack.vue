<script setup>
import { ref } from "vue"

defineProps(['closeBtn'])
const formInput = ref({
     setDate: "",
     sleepTime: "",
     wakeTime: "",
});
const resetInput = ()=>{
     formInput.value = {};
}
const submitRequest = ()=>{
}
const cancelRequest = ()=>{
}
</script>
<template>
     <div class="modal flex justify-center flex-row-reverse ">
          <div class="bg-slate-100 shadow-xl w-[500px] h-[400px] rounded-xl absolute z-20 top-12 px-11 py-5">
            <div @click="$emit('closeBtn')" class="float-right text-sm cursor-pointer hover:bg-teal-500 hover:text-white hover:border-teal-500 border border-gray-300 rounded-full text-center w-6 h-6 text-gray-600">x</div>
              <h4 class="py-3 text-center mt-4">Add new track</h4>
              <div class="md:flex items-start align-middle gap-4 justify-between py-2">
                <label class="text-gray-800 text-sm w-32">Set Date</label>
                <input type="date" name="" v-model="formInput.setDate" id="" class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none">
              </div>
              <div class="md:flex items-start align-middle gap-4 justify-between py-2">
                <label class="text-gray-800 text-sm w-32">Sleep Time</label>
                <input type="time" name="" id="" v-model="formInput.sleepTime" class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none">
              </div>
              <div class="md:flex items-start align-middle gap-4 justify-between py-2">
                <label class="text-gray-800 text-sm w-32">Wakeup Time</label>
                <input type="time" name="" id="" v-model="formInput.wakeTime" class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-500 focus:outline-none">
              </div>
              <div class="md:flex items-start align-middle gap-4 justify-between py-2">
                <label class="text-gray-800 text-sm w-32">Total Sleep Duration</label>
                <input type="text" readonly name="" id="" class="bg-slate-100 text-gray-600 w-full py-1 px-1 text-sm border border-gray-300 focus:border-gray-300 focus:outline-none">
              </div>
              <div class="md:flex items-start align-middle gap-4 justify-between py-2">
                <div class="">
                  <button class="bg-yellow-400 text-white px-3 py-1 text-sm" @click.prevent="resetInput">Reset</button>
                
                </div>
               <div>
                <button class="bg-red-400 text-white px-3 py-1 text-sm mr-1">Cancel</button>
                <button class="bg-teal-400 text-white px-3 py-1 text-sm">Submit</button>
               </div>
               </div>
          </div>
        </div>
</template>