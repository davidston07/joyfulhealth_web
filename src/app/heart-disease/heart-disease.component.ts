import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppConstants } from '../const/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-heart-disease',
  templateUrl: './heart-disease.component.html',
  styleUrls: ['./heart-disease.component.css'],
})
export class HeartDiseaseComponent {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  formControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

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
