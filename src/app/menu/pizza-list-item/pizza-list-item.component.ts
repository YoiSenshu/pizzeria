import { Component, Input } from '@angular/core';
import { Pizza } from '../../pizza';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-pizza-list-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './pizza-list-item.component.html',
  styleUrl: './pizza-list-item.component.css'
})
export class PizzaListItemComponent {

    @Input('pizza') pizza!: Pizza;
}
