import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpmechooseComponent } from './helpmechoose/helpmechoose.component';
import { CategoryComponent } from './category/category.component';
import { QuestionComponent } from './question/question.component';
import { MultiComponent } from './question/multi/multi.component';
import { SingleComponent } from './question/single/single.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SummaryComponent } from './summary/summary.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TopnavComponent } from '../shared/topnav/topnav.component';

const routes: Routes = [
  {path: 'help', component: HelpmechooseComponent, children:[
    {path: 'question', component: QuestionComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'requirements', component: RequirementsComponent},
    {path: 'summary', component: SummaryComponent},
    {path: 'suggestion', component: SuggestionComponent},
  ]}
]

@NgModule({
  declarations: [
    HelpmechooseComponent,
    CategoryComponent,
    QuestionComponent,
    MultiComponent,
    SingleComponent,
    SuggestionComponent,
    SummaryComponent,
    RequirementsComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    SharedModule,
  
  ]
})
export class HelpmechooseModule { }
