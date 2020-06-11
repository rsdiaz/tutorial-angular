import { Component, OnInit } from '@angular/core';
import { faTwitter, faAngular, faGithub, faFacebook ,IconDefinition } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})

export class TopNavbarComponent implements OnInit {
  public brandName: string;
  public faTwitter: IconDefinition;
  public faAngular: IconDefinition;
  public faGithub: IconDefinition;
  public faFacebook: IconDefinition;

  constructor() {
    this.brandName = 'Roberto Serrano Diaz-Grande';
    this.faTwitter = faTwitter;
    this.faAngular = faAngular;
    this.faGithub = faGithub;
    this.faFacebook = faFacebook;
  }
  ngOnInit() {

  }
}