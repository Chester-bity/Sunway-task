import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activity:any;
  type: any;
  price: any;
  participants:any;

  constructor(public catfactService: ActivityService) { }

  async ngOnInit(){
    var data = await this.catfactService.getActivity();
    this.activity = data.activity;
    this.type = data.type;
    this.price = data.price;
    this.participants = data.participants;
  }


}
