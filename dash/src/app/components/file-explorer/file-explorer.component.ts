import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent {

  constructor(public dialog: MatDialog) { }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '70%',
      height: '70%',
    })
  }

}
