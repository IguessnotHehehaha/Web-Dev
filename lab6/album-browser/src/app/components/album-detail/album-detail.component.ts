import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching album:', err);
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  saveAlbum(): void {
    if (this.album && this.editedTitle.trim()) {
      const updated: Album = { ...this.album, title: this.editedTitle };
      this.albumService.updateAlbum(updated).subscribe({
        next: (data) => {
          this.album = data;
          this.cdr.detectChanges();
          alert('Album updated successfully!');
        },
        error: (err) => console.error('Error updating album:', err),
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}