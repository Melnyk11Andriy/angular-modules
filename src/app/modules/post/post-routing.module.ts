import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostDetailsComponent, PostsComponent} from "./components";

let routes: Routes = [
  {path: '', component: PostsComponent},
  {path: ':id', component: PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
