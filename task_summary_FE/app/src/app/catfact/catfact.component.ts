import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatfactService } from '../catfact.service';

@Component({
  selector: 'app-catfact',
  templateUrl: './catfact.component.html',
  styleUrls: ['./catfact.component.css']
})
export class CatfactComponent implements OnInit, OnDestroy {

  catfact: any;
  timer: any;

  constructor(public catfactService: CatfactService) { }

  async ngOnInit(){
    var _this = this;

    this.catfact = await this.catfactService.getCatfact();

    this.timer = setInterval(async()=>{
      this.catfact = await _this.catfactService.getCatfact();
    }, 10000)

  }

  ngOnDestroy() {
    this.timer.clearInterval()
  }



}
