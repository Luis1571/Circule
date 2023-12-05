import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  _parametro = 4;
  // _parametroObj: any = {
  //   nombre: "Juan",
  //   password: "dddd",
  //   apellido1: "Garcia",
  //   apellido2: "Marin",
  //   email: "JGM@gmail.com",
  //   admin: false,
  //   fecInicio: "2002-04-05",
  //   user: "JGMddd",
  // };
  constructor() {}

  ngOnInit(): void {
    const arrayPrincipal = [
      [{ id: 1 }, { id: 2 }],
      [{ id: 1 }, { id: 2 }],

      [{ id: 1 }, { id: 2 }],

      [{ id: 1 }, { id: 2 }],

      [{ id: 1 }, { id: 2 }],

      [{ id: 3 }, { id: 4 }],
      [{ id: 5 }, { id: 6 }],
    ];

    const arrayResultante = arrayPrincipal.flat();

    console.log(arrayResultante);
  }
}
