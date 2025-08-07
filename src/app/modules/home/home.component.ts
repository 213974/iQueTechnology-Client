// src/app/modules/home/home.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

// Define a reusable animation for fading and sliding in from the sides
const enterTransition = transition(':enter', [
  style({ opacity: 0, transform: 'translateY(20px)' }),
  animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
]);

// The ':leave' transition is modified to prevent overlap
const exitTransition = transition(':leave', [
  // This is the key change: Make the element absolute as it leaves
  style({ position: 'absolute' }), 
  animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
]);

const fadeInOut = trigger('fadeInOut', [enterTransition, exitTransition]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
  animations: [
    // Keep hero and card animations from before
    trigger('hero', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('card', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    // Use the updated testimonial animation
    fadeInOut
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  // --- Service data remains the same ---
  services = [
    { title: 'Managed Services', description: 'Are you tired of the old "Break/Fix" Model? We are proactive in servicing the needs of our clients. Our systems are fine tuned to alert us when something is not quite right, resolving issues before they become problems.', image: 'https://img1.wsimg.com/isteam/stock/D18lzNo/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' },
    { title: 'Security', description: 'Cyber Crime is at an all time high. We offer the latest in advance security protection, from Gateway and Endpoint security to Mobile Device and Disaster Recovery solutions.', image: 'https://img1.wsimg.com/isteam/stock/817/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' },
    { title: 'Cloud Computing', description: 'We are partnered with industry leaders in cloud services. Whether it\'s Office 365, Hosted Exchange, or Cloud Backup Solutions, we have the know how to support your business needs.', image: 'https://img1.wsimg.com/isteam/stock/QBzye43/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' }
  ];

  // --- Testimonial data simplified ---
  testimonials = [
    { id: 1, quote: '"iQue Helped Design Our Fleet Service Environment, Network Security and Functionality While Maintaining the Day to Day Tech Support Role Post Initial Implementation of Our Virtual Environment as Well"', name: 'J. Moore', company: 'Tech24' },
    { id: 2, quote: '"iQue Technology Designed our Network and Provided Tech Support to our Staff. They handle all of Our IT Needs From Email Management on Mobile and Office Devices to Our Network Security and Backups."', name: 'T. Gray', company: 'Capitol' }
  ];

  // --- New properties for carousel control ---
  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.stopCarousel(); // Ensure no multiple intervals are running
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  select(index: number) {
    this.currentIndex = index;
    this.startCarousel(); // Restart timer when user interacts
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.startCarousel();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.startCarousel();
  }
}