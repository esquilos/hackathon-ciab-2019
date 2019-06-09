import { ScoreService } from './../../services/score.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'renegociar-component',
    templateUrl: './renegociar.component.html'
})
export class RenegociarComponent implements OnInit {
    constructor(private formBuilder: FormBuilder,private scoreService:ScoreService,private route: ActivatedRoute,public router: Router ) { }
    renegociarForm : FormGroup;
    emprestimo : String;
    order:String;
    ngOnInit() {
        this.createForm();
        this.route.queryParams.subscribe(params => {
            this.emprestimo=params['id'];
        })
    }
    createForm() {
        this.renegociarForm = this.formBuilder.group({
            motivo:[''],
            descricao:['']
        })
      }
    onSubmit(){
        var reneg = this.renegociarForm.value;
        var body = {
           "emprestimo_renegociado": this.emprestimo,
           "motivo_renegociacao" : reneg.motivo,
           "descricao" : reneg.descricao
        }
        this.scoreService.postRenegociacao(body).subscribe();
        this.router.navigate(['simulacao'])
    }
};