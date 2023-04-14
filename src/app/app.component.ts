import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { CoachComponent } from './components/coach/coach.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unstop-ui';

  @ViewChild(CoachComponent)
  coachComponent!: { seats: any; message: string};  

  constructor(private http: HttpClient) {
  }

  clearCoach() {
    this.http.delete('https://beautiful-bull-sweatsuit.cyclic.app/delete').subscribe((res: any) => {
      this.coachComponent.seats = res.seats;
      this.coachComponent.message = "";
    });
  }

}
