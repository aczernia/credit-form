import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';

interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-demo',
  imports: [ReactiveFormsModule, DatePipe, InputText, Select, DatePicker],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  readonly form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    city: new FormControl<string | null>(null),
    birthDate: new FormControl<Date | null>(null)
  });

  readonly options: SelectOption[] = [
    { label: 'Warszawa', value: 'Warsaw' },
    { label: 'Kraków', value: 'Krakow' },
    { label: 'Wrocław', value: 'Wroclaw' },
    { label: 'Gdańsk', value: 'Gdansk' },
    { label: 'Poznań', value: 'Poznan' }
  ];
}
