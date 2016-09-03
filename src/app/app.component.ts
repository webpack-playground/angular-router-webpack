import { Component } from "@angular/core";
@Component({
    selector: "app",
    template: `
        <div>
            <a routerLink='/home' routerLinkActive='active' class='menu'>Home</a>
            <a routerLink='/login' routerLinkActive='active' class='menu'>Login</a>
            <a routerLink='/dashboard' routerLinkActive='active' class='menu'>Dashboard</a>
            <div class="content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

export class AppComponent{
    name: string;
    constructor() {
        this.name = "Angular 2";
    }
}