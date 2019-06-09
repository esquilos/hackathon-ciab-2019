import { ScoreService } from './../../services/score.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'emprestimo-component',
    templateUrl: './emprestimo.component.html',
})
export class EmprestimoComponent implements OnInit{
    score;
    emprestimos:Array<any>;
    exibe:Boolean;
    constructor(private scoreService:ScoreService){}
    @ViewChild('abreModal') private botaoModal : ElementRef;

    ngOnInit(){
        this.listar();
        this.getEmprestimosAtraso();
    }
    listar () {
        this.scoreService.listar().subscribe(data =>{
            this.score = data;},erro=>console.log(erro));
    }
    getEmprestimosAtraso() {
        this.scoreService.getEmprestimosAtraso().subscribe(dados =>{
            this.emprestimos = dados;},erro=>console.log(erro));
    }
}