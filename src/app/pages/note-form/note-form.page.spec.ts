import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteFormPage } from './note-form.page';

describe('NoteFormPage', () => {
  let component: NoteFormPage;
  let fixture: ComponentFixture<NoteFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
