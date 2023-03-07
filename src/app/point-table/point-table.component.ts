import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css'],
})
export class PointTableComponent implements OnInit {
  overall: any = [];
active:string='eventwise'
  constructor(private api: ApiService) {
    this.getOverall();
    this.getOneResult('tesoro')
  }

  getOverall() {
    this.api.getOverall().subscribe((res) => {
      this.overall = res.data;
      console.log(res);
    });

  }
getOneResult(event:string){
this.api.getOneResult({event:event}).subscribe(res=>{
console.log(res);
( this as any)[event]=res.result
console.log(this.tesoro)
})
}

public tesoro:any=[]
  ngOnInit(): void {}
}
