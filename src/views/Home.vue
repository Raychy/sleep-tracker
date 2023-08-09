<script setup>
import { ref } from 'vue';
import AddTrack from '@/components/AddTrack.vue'
const testData = {
          series: [{
            name: 'Duration',
            data: ['5H', '6H', '7H', '6H', '4H', '5H', '1H']
          },
          //  {
          //   name: 'series2',
          //   data: [11, 32, 45, 32, 34, 52, 41]
          // }
        ],
          chartOptions: {
            chart: {
              height: 300,
              type: 'line',
              zoom: {
                enabled: false
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              type: 'string',
              categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
            },
           
          }, 
        };
const isOpen = ref(false);
function openHandle(){
  isOpen.value = true;
}
function closeHandle(){
  isOpen.value = false;
}
</script>
<!-- #2DD4BF -->

<template>
  <div class="my-10 relative">
    <h1 class="text-gray-800 text-2xl text-center ">Daily Sleep Tracker</h1>
    <div class=" text-center">
      <button class="bg-teal-500 text-white rounded-[30px] py-1 px-4 my-4 text-sm text-center" @click="openHandle()">+ New Entry</button>
    </div>
    <div class="block md:flex justify-center gap-6 items-start text-center">
        <div>
          <h3 class="py-2">Sleep Duration</h3>
          <apexchart type="area" height="300" width="500" :options="testData.chartOptions" :series="testData.series"></apexchart>
        </div>
        <div>
          <h3 class="py-2">Sleep Stats</h3>
          <div>
            <table>
              <tr class="py-5">
                <td class="" colspan="2"></td>
                <th class="font-normal px-5 py-1 text-sm">Time of sleep</th>
                <th class="font-normal px-5 py-1 text-sm">Wake up time</th>
                <th class="font-normal px-5 py-1 text-sm">Sleep duration</th>
              </tr>
              <tr class="py-5">
                <td class="px-3 text-sm" colspan="2">Mon</td>
                <td class="bg-teal-50 px-5 py-2 text-sm">05:00</td>
                <td class="bg-teal-50 py-2 text-sm">10:00</td>
                <td class="bg-teal-50 py-2 text-sm">11:00</td>
              </tr>
              <tr class="py-5">
                <td class="px-3 text-sm" colspan="2">Tue</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
              </tr>
              <tr class="py-5">
                <td class="px-3 text-sm" colspan="2">Wed</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
              </tr>
              <tr class="py-2">
                <td class="px-3 text-sm" colspan="2">Thur</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
              </tr>
              <tr class="py-5">
                <td class="px-3 text-sm" colspan="2">Fri</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
              </tr>
              <tr class="py-5">
                <td class="px-3 text-sm" colspan="2">Sat</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
              </tr>
              <tr class="py-2">
                <td class="px-3 text-sm" colspan="2">Sun</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
                <td class="bg-teal-50 py-2 text-sm">00:00</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
    <AddTrack v-if="isOpen" @closeBtn="closeHandle"/>
   </div>
</template>

<style scoped>
</style>
