import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partnerek } from './partnerek';

describe('Partnerek', () => {
  let component: Partnerek;
  let fixture: ComponentFixture<Partnerek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partnerek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partnerek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
