import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { PublicacaoService } from '../../publicacao.service'
import { Publicacao } from '../../shared/publicacao.model'
import * as firebase from 'firebase'
import { ProgressoService } from 'src/app/progresso.service';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  @Output() public atualizarTimeLine: EventEmitter<any> = new EventEmitter()

  public email: string

  private imagem: any

  public progressoPublicacao: string = 'pendente'

  public porcentagemUpload: number

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
    private publicacaoService: PublicacaoService,
    private progressoService: ProgressoService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public publicar(): void {
   
    let publicacao: Publicacao = new Publicacao(
      this.formulario.value.titulo,
      this.email,
      this.imagem[0]
    )

    this.publicacaoService.publicar(publicacao)

    let continua = new Subject()
    continua.next(true)

    let acompanhamentoUpload = interval(1000)
    
    acompanhamentoUpload
      .pipe(takeUntil(continua)) 
      .subscribe(() => {
        this.progressoPublicacao = 'andamento'
        this.porcentagemUpload = Math.round((this.progressoService.estado.bytesTransferred / this.progressoService.estado.totalBytes ) * 100);

        if (this.progressoService.status === 'concluido') {
            this.progressoPublicacao = 'concluido'
            this.atualizarTimeLine.emit()
            console.log('incluido com sucesso')
            
            continua.next(false)
        }
      })

  }

  public prepararImagemUpload(event: Event): void {

    this.imagem = (<HTMLInputElement>event.target).files
  }

}
