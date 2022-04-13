import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListItemDetailsComponent } from './book-list-item-details.component';

describe('BookListItemDetailsComponent', () => {
  let component: BookListItemDetailsComponent;
  let fixture: ComponentFixture<BookListItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
