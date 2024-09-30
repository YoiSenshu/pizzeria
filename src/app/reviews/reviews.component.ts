import { Component } from '@angular/core';
import { ReviewSummaryComponent } from './review-summary/review-summary.component';
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review-list/review-list.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewSummaryComponent, ReviewListComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

}
