import { Component, OnInit } from '@angular/core';
import {HEROES_NEW} from '../consts/HEROES_NEW';
import {Hero} from '../../../newcomponent/utils/Hero';

@Component({
  selector: 'app-heroes-new',
  templateUrl: './heroes-new.component.html',
  styleUrls: ['./heroes-new.component.css']
})
export class HeroesNewComponent implements OnInit {
  heroNew =  HEROES_NEW;

  constructor() { }

  ngOnInit() {
  }

}
