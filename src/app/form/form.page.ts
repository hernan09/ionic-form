import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';


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
     
       this.usuarios = data
        console.log(this.usuarios)
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
  
