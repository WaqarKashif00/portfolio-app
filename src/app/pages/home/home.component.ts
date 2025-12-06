import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  stats = [
    { number: 500, currentNumber: 0, label: 'Projects Completed', suffix: '+' },
    { number: 15, currentNumber: 0, label: 'Years Experience', suffix: '+' },
    { number: 98, currentNumber: 0, label: 'Client Satisfaction', suffix: '%' },
    { number: 50, currentNumber: 0, label: 'Awards Won', suffix: '+' }
  ];

  heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=90',
      title: 'Commercial Excellence',
      subtitle: 'Creating spaces that inspire business success'
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=90',
      title: 'Residential Masterpieces',
      subtitle: 'Designing homes that reflect your lifestyle'
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112d38e149?w=1920&h=1080&fit=crop&q=90',
      title: 'Industrial Innovation',
      subtitle: 'Functional spaces for modern business'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=90',
      title: 'Modern Architecture',
      subtitle: 'Blending form with function beautifully'
    }
  ];

  currentSlide = 0;

  featuredProjects = [
    {
      title: 'Texas Pride Plaza',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
      description: 'Vibrant commercial hub with retail, dining and business spaces'
    },
    {
      title: 'Modern Residence',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
      description: '4,059 sq ft luxury home with contemporary design'
    },
    {
      title: 'Industrial Complex',
      category: 'Industrial',
      image: 'https://cdn.pixabay.com/photo/2022/03/04/02/26/factory-7046354_960_720.jpg',
      description: 'State-of-the-art manufacturing facility'
    },
    {
      title: 'Luxury Estate',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
      description: '5,200 sq ft lakefront property with stunning views'
    },
    {
      title: 'Office Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
      description: '120,000 sq ft sustainable office building'
    },
    {
      title: 'Mountain Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
      description: 'Elegant estate with panoramic mountain views'
    }
  ];

  imageGallery = [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=800&fit=crop&q=80'
  ];

  ngOnInit() {
    this.animateStats();
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  animateStats() {
    this.stats.forEach((stat, index) => {
      setTimeout(() => {
        this.animateNumber(stat, 0, stat.number, 2000);
      }, index * 200);
    });
  }

  animateNumber(stat: any, start: number, end: number, duration: number) {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      stat.currentNumber = Math.floor(start + (end - start) * this.easeOutQuad(progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }

  easeOutQuad(t: number): number {
    return t * (2 - t);
  }
}