import { registerApplication, start } from "single-spa";
import _ from "lodash";

// untuk init route & app name
const routes = {
  "/": "@vue-mf/navbar",
  "/home": "@vue-mf/home",
  "/auth": "@vue-mf/auth",
  "/error": "@vue-mf/error-handling",
  "/user": "@vue-mf/user",
  "/catalog": "@vue-mf/inventory",
  "/configuration": "@vue-mf/configuration",
  "/campaign": "@vue-mf/campaign",
  "/customer-relation": "@vue-mf/crm",
};

// untuk load route & app name
const loadMicrofrontend = async (name) => {
  try {
    const app = await System.import(name);
    return app;
  } catch (err) {
    console.log(`Error loading ${name} microfrontend: ${err}`);
    return Promise.reject(err);
  }
}


// looping route & app name untuk di register
Object.entries(routes).forEach(([route, name]) => {
  registerApplication({
    name,
    app: async () => {
      try {
        const app = await loadMicrofrontend(name);
        // Pemakaian lodash.merge disini untuk mencegah antara mfe jika ada library conflicts
        _.merge(app, window[name]);
        return app;
      } catch (err) {
        console.error(`Error loading ${name} microfrontend:`, err);
        const errorContainer = document.getElementById("error-container");
        if (errorContainer) {
          errorContainer.innerHTML = `Error loading ${name} microfrontend: ${err.message}`;
        }
        throw err;
      }
    },
    activeWhen: route
  });
});

start();
