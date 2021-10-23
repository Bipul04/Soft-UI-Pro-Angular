import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  image_src: string = '0c545438-dccd-4f3c-8e7c-92d8d4113c1d'
  @Input()
  image_alt: string = 'image'
  @Input()
  text: string = 'Get the latest design ideas and turn it into reality.'
  @Input()
  title: string = 'Design'

  constructor() {}
}
