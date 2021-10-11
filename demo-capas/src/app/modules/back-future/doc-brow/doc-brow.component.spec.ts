import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBrowComponent } from './doc-brow.component';

describe('DocBrowComponent', () => {
  let component: DocBrowComponent;
  let fixture: ComponentFixture<DocBrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocBrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
