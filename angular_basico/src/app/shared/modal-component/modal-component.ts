import { Component, inject } from '@angular/core';
import { ModalService } from './modal-service';

@Component({
  selector: 'app-modal-component',
  imports: [],
  templateUrl: './modal-component.html',
  styleUrl: './modal-component.css',
})
export class ModalComponent {

  modalService = inject(ModalService);

}
