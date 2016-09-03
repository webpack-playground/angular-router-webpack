import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { HomeComponent } from "./components/home.component";
import { DashboardComponent} from "./components/dashboard.component";
import { LoginComponent } from "./components/login.component";
import { routes } from "./app.router";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [ AppComponent ],
    providers: [
         { provide: LocationStrategy,  useClass: HashLocationStrategy }
    ]
})
export class AppModule {}