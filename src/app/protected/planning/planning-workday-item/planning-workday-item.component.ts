import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planning-workday-item',
  templateUrl: './planning-workday-item.component.html',
  styles: []
})
export class PlanningWorkdayItemComponent {
  @Input('workday') currentWorkday;
}
