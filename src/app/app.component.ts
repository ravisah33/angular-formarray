import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      address: fb.array([]),
    });
  }

  addNewAddressGroup() {
    const add = this.form.get('address') as FormArray;
    add.push(
      this.fb.group({
        street: [],
        city: [],
      })
    );
  }

  deleteAddressGroup(index: number) {
    const add = this.form.get('address') as FormArray;
    add.removeAt(index);
  }

  deleteEmpty() {
    let indexToRemove = [];
    let fromArray = this.form.get('address') as FormArray;

    fromArray.controls.forEach((control, index) => {
      if (!control.value.street) {
        indexToRemove.push(index);
      }
    });
    indexToRemove.reverse().forEach((index) => {
      fromArray.removeAt(index);
    });
  }
}
