const sandboxes = {
  "/sandbox/test": () => import("@/components/test.vue"),
};

const routes = [
  ...Object.entries(
    sandboxes
  ).map(([path, component]) => ({ path, component, title: path })),
];

export default routes;
