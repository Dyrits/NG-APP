import { Component } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent {
  allowServerCreation: boolean = false;
  serverCreationStatus = "No server was created!";

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.allowServerCreation = true;
    }, 2000);
  }

  createServer() {
    this.serverCreationStatus = "Server was created!";
  }
}
