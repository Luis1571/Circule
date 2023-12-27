import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Conecta_ServiceService } from "src/app/services/conecta_Service.service";


@Component({
  selector: "app-conecta",
  templateUrl: "./conecta.component.html",
  styleUrls: ["./conecta.component.scss"],
})
export class ConectaComponent implements OnInit {
  public inputControl: FormControl=new FormControl(); ;
  constructor(private readonly rutaActiva: ActivatedRoute,private conectaService:Conecta_ServiceService) {   }

  ngOnInit(): void {
    //console.log(this.rutaActiva.snapshot.params["parametro"]);
   console.log(this.obtenerDatos()) 
 

  }
  obtenerDatos() {
    this.conectaService.obtenerDatos().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }


aa(){
  console.log(this.inputControl)
}
}