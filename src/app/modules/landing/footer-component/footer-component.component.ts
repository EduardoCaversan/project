import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent {
  public year: number = 0;

  ngOnInit() {
    this.getYear();
  }

  public getYear(): void {
    const date = new Date();
    this.year = date.getFullYear()
  }
}
