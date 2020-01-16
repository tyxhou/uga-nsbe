import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecBodyComponent } from './exec-body.component';

describe('ExecBodyComponent', () => {
  let component: ExecBodyComponent;
  let fixture: ComponentFixture<ExecBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
