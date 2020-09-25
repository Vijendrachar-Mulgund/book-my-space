import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'listing-filter',
  templateUrl: './listing-filter.component.html',
  styleUrls: ['./listing-filter.component.css']
})
export class ListingFilterComponent implements OnInit {

  @Input('category') category;

  categories$;

  constructor(categorieService: CategoryService) {
    this.categories$ = categorieService.getCategories();
  }

  ngOnInit(): void {
  }

}
