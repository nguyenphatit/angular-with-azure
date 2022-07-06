import { Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminTeamsComponent } from "./admin-teams/admin-teams.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'teams', component: AdminTeamsComponent },
];
