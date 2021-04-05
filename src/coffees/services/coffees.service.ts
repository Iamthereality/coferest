import { Injectable } from '@nestjs/common';
import { Coffee } from '../entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Array<Coffee>;

  constructor() {
    this.coffees = [
      {
        id: 1,
        name: 'Shipwreck Roast',
        brand: 'Buddy Brew',
        flavors: ['chocolate', 'vanilla'],
      },
    ];
  }

  public findAll(): Array<Coffee> {
    return this.coffees;
  }

  public findOne(id: string): Coffee {
    return this.coffees.filter((coffee: Coffee) => coffee.id === +id)[0];
  }

  public createNewCoffee(body: Coffee): Coffee {
    this.coffees.push(body);
    return body;
  }

  public update(id: string, body: Coffee): Coffee {
    const coffee = this.findOne(id);
    if (coffee) {
      this.coffees[this.coffees.indexOf(coffee)] = body;
      return this.findOne(id);
    }
  }

  public delete(id: string): Array<Coffee> {
    this.coffees.splice(this.coffees.indexOf(this.findOne(id)), 1);
    return this.coffees;
  }
}
