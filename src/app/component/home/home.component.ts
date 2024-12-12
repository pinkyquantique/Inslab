import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {
  }
  motor() {
  this.router.navigate(['/pages/motor/vehicleselection'])
  }

  articles=[
    {
      title:'Headlines',
      description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.',
      image: 'image/article_image1.png',
      link:'#'
    },
    {
      title:'Headlines',
      description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.',
      image: 'image/article_image2.png',
      link:'#'
    },
    {
      title:'Headlines',
      description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.',
      image: 'image/article_image3.png',
      link:'#'
    },
    {
      title:'Headlines',
      description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout look like readable English.',
      image: 'image/article_image4.png',
      link:'#'
    }
  ];
  faqs =[
    {
      question: 'Question 01',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
      isOpen: true,
    },
    {
      question: 'Question 02',
      answer: 'Answer for question 2 goes here.',
      isOpen: false,
    },
    {
      question: 'Question 03',
      answer: 'Answer for question 2 goes here.',
      isOpen: false,
    },
    {
      question: 'Question 04',
      answer: 'Answer for question 2 goes here.',
      isOpen: false,
    },
  ];
  toggleFAQ(index: number){
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
