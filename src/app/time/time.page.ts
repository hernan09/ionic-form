import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  //@Input() temp:String;
  img:string
  constructor(public roter:ActivatedRoute) { }

  ngOnInit() {
    this.roter.params.subscribe(params=>{
      
       this.img=(params['carta'])
        console.log(this.img)
       
    })
  }

}
