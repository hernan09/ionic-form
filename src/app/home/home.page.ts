import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 estaciones:any;
 hora:string;
 temp:string;
 humedad:string;
 estado:string;
 codigo:string

  constructor(public roter:ActivatedRoute , public http:HttpClient,public loadingController: LoadingController,public router:Router){}

  getest(){

  this.http.get(`https://api.gael.cl/general/public/clima`).subscribe(resp=>{

    this.estaciones=resp
    console.log(this.estaciones)
  })
 }
  async sendOption( estacion ){
    const loading = await this.loadingController.create({
      message: 'Wait please....',
      duration: 2000,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
     console.log(estacion)

     this.router.navigate(['/time',{"estacion":estacion}])
  }
  ngOnInit() {
    this.getest()
  }
   
}
