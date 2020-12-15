import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase,
  ) { }
  getGalleryImg(){
    return this.db.list('/galleryImg').valueChanges();
  };
  getWorkGalleryImg(){
    return this.db.list('/workGallery').valueChanges();
  };
  getWorkVideoImg(){
    return this.db.list('/workVideo').valueChanges();
  };
  getWorkMusicImg(){
    return this.db.list('/workMusic').valueChanges();
  };
  getWorkSocialImg(){
    return this.db.list('/workSocial').valueChanges();
  };
  getIcons(){
    return this.db.list('/icons').valueChanges();
  };
  getCarousel(){
    return this.db.list('/carousel').valueChanges();
  };
  getBlogs(){
    return this.db.list('/blogs').snapshotChanges();
  };
  getBlogById(blogId){
    return this.db.object('/blogs/'+ blogId).valueChanges();
  };
  getSkills(){
    return this.db.list('/skills').valueChanges();
  };
  getEducation(){
    return this.db.list('/education').valueChanges();
  };
  getExperience(){
    return this.db.list('/experience').valueChanges();
  };
  barComments(){
    return this.db.list('/barComments').valueChanges();
  };
  getComment(){
    return this.db.list('/comments').snapshotChanges();
  };
  getCommentById(id:string){
    return this.db.object('/comments/'+ id).valueChanges();
  };
  
}
