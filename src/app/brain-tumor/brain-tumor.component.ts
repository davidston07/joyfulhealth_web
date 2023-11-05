import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppConstants } from '../const/app-constants';

@Component({
  selector: 'app-brain-tumor',
  templateUrl: './brain-tumor.component.html',
  styleUrls: ['./brain-tumor.component.css'],
})
export class BrainTumorComponent {
  constructor(private httpClient: HttpClient) {}

  public loading: boolean = false;
  public isReqSent: boolean = false;

  inputText: any;

  submit(inputText: any) {
    console.log(inputText);

    if (this.isReqSent) {
      this.loading = true;
    } else {
      this.loading = false;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadImage(file);
  }

  uploadImage(file: any) {
    // upload image
    const formData = new FormData();
    formData.append('image', file);

    this.httpClient
      .post(AppConstants.API_URL + AppConstants.PARKINSON_IMAGE_API, formData)
      .subscribe(
        (response) => {
          console.log('Success response: ' + response);
        },
        (error) => {
          console.log('Error: ' + error);
        }
      );
  }
}
