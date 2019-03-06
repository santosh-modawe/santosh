import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfriendComponent } from './editfriend.component';

describe('EditfriendComponent', () => {
  let component: EditfriendComponent;
  let fixture: ComponentFixture<EditfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
