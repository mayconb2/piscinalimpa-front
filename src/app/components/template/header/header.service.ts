import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderTitle } from './header-title';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // headerTitle: HeaderTitle = {
  //   icon: '',
  //   routerUrl: '',
  //   title: ''
  // }

  private _hheaderTitle = new BehaviorSubject<HeaderTitle>({
    title: 'Inicio Xundas'
  });

  constructor() { }

  get hheaderTitle() : HeaderTitle {
    return this._hheaderTitle.value;
  }

  set hheaderTitle(hd: HeaderTitle) {
    this._hheaderTitle.next(hd);
  }
}
