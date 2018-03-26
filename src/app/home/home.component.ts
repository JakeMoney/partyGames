import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from './home.service';
import { Api } from '../api';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private homeService: HomeService,
    private api: Api) { }

  ngOnInit() { }

  public createRoom() {
    
  }

  public joinRoom() {

  }
}
