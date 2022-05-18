import NotFound from "../pages/NotFound";
import Attendees from "../pages/Public/Attendees";

import HomePage from "../pages/Public/HomePage";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/attendees", component: Attendees },

  { path: "*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
