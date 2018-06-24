import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;

  constructor(private bikeService: BikeService, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.getBikeById(this.rout.snapshot.params.id);
    
  }

  getBikeById(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data; 
      },
      err => console.log(err),
      () => console.log('bikes are loaded')
    )
  }

}
