import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  videoUrl?: string;
  details: {
    size?: string;
    budget?: string;
    duration?: string;
  };
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class PortfolioComponent {
  selectedCategory = 'All';
  activeProject: Project | null = null;
  
  categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Hospitality', 'Mixed-Use'];

  projects: Project[] = [
    {
      id: 1,
      title: 'Texas Pride Plaza',
      category: 'Commercial',
      location: 'Midland, TX',
      year: '2023',
      description: 'A vibrant commercial hub featuring diverse retail, dining, and business spaces with an open and fluid layout that encourages community engagement.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-modern-city-9837/1080p.mp4',
      details: {
        size: '45,000 sq ft',
        budget: '$8.5M',
        duration: '18 months'
      }
    },
    {
      id: 2,
      title: 'Skyline Executive Tower',
      category: 'Commercial',
      location: 'Dallas, TX',
      year: '2023',
      description: 'Modern office tower featuring sustainable design elements, state-of-the-art amenities, and breathtaking views.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      details: {
        size: '120,000 sq ft',
        budget: '$25M',
        duration: '24 months'
      }
    },
    {
      id: 3,
      title: 'Modern Family Residence',
      category: 'Residential',
      location: 'Austin, TX',
      year: '2024',
      description: 'Contemporary 4-bedroom, 3.5-bath home with luxury finishes, open concept living, and seamless indoor-outdoor flow.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      details: {
        size: '4,059 sq ft',
        budget: '$1.2M',
        duration: '12 months'
      }
    },
    {
      id: 4,
      title: 'Lakeside Estate',
      category: 'Residential',
      location: 'Lake Travis, TX',
      year: '2023',
      description: 'Stunning lakefront property featuring floor-to-ceiling windows, infinity pool, and contemporary architecture.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      details: {
        size: '5,200 sq ft',
        budget: '$2.5M',
        duration: '16 months'
      }
    },
    {
      id: 5,
      title: 'Mountain View Villa',
      category: 'Residential',
      location: 'Hill Country, TX',
      year: '2024',
      description: 'Elegant estate nestled in the hills with panoramic views, premium materials, and sophisticated design.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      details: {
        size: '3,800 sq ft',
        budget: '$1.8M',
        duration: '14 months'
      }
    },
    {
      id: 6,
      title: 'Executive Home',
      category: 'Residential',
      location: 'Houston, TX',
      year: '2022',
      description: 'Modern architecture with timeless elegance, featuring 4 bedrooms, 3.5 baths, and smart home integration.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      details: {
        size: '3,348 sq ft',
        budget: '$950K',
        duration: '10 months'
      }
    },
    {
      id: 7,
      title: 'TechManufacturing Facility',
      category: 'Industrial',
      location: 'San Antonio, TX',
      year: '2023',
      description: 'State-of-the-art manufacturing facility designed for optimal workflow, employee comfort, and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112d38e149?w=800&h=600&fit=crop',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-modern-office-building-2344/1080p.mp4',
      details: {
        size: '85,000 sq ft',
        budget: '$12M',
        duration: '20 months'
      }
    },
    {
      id: 8,
      title: 'Distribution Center',
      category: 'Industrial',
      location: 'Fort Worth, TX',
      year: '2023',
      description: 'Large-scale distribution facility with advanced logistics capabilities and sustainable design features.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      details: {
        size: '150,000 sq ft',
        budget: '$18M',
        duration: '22 months'
      }
    },
    {
      id: 9,
      title: 'Grand Hotel & Spa',
      category: 'Hospitality',
      location: 'Austin, TX',
      year: '2024',
      description: 'Luxury boutique hotel featuring 120 rooms, spa facilities, and fine dining experiences.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      details: {
        size: '95,000 sq ft',
        budget: '$35M',
        duration: '30 months'
      }
    },
    {
      id: 10,
      title: 'Urban Living Complex',
      category: 'Mixed-Use',
      location: 'Dallas, TX',
      year: '2023',
      description: 'Mixed-use development combining residential units, retail spaces, and office areas in urban setting.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      details: {
        size: '200,000 sq ft',
        budget: '$42M',
        duration: '36 months'
      }
    },
    {
      id: 11,
      title: 'Riverside Restaurant',
      category: 'Hospitality',
      location: 'San Antonio, TX',
      year: '2024',
      description: 'Upscale dining establishment with waterfront views and contemporary interior design.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      details: {
        size: '8,500 sq ft',
        budget: '$2.2M',
        duration: '8 months'
      }
    },
    {
      id: 12,
      title: 'Innovation Campus',
      category: 'Mixed-Use',
      location: 'Austin, TX',
      year: '2024',
      description: 'Tech campus featuring collaborative workspaces, residential towers, and retail amenities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      details: {
        size: '300,000 sq ft',
        budget: '$55M',
        duration: '42 months'
      }
    }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  openProject(project: Project) {
    this.activeProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.activeProject = null;
    document.body.style.overflow = 'auto';
  }
}