import { Component, OnInit } from '@angular/core';
import {Hero} from './utils/Hero';
import {HEROES} from '../heroes/consts/HEROES';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

  hero: Hero = new Hero();
  constructor() { }

  ngOnInit() {
    this.hero.id = 1;
    this.hero.name = 'windstorm';
  }

}
