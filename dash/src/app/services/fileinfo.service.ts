import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileInfoService {

  private filePath: String;

  constructor() { }

  getFilePath() {
    return this.filePath;
  }

  setFilePath(filePathString : String) {
    this.filePath = filePathString;
  }
}