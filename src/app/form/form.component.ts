import { Component, OnInit } from '@angular/core';
import  { Data } from '../data/data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  daftarData :Data[] = [];
  nim = '';
  nama = '';
  kelas = '';
  Data;
  constructor() { }

  ngOnInit() {
  }
  tambahData(){
    this.Data = new Data(this.nim, this.nama, this.kelas);
    this.daftarData.push(this.Data);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}
