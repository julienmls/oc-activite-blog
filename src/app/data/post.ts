// Classe pour la gestion des posts
export class Post {

    // Membres de la classe
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  
    // Constructeur de la classe
    constructor (title: string, content: string) {
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.created_at = new Date();
    }
  }