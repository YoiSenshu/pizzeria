import { Component } from '@angular/core';
import { PizzaListComponent } from "./pizza-list/pizza-list.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PizzaListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
