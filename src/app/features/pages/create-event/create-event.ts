import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.html',
  styleUrl: './create-event.css',
})
export class CreateEvent {


  // FormGroup pour la création d'un événement

  EventFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    lieu: new FormControl('', []),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    minUser: new FormControl('', [Validators.required]),
    maxUser: new FormControl('', [Validators.required]),
    Category: new FormControl('', [Validators.required]),
    Statut: new FormControl('', [Validators.required]),
    CreationDate: new FormControl('', [Validators.required]),
  });
eventForm: any;
  onSubmit() {
    if (this.EventFormGroup.valid) {
      const eventData = this.EventFormGroup.value;
      console.log('Données du formulaire :', eventData);
      // Vous pouvez ajouter ici la logique pour envoyer les données à votre backend ou effectuer d'autres actions nécessaires.
    }
    else {
      console.log('Le formulaire est invalide.');
    }
  }
}
