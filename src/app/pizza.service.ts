import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {

    private pizzas: Pizza[] = [
        {
            name: "Margherita",
            description: "Pochodząca z Neapolu, pokryta sosem pomidorowym, mozzarellą, świeżą bazylią i oliwą z oliwek.",
            price: 39.99,
            imageUrl: "https://ocdn.eu/images/pulscms/MmE7MDA_/06d3b49c0634ba5de867c761bb0cdaf4.jpeg",
            averageReview: 4.4
        },
        {
            name: "Pepperoni",
            description: "Klasyczna pizza z plasterkami pikantnego pepperoni, mozzarellą i sosem pomidorowym.",
            price: 44.99,
            imageUrl: "https://az.przepisy.pl/www-przepisy-pl/www.przepisy.pl/przepisy3ii/img/variants/800x0/pizza-peperoni.jpg",
            averageReview: 3.6
        },
        {
            name: "Quattro Formaggi",
            description: "Pizza z czterema rodzajami sera: mozzarella, gorgonzola, parmezan i ricotta.",
            price: 49.99,
            imageUrl: "https://az.przepisy.pl/www-przepisy-pl/www.przepisy.pl/przepisy3ii/img/variants/800x0/pizza-quattro-formaggi.jpg",
            averageReview: 4.8
        },
        {
            name: "Capricciosa",
            description: "Pizza z szynką, pieczarkami, karczochami i oliwkami, z sosem pomidorowym i mozzarellą.",
            price: 45.99,
            imageUrl: "https://www.dominospizza.pl/DominosPizza/media/Images/modules/blog/desktop/1846-x-1028-Capricciosa.jpg",
            averageReview: 4.6
        },
        {
            name: "Hawaiian",
            description: "Pizza z szynką, ananasem i mozzarellą, na bazie sosu pomidorowego.",
            price: 43.99,
            imageUrl: "https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/pizza-hawaii/main-header.jpg",
            averageReview: 4.5
        },
        {
            name: "Diavola",
            description: "Pikantna pizza z pepperoni, ostrą papryczką, sosem pomidorowym i mozzarellą.",
            price: 47.99,
            imageUrl: "https://sanpietro.pl/46-large_default/pizza-diavola.jpg",
            averageReview: 4.7
        },
        {
            name: "Vegetariana",
            description: "Pizza z różnorodnymi warzywami: cukinią, papryką, bakłażanem, pieczarkami i mozzarellą.",
            price: 41.99,
            imageUrl: "https://karczmaslowianka.pl/wp-content/uploads/pizza-vegetariana.jpg",
            averageReview: 4.8
        },
        {
            name: "Funghi",
            description: "Prosta pizza z pieczarkami, mozzarellą i sosem pomidorowym.",
            price: 40.99,
            imageUrl: "https://burnhard-springlane-gmbh.stream.prepr.io/w_2304,format_jpg,q_70/https://burnhard-springlane-gmbh.stream.prepr.io/w_1280/5deketfuv3la-4afyge8nry1a-pizza-funghi-titelbild.jpg",
            averageReview: 4.4
        },
        {
            name: "Prosciutto",
            description: "Pizza z szynką parmeńską, rukolą, parmezanem i mozzarellą.",
            price: 48.99,
            imageUrl: "https://d1e3z2jco40k3v.cloudfront.net/-/media/project/oneweb/kampl22/recipe/2024-01/4_pizza_prosciutto_2000.webp?rev=48de88866bc14d579050572ae0352cfe&vd=20240102T163513Z&extension=webp&hash=875AE53C96C74761BDBCFA373E61D413",
            averageReview: 4.9
        },
        {
            name: "Frutti di Mare",
            description: "Pizza z owocami morza: krewetkami, kalmarami, małżami, z sosem pomidorowym i mozzarellą.",
            price: 52.99,
            imageUrl: "https://az.przepisy.pl/www-przepisy-pl/www.przepisy.pl/przepisy3ii/img/variants/800x0/pizza-frutti-di-mare.jpg",
            averageReview: 4.6
        }
    ];
    
    // niby kopia listy
    public getAllPizzas(): Pizza[] {
        return this.pizzas.map(pizza => ({ ...pizza }));
    }
}
