import AuthLogo from "./extensions/digi-logo-full.png";
import MenuLogo from "./extensions/digi-logo.svg";
import favicon from "./extensions/favicon.ico";

const translations = {
  en: {
    "Auth.form.welcome.title": "Welcome to Digicommerce!",
    "Auth.form.welcome.subtitle": "Log in to your Digicommerce account",
    "app.components.LeftMenu.navbrand.title": "Digi Dashboard",
    "": "",
    "": "",
  },
};

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["fr", "de"],
    translations: translations,
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
