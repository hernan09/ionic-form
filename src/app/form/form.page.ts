import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  usuarios:any;
  name:string;
  img:string;
  acep:Boolean=false;
  monedas:any;
  
    constructor(public route:Router,public actionshep:ActionSheetController,public loading:LoadingController,private http:HttpClient) { }

   getView(){
     this.http.get(`https://api.gael.cl/general/public/clima`).subscribe(data=>{
   
      this.monedas=data
 
      
     },error=>{
       console.error(error);
       
     })
   }

   
   async alert(){
    const actionSheet = await this.actionshep.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
   
change(){

  this.acep=!this.acep
  setTimeout(()=>this.acep=!this.acep,3000)
  
}
 delete(i:number){
   this.http.delete(`http://localhost:4000/delete`).subscribe(data=>{
     console.log("deleted")
     this.usuarios.splice(i,1);
   })
 }

  async sendPostRequest() {
   
    const loading = await this.loading.create({
      spinner: "crescent",
      message: 'wait please',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    let postData = {
      "name": this.name,
      "img": this.img
      
    }

    this.http.post("http://localhost:4000/enviar", postData)
      .subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error);
      });
      this.route.navigate(['/home'])
      
  }
    
    ngOnInit() {
    this.getView()
   
    }
  
  }
  
