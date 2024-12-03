<template>
  <div class="p-4 max-w-screen-lg mx-auto">
    <!-- 返回按鈕 -->
    <button
      @click="$router.back()"
      class="mb-4 px-6 py-2 rounded-md shadow-md hover:bg-gray-300"
    >
      ← Back
    </button>

    <!-- 詳細內容區 -->
    <div
      v-if="country"
      class="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md"
    >
      <!-- 國旗 -->
      <img
        :src="country.flags.svg"
        alt="flag"
        class="w-full h-auto rounded-lg md:w-1/2 md:max-h-[400px] object-contain"
      />

      <!-- 詳細資訊 -->
      <div class="flex flex-col gap-4 md:w-1/2">
        <h1 class="text-3xl font-bold">{{ country.name.common }}</h1>
        <p><strong>Native Name:</strong> {{ nativeName }}</p>
        <p><strong>Population:</strong> {{ country.population }}</p>
        <p><strong>Region:</strong> {{ country.region }}</p>
        <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
        <p>
          <strong>Capital:</strong>
          {{ country.capital ? country.capital.join(", ") : "N/A" }}
        </p>
        <p><strong>Top Level Domain:</strong> {{ country.tld.join(", ") }}</p>
        <p><strong>Currencies:</strong> {{ currencies }}</p>
        <p><strong>Languages:</strong> {{ languages }}</p>
      </div>
    </div>

    <!-- 載入中提示 -->
    <div v-else class="text-center text-gray-600 mt-8">
      Loading country details...
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["countryName"],
  data() {
    return {
      country: null,
    };
  },
  computed: {
    nativeName() {
      const nativeNames = this.country.name.nativeName || {};
      return Object.values(nativeNames)
        .map((n) => n.common)
        .join(", ");
    },
    currencies() {
      const currencies = this.country.currencies || {};
      return Object.values(currencies)
        .map((c) => c.name)
        .join(", ");
    },
    languages() {
      const languages = this.country.languages || {};
      return Object.values(languages).join(", ");
    },
  },
  mounted() {
    axios
      .get(`https://restcountries.com/v3.1/name/${this.countryName}`)
      .then((response) => {
        this.country = response.data[0];
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
        this.country = null; // 如果出錯，保持 country 為 null
      });
  },
};
</script>

<style scoped>
button {
  transition: all 0.3s;
}
button:hover {
  background-color: #e2e8f0;
}
</style>
