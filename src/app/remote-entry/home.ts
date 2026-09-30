import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ef-home',
  template: `
    <section class="home">
      <h1>Remote de exemplo</h1>
      <p>Substitua este componente pela funcionalidade do projeto.</p>
    </section>
  `,
  styles: `
    .home {
      display: grid;
      gap: 0.5rem;
      padding: 2rem 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
