import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragPan } from 'ol/interaction';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-demo';

  constructor() {
    const dragPan: DragPan = new DragPan();
  }
}
