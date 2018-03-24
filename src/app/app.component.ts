import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs/Subscription';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  posts: Post[];

  postsSubscription: Subscription;

  /*posts = [
    
    {
      title: 'Mon premier article',

      content: 'Lorem ipsum laboris ut ut dolor dolor laborum dolore sit in deserunt quis labore.',

      loveIts: 0,

      created_at: this.date
      
    }, 

    {
      title: 'Mon second article',

      content: 'Lorem ipsum consequat ea fugiat in duis dolor incididunt laboris sint irure.',

      loveIts: 0,

      created_at: this.date
      
    },

    {
      title: 'Mon troisieme article',

      content: 'Lorem ipsum laboris duis officia magna dolor cupidatat deserunt culpa non nisi.',

      loveIts: 0,

      created_at: this.date
    },

    {
      title: 'Mon quatrieme article',

      content: 'Lorem ipsum laboris duis officia magna dolor cupidatat deserunt culpa non nisi.',

      loveIts: 0,

      created_at: this.date
    }

  ];*/

  constructor(private postsService: PostsService) {

  }

  ngOnInit() {

    this.posts = this.postsService.posts;

    this.postsSubscription = this.postsService.postsSubject.subscribe(

      (posts: Post[]) => {

        this.posts = posts;

      }

    );

    this.postsService.emitPosts();

  }
  

}
