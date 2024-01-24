import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {

  constructor() { }

  carouselItemPersonal = [
    { "url": "./assets/images/imagem-1.jpeg", "alt": "novo_treino", "text": "NOVO TREINO" },
    { "url": "./assets/images/imagem-2.jpeg", "alt": "novo_treino", "text": "NOVO TREINO" },
  ];

  carouselItemPrograms = [
    { "url": "./assets/images/imagem-1.jpeg", "alt": "levantamento_peso", "text": "LEVANTAMENTO DE PESO", "type": 2 },
    { "url": "./assets/images/imagem-2.jpeg", "alt": "yoga_experimental", "text": "YOGA EXPERIMENTAL", "type": 2 }
  ]

  ngOnInit() {}

}
