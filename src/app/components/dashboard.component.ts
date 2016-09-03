import { Component } from "@angular/core";

declare var require: (any);

@Component({
    template: require("./dashboard.component.html")
})
export class DashboardComponent {

}