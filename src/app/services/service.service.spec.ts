// import { TestBed } from '@angular/core/testing';

// import { ServiceService } from './service.service';

// describe('ServiceService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: ServiceService = TestBed.get(ServiceService);
//     expect(service).toBeTruthy();
//   });
// });
import { TestBed, async } from '@angular/core/testing';
import { ServiceService } from './service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

describe('ServiceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Github-Search'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Github-Search');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Github-Search!');
  });
});