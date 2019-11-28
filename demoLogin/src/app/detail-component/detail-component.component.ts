import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  job: String =  "Engineer";
  dateTime: String ;
  constructor() { 
    setInterval( ()=>{
      let currentDate = new Date();
      this.dateTime = currentDate.toDateString() + " " + currentDate.toTimeString();
    }
       , 1000);

  }

  ngOnInit() {
  }

}
