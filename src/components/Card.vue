<template>
  <div
    class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-sm shadow-md"
    @click="goToDetails"
  >
    <img
      :src="country.flags.svg"
      alt="flag"
      class="rounded-t-sm w-full h-36 object-cover"
    />
    <div class="p-4">
      <h1 class="text-xl font-semibold text-gray-800 mb-2">
        {{ country.name.common }}
      </h1>
      <div class="text-sm text-gray-600">
        <p class="mb-1">
          <strong>Population:</strong> {{ country.population }}
        </p>
        <p class="mb-1"><strong>Region:</strong> {{ country.region }}</p>
        <p>
          <strong>Capital:</strong>
          {{ country.capital ? country.capital[0] : "N/A" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.country.name.common}`);
    },
  },
};
</script>

<style scoped>
</style>
