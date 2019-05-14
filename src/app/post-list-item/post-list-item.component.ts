import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../data/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  // Propriété personnalisée pour passer le post via la directive dans PostListComponent
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  // Fonction permettant de mettre à jour le nombre de "love" en fonction du bouton
  onLoveIt(isLoveIt: boolean) {
    if (isLoveIt)
      this.post.loveIts++;
    else
      this.post.loveIts--;
  }

}
