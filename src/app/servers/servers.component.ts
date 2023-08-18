import { Component } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent {
  allowServerCreation: boolean = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.allowServerCreation = true;
    }, 2000);
  }
}
