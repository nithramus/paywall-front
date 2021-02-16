const { default: i18next } = require("i18next");

i18next.init({
  lng: "en",
  resources: {
    fr: {
      translation: {
        Login: "S'inscrire",
      },
    },
  },
});
export default i18next;
