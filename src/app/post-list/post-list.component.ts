import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
	
	postList: Post[];

	postsSubscription: Subscription;

	constructor(private postsService: PostsService) {}

  	ngOnInit() {

  		this.postList = this.postsService.posts;

  		this.postsSubscription = this.postsService.postsSubject.subscribe(

      		(posts: Post[]) => {

        	this.postList = posts;

      		}

    	);

    	this.postsService.emitPosts();

  	}

    ngOnDestroy(){

      this.postsSubscription.unsubscribe();
    }

}
