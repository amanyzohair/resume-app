import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import {} from 'googlemaps';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FilteredBlogComponent } from './blog/filtered-blog/filtered-blog.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './contact/subscribe/subscribe.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialModule } from './material/material.module';
import { ResumeComponent } from './resume/resume.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { CommentService } from './services/comment.service';
import { DatabaseService } from './services/database.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBlogsComponent } from './side-bar/side-blogs/side-blogs.component';
import { SideCommentsComponent } from './side-bar/side-comments/side-comments.component';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { CommentEditComponent } from './works/comment-edit/comment-edit.component';
import { CommentFormComponent } from './works/comment-form/comment-form.component';
import { GalleryComponent } from './works/gallery/gallery.component';
import { MusicComponent } from './works/music/music.component';
import { SocialComponent } from './works/social/social.component';
import { VideoDialogComponent } from './works/video-dialog/video-dialog.component';
import { WorksComponent } from './works/works.component';

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
      apiKey: 'AIzaSyB4wj0nOXk1t8VtKvJNamgSR2D3RB5jifc',
    }),
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.fireBase),
    HttpClientModule,
    AngularFireStorageModule,
  ],
  providers: [
    DatabaseService,
    CommentService,
    { provide: BUCKET, useValue: '' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
