import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  address: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm(): void {
    this.formBuilder.group({

      username: [],
      firstname: [],
      lastname: [],

      address: this.formBuilder.group({

        street: [],
        zip: [],
        city: []

      })

    });
  }

}
