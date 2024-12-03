# Rest Countries Project 🌍

This is a Vue 3 project that displays country information fetched from the [REST Countries API](https://restcountries.com/). Users can view a list of countries, search by name, filter by region, and click on a country card to view detailed information on a separate page.

---

## Features ✨

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Search Functionality**: Search countries by name in real-time.
- **Region Filtering**: Filter countries by their region (e.g., Asia, Europe).
- **Country Details Page**: View detailed information, including flags, population, languages, and more.
- **Dynamic Routing**: Navigate to country details using Vue Router.

---

## Project Setup ⚙️

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/rest-countries-project.git
cd rest-countries-project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

The app will be available at http://localhost:5173.

File Structure 📂
```bash
src/
├── assets/         # Static assets (images, styles, etc.)
├── components/     # Reusable Vue components
│   ├── Card.vue    # Component for displaying individual country cards
│   └── Header.vue  # Header component
├── views/          # Page components
│   ├── HomeView.vue       # Displays the list of countries
│   └── DetailsView.vue    # Displays detailed country information
├── router/         # Vue Router configuration
├── App.vue         # Main application component
└── main.js         # Application entry point
```

## Technologies Used 🛠️
- **Vue 3: Frontend framework
- **Vite: Fast development server and build tool
- **Tailwind CSS: Utility-first CSS framework
- **Axios: For making API requests
- **REST Countries API: External API for country data

## How to Use the App 🖥️
- **Open the app in your browser.
- **Browse the list of countries or search for a specific country by name.
- **Use the dropdown menu to filter countries by region.
- **Click on a country card to view detailed information.
