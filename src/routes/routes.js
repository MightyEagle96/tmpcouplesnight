import NotFound from "../pages/NotFound";

import HomePage from "../pages/Public/HomePage";

const publicRoutes = [
  { path: "/", component: HomePage },

  { path: "*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
