import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  userForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email ]],
      contrasena: this.formBuilder.control(''),
    })
 }
    get emailControl() {
      return this.userForm.controls['email'];

    }
    //console.log(this.userForm.value);
 

  onSubmit(): void {
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }
}
