import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./componentes/home/home.component";
import { LeerComponent } from "./componentes/leer/leer.component";
import { ConectaComponent } from './componentes/conecta/conecta/conecta.component';
import { Conecta_ServiceService } from "./services/conecta_Service.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent, LeerComponent, ConectaComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [Conecta_ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
