import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'
import 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';

import { PostService } from './services/post.service.component';
import { DashboardComponent } from './dashboard/dashboard.component'


const appRoutes: Routes = [
  { 
    path: 'post/:id',      
    component: PostDetailsComponent 
  },
  {
    path: 'post-create',
    component: PostCreateComponent
  },
  {
    path: 'posts',
    component: PostListComponent,
    data: { title: 'Post List' }
  },
   {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Simple Angular CRUD'}
  },
  { 
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostDetailsComponent,
    PostListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],

  providers: [ PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
