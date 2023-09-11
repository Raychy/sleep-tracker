<script setup>
const props = defineProps(['tracks'])
console.log(props.tracks)
</script>
<template>
  <div>
    <!-- {{ tracks }} -->
    <table>
      <tr class="py-5">
        <td class="" colspan="2"></td>
        <th class="font-normal px-5 py-1 text-sm">Time of sleep</th>
        <th class="font-normal px-5 py-1 text-sm">Wake up time</th>
        <th class="font-normal px-5 py-1 text-sm">Sleep duration</th>
      </tr>
      <tr class="py-5" v-for="(track, index) in tracks" :key="index">
        <td class="px-3 text-sm" colspan="2">S/{{ index + 1 }} </td>
        <td class="bg-teal-50 px-5 py-2 text-sm">{{ track?.sleepTime }}</td>
        <td class="bg-teal-50 py-2 text-sm">{{ track?.wakeTime }}</td>
        <td class="bg-teal-50 py-2 text-sm">{{ track?.duration }} HRS</td>
      </tr>
    </table>
  </div>
</template>
