import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // showNotas:boolean;
  // changcolor:boolean;
  // sexo: string;
  // strSexo:boolean;
  // blnNext:boolean;
  // arrPersonas: Array<any> = [] as Array<JSON>
  // contact:boolean;

  // regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  // regexptelefono = new RegExp(/^([0-9])*$/);


  constructor(public alertController: AlertController, public dataServicio: ServiciosService) {
  //   this.showNotas = false;
  //   this.changcolor = true;
  //   this.contactos();
  // }
  // event1(event){
  //   this.sexo = event.target.value;
  // }

  // sex(){
  //   if(this.sexo === 'h'){
  //     this.changcolor = true;
  //   }else if(this.sexo === 'm'){
  //     this.changcolor = false;
  //   }
  // }

  // contactos(){
  //   if(this.arrPersonas.length == 0){
  //     this.contact=false;
  //   }else{
  //     this.contact=true;
  //   }
  // }

  // addPerson(strNombre: string, strTelefono: string,strEmail: string,strNotas: string){
  //   this.blnNext = false;
  //   (strNombre) ? this.fnError() : this.fnError('Error: Rellene el campo nombre');
  //   (strTelefono) ? (this.regexptelefono.test(strTelefono)) ? this.fnError : this.fnError('Error: El campo telefono solo contiene numeros') : this.fnError('Error: Rellene el campo telefono');
  //   (strEmail) ? (this.regexp.test(strEmail)) ? this.fnError() :this.fnError('Error: Correo invalido') : this.fnError('Error. Error favor de llenar el campo correo');
  //   (strNotas) ? this.fnError() : this.fnError('Error: Rellene el campo notas');

  //   if(!this.blnNext){

  //   let strSexo:boolean;
  //   strSexo = this.changcolor;
  //   const jsnPersona: any = {
  //     strNombre,
  //     strTelefono,
  //     strEmail,
  //     strNotas,
  //     strSexo
  //   };
  //   this.presentAlert();
  //   this.arrPersonas.push(jsnPersona);
  //   this.contactos();
  //   }
  // }

  // async presentAlert(){
  //   const alert = await this.alertController.create({
  //     header: 'Éxito',
  //     message: 'Se añadio el contacto',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
  // async presentAlerterror(msg){
  //   const alert = await this.alertController.create({
  //     header: 'Error',
  //     message: msg,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }

  // showNote(){
  //   this.showNotas =!this.showNotas;
  // }

  // async presentAlertConfirm(item,nombre) {
  //   const alert = await this.alertController.create({
  //     header: 'Eliminar!',
  //     message: 'Desea eliminar <strong> ' + nombre +'? </strong>',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //         }
  //       }, {
  //         text: 'OK',
  //         handler: () => {
  //           let a = this.arrPersonas.indexOf(item);
  //           this.arrPersonas.splice(a,1);
  //           this.contactos();
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  // fnError(msg?:string){
  //   if(msg){
  //     this.presentAlerterror(msg);
  //     this.blnNext = true;
  //   }else if(this.blnNext){
  //     this.blnNext = true;
  //   }else{
  //     this.blnNext = false;
  //   }
  }

}


