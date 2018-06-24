import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/Bike.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;
  public newBike: Bike;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();

    this.newBike = {
      name: 'KatoRide',
      country: 'Poland',
      price: '132123.3212',
      rating: 6,
      year: 2016
    }
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => { this.bikes = data },
      err => console.log(err),
      () => console.log('bikes loaded', this.bikes)
    );
  }

  saveBike(): void {
    console.log('test');
    this.bikeService.saveBike(this.newBike);
  }

}
