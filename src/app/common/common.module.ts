import { NgModule } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommonModule implements PreloadingStrategy{ 
  preload(route: Route, loadFunction: Function): Observable<any> {
    if (route.data && route.data.preload) {
        return loadFunction();
    } else {
        return of(null);
    }
}
}
