import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './login-button/login-button.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingComponent } from './app-routing.component';
import { AdminComponent } from './admin/admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TechniqueOverviewComponent } from './technique-overview/technique-overview.component';

@NgModule({
    declarations: [
        AccessControlComponent,
        AdminComponent,
        AppComponent,
        AppRoutingComponent,
        LoginButtonComponent,
        NavbarComponent,
        ProfileComponent,
        TechniqueOverviewComponent
    ],
    imports: [
        AuthModule.forRoot({
            ...env.auth,
            httpInterceptor: {
                allowedList: [
                    `${env.externalApiUrl.athenaUrl}/api/technique`,
                    `${env.externalApiUrl.athenaUrl}/api/technique/all`,
                    `${env.externalApiUrl.athenaUrl}/api/technique/category`,
                    `${env.externalApiUrl.athenaUrl}/api/technique/type`]
            }
        }),
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
