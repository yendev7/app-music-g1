import { Component } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  title = "Page Principale Album Music";
  albums = ALBUMS;
  /**Variable qui détermine l'album dont on veut voir le détail */
  selectedAlbum?: Album = undefined;
  
  onSelect(album: Album) {
    this.selectedAlbum = album;
  }
}
