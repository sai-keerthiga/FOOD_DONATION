import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  providers:[HttpClient, ContactService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      donation: ['', Validators.required],
      address: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.contactService.submitContact(contactData).subscribe({
        next:(response:any) => {
          window.alert('Contact form submitted successfully');
          console.log('Contact form submitted successfully:', response);
          this.submitted = true; // Set submitted to true to show success message or reset form
          this.contactForm.reset(); // Reset the form
        },
        error:(error:any) => {
          window.alert('Error Submitting form');
          console.error('Error submitting contact form:', error);
          // Handle error: show error message or retry logic
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
