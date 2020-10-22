import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    profileJson: string = null;

    constructor(
        @Inject(DOCUMENT) private doc: Document,
        public auth: AuthService) { }

    ngOnInit(): void {
        this.auth.user$.subscribe(profile =>
            this.profileJson = JSON.stringify(profile, null, 2));
    }

    logout(): void {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}