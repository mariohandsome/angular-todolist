import { Component, OnInit } from '@angular/core';
import { FilterButton, Filter } from 'src/app/models/filtering.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActive: true},
    { type: Filter.Completed, label: 'Completed', isActive: false},
    { type: Filter.isActive, label: 'Active', isActive: false},
  ];

  length = 1;

  constructor() { }

  ngOnInit() {
  }

}
