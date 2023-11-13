import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import {FakeService} from "../services/fake.service";
import {of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDataV1: jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [
        {
          provide: FakeService, useValue: fakeServiceMock
        }
      ]
    })
     .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', () => {
    const expectedRes = {
      name: 'Monir Zaman'
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expectedRes.name)
  })

  it('should getServiceData set errorMessage',() => {
    const errorRes = new HttpErrorResponse(({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    }));
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(throwError(() => errorRes));
    component.getServiceData();
    expect(component.errorMessage).toBe('Not Found');
    // expect(component.errorMessage).not.toBe('Not Found'); // test will fail
  });

  it('should greeting set Good morning', () => {
    const expectedRes = {
      name: 'Monir Zaman',
      time: 9
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good morning');
  })

  it('should greeting set Good day', () => {
    const expectedRes = {
      name: 'Monir Zaman',
      time: 12
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good day');
  })

  it('should greeting set Good evening', () => {
    const expectedRes = {
      name: 'Monir Zaman',
      time: 22
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good evening');
  })

});
