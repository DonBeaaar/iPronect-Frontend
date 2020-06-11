import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.page.html',
  styleUrls: ['./evaluar.page.scss'],
})
export class EvaluarPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  evaluacion(){
    alert('Evaluacion enviada');
    this.router.navigateByUrl('/login');
  }

}
