import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios/servicios.service';


@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss'],
})
export class PrimerComponent implements OnInit {

  constructor(public dataServicio: ServiciosService) { }

  ngOnInit() {    
    this.dataServicio.arrPersonas;
  }

}
