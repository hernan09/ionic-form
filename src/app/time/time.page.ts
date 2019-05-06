import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  @Input() temp:String;
  constructor(public roter:ActivatedRoute) { }

  ngOnInit() {
    this.roter.params.subscribe(params=>{
      console.log(params['estacion'])
    })
  }

}
