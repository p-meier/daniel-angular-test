import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  userSubscription: SubscriptionLike;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

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

  randomUser(): void {
    let randomId = Math.floor(Math.random() * 10) + 1;
    this.userSubscription = this.userService.getUserById(randomId).subscribe(user => {
      user.firstname = user.name.split(' ')[0];
      user.lastname = user.name.split(' ')[1];
      user.address.zip = user.address.zipcode;
      this.profileForm.patchValue(user);
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
