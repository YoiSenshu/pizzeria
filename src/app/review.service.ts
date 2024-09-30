import { Injectable } from '@angular/core';
import { Review, TextReview } from './review';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    private reviews: Array<Review | TextReview> = [
        { stars: 5 },
        { stars: 4 },
        { stars: 5, username: "Jola78", content: "Pizza była pyszna! Na pewno odwiedzę Was drugi raz!" },
        { stars: 3, username: "Tomek33", content: "Pizza dobra, ale ciasto trochę za twarde." },
        { stars: 2 },
        { stars: 1, username: "Zofia20", content: "Pizza przyjechała zimna, nie polecam." },
        { stars: 4, username: "Ania89", content: "Dobre składniki, ale czas oczekiwania był za długi." },
        { stars: 5, username: "Bartek12", content: "To najlepsza pizza, jaką jadłem! Super ser i dodatki." },
        { stars: 3 },
        { stars: 4, username: "Karol_92", content: "Smaczna, ale mogła być bardziej doprawiona." },
        { stars: 5, username: "Ewa_P", content: "Świetna pizza, świeże składniki i szybka dostawa!" },
        { stars: 2, username: "MarekM", content: "Ciasto było niedopieczone, jestem zawiedziony." },
        { stars: 4 },
        { stars: 3, username: "Kasia_73", content: "Smak ok, ale nie wyróżnia się niczym szczególnym." },
        { stars: 5, username: "Piotr12", content: "Super pizza, dostawa na czas, wszystko ciepłe." },
        { stars: 1, username: "Adrian_K", content: "Pizza była spalona, okropne doświadczenie." },
        { stars: 5 },
        { stars: 2, username: "Monika44", content: "Za dużo sosu, pizza była bardzo mokra." },
        { stars: 5, username: "Janek_99", content: "Pyszna pizza, bogata w dodatki. Polecam!" },
        { stars: 3, username: "Agnieszka_T", content: "Pizza średnia, bez większych zachwytów." }
    ];
    

    public getAllReviews(): Review[] {
        return this.reviews.map(review => ({...review}));
    }

    public getTextReviews(): TextReview[] {
        return this.reviews
            .filter(review => 'username' in review)
            .map(review => ({ ...review }));
    }
}
