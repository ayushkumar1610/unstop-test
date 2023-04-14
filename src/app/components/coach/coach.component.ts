import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})

export class CoachComponent {
  seats: number[][] = [];
  n: number = 0;
  message: string = '';

  constructor(private http: HttpClient) {
    this.getSeatStatus();
  }

  bookSeats() {
    this.http.post('http://localhost:3000/bookSeats', { n: this.n }).subscribe((res: any) => {
      this.seats = res.seats;
      this.message = res.message;
    });
    // this.message = 'Booked';
    // this.seats = [
    //   [0, 0, 0, 0, 0, 1, 1],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [-1, -1, -1, -1, 0, 0, 0],
    //   [0, 0, 0],
    // ];
  }

  getSeatStatus() {
    this.http.get('http://localhost:3000/seatStatus').subscribe((res: any) => {
      this.seats = res.seats;
    });
    // this.seats = [
    //   [0, 0, 0, 0, 0, 1, 1],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [-1, -1, -1, -1, 0, 0, 0],
    //   [0, 0, 0],
    // ];
  }
}
