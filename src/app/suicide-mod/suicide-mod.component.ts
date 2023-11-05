import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppConstants } from '../const/app-constants';

@Component({
  selector: 'app-suicide-mod',
  templateUrl: './suicide-mod.component.html',
  styleUrls: ['./suicide-mod.component.css'],
})
export class SuicideModComponent {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: AppConstants.AUTH_TOKEN,
    }),
  };

  inputText: string = '';

  textData = {
    message: this.inputText,
  };

  public loading: boolean = false;
  public isReqSent: boolean = false;

  submit(inputText: any) {
    console.log(inputText);
    this.inputText = inputText;

    this.sendRequest();

    if (this.isReqSent) {
      this.loading = true;
    } else {
      this.loading = false;
    }
  }

  sendRequest() {
    this.httpClient
      .post(
        AppConstants.API_URL + AppConstants.SUICIDE_INPUT_API,
        this.textData,
        this.httpOptions
      )
      .subscribe(
        (response) => {
          console.log('Success response: ' + response);
        },
        (error) => {
          console.log('Failure response: ' + error);
        }
      );
  }
}
