import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  usuarios:{};
  name:string;
  img:string;
  
    constructor(public route:Router,public loading:LoadingController,private http:HttpClient) { }

   getView(){
     this.http.get('http://localhost:4000/view').subscribe(data=>{
     //this.usuarios es un objeto si l oasigno como array no me deja igualarlo a la data
     //asi como esta me lo mapea el html pero no como un array
      this.usuarios=data
     },error=>{
       console.error(error);
       
     })
   }
 delete(i:number){
   this.http.delete('http://localhost:4000/delete').subscribe(data=>{
     console.log("deleted")
      let a= document.createElement('a')
       a.href="/form"
       a.click()
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
  
