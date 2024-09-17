import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-ticket-edit-panel',
  templateUrl: './ticket-edit-panel.component.html',
  styleUrl: './ticket-edit-panel.component.scss'
})
export class TicketEditPanelComponent  implements OnInit{
  ticketForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }

  // Initialize the form with validators for each field
  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      status:['Unpaid', Validators.required],
      assignee:['', Validators.required],
      coOwner:['', Validators.required],
      importance:['', Validators.required],
      customer:['', Validators.required],
      invoiceId:['', Validators.required]
    })
  }
}
