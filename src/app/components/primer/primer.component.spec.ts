import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimerComponent } from './primer.component';

describe('PrimerComponent', () => {
  let component: PrimerComponent;
  let fixture: ComponentFixture<PrimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
