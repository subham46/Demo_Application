import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-book-component',
  templateUrl: './address-book-component.component.html',
  styleUrls: ['./address-book-component.component.css']
})
export class AddressBookComponentComponent implements OnInit {

  user: any;
  @Input('name') userName: String;
  constructor() {
    }



  ngOnInit() {
    this.user = {
      name: this.userName,
      title: 'software Developer',
      address: '123 main cross',
      phone: [
        '123-2345',
        '32145-23'
      ]
  }

}
}
