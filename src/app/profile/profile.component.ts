import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {SubscriptionLike} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;

  userSubscription: SubscriptionLike;

  id: number;

  result: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.profileForm = this.formBuilder.group({

      email: ['', Validators.required],
      username: ['', Validators.required],
      firstname: [''],
      lastname: [''],

      address: this.formBuilder.group({

        street: [''],
        zip: [''],
        city: ['']

      })

    });
  }

  update(): void {
    if (this.profileForm.valid) {
      this.result = JSON.stringify(this.profileForm.value);
    }
  }

  randomUser(): void {
    let randomId = Math.floor(Math.random()*10) + 1;
    this.userSubscription = this.userService.getUserById(randomId).subscribe(user => {

      this.profileForm.patchValue({
        email: user.email,
        username: user.username,
        firstname: user.name.split(' ')[0],
        lastname: user.name.split(' ')[1],
        address: {
          street: user.address.street,
          zip: user.address.zipcode,
          city: user.address.city
        }
      });

    });
  }

  ngOnDestroy(): void {

    if (this.userSubscription) this.userSubscription.unsubscribe();

  }

}
