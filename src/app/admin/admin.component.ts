import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private api: ApiService) {
    this.getallResults();
  }
  getallResults() {
    this.api.getAllResult().subscribe((res) => {
      this.results = res.data;
      console.log(this.results);
    });
  }
  results: any = [];
  event: string = '';
  name: string = '';
  college: string = '';
  mark: number | null = null;
  position: number | null = null;

  ngOnInit(): void {}

  addResult() {
    let data = {
      event: this.event,
      name: this.name,
      college: this.college,
      mark: this.mark,
      position: this.position,
    };

    this.api.addResult(data).subscribe((res) => {
      console.log(res);
      this.getallResults();
      this.event = '';
      this.college = '';
      this.name = '';
      this.mark = null;
      this.position = null;
    });
  }

  deleteOne(id: any) {
    let r = confirm();
    if (r) {
      this.api.deleteOneResult({ id: id }).subscribe((res) => {
        console.log(res);
        this.getallResults();
      });
    } else {
      return;
    }
  }
}
