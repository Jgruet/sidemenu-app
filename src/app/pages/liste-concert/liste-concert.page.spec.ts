import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeConcertPage } from './liste-concert.page';

describe('ListeConcertPage', () => {
  let component: ListeConcertPage;
  let fixture: ComponentFixture<ListeConcertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConcertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeConcertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
