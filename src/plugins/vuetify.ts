// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/main.scss";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  display: {
    thresholds: {
      sm: 800,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
