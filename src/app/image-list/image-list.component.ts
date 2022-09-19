import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  searchQuery: string;

  constructor(private _imageService: ImageService) {}
  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  searchImages(query: string) {
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      (data: any) => this.handleSuccess(data),
      (error: any) => this.handleError(error),
      () => (this.searching = false)
    );
  }

  ngOnInit() {}
}
