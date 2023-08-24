import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';
import { NavigationStart, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})
export class MainModuleComponent implements OnInit {

  showHead = false;
  shouldShowSpinner = true;

  constructor(
    public loadingService: LoadingService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showHead = event.url === '/home' || event.url === '';
        this.shouldShowSpinner = !this.showHead;
      }
    });
  }

  ngOnInit(): void {
    // Check the initial route and set showHead and shouldShowSpinner accordingly
    this.activatedRoute.url.subscribe(urlSegments => {
      this.showHead = urlSegments.length === 0 || urlSegments[0].path === 'home';
      this.shouldShowSpinner = !this.showHead;
    });
  }
}
