import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container-crud',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './container-crud.component.html',
  styleUrls: ['./container-crud.component.css'],
})
export class ContainerCrudComponent {}