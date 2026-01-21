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
      image: 'assets/images/portfolio/journey/5-completion.jpg',
      title: 'Commercial Excellence',
      subtitle: 'Creating spaces that inspire business success'
    },
    {
      image: 'assets/images/portfolio/journey/4-progress.jpg',
      title: 'Civil Engineering Excellence',
      subtitle: 'Infrastructure that supports communities'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=90',
      title: 'Modern Structural Design',
      subtitle: 'Blending precision with performance'
    }
  ];

  currentSlide = 0;

  featuredProjects = [
    {
      title: 'Engineering Planning',
      category: 'Design Phase',
      image: 'assets/images/portfolio/journey/1-plans-cover.jpg',
      description: 'Comprehensive structural and site planning for the 12,000 SF project.'
    },
    {
      title: 'Structural Elevation',
      category: 'Engineering',
      image: 'assets/images/portfolio/journey/2-elevations.jpg',
      description: 'Precision drafting of building exteriors and vertical structural components.'
    },
    {
      title: 'Foundation Slab',
      category: 'Construction',
      image: 'assets/images/portfolio/journey/3-foundation.jpg',
      description: 'High-grade concrete foundation pour for the commercial structure.'
    },
    {
      title: 'Building Progress',
      category: 'Site Surveillance',
      image: 'assets/images/portfolio/journey/4-progress.jpg',
      description: 'Documenting vertical progress through advanced drone captures.'
    },
    {
      title: 'Commercial Result',
      category: 'Completed',
      image: 'assets/images/portfolio/journey/5-completion.jpg',
      description: 'The final, state-of-the-art professional facility in Midland, TX.'
    },
    {
      title: 'Site Integration',
      category: 'Completed',
      image: 'assets/images/portfolio/journey/5-completion-12.jpg',
      description: 'Final birds-eye view of the completed site and landscape.'
    }
  ];

  imageGallery = [
    { image: 'assets/images/portfolio/journey/1-floor-plan.jpg', label: '1. Drafting & Modeling', desc: 'Precise blueprints using Revit' },
    { image: 'assets/images/portfolio/journey/1-utilities-plan.jpg', label: '2. MEP Systems', desc: 'Complex utility & electrical mapping' },
    { image: 'assets/images/portfolio/journey/3-foundation-2.jpg', label: '3. Site Prep', desc: 'Foundation and earthmoving phase' },
    { image: 'assets/images/portfolio/journey/5-completion-4.jpg', label: '4. Frame Construction', desc: 'Erecting the primary building structure' },
    { image: 'assets/images/portfolio/journey/4-progress-2.jpg', label: '5. Exterior Shell', desc: 'Installing roof and wall panels' },
    { image: 'assets/images/portfolio/journey/5-completion-11.jpg', label: '6. Final Completion', desc: 'Project delivered and certified' }
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