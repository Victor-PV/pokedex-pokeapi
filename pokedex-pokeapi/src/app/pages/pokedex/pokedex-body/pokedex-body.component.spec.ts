import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexBodyComponent } from './pokedex-body.component';

describe('PokedexBodyComponent', () => {
  let component: PokedexBodyComponent;
  let fixture: ComponentFixture<PokedexBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
