import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  evaluacion(){
    alert('La publicación debe ser corregida, ya que, en su titulo dice arros');
    
  }

}
