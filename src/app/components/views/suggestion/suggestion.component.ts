import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewProductSuggestion } from './suggestion';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  constructor(private suggestionService: SuggestionService,
              private router: Router) { }


  name: string = '';
  description: string = '';

  ngOnInit(): void {
  }

  sendToTrello() {
    console.log('nome ' + this.name + ' desc == ' + this.description);
    const suggestion: NewProductSuggestion = {
      description: this.description,
      name: this.name
    }

    this.suggestionService.sendToTrello(suggestion)
      .subscribe(() => {
        this.suggestionService.showMessage('Sugestão cadastrada com sucesso!')
        this.clearForm();
      })
  }

  clearForm() {
    this.name = '';
    this.description = '';
  }
}
