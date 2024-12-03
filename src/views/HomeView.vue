<template>
  <div class="bg-white">
    <header class="bg-white shadow-md py-6">
      <h1 class="text-3xl font-bold text-center text-black">
        Where in the world?
      </h1>
    </header>
    <div class="p-10 flex flex-wrap justify-between items-center gap-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a country..."
        class="rounded-sm p-4 w-full sm:w-1/2 lg:w-1/3 shadow-md"
      />

      <select v-model="selectedRegion" class="rounded-sm p-4 shadow-md">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div class="mx-auto p-4">
      <div class="flex flex-wrap justify-center gap-20">
        <Card
          v-for="(country, index) in filteredCountries"
          :key="index"
          :country="country"
          class="w-[250px]"
        />
      </div>
      <!-- 若無符合資料，顯示提示訊息 -->
      <div
        v-if="filteredCountries.length === 0"
        class="text-center text-gray-600 mt-8"
      >
        No countries match your search.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      countries: [],
      searchQuery: "",
      selectedRegion: "",
    };
  },
  computed: {
    filteredCountries() {
      // 搜尋和篩選的邏輯
      return this.countries.filter((country) => {
        const matchesSearch = country.name.common
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const matchesRegion =
          this.selectedRegion === "" || country.region === this.selectedRegion;
        return matchesSearch && matchesRegion;
      });
    },
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        this.countries = response.data; // 儲存所有國家資料
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  },
};
</script>

<style scoped>
</style>
