import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () -> {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () -> {
    await TestBed.configureTestingModule({
      imports: [UserFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = ComponentFixture.componentInstance;
    ComponentFixture.detectChanges();
  });

  it('should create', () -> {
    expect(component).toBeTruthy();
  });
});