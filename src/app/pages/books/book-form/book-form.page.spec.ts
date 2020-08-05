import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookFormPage } from './book-form.page';

describe('BookFormPage', () => {
  let component: BookFormPage;
  let fixture: ComponentFixture<BookFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
