import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'

import { Post } from '../models/post';

@Injectable()

export class PostService {
    constructor( private http: Http){}

    getAll() {
        return this.http.get('/api/posts', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/post/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(post: Post) {
        return this.http.post('/api/createPost', post, this.jwt()).map((response: Response) => response.json());
    }

    update(post: Post) {
        return this.http.put('/api/post/' + post._id, post, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/post/' + id, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}