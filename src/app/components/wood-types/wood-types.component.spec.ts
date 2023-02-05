import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodTypesComponent } from './wood-types.component';

describe('WoodTypesComponent', () => {
  let component: WoodTypesComponent;
  let fixture: ComponentFixture<WoodTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
