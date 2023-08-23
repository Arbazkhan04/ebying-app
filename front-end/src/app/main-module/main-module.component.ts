import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})
export class MainModuleComponent implements OnInit {

  constructor(public loadingService:LoadingService) { }

  ngOnInit(): void {
  }

}
