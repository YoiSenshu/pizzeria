import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { PizzaListItemComponent } from "../pizza-list-item/pizza-list-item.component";

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [NgFor, PizzaListItemComponent],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css'
})
export class PizzaListComponent {

    public pizzaService: PizzaService;

    constructor(pizzaService: PizzaService) {
        this.pizzaService = pizzaService;
    }
}
