import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.html'],
  styles: [`.hero {
    background-image: url('/assets/img/green-leaves.jpg') !important;
    background-size: cover;
    background-position: center center;
  }`]
})

export class HeroComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor() {
    this.title = 'Roberto Serrano Diaz-Grande';
    this.subtitle = 'Hola, me llamo';
  }

  ngOnInit() {

  }
}