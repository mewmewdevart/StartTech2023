import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
})

export class ContatoComponent {
  nome = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  assunto = new FormControl('');
  mensagem = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorMessage(control: FormControl) {
    if (this.nome.hasError('required')) {
      return 'Este campo é de preenchimento obrigatório';
    }
    if (this.email.hasError('email')) {
      return 'Digite um endereço de email válido';
    }
    if (this.mensagem.hasError('minlength')) {
      return 'A mensagem deve conter pelo menos 6 caracteres';
    }
    return '';
  }

  submitForm(){
    const formData = {
      
    }
  }
}
