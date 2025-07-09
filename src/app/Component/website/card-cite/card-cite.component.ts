import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cite',
  standalone: true,
  imports: [],
  templateUrl: './card-cite.component.html',
  styleUrl: './card-cite.component.scss'
})
export class CardCiteComponent {
  @Input() city : any;

}
