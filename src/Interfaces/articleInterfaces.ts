

// Interface for save article in db
export interface IArticleData {
    name: string;
    description: string;
}


// Interface article from db
export interface IArticleFormDB {
    id: any;
    name: string;
    description: string;
}