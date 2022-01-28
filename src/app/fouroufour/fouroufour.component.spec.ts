import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouroufourComponent } from './fouroufour.component';

describe('FouroufourComponent', () => {
  let component: FouroufourComponent;
  let fixture: ComponentFixture<FouroufourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FouroufourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FouroufourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
