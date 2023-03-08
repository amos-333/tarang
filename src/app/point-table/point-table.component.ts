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
    this.getOneResult('tauziehen')
    this.getOneResult('nritya')
    this.getOneResult('brics')
    this.getOneResult('inquizate')
    this.getOneResult('marche')
    this.getOneResult('captionStaters')
    this.getOneResult('menadzer')
    this.getOneResult('bioScope')
    this.getOneResult('cicada')
    this.getOneResult('graphica')
    this.getOneResult('psy')
    this.getOneResult('grafia')
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
public tauziehen:any=[]
public nritya:any=[]
public brics:any=[]
public inquizate:any=[]
public marche:any=[]
public captionStaters:any=[]
public menadzer:any=[]
public bioScope:any=[]
public cicada:any=[]
public graphica:any=[]
public psy:any=[]
public grafia:any=[]
  ngOnInit(): void {}
}
