import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [ Validators.required ]),
    'senha': new FormControl(null, [ Validators.required ]),
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('chegou aqui')
      this.formulario.get('email').markAsTouched()
      this.formulario.get('senha').markAsTouched()
    } else {

      this.authService.autenticar(this.formulario.value.email, this.formulario.value.senha)
    }
  }

}
