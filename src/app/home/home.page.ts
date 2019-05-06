import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 cartas:any;
 idCarta:any


  constructor(public roter:ActivatedRoute , public http:HttpClient,public loadingController: LoadingController,public router:Router,navctrl:NavController){}

  getest(){

  this.http.get(`http://localhost:4000/view`).subscribe(resp=>{

    this.cartas=resp
    console.log(this.cartas)
  })
 }
  async sendOption() {
    const carta = this.cartas.find(carta => carta._id === this.idCarta);
    const loading = await this.loadingController.create({
      message: 'Wait please....',
      duration: 1000,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        carta: JSON.stringify(carta)
      }
    };
    this.router.navigate(['/time'], navigationExtras);
  }
  ngOnInit() {
    this.getest()
  }
   
}
