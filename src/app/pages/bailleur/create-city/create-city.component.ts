import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-city',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './create-city.component.html',
  styleUrl: './create-city.component.scss'
})
export class CreateCityComponent {
  step: number = 1;
  totalSteps: number = 4;
  
  constructor(private router: Router){

  }

  // Prochaine étape
  nextStep(){
    if(this.step == 1){
      this.step = 2;
    }
  }

  // Retour en arrière
  back(){
    if(this.step == 1)
      this.router.navigate(['/website/become-bailleur']);
    else if(this.step > 1 && this.step <= this.totalSteps){
      this.step -= 1;
    }
  }

  
    

}
