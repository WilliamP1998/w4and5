import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  users: any = [
    { email: "abc@gmail.com", password: "123" },
    { email: "bc@gmail.com", password: "123" },
    { email: "ac@gmail.com", password: "123" }
  ];
  errorMsg = "";
  constructor(private router: Router) {}

  ngOnInit() {}
  login(event) {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].email == this.email &&
        this.users[i].password == this.password
      ) {
        this.router.navigate(["/account"]);
      }
    }
    this.errorMsg = "something is wrong";
  }
}
