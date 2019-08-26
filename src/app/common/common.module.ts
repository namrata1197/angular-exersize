import { NgModule } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { log } from 'util';

export class CommonModule implements PreloadingStrategy{ 
  preload(route: Route, loadFunction: Function): Observable<any> {
    if (route.data && route.data.preload) {
      console.log(route.data.preload);
      
        return loadFunction();
    } else {
        return of(null);
    }
}
}
