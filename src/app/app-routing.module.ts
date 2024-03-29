import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundPageTwoComponent } from './playground-page-two/playground-page-two.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
  {
    path: 'playground-page-two',
    component: PlaygroundPageTwoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
