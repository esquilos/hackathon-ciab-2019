import { SimulacaoComponent } from './components/simulacao/simulacao.component';
import { RenegociarComponent } from './components/renegociar/renegociar.component';
import { ScoreService } from './services/score.service';
import { EmprestimoComponent } from './components/emprestimo/emprestimo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:'', redirectTo:'/emprestimos',pathMatch:'full'},
  {path:'emprestimos', component:EmprestimoComponent},
  {path:'renegociar', component:RenegociarComponent},
  {path:'simulacao', component:SimulacaoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmprestimoComponent,
    RenegociarComponent,
    SimulacaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
