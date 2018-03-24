import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() item: number;

  constructor(private postsService: PostsService) { 

  }

  ngOnInit() { }
  
  addLove(){

    this.postsService.addLoveIts(this.item);

  }

  removeLove(){

    this.postsService.deleteLoveIts(this.item);

  }

  onDeletePost(post: Post){

    this.postsService.removePost(post)

  }


}
