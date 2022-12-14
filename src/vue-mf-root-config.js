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

registerApplication({
  name: "@vue-mf/error-handling",
  app: () => System.import("@vue-mf/error-handling"),
  activeWhen: "/error",
});

registerApplication({
  name: "@vue-mf/user",
  app: () => System.import("@vue-mf/user"),
  activeWhen: "/user",
});

registerApplication({
  name: "@vue-mf/inventory",
  app: () => System.import("@vue-mf/inventory"),
  activeWhen: "/catalog",
});

registerApplication({
  name: "@vue-mf/configuration",
  app: () => System.import("@vue-mf/configuration"),
  activeWhen: "/configuration",
});

registerApplication({
  name: "@vue-mf/campaign",
  app: () => System.import("@vue-mf/campaign"),
  activeWhen: "/campaign",
});

registerApplication({
  name: "@vue-mf/crm",
  app: () => System.import("@vue-mf/crm"),
  activeWhen: "/customer-relation",
});

start({
  urlRerouteOnly: true,
});

