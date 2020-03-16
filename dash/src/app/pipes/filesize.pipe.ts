import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(size: number, extension: string= 'MB'): any {
    return (size / (1024 * 1024)).toFixed(4) + extension;
  }

}