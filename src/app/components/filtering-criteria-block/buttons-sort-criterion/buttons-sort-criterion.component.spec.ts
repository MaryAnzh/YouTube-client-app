import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSortCriterionComponent } from './buttons-sort-criterion.component';

describe('ButtonsSortCriterionComponent', () => {
  let component: ButtonsSortCriterionComponent;
  let fixture: ComponentFixture<ButtonsSortCriterionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsSortCriterionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsSortCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
