import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/navbar",
  app: () => System.import("@vue-mf/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@vue-mf/order",
  app: () => System.import("@vue-mf/order"),
  activeWhen: "/view-doggos",
});

registerApplication({
  name: "@vue-mf/auth",
  app: () => System.import("@vue-mf/auth"),
  activeWhen: "/auth",
});

start();
