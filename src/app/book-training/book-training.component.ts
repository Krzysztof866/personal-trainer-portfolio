import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-book-training',
  templateUrl: './book-training.component.html',
  styleUrls: ['./book-training.component.scss'],
  imports: [ CommonModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule ],
  standalone: true,
})

export class BookTrainingComponent implements OnInit {
  trainingForm!: FormGroup;
  formSubmitted = false;
  submissionMessage: string | null = null;

  constructor(private titleService: Title, private fb: FormBuilder) {
    this.titleService.setTitle('Osilek Practice - Zamów trening');
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.trainingForm = this.fb.group({
      from_name: ['', Validators.required],
      to_name: 'Admin',
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async send(): Promise<any> {
    emailjs.init('PYbcSy0ctldG_zcpK');
    try {
      return await emailjs.send("service_r6v8ls7", "template_96adgxk", {
        from_name: this.trainingForm.value.from_name,
        to_name: this.trainingForm.value.to_name,
        from_email: this.trainingForm.value.from_email,
        subject: this.trainingForm.value.subject,
        message: this.trainingForm.value.message,
      });
    } catch (error) {
      throw error;
    }
  }

  submitForm(): void {
    if (this.trainingForm.valid) {
      this.send().then((response) => {
        console.log(response);
        this.formSubmitted = true;
        this.submissionMessage = "Dziękuję! Śledź swoją skrzynkę, niebawem się odezwę :)";
        this.resetForm();
      }).catch((error) => {
        console.error('Error sending email:', error);
        this.submissionMessage = "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.";
      });
    } else {
      this.trainingForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.trainingForm.reset();
  }
}
