import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConectaComponent } from "./componentes/conecta/conecta/conecta.component";
import { HomeComponent } from "./componentes/home/home.component";
import { LeerComponent } from "./componentes/leer/leer.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "leer",
    component: LeerComponent,
  },
  {
    path: "conecta/:parametro",
    component: ConectaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
