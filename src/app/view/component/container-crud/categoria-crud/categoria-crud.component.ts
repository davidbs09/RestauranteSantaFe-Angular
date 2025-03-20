import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../services/categoria-service';

@Component({
  selector: 'app-categoria-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class CategoriaCrudComponent implements OnInit {
  categorias: any[] = [];
  errorMessage: string = '';

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) => {
        this.errorMessage = 'Erro ao carregar categorias';
        console.error('Erro ao carregar categorias', error);
      }
    );
  }
}