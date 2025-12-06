import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'John Anderson',
      position: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: '20+ years of experience in commercial and residential architecture'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Award-winning designer specializing in sustainable architecture'
    },
    {
      name: 'Michael Chen',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Expert in large-scale project coordination and client relations'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Specializes in innovative industrial and commercial designs'
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working closely with clients to transform their vision into reality.'
    },
    {
      icon: '♻️',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible design and construction practices.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and design methodologies.'
    }
  ];

  milestones = [
    { year: '2009', event: 'Company Founded', description: 'Cornerstone Design Group established in Midland, Texas' },
    { year: '2012', event: 'First Major Award', description: 'Received Excellence in Architecture Award' },
    { year: '2015', event: '100 Projects', description: 'Completed our 100th successful project' },
    { year: '2018', event: 'National Recognition', description: 'Featured in Architectural Digest' },
    { year: '2020', event: 'Sustainability Focus', description: 'Launched green building initiative' },
    { year: '2024', event: '500+ Projects', description: 'Milestone of over 500 completed projects' }
  ];
}