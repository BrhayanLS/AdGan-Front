import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleDetailComponent } from './cattle-detail.component';

describe('CattleDetailComponent', () => {
  let component: CattleDetailComponent;
  let fixture: ComponentFixture<CattleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CattleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CattleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
