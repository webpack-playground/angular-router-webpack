import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { DashboardComponent} from "./components/dashboard.component";
import { LoginComponent } from "./components/login.component";

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent }
];