import { Component, OnInit,ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrl: './subtask-list.component.scss'
})
export class SubtaskListComponent implements OnInit{
  @ViewChildren('subtaskInput') subtaskInputs!: QueryList<ElementRef>;
  subtaskForm!: FormGroup;
  subtask: any;
  newestSubtaskIndex: number | null = null;

  constructor(private formBuilder: FormBuilder,private renderer: Renderer2) {}

  
  ngOnInit(): void {
    this.subtaskForm = this.formBuilder.group({
      subtasks: this.formBuilder.array([])
    });
  }

  // Helper method to create a new subtask form group, containing 'name' and 'completed' fields
  createSubtask(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required], // 'name' is required, initialized as an empty string
      completed: [false] // 'completed' is a boolean, initialized to false
    });
  }

  // Getter to easily access the subtasks form array from the form group
  get subtasks(): FormArray {
    return this.subtaskForm.get('subtasks') as FormArray;
  }

  // Method to add a new subtask to the subtasks form array
  addSubtask(): void {
    this.subtasks.push(
      this.createSubtask() // Pushes a new subtask using the 'createSubtask' method
    );

    // Focus on the new subtask input after a short delay to ensure the DOM updates
    setTimeout(() => {
      const lastInput = this.subtaskInputs.last; // Get the last input element (newest subtask)
      if (lastInput) {
        lastInput.nativeElement.focus(); // Set focus on the newest subtask input
      }
    }, 0);
  }

  // Method to toggle the 'completed' status of a subtask based on its index
  toggleCompleted(index: number): void {
    const subtask = this.subtasks.at(index); // Retrieve the subtask form group at the given index
    if (subtask) {
      const completed = subtask.get('completed')?.value; // Get the current 'completed' status
      subtask.get('completed')?.setValue(!completed); // Toggle the completed value
    }
  }

  // Calculate progress value based on the percentage of completed subtasks
  getProgressValue(): number {
    const total = this.getSubtaskCount(); // Total number of subtasks
    const completed = this.getCompletedCount(); // Number of completed subtasks
    return total === 0 ? 0 : (completed / total) * 100; // Return percentage of completed subtasks
  }

  // Get the count of completed subtasks
  getCompletedCount(): number {
    // Filter subtasks where 'completed' is true, and return the count
    return this.subtasks.controls.filter(task => task.get('completed')?.value).length;
  }

  // Get the total count of subtasks in the form array
  getSubtaskCount(): number {
    return this.subtasks.length;
  }

}

