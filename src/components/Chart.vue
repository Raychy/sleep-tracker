<script setup>
const props = defineProps(["tracks", "categories", "duration"]);
// console.log(props.duration)
const testData = {
  series: [
    {
      name: "Duration",
      data: props.duration,
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      type: "array",
      categories: props.categories,
    },
  },
};
</script>

<template>
  <div>
    <!-- {{ testData.series }}
    {{ categories }}
    {{ testData.chartOptions.xaxis }} -->
    <apexchart
      type="area"
      height="300"
      width="500"
      :options="testData.chartOptions"
      :series="testData.series"
    ></apexchart>
  </div>
</template>
