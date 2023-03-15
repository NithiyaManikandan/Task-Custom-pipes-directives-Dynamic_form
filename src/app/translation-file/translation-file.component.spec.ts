import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationFileComponent } from './translation-file.component';

describe('TranslationFileComponent', () => {
  let component: TranslationFileComponent;
  let fixture: ComponentFixture<TranslationFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
