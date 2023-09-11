<template>
  <div class="bg:[#DEF0ED] overflow-y-hidden h-[100vh]">
    <Header class="px-6 pt-6"/>
    <div class="block md:w-[80%]  ml-[10%]">
     <div class="block md:grid grid-cols-2 justify-between items-center gap-x-4">
     
      <div>
        <div>
          <h3 class="text-2xl font-normal ">Are you tired of feeling groggy</h3>
          <h3 class="text-2xl font-bold pb-2">and fatigued every morning?</h3>
          <p>
             Do you want to
            take charge of your sleep and wake up refreshed, ready to conquer the day?
            Look no further – introducing the revolutionary Daily Sleep Tracker App,
            designed to empower you to understand and improve your sleep quality like
            never before.
          </p>
        </div>
        <div class="pt-8">
          <h3 class="text-2xl font-bold pb-2">Why Sleep Matters</h3>
          <p>
            Sleep is a fundamental pillar of our well-being, affecting everything
            from our physical health to our cognitive performance. Yet, in today's
            fast-paced world, it's easy to neglect our sleep needs. The Daily Sleep
            Tracker App is here to change that, by giving you the tools you need to
            monitor and enhance your sleep patterns. <router-link to="/details"><i class="text-teal-500 text-sm hover:underline">Read more</i></router-link>
          </p>
        </div>
      </div>
      <div>
       <img src="@/assets/bg.svg" alt="bg">
      </div>
     </div>
    </div>
  </div>
  <!-- class="h-[95vh]" -->
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>