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
  gallery?: (string | { image: string; label: string })[];
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
  selectedGalleryImage: string | null = null;
  activeProject: Project | null = null;
  selectedCategory = 'All';

  categories = ['All', 'Planning', 'Construction', 'Completed'];

  projects: Project[] = [
    {
      id: 1,
      title: 'Architectural Site Planning',
      category: 'Planning',
      location: 'Midland, TX',
      year: '2025',
      description: 'The journey began with comprehensive site analysis and structural engineering. Our team developed detailed architectural plans to ensure optimal land use and structural integrity for this 12,000 SF commercial facility.',
      image: 'assets/images/portfolio/journey/1-plans-cover.jpg',
      gallery: [
        { image: 'assets/images/portfolio/journey/0-location-map.jpg', label: 'Site Location Map' },
        { image: 'assets/images/portfolio/journey/1-plans-cover.jpg', label: 'Architectural Cover Sheet' },
        { image: 'assets/images/portfolio/journey/1-floor-plan.jpg', label: 'Detailed Floor Plan' },
        { image: 'assets/images/portfolio/journey/1-utilities-plan.jpg', label: 'Electrical & Utilities Layout' },
        { image: 'assets/images/portfolio/journey/2-site-plan.jpg', label: 'Detailed Site Plan' }
      ],
      details: {
        size: '12,000 sq ft',
        duration: '3 months (Design Phase)'
      }
    },
    {
      id: 2,
      title: 'Foundation & Earthmoving',
      category: 'Construction',
      location: 'Midland, TX',
      year: '2025',
      description: 'The physical journey started with precision earthmoving and foundation laying. This phase focused on establishing a solid, high-grade concrete base for the high-capacity commercial structure.',
      image: 'assets/images/portfolio/journey/3-foundation.jpg',
      gallery: [
        { image: 'assets/images/portfolio/journey/3-foundation.jpg', label: 'Primary Foundation Slab' },
        { image: 'assets/images/portfolio/journey/3-foundation-2.jpg', label: 'Site Preparation & Grading' },
        { image: 'assets/images/portfolio/journey/2-elevations.jpg', label: 'Structural Elevations' }
      ],
      details: {
        size: 'Concrete Slab',
        duration: '2 months'
      }
    },
    {
      id: 3,
      title: 'Commercial Construction Progress',
      category: 'Construction',
      location: 'Midland, TX',
      year: '2025',
      description: 'Progress was meticulously documented through drone surveys, tracking the elevation and exterior finish of the building. This phase bridged the gap between raw structure and a finished commercial asset.',
      image: 'assets/images/portfolio/journey/4-progress.jpg',
      gallery: [
        { image: 'assets/images/portfolio/journey/4-progress.jpg', label: 'Exterior Shell Construction' },
        { image: 'assets/images/portfolio/journey/4-progress-2.jpg', label: 'Structural Frame Detail' },
        { image: 'assets/images/portfolio/journey/5-completion-6.jpg', label: 'Progress Aerial Shot 01' },
        { image: 'assets/images/portfolio/journey/5-completion-5.jpg', label: 'Progress Aerial Shot 02' }
      ],
      details: {
        size: '12,000 sq ft',
        duration: 'Active Construction'
      }
    },
    {
      id: 4,
      title: 'Completed Portfolio Result',
      category: 'Completed',
      location: 'Midland, TX',
      year: '2025',
      description: 'The final destination: a state-of-the-art professional facility. This modern workspace demonstrates our commitment to high-end commercial quality from the first blueprint to the final exterior finish.',
      image: 'assets/images/portfolio/journey/5-completion.jpg',
      gallery: [
        { image: 'assets/images/portfolio/journey/5-completion.jpg', label: 'Final Result - Front Aerial' },
        { image: 'assets/images/portfolio/journey/5-completion-2.jpg', label: 'Final Result - Profile View' },
        { image: 'assets/images/portfolio/journey/5-completion-3.jpg', label: 'Final Result - Rear elevation' },
        { image: 'assets/images/portfolio/journey/5-completion-4.jpg', label: 'Final Result - High Angle' },
        { image: 'assets/images/portfolio/journey/5-completion-7.jpg', label: 'Exterior Detail - West Side' },
        { image: 'assets/images/portfolio/journey/5-completion-8.jpg', label: 'Exterior Detail - East Side' },
        { image: 'assets/images/portfolio/journey/5-completion-9.jpg', label: 'Parking & Access View' },
        { image: 'assets/images/portfolio/journey/5-completion-10.jpg', label: 'Landscaping & Facade' },
        { image: 'assets/images/portfolio/journey/5-completion-11.jpg', label: 'Main Entrance Close-up' },
        { image: 'assets/images/portfolio/journey/5-completion-12.jpg', label: 'Overall Site Integration' },
        { image: 'assets/images/portfolio/journey/0-location-map.jpg', label: 'Project Location Reference' }
      ],
      details: {
        size: '12,000 sq ft',
        budget: '$3.5M',
        duration: 'Project Completed'
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
    if (!this.selectedGalleryImage) {
      document.body.style.overflow = 'auto';
    }
  }

  openLightbox(image: string, event?: Event) {
    if (event) event.stopPropagation();
    this.selectedGalleryImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedGalleryImage = null;
    if (!this.activeProject) {
      document.body.style.overflow = 'auto';
    }
  }

  isString(item: any): boolean {
    return typeof item === 'string';
  }
}