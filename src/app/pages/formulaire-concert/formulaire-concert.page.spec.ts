import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulaireConcertPage } from './formulaire-concert.page';

describe('FormulaireConcertPage', () => {
  let component: FormulaireConcertPage;
  let fixture: ComponentFixture<FormulaireConcertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireConcertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireConcertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
