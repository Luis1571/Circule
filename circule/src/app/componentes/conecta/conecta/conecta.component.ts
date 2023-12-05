import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-conecta",
  templateUrl: "./conecta.component.html",
  styleUrls: ["./conecta.component.scss"],
})
export class ConectaComponent implements OnInit {
  constructor(private readonly rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.rutaActiva.snapshot.params["parametro"]);
  }
}
