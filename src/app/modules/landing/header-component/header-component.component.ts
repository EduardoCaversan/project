import { Component, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
  public mobileNumber = '5543996369518'
  public message = '?text=Olá! Vim através do portfólio, gostaria de entrar em contato!'
  constructor(private renderer: Renderer2, private el: ElementRef, private http: HttpClient) { }

  public downloadResume() {
    const resumeUrl = 'assets/docs/Curriculum (1).pdf';
    this.http.get(resumeUrl, { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Curriculum.pdf';
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