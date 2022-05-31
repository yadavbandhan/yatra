import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [UploadComponent, DownloadComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [UploadComponent, DownloadComponent, ButtonComponent],
})
export class SharedModule {}
