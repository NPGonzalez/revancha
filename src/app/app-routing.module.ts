import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'edit',
    //     component: EditComponent,
    //   },
    // ]
  },
     {
        path: 'edit',
        component: EditComponent,
      },
  // {
  //   path: '**',
  //   pathMatch:'full' , redirectTo:'home'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
