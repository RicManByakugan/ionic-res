import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavIntPage } from './nav-int.page';

describe('NavIntPage', () => {
  let component: NavIntPage;
  let fixture: ComponentFixture<NavIntPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavIntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
