import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionaComponent } from './funciona.component';

describe('FuncionaComponent', () => {
  let component: FuncionaComponent;
  let fixture: ComponentFixture<FuncionaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionaComponent]
    });
    fixture = TestBed.createComponent(FuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
