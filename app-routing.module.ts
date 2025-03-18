import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: IndexComponent },         // Ana Sayfa
  { path: 'hakkimizda', component: AboutComponent },  // Hakkımızda
  { path: 'haberler', component: NewsComponent },    // Haberler
  { path: 'galeri', component: GalleryComponent },  // Galeri
  { path: '**', redirectTo: '', pathMatch: 'full' } // Geçersiz URL'ler Ana Sayfaya yönlendirilir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
