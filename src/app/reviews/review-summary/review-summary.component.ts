import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ReviewService } from '../../review.service';

@Component({
  selector: 'app-review-summary',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './review-summary.component.html',
  styleUrl: './review-summary.component.css'
})
export class ReviewSummaryComponent {

    private reviewService: ReviewService;

    constructor(reviewService: ReviewService) {
        this.reviewService = reviewService;
    }

    public starsAveragePercentage(): number {
        return (this.starsAverage() / 5) * 100;
    }

    public starsAverage(): number {
        let sum: number = 0;
        this.reviewService.getAllReviews().map(review => sum += review.stars);
        const average: number = sum / this.reviewService.getAllReviews().length;
        return average;
    }
}
