import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { forkJoin } from 'rxjs';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  progress: any;
  canBeClosed: boolean = true
  primaryButtonText = 'Upload'
  showCancelButton: boolean = true
  uploading: boolean = false;
  uploadSuccessful: boolean = false;

  constructor(public dialogRef: MatDialogRef<UploadDialogComponent>, public uploadService: UploadService) { }

  @ViewChild('file', {static: true}) file;
  public files: Set<File> = new Set();

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File} = this.file.nativeElement.files;
    for (let key in files) {
      if(!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }
    this.uploading = true;
    this.progress = this.uploadService.upload(this.files);
    let allProgressObservables = [];
    for(let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }
    this.primaryButtonText = 'Finish';
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;
    this.showCancelButton = false;
    forkJoin(allProgressObservables).subscribe(end => {
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;
      this.uploadSuccessful = true;
      this.uploading = false;
    });
  }

}
