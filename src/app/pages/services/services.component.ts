import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface Process {
  step: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Structural Engineering',
      description: 'Delivering safe, efficient, and innovative structural solutions for buildings and infrastructure projects.',
      features: [
        'Structural Analysis & Design',
        'Seismic Retrofitting',
        'Steel & Concrete Structures',
        'Foundation Systems',
        'Structural Audits'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      title: 'Civil Engineering',
      description: 'Providing comprehensive civil engineering services that shape the infrastructure of our communities.',
      features: [
        'Site Development',
        'Stormwater Management',
        'Grading & Drainage Plans',
        'Utility Design',
        'Roadway & Paving Design'
      ],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    },
    {
      title: 'MEP Engineering',
      description: 'Designing efficient Mechanical, Electrical, and Plumbing systems for optimal building performance.',
      features: [
        'HVAC System Design',
        'Electrical Power Distribution',
        'Plumbing & Fire Protection',
        'Lighting Control Systems',
        'Energy Modeling'
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop'
    },
    {
      title: 'Industrial Engineering',
      description: 'Designing optimized facilities and systems for industrial manufacturing and processing.',
      features: [
        'Plant Layout & Design',
        'Process Workflow Optimization',
        'Material Handling Systems',
        'Industrial Safety Protocols',
        'Facility Maintenance Planning'
      ],
      image: 'assets/images/portfolio/journey/4-progress.jpg'
    },
    {
      title: 'Oil & Gas Engineering',
      description: 'Specialized engineering solutions for upstream, midstream, and downstream operations in the energy sector.',
      features: [
        'Pipeline Infrastructure',
        'Refinery Process Design',
        'Storage Facility Engineering',
        'Regulatory Compliance',
        'Safety Management Systems'
      ],
      image: 'assets/images/portfolio/journey/3-foundation.jpg'
    }
  ];

  processSteps: Process[] = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We meet with you to understand your vision, requirements, budget, and timeline.'
    },
    {
      step: 2,
      title: 'Concept Development',
      description: 'Our team creates initial design concepts and presents them for your review and feedback.'
    },
    {
      step: 3,
      title: 'Design Refinement',
      description: 'We refine the chosen concept based on your input and finalize all design details.'
    },
    {
      step: 4,
      title: 'Documentation',
      description: 'Complete construction documents are prepared with all technical specifications.'
    },
    {
      step: 5,
      title: 'Construction Support',
      description: 'We provide ongoing support during construction to ensure design integrity.'
    },
    {
      step: 6,
      title: 'Project Completion',
      description: 'Final walkthrough and handover of your completed project, exceeding expectations.'
    }
  ];
}