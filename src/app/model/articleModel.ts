
export class Article {
    storyTitle: string;
    title: string;
    author: string;
    createdAt: Date;
    storyUrl: string;
    url: string;
    deleted: boolean;
    objectID: string;

    /**
     * Constructor
     *
     */
    constructor(article) {
        this.storyTitle = article.story_title;
        this.title = article.title;
        this.author = article.author;
        this.createdAt = article.created_at ;
        this.storyUrl = article.story_url;
        this.url = article.url;
        this.deleted = article.deleted || false;
        this.objectID = article.objectID;
    }
}
