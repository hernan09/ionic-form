import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 cartas:any;



  constructor(public roter:ActivatedRoute , public http:HttpClient,public loadingController: LoadingController,public router:Router,navctrl:NavController){}

  getest(){

  this.http.get(`http://localhost:4000/view`).subscribe(resp=>{

    this.cartas=resp
    console.log(this.cartas)
  })
 }
  async sendOption( carta ){
    const loading = await this.loadingController.create({
      message: 'Wait please....',
      duration: 1000,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
     //console.log(carta.img)
     //console.log(carta.name)
     //console.log(carta.url)

     this.router.navigate(['/time',{"carta":carta}])
     
  }
  ngOnInit() {
    this.getest()
  }
   
}
