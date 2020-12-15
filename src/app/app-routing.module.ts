import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FilteredBlogComponent } from './blog/filtered-blog/filtered-blog.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './contact/subscribe/subscribe.component';
import { ResumeComponent } from './resume/resume.component';
import { CommentEditComponent } from './works/comment-edit/comment-edit.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/filterd-blog', component: FilteredBlogComponent },
  { path: 'blog/filterd-blog/:id', component: FilteredBlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'works/commentEdit', component: CommentEditComponent , canActivate:[] },
  { path: 'works/commentEdit/:id', component: CommentEditComponent , canActivate:[] },
  // { path: 'contact/subscribe', component: SubscribeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
