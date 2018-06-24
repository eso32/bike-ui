import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ratings: number[] = [
    1,
    2,
    3,
    4
  ];
  bikeForm: FormGroup;
  validMessage: string = "";

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required)
    })
  }

  submitRegistration() {
    if(this.bikeForm.valid){
      console.log('form submitted');
      this.bikeService.saveBike(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        err => console.log(err)
      )
    } else {
      this.validMessage = "There is something wrong with your form, fix it!";
    }
    
  }

}
