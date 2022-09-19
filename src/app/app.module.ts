import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/image.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ImageListComponent],
  providers: [ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
