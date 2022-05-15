import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellDashboardComponent } from './shell-dashboard.component';

describe('ShellDashboardComponent', () => {
  let component: ShellDashboardComponent;
  let fixture: ComponentFixture<ShellDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
