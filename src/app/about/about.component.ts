import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // needed to get acccess to route  parameters
import { Router } from '@angular/router';  // needed when you need to change router outlet component based on logic  
import { DataService} from '../data.service';  // import service 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  // Create instance of activated route using DI in constructor below
  // Create instance of Router - when changing router oulet
  // _data is the goals service
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    // called when component loaded
    // res is response and dump the id (name as defined in app-routing.module.ts) to console
    this.route.params.subscribe(res => console.log(res.id));
    // when looking in Chrome (Ctrl Shift I in console tab you can see the response displayed here :48)

    // ideally you you set property in constructor that gets res.id and then bind the property to the console 
    // and then maybe go to db to get that specific ids record

    // Component based Router Navigation
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
// need to create custom method SendMeHome
  sendMeHome() {
    this.router.navigate(['']) // which corresponds to path in in Home as defined in App-routing.module.ts 
  }
}
