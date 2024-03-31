import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCattleComponent } from './all-cattle.component';

describe('AllCattleComponent', () => {
  let component: AllCattleComponent;
  let fixture: ComponentFixture<AllCattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCattleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
