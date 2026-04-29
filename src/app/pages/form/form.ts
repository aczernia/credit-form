import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-form',
  imports: [DatePipe, InputText, Select, DatePicker, ReactiveFormsModule, Button],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
  });

  onSubmit() {
    console.log(this.form.value);
  }

}
