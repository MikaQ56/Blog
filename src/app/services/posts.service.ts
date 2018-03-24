import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';


@Injectable()
export class PostsService {

  posts: Post[] = [
    
    {
      title: 'Mon premier article',

      content: 'Lorem ipsum laboris ut ut dolor dolor laborum dolore sit in deserunt quis labore.',

      loveIts: 0,

      created_at: new Date()
      
    }, 

    {
      title: 'Mon second article',

      content: 'Lorem ipsum consequat ea fugiat in duis dolor incididunt laboris sint irure.',

      loveIts: 0,

      created_at: new Date()
      
    },

    {
      title: 'Mon troisieme article',

      content: 'Lorem ipsum laboris duis officia magna dolor cupidatat deserunt culpa non nisi.',

      loveIts: 0,

      created_at: new Date()
    },

    {
      title: 'Mon quatrieme article',

      content: 'Lorem ipsum laboris duis officia magna dolor cupidatat deserunt culpa non nisi.',

      loveIts: 0,

      created_at: new Date()
    }

  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {

    this.postsSubject.next(this.posts);

  }

  createNewPost(newPost: Post) {

    this.posts.push(newPost);

    this.emitPosts();

  }

  removePost(post: Post) {

    const postIndexToRemove = this.posts.findIndex(

      (postEl) => {

        if(postEl === post) {

          return true;

        }

      }

    );

    this.posts.splice(postIndexToRemove, 1);


    this.emitPosts();

  }

  addLoveIts(index: number){

    this.posts[index].loveIts ++;
    this.emitPosts();
  }

  deleteLoveIts(index: number){

    this.posts[index].loveIts --;
    this.emitPosts();
  }

}
