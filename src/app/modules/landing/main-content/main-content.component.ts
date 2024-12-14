import { Component } from '@angular/core';

export interface IExperience {
  company: string;
  dateRange: string;
  role: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  public mobileNumber = '5543996369518'
  public message = '?text=Olá! Vim através do portfólio, gostaria de entrar em contato!'
  public experiences: IExperience[] = [
    {
      company: "Adven.Tech",
      dateRange: "2022 - Presente",
      role: "Desenvolvedor Full-stack",
      paragraphs: [
        "Estou atuando nessa empresa no momento, onde desenvolvo algumas skills importantes para minha carreira... Dentre elas, as minhas melhores são: Angular, .NET, T-SQL e TypeScript. No entanto não sou limitado à essa stack, no meu currículo e nos meus perfis do LinkedIn e GitHub é possível acompanhar a listagem de toda a minha stack atualmente, e também alguns projetos pessoais que desenvolvi utilizando-a.",
        "Atuei e ainda atuo entregando novas funcionalides e prestando manutenção em projetos das áreas de e-commerce, gerenciamento de eventos e gerenciamento de estoque, dentre outras aplicações web sob demanda! Atualmente tenho me interessado e capacitado nas áreas de: CI/CD (Azure pipelines) e Cloud Computing (principalmente Azure Cloud).",
        "Além das citações acima, também atuo liderando uma equipe de desenvolvedores e auxiliando o tech-lead no desenvolvimento e implementação de novas funcionalidades."
      ]
    },
    {
      company: "UTFPR",
      dateRange: "2024 - Presente",
      role: "Estudante de Eng. de software",
      paragraphs: [
        "Atualmente curso engenharia de software, onde desenvolvo e aprimoro habilidades técnicas como: Desenvolvimento front e back-end, Administração de banco de dados, Programação orientada a objetos, Testes unitários e muitas outras!",
        "Desenvolvo também muitas soft-skills, como: Comunicação efetiva, Princípios DevOps, Liderança, Proatividade e autogerenciamento!"
      ]
    }
    ,
    {
      company: "UTFPR",
      dateRange: "2022 - 2024",
      role: "Estudante de Eng. da computação",
      paragraphs: [
        "Nesta instituição, cursei engenharia da computação, desenvolvendo muitas skills, sendo elas: Algoritmos, Programação orientada a objetos (POO), Estrutura de dados, Administração de bancos de dados (DBA), Eletrônica básica, Programação de baixo nível, dentre muitas outras!",
        "Desenvolvi também minhas soft-skills, tive algumas experiências liderando equipes e grupos para atingir metas e objetivos, também tive carga horária em matérias como: Fundamentos da ética, inglês instrumental, comunicação oral e escrita, Libras 1 (nível básico), dentre algumas outras."
      ]
    }
  ];
  public experienceIndex: number = 0

  public setActiveExperience(index: number): void {
    this.experienceIndex = index;
  }
}
