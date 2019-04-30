import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  name:string;
  pass:string;
   
    constructor(public route:Router,public loading:LoadingController) { }
  
    
   async submit(){
    const loading = await this.loading.create({
      spinner:"crescent",
      message: 'wait please',
      duration: 2000
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
  
    console.log('Loading dismissed!')
  
    
  
         this.route.navigate(["/home",{"usuario":this.name,"pasword":this.pass}])
    }
  
    
    ngOnInit() {
    }
  
  }
  
