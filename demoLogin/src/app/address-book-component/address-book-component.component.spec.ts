import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponentComponent } from './address-book-component.component';

describe('AddressBookComponentComponent', () => {
  let component: AddressBookComponentComponent;
  let fixture: ComponentFixture<AddressBookComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
