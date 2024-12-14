import { Component, Renderer2, ElementRef, Directive, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})

export class HeaderComponentComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, private http: HttpClient) { }

  public downloadResume() {
    const resumeUrl = 'assets/docs/Curriculo Atualizado 2024.pdf';
    this.http.get(resumeUrl, { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Curriculo Eduardo Caversan.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  public toggleMenu() {
    const menuToggle: HTMLElement | null = this.el.nativeElement.querySelector('#menu-toggle');
    const menu: HTMLElement | null = this.el.nativeElement.querySelector('.menu');

    if (menuToggle && menu) {
      if (menu.classList.contains('active')) {
        this.renderer.removeClass(menu, 'active');
        this.renderer.removeClass(menuToggle, 'active');
      } else {
        this.renderer.addClass(menu, 'active');
        this.renderer.addClass(menuToggle, 'active');
        const menuItems: NodeListOf<HTMLElement> = menu.querySelectorAll('ul li a');
        menuItems.forEach(item => {
          item.addEventListener('click', () => {
            this.renderer.removeClass(menu, 'active');
            this.renderer.removeClass(menuToggle, 'active');
          });
        });
      }
    }
  }
}