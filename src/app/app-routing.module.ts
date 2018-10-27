import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HotdealComponent } from './hotdeal/hotdeal.component'
import { HomepageComponent } from './homepage/homepage.component';
import { SanphamLazadaComponent } from './sanpham-lazada/sanpham-lazada.component'
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SanphamTikiComponent } from './sanpham-tiki/sanpham-tiki.component';


const routes: Route[] = [
  {path: 'hotdeal', component: HotdealComponent},
  {path: 'hotdeal/lazada', component: SanphamLazadaComponent},
  {path: 'hotdeal/tiki', component: SanphamTikiComponent},
  {path: 'hotdeal/tiki/lazada', redirectTo:'hotdeal/lazada'},
  {path: 'hotdeal/lazada/tiki', redirectTo: 'hotdeal/tiki'},
  {path: '', component: BodyComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
