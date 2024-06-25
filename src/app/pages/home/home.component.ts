import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CarouselComponent]
})
export class HomeComponent {
    slides = [
        {
          image: 'https://via.placeholder.com/300x200.png?text=Slide+1',
          title: 'Slide 1',
          description: 'This is the first slide'
        },
        {
          image: 'https://via.placeholder.com/300x200.png?text=Slide+2',
          title: 'Slide 2',
          description: 'This is the second slide'
        },
        {
          image: 'https://via.placeholder.com/300x200.png?text=Slide+3',
          title: 'Slide 3',
          description: 'This is the third slide'
        }
      ];
}
