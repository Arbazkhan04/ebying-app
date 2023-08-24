import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingSubject.asObservable();

  startLoading()
  {
    this.loadingSubject.next(true);
  }
  stopLoading()
  {
    this.loadingSubject.next(false);
  }

  constructor(private route: Router) {
    this.route.events.pipe(
      tap(event => {
        if (event instanceof NavigationStart) {
           this.startLoading()
        } else if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
          // Start a timer that emits after 2 seconds
          timer(2000).pipe(
            tap(() => {
              this.stopLoading();
            })
          ).subscribe();
        }
      })
    ).subscribe();
  }
}
