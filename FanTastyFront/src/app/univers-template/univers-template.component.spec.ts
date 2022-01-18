import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversTemplateComponent } from './univers-template.component';

describe('UniversTemplateComponent', () => {
  let component: UniversTemplateComponent;
  let fixture: ComponentFixture<UniversTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
