import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent {
  timerObservable: Observable<number>;
  timerSubscription: Subscription;
  timePassed: number = 0; // Tempo em segundos

  alertWarning: boolean = false;
  alertDanger: boolean = false;
  alertMessage: String;

  constructor (){}

  ngOnInit(): void {
    // Cria um observable que exibe um valor a cada segundo
    this.timerObservable = timer(0, 1000);

    // Se inscreve no observable e realiza acoes conforme passa o tempo
    this.timerSubscription = this.timerObservable.subscribe(() => {
      this.timePassed++;

      if (this.timePassed === 60)
        this.handleLogout;
      else if (this.timePassed === 45) {
        this.showDanger('Você será deslogado em 15 segundos!');
      } else if (this.timePassed === 30) {
        this.showWarning("Sua sessão está prestes a expirar...");
      }
    })
  }
  
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  showWarning(mensagem: String): void {
    this.alertWarning = true;
    this.alertMessage = mensagem;
  }

  showDanger(mensagem: String): void {
    this.alertWarning = false;
    this.alertDanger = true;
    this.alertMessage = mensagem;
  }

  handleLogout(): void {
    alert('Sessao expirada, realizando logout...');

  }
}
