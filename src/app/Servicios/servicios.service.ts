import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  usuario:any;
  constructor() {
    this.usuario={
      user:'Admin',
      correo:'admin@utags.edu.mx'
    }
  }

  logOut(){
    this.usuario = {
      user:"",
      correo:""
    }
  }
}

//   constructor() { }
// }
