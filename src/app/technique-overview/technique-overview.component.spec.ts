import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueOverviewComponent } from './technique-overview.component';

describe('TechniqueOverviewComponent', () => {
  let component: TechniqueOverviewComponent;
  let fixture: ComponentFixture<TechniqueOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechniqueOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniqueOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
