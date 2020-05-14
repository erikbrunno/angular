import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model'
import { AuthService } from '../../auth.service'
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [ Validators.required ]),
    'nome_completo': new FormControl(null, [ Validators.required ]),
    'nome_usuario': new FormControl(null, [ Validators.required]),
    'senha': new FormControl(null, [ Validators.required ])
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login')
  }

  public cadastrarUsuario(): void {

    if (this.formulario.status == 'INVALID') {
      this.formulario.get('email').markAsTouched()
      this.formulario.get('nome_completo').markAsTouched()
      this.formulario.get('nome_usuario').markAsTouched()
      this.formulario.get('senha').markAsTouched()
    } else {
      let usuario: Usuario = new Usuario(
        this.formulario.value.email,
        this.formulario.value.nome_completo,
        this.formulario.value.nome_usuario,
        this.formulario.value.senha
      )
     
      this.authService.cadastrarUsuario(usuario)
        .then(() => this.exibirPainelLogin())
    }

  }

}
