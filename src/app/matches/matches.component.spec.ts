import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesComponent } from './matches.component';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// exact equality
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  })

  it('Object values', ()=> {
    const data = {name: "Techopsworld"};
    expect(data).toEqual({name: "Techopsworld"});
  });

  // Truthiness
  it('null', ()=> {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  })

  // Numbers
  it('two plus two', () => {
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3) // this won't work because rounding error
    expect(value).toBeCloseTo(0.3);
  })

  // Strings
  it('there is no D in techops', () => {
    expect('techops').not.toMatch(/D/);
  });

  it('there is a "world" in techopsworld', () => {
    expect('techopsworld').toMatch(/world/);
  });

  // Arrays and iterables
  it('the shopping list has milk on it', () => {
    const shoppingList = [
      'diapers',
      'Kleenex',
      'bags',
      'milk',
      'paper',
    ];
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })

  // Exceptions
  it('compiling android goes as expected', () => {
    expect(() => component.compileAndroidCode()).toThrow();
    expect(() => component.compileAndroidCode()).toThrow(Error)

    // you can also use the exact error message or a regexp
    expect(() => component.compileAndroidCode()).toThrow('You are using old angular');
    expect(() => component.compileAndroidCode()).toThrow(/angular/);
  })

});
