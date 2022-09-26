import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFileComponent } from './register-file.component';

describe('RegisterFileComponent', () => {
  let component: RegisterFileComponent;
  let fixture: ComponentFixture<RegisterFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
