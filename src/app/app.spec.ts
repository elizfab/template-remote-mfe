import { TestBed } from '@angular/core/testing';
import { Home } from './remote-entry/home';
import { remoteRoutes } from './remote-entry/entry.routes';

describe('Remote', () => {
  it('expõe remoteRoutes com a rota raiz', () => {
    expect(remoteRoutes[0].path).toBe('');
  });

  it('renderiza a página inicial', async () => {
    await TestBed.configureTestingModule({ imports: [Home] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('Remote');
  });
});
