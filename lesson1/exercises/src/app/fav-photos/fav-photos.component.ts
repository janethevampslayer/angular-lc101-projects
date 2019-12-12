import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://boatsibiza.com/wp-content/uploads/2017/07/seahorses.jpg';
  image3 = 'http://pm1.narvii.com/6777/73f5fbd1ad12a41df661f783180e9282aed1f5d3v2_00.jpg';

  constructor() { }

  ngOnInit() {
  }

}