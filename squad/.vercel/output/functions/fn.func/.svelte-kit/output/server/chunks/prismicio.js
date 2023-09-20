import * as prismic from "@prismicio/client";
const repositoryName$1 = "squad";
const adapter = "@slicemachine/adapter-sveltekit";
const libraries = [
  "./src/lib/slices"
];
const localSliceSimulatorURL = "http://localhost:5173/slice-simulator";
const config = {
  repositoryName: repositoryName$1,
  adapter,
  libraries,
  localSliceSimulatorURL
};
const repositoryName = config.repositoryName;
const routes = [
  {
    type: "page",
    uid: "home",
    path: "/"
  },
  {
    type: "page",
    path: "/:uid"
  }
];
const createClient = (config2 = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config2
  });
  return client;
};
export {
  createClient as c
};
