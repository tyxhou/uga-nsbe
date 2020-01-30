import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExecBodyComponent } from './views/exec-body/exec-body.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { ResourcesComponent } from './views/resources/resources.component';
import { ManageUsersComponent } from './views/admin/manage-users/manage-users.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'exec-body', component: ExecBodyComponent
  },
  {
    path:'edit-profile', component: EditProfileComponent
  },
  {
    path:'resources', component: ResourcesComponent
  },
  {
    path:'manage-users', component: ManageUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ExecBodyComponent, EditProfileComponent];
