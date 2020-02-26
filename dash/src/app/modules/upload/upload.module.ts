import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FilesizePipe } from '../../pipes/filesize.pipe';
import { UploadService } from '../../services/upload.service';
import { UploadDialogComponent } from 'src/app/components/upload-dialog/upload-dialog.component';


@NgModule({
  declarations: [
    UploadDialogComponent,
    FilesizePipe
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [UploadDialogComponent],
  exports: [
    UploadDialogComponent,
    FilesizePipe
  ],
  providers: [UploadService],
})
export class UploadModule { }
