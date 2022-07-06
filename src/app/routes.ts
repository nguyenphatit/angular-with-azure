import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./home/home.component").then(mod => mod.HomeComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./about/about.component").then(mod => mod.AboutComponent)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/routes").then(mod => mod.ADMIN_ROUTES)
  }
]
