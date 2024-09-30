import { Component, Input } from '@angular/core';
import { Review, TextReview } from '../../review';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

    @Input('review') review!: TextReview;

    public getStartPercentage(): number {
        return (this.review.stars / 5) * 100;
    }
}
