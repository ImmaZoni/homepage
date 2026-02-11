import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{url}/{endpoint}",
  proxyHandler: genericProxyHandler,
  icon: "zfs.svg",

  mappings: {
    info: {
      endpoint: "zfs",
    },
  },
};

export default widget;
