import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabimplPage } from './tabimpl.page';

describe('TabimplPage', () => {
  let component: TabimplPage;
  let fixture: ComponentFixture<TabimplPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabimplPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
