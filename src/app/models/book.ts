// Interface pour de l'auto complétion
export interface BookJson {
        _id: number;
        title: string;
        isbn: string;
        pageCount: number;
        publishedDate: Date;
        thumbnailUrl: string;
        longDescription: string;
        status: string;
        authors: string[];
        categories: string;
}

export interface ResponseJson {
    totalPages: number;
    currentPage: number;
    data: BookJson[];
}


// Classe représentant un livre
export class Book {

    id: number;
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: Date;
    thumbnailUrl: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string;

    public hydrate(data: BookJson){
        this.id = data._id;
        this.title = data.title;
        this.isbn = data.isbn;
        this.pageCount = data.pageCount;
        this.publishedDate = new Date(data.publishedDate);
        this.thumbnailUrl = data.thumbnailUrl;
        this.longDescription = data.longDescription;
        this.status = data.status;
        this.authors = data.authors;
        this.categories = data.categories;
    }

}
