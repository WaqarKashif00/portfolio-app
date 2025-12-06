import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface Service {
  icon: string;
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
      icon: '🏛️',
      title: 'Commercial Architecture',
      description: 'Creating functional, aesthetically pleasing, and sustainable solutions for commercial projects that enhance and contribute positively to the community.',
      features: [
        'Office Buildings & Corporate Headquarters',
        'Retail Spaces & Shopping Centers',
        'Hotels & Hospitality Venues',
        'Mixed-Use Developments',
        'Restaurants & Entertainment Venues'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      icon: '🏠',
      title: 'Residential Design',
      description: 'Creating homes that fulfill functional requirements while reflecting the personal style and lifestyle of the people living in them.',
      features: [
        'Custom Home Design',
        'Luxury Estate Planning',
        'Multi-Family Housing',
        'Home Renovations & Additions',
        'Interior Space Planning'
      ],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    },
    {
      icon: '🏭',
      title: 'Industrial Design',
      description: 'Delivering adequate space for work with projects designed around the environment of the people functioning within them.',
      features: [
        'Manufacturing Facilities',
        'Warehouse & Distribution Centers',
        'Industrial Parks',
        'Research & Development Centers',
        'Production Facilities'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112d38e149?w=800&h=600&fit=crop'
    },
    {
      icon: '📐',
      title: 'Custom Revit Content',
      description: 'Crafted Revit families designed with simplicity in mind, ensuring ease of use for all experience levels.',
      features: [
        'Custom Revit Families',
        'BIM Content Development',
        'Parametric Modeling',
        'Technical Documentation',
        '3D Visualization Services'
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop'
    },
    {
      icon: '🌿',
      title: 'Sustainable Design',
      description: 'Environmentally responsible and resource-efficient design throughout a building\'s life-cycle.',
      features: [
        'LEED Certification Consulting',
        'Energy-Efficient Design',
        'Green Building Materials',
        'Renewable Energy Integration',
        'Water Conservation Systems'
      ],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop'
    },
    {
      icon: '🎨',
      title: 'Interior Design',
      description: 'Creating beautiful, functional interior spaces that enhance the quality of life and culture of the occupants.',
      features: [
        'Space Planning & Layout',
        'Material & Finish Selection',
        'Furniture & Fixture Design',
        'Lighting Design',
        'Color Consultation'
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop'
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