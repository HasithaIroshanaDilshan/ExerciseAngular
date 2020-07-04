import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";

@Component({
	selector: 'app-directive',
	templateUrl: './directive.component.html',
	styleUrls: ['./directive.component.scss']
})

export class DirectiveComponent implements OnInit {
	color: string;
	public textToshow: string;

	private lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});
	constructor() {
	}

	ngOnInit(): void {
		this.textToshow= this.lorem.generateParagraphs(3);
	}

}
