import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaIIePage } from './deta-iie.page';

describe('DetaIIePage', () => {
  let component: DetaIIePage;
  let fixture: ComponentFixture<DetaIIePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaIIePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaIIePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
