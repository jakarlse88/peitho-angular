import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-access-control',
    templateUrl: './access-control.component.html',
    styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {
    profileJson: string = null;

    constructor(
        @Inject(DOCUMENT) private doc: Document,
        public auth: AuthService
    ) { }

    ngOnInit(): void {
        this.auth.user$.subscribe(profile =>
            this.profileJson = JSON.stringify(profile, null, 2)
        );
    }

    logout(): void {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
