import { Component, OnInit } from '@angular/core';
import {HEROES_NEW} from '../consts/HEROES_NEW';
import {Hero} from '../../../newcomponent/utils/Hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes-new',
  templateUrl: './heroes-new.component.html',
  styleUrls: ['./heroes-new.component.css']
})
export class HeroesNewComponent implements OnInit {
  heroNew =  HEROES_NEW;
  heroDetail = new Hero();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  showDetail(detail) {
    this.heroDetail = detail;
  }
  goHeroService() {
    this.heroService.testMethod();
  }

}
