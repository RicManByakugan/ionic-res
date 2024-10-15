import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailwindNextPage } from './tailwind-next.page';

describe('TailwindNextPage', () => {
  let component: TailwindNextPage;
  let fixture: ComponentFixture<TailwindNextPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindNextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
