import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-management-module',
  templateUrl: './management-module.component.html',
  styleUrls: ['./management-module.component.css']
})
export class ManagementModuleComponent implements OnInit {

  constructor(public loadingService:LoadingService) { }

  ngOnInit(): void {
  }

}
