import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./components/home.component";
import { DashboardComponent} from "./components/dashboard.component";
import { LoginComponent } from "./components/login.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent }
];



