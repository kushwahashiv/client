import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {HomeComponent} from './home/home.component';
import {HomeApiService} from './home/home-api.service';
import {ConfirmationDialog} from './confirmation/confirmation.service';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from './common/common.module';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        ConfirmationComponent
      ],
      providers: [
        HomeApiService,
        ConfirmationDialog,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
