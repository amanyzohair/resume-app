import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { ResumeComponent } from './resume/resume.component';
import { MaterialModule } from './material/material.module';
import { RootNavComponent } from './root-nav/root-nav.component';
import { BlogComponent } from './blog/blog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { IconsComponent } from './icons/icons.component';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { StoreModule } from '@ngrx/store';
import { GalleryComponent } from './works/gallery/gallery.component';
import { VideoDialogComponent } from './works/video-dialog/video-dialog.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MusicComponent } from './works/music/music.component';
import { SocialComponent } from './works/social/social.component';
import {} from 'googlemaps';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './contact/subscribe/subscribe.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DatabaseService } from './services/database.service';
import { AuthService } from './services/auth.service';
import { CommentFormComponent } from './works/comment-form/comment-form.component';
import { CommentEditComponent } from './works/comment-edit/comment-edit.component';
import { FilteredBlogComponent } from './blog/filtered-blog/filtered-blog.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SideCommentsComponent } from './side-bar/side-comments/side-comments.component';
import { SideBlogsComponent } from './side-bar/side-blogs/side-blogs.component';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage'
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    WorksComponent,
    ResumeComponent,
    RootNavComponent,
    BlogComponent,
    IconsComponent,
    TextAnimationComponent,
    GalleryComponent,
    VideoDialogComponent,
    MusicComponent,
    SocialComponent,
    SubscribeComponent,
    CommentFormComponent,
    CommentEditComponent,
    FilteredBlogComponent,
    SideBarComponent,
    SideCommentsComponent,
    SideBlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    MatGridListModule,
    StoreModule.forRoot({}, {}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4wj0nOXk1t8VtKvJNamgSR2D3RB5jifc'
    }),
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.fireBase),
    HttpClientModule,
    AngularFireStorageModule
  ],
  providers: [
    DatabaseService,
    CommentService,
    {provide : BUCKET, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
