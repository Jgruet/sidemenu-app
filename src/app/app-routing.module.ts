import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'note-list',
    loadChildren: () => import('./pages/note-list/note-list.module').then( m => m.NoteListPageModule)
  },
  {
    path: 'note-form',
    loadChildren: () => import('./pages/note-form/note-form.module').then( m => m.NoteFormPageModule)
  },
  {
    path: 'note-form/:id',
    loadChildren: () => import('./pages/note-form/note-form.module').then( m => m.NoteFormPageModule)
  },
  {
    path: 'my-map',
    loadChildren: () => import('./pages/my-map/my-map.module').then( m => m.MyMapPageModule)
  },
  {
    path: 'liste-concert',
    loadChildren: () => import('./pages/liste-concert/liste-concert.module').then( m => m.ListeConcertPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
