import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface'

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Burgers', cols: 1, rows: 1 },
          { title: 'Pizzas', cols: 1, rows: 1 },
          { title: 'Galettes', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Burgers', cols: 1, rows: 1 },
        { title: 'Pizzas', cols: 1, rows: 1 },
        { title: 'Galettes', cols: 1, rows: 1 }
      ];
    })
  );
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private quicklunchService: QuickLunchService) {

    }

  burgers: Food[] = [];
  pizzas: Food[] = [];
  galettes: Food[] = [];

  ngOnInit(): void{
    this.burgers = this.quicklunchService.getBurgers();
    this.pizzas = this.quicklunchService.getPizzas();
    this.galettes = this.quicklunchService.getGalettes();
  }
}

// let foods = new QuickLunchService();
// console.log(foods); 