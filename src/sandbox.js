const sandboxes = {
  "/sandbox/test": () => import("@/components/test.vue"),
  "/sandbox/test1": () => import("@/components/ProductCard/sandbox/ProductCardSandbox.vue"),
};

const routes = [
  ...Object.entries(
    sandboxes
  ).map(([path, component]) => ({ path, component })),
];

export default routes;
