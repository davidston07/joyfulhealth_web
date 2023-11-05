import { Component } from '@angular/core';

@Component({
  selector: 'app-mental-health',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.css'],
})
export class MentalHealthComponent {
  selectedType = 'none';

  onChange(event: any) {
    this.selectedType = event.target.value;
    console.log(this.selectedType);
  }
}
