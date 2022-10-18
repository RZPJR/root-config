import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/navbar",
  app: () => System.import("@vue-mf/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@vue-mf/order",
  app: () => System.import("@vue-mf/order"),
  activeWhen: "/dashboard",
});

registerApplication({
  name: "@vue-mf/home",
  app: () => System.import("@vue-mf/home"),
  activeWhen: "/Home",
});

registerApplication({
  name: "@vue-mf/auth",
  app: () => System.import("@vue-mf/auth"),
  activeWhen: "/auth",
});

start();
