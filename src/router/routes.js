export default [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    meta: { layout: "Blank" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: "Dashboard" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { layout: "Blank" },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
    meta: { layout: "Blank" },
  },
];
