import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor(private apiservice: ApiService) {}
  myGlam: any = [] ;
 index = 0;
  ngOnInit() {
  this.apiData();
  }
  apiData() {
    this.apiservice.getData().subscribe((data) => {
      this.myGlam = data;
      console.log(data);
      }
      );
  }
}


