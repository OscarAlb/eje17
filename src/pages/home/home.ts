import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from "../perfil/perfil";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario={
    email:''
  }

  constructor(public navCtrl: NavController ) {

  }

  ingresarDetalles(){
    this.navCtrl.push(PerfilPage)
  }

}
