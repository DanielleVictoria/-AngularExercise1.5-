// from angular / rxjs
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';

// paths
const USER_API: string = 'http://localhost:3000/users';
const POST_API: string = 'http://localhost:3000/posts';

//from project
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/Post';

@Injectable()
export class BlogService {

  testing: boolean = false;

  // shared datas
  currentUser: User;
  users: User[];
  posts: Post[];

  //local
  private newPath: string = '';
  private header;

  constructor(private httpclient: HttpClient) {
    // Check if httpclient is ok
    console.log("HTTP CLIENT : " + httpclient);
    this.getUsers().subscribe(users => {
      this.users = users;
      if (this.testing) {
        this.currentUser = this.users[0];
      }
    });
    this.getPosts().subscribe(posts => this.posts = posts);
  }

  //---------------------------USERS-------------------------------------//

  // Get all of the Users
  getUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(USER_API).pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }

  // note : somehow not working dont use
  private getUserby(key: string, value: string): Observable<User> {
    return this.httpclient.get<User>(`${USER_API}?${key}=${value}`)
      .pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }

  updateUser(user: User) {
    let url = `${USER_API}/${user.id}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpclient.put<User>(url, user, httpOptions)
      .pipe(
      catchError((error: any) => Observable.throw(error.json)));
  }

  //---------------------------POSTS-------------------------------------//

  // Get all of the Posts
  getPosts(): Observable<Post[]> {
    return this.httpclient.get<Post[]>(POST_API).pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }

  // Get post/posts by inputting an extension to the base POST_API -- note : must improve temporary solution only
  getPostby(path: string): Observable<Post[]> {
    this.newPath = POST_API + path;
    return this.httpclient.get<Post[]>(this.newPath)
      .pipe(
      map(response => response),
      catchError((error: any) => Observable.throw(error.json)));
  }

  // Add a post using HTTP post
  addPost(post: Post): Observable<Post> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpclient.post<Post>(POST_API, post, httpOptions)
      .pipe(
      catchError((error: any) => Observable.throw(error.json)));
  }

  deletePost(id: number): Observable<{}> {

    let url = `${POST_API}/${id}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpclient.delete(url, httpOptions)
      .pipe(
      catchError((error: any) => Observable.throw(error.json)));
  }

  updatePost(post: Post) {
    let url = `${POST_API}/${post.id}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpclient.put<Post>(url, post, httpOptions)
      .pipe(
      catchError((error: any) => Observable.throw(error.json)));
  }
}
