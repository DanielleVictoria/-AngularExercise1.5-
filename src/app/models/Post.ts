export class Post {
    id : number;
    status : string;    // PENDING (WAITING FOR THE APPROVER) , APPROVED, RETURNED (FOR EDITING), DRAFT
    title : string;
    subtitle? : string;
    author : string;    
    category : string;
    date : string;    
    body : string;  
    draft : boolean;
}