export interface Post {
    _id: string;
    publishedAt: string;
    title: string;
    categories: [object];
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        }
    };
    slug: {
        current: string;
    };
    body: [object];
}


export interface Comment {
    _id: string;
    publishedAt: string;
    approved: boolean;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    };
    publishedAt: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    
}