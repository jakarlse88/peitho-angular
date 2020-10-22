import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';
import { Technique } from '../_models/Technique';

@Component({
  selector: 'app-technique-overview',
  templateUrl: './technique-overview.component.html',
  styleUrls: ['./technique-overview.component.scss']
})
export class TechniqueOverviewComponent implements OnInit {
  techniqueArr: Technique[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getTechniques();
  }

  getTechniques(): void {
    this.httpClient
      .get(`${env.externalApiUrl.athenaUrl}/api/technique/all`)
      .subscribe((result: Technique[]) => { this.techniqueArr = result });
  }
}
