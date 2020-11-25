import { Component } from '@angular/core';
import { UploadService } from './service/upload/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor(private uploadService: UploadService) {
    
  }

  myUploader(event: any) {
    const file: File = event.files[0];
    console.log(file);
    this.uploadService.uploadFile(file).subscribe((res: any) => {
      console.log('response: ', res);
    })
  }

}
