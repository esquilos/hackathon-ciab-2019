import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScoreService{
    constructor(private http: HttpClient){ }
    score = 'https://apis-hackathon.azurewebsites.net/score?cpf=803.334.560-85';
    
    listar(){
        return this.http.get<any[]>(`${this.score}`);
    }

    emprestimoAtraso = "https://apis-hackathon.azurewebsites.net/contratos/atrasados/?cpf=803.334.560-85";

    getEmprestimosAtraso(){
        return this.http.get<any[]>(`${this.emprestimoAtraso}`);
    }
    reneg = "https://apis-hackathon.azurewebsites.net/realiza/renegociacao/";
    postRenegociacao(body){
        return this.http.post(`${this.reneg}`,body);
    }
}