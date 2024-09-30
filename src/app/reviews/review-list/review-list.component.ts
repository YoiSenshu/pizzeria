import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReviewService } from '../../review.service';
import { ReviewComponent } from "../review/review.component";

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [NgFor, ReviewComponent],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {
    
    public reviewService: ReviewService;

    constructor(reviewService: ReviewService) {
        this.reviewService = reviewService;
    }
}
