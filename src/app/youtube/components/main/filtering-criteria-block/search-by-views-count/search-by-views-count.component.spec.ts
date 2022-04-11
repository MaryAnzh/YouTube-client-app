import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByViewsCountComponent } from './search-by-views-count.component';

describe('SearchByViewsCountComponent', () => {
  let component: SearchByViewsCountComponent;
  let fixture: ComponentFixture<SearchByViewsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByViewsCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByViewsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
