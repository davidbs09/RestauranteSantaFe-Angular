import { Routes } from '@angular/router';
import { ContainerCrudComponent } from './view/component/container-crud/container-crud.component';
import { CategoriaCrudComponent } from './view/component/container-crud/categoria-crud/categoria-crud.component';
import { ProdutoCrudComponent } from './view/component/container-crud/produto-crud/produto-crud.component';
import { UsuarioCrudComponent } from './view/component/container-crud/usuario-crud/usuario-crud.component';
import { AdministradorCrudComponent } from './view/component/container-crud/administrador-crud/administrador-crud.component';

export const routes: Routes = [
  {
    path: 'crud',
    component: ContainerCrudComponent,
    children: [
      { path: 'categoria', component: CategoriaCrudComponent },
      { path: 'produto', component: ProdutoCrudComponent },
      { path: 'usuario', component: UsuarioCrudComponent },
      { path: 'administrador', component: AdministradorCrudComponent },
    ],
  },
  { path: '', redirectTo: '/crud/categoria', pathMatch: 'full' }
];