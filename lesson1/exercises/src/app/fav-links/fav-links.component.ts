import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.all-my-favourite-flower-names.com/list-of-flower-names.html", "https://modernguidetothefairfolk.weebly.com/whowhat-are-faeries.html"];
  constructor() { }

  ngOnInit() {
  }

}
