import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';   
import { Album } from "../models/album.model";
import { Photo } from "../models/photo.model";

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    private readonly apiUrl = "https://jsonplaceholder.typicode.com";
    private deletedAlbumIds: Set<number> = new Set();

    constructor(private http: HttpClient) {}

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
            map(albums => albums.filter(album => !this.deletedAlbumIds.has(album.id)))
        );
    }

    getAlbum(id: number):Observable<Album>{
        return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]>{
        return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album>{
        return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void>{
        this.deletedAlbumIds.add(id);
        return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
    }

}