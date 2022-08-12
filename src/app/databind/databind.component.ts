import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dyName: string="Palash"

  sentence(){
    return "Welcome "+this.dyName;
  }

  appStatus:boolean=true;
  status1='online';
  status2='offline';
}
