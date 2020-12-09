import { Injectable } from '@angular/core';
import { Food } from '../models/food.interface';

@Injectable({
  providedIn: 'root'
})

export class QuickLunchService {

  constructor() { }

  burgers: Food[] = [
    {
      id: 1,
      title: 'hamburger',
      description: 'steak, tomate, salade iceberg, oignons rouges, sauce maison',
      price: 6.48
    },
    {
      id: 2,
      title: 'cheeseburger',
      description: 'steak, cheddar, tomate, salade iceberg, oignons rouges, sauce maison',
      price: 7.36
    },
    {
      id: 3,
      title: 'burger du chef',
      price: 7.80
    }
  ];

  pizzas: Food[] = [
    {
      id: 1,
      title: 'napolitaine',
      description: 'base tomate, mozarella, parmesan, basilic frais',
      price: 5.32
    },
    {
      id: 2,
      title: 'Marguarita',
      description: 'base tomate, mozarella, olives',
      price: 5.20
    },
    {
      id: 3,
      title: 'Reine',
      description: 'base tomate, jambon blanc, champignons, mozarella',
      price: 5.36
    },
    {
      id: 4,
      title: 'Verde',
      description: 'base tomate, fondue de poireaux, poivrons, tomates fraiches, Mozarella',
      price: 5.43
    }
  ];

  galettes: Food[] = [
    {
      id: 1,
      title: 'complète',
      description: 'Galette de sarazin, emmental, jambon blanc, oeuf sur le plat',
      price: 3.40
    },
    {
      id: 2,
      title: 'Jambon fromage',
      description: 'Galette de sarazin, jambon blanc, emmental',
      price: 3.20
    }
  ];

  getBurgers(): Food[]{
    return this.burgers;
  }
  getPizzas(): Food[]{
    return this.pizzas;
  }
  getGalettes(): Food[]{
    return this.galettes;
  }
}
