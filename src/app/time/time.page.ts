import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  //@Input() temp:String;
  carta:object
  constructor(public route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.carta = JSON.parse(params.carta);
    })
  }

  ngOnInit() {
    //
  }

}
