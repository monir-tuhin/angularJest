import {AppComponent} from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('should have a title angularJest', ()=> {
    expect(fixture.title).toEqual('angularJest');
  });

  it('adds 1+2 equals 3', ()=> {
    expect(fixture.sum(1, 2)).toBe(3)
  });

})
