import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';


@Injectable()
export class AppService {
    public showMenu: boolean = false;

    constructor(private router: Router) {
      router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe((e: NavigationEnd)  => {
        this.showMenu = e.url == "/" ? false : true;
        });
    }
  }