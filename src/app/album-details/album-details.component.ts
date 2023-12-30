import { Component, Input } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent {
  @Input () album: Album | undefined;
}
