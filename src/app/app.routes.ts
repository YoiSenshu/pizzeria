import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "menu", component: MenuComponent},
    {path: "reviews", component: ReviewsComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", redirectTo: ""}
];
