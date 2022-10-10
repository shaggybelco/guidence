import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  constructor(public category: CategoryService, public routing: RoutingService, private suggested: SuggestionService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.category.browse = ''
    this.routing.dynamic = 'help'
  }

  public firstCareer$ = this.router.paramMap.pipe(
    switchMap((params)=>
    )
  )
}
