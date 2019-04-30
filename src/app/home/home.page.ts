import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:string;
  pasword:string;

  constructor(public roter:ActivatedRoute){}


  ngOnInit() {
    this.roter.params.subscribe(params=>{
      console.log("usuario",params['usuario'])
      console.log("pasword",params['pasword'])

      this.usuario=params['usuario'];
      this.pasword=params['pasword']
    })
}
}
