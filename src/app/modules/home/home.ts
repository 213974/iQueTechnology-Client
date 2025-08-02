// src/app/modules/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  animations: [
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
    trigger('testimonial', [
      state('center', style({
        transform: 'translateX(-50%) scale(1)',
        opacity: 1,
        zIndex: 2
      })),
      state('left', style({
        transform: 'translateX(-110%) scale(0.8)',
        opacity: 0.6,
        zIndex: 1
      })),
      state('right', style({
        transform: 'translateX(10%) scale(0.8)',
        opacity: 0.6,
        zIndex: 1
      })),
      transition('* => *', [
        animate('0.5s ease-in-out')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  services = [
    { title: 'Managed Services', description: 'Are you tired of the old "Break/Fix" Model? We are proactive in servicing the needs of our clients. Our systems are fine tuned to alert us when something is not quite right, resolving issues before they become problems.', image: 'https://img1.wsimg.com/isteam/stock/D18lzNo/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' },
    { title: 'Security', description: 'Cyber Crime is at an all time high. We offer the latest in advance security protection, from Gateway and Endpoint security to Mobile Device and Disaster Recovery solutions.', image: 'https://img1.wsimg.com/isteam/stock/817/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' },
    { title: 'Cloud Computing', description: 'We are partnered with industry leaders in cloud services. Whether it\'s Office 365, Hosted Exchange, or Cloud Backup Solutions, we have the know how to support your business needs.', image: 'https://img1.wsimg.com/isteam/stock/QBzye43/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' }
  ];

  testimonials = [
    { id: 1, quote: '"iQue Helped Design Our Fleet Service Environment, Network Security and Provided Tech Support to our Staff. They handle all of our IT needs."', name: 'J. Moore', company: 'Tech24', state: 'center' },
    { id: 2, quote: '"They handle all of our IT needs from Email Management on Mobile and Office Devices to our Network Security and Backups."', name: 'T. Gray', company: 'Capitol', state: 'right' },
    { id: 3, quote: '"The team is incredibly responsive and knowledgeable. They have become a true extension of our own department."', name: 'A. Davis', company: 'Innovate Corp', state: 'right' },
    { id: 4, quote: '"Switching to iQue was the best decision we made for our IT infrastructure. Their proactive approach has saved us countless hours."', name: 'M. Chen', company: 'Logistics Pro', state: 'right' },
    { id: 5, quote: '"Their expertise in security and compliance is second to none. We feel confident that our data is protected."', name: 'S. Rodriguez', company: 'Health Systems', state: 'right' }
  ];

  private currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.rotateTestimonials();
    }, 5000); // Rotate every 5 seconds
  }

  rotateTestimonials() {
    const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
    const prevIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;

    this.testimonials[this.currentIndex].state = 'left';
    this.testimonials[nextIndex].state = 'center';
    this.testimonials[prevIndex].state = 'right'; // Keep other cards to the right

    // Make sure all non-visible cards are also in the 'right' state
    this.testimonials.forEach((test, index) => {
      if (index !== this.currentIndex && index !== nextIndex) {
        test.state = 'right';
      }
    });

    this.currentIndex = nextIndex;
  }
}