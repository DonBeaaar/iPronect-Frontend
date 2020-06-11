import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Perf1lPage } from './perf1l.page';

describe('Perf1lPage', () => {
  let component: Perf1lPage;
  let fixture: ComponentFixture<Perf1lPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Perf1lPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Perf1lPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
