import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../data/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // Propriété personnalisée pour passer la liste des posts
  @Input() postsList: Post[];

  constructor() { }

  ngOnInit() {
  }

}
