import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchByWordOrSentenceComponent } from './input-search-by-word-or-sentence.component';

describe('InputSearchByWordOrSentenceComponent', () => {
  let component: InputSearchByWordOrSentenceComponent;
  let fixture: ComponentFixture<InputSearchByWordOrSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchByWordOrSentenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchByWordOrSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
