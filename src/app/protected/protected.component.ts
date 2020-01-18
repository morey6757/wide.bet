import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core/services/layout.service';
@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  public isSidenavCollapsed: boolean;
  private subscription: Subscription;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.subscription = this.layoutService.isSidenavCollapsed$.subscribe(
      isSidenavCollapsed => this.isSidenavCollapsed = this.isSidenavCollapsed);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
