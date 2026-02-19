import { Building2, Globe, HardHat, Leaf, Paintbrush, Ruler } from 'lucide-react'

export const projectsData = [
    {
        id: '1',
        title: 'Azure Heights',
        category: 'Residential',
        description: 'A masterpiece of vertical living, blending futuristic geometry with sustainable green balconies.',
        location: 'Mumbai, India',
        year: '2023',
        imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: 'Azure Heights redefined the Mumbai skyline with its parametric facade and integrated vertical gardens. Every floor features a 270-degree view of the Arabian Sea, supported by a minimalist glass structure that maximizes natural thermal regulation.',
        highlights: [
            'Parametric Glass Facade',
            'Vertical Self-Sustaining Gardens',
            'Bionic Structural Support',
            'Smart Climate Control Systems'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '2',
        title: 'The Glass Pavilion',
        category: 'Commercial',
        description: 'A revolutionary office space designed with high-transparency glass and bionic structural support.',
        location: 'Bangalore, India',
        year: '2022',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: 'This commercial hub focuses on the "open office" philosophy, utilizing ultra-clear structural glass to dissolve boundaries between the interior and exterior environments. The central atrium serves as a natural lung for the entire complex.',
        highlights: [
            'High-Transparency Structural Glass',
            'Open-Plan Biophilic Design',
            'Zero-Emission Energy Grid',
            'Integrated Smart Tech Hub'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '3',
        title: 'Emerald Retreat',
        category: 'Luxury Villas',
        description: 'Secluded luxury villa featuring cantilevered infinity pools and natural stone integration.',
        location: 'Goa, India',
        year: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: 'Emerald Retreat is a study in brutalist luxury. Raw concrete and locally sourced stone merge with the lush Goan landscape, featuring dramatic cantilevers that defy gravity and house a private sky-pool.',
        highlights: [
            'Cantilevered Infinity Pool',
            'Monolithic Concrete Surfaces',
            'Natural Geothermal Cooling',
            'Bespoke Handcrafted Interiors'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '4',
        title: 'Orbit Corporate Hub',
        category: 'Corporate',
        description: 'Minimalist corporate headquarters focused on fluid space transition and natural lighting.',
        location: 'Hyderabad, India',
        year: '2023',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        content: 'The Orbit Hub utilizes a circular layout to foster collaboration and transparency. A centralized glass core allows sunlight to penetrate all levels, significantly reducing artificial lighting requirements.',
        highlights: [
            'Circular Collaboration Layout',
            'Centralized Light-Well Atrium',
            'Kinetic Facade Shading',
            'Modular Interior Workspaces'
        ],
        gallery: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
        ]
    }
]

export const servicesData = [
    {
        title: "Architectural Design",
        description: "Creation of high-end residential, commercial, and institutional structures with a focus on modern Indian aesthetics.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Interior Architecture",
        description: "Curating luxury living spaces that reflect the personality and lifestyle of our clients.",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Urban Planning",
        description: "Developing sustainable and efficient master plans for large-scale urban developments and campuses.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Project Management",
        description: "End-to-end management of the construction process to ensure quality, safety, and timely delivery.",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Structural Engineering",
        description: "Advanced engineering solutions that ensure the safety and longevity of complex architectural designs.",
        icon: Ruler,
        image: "https://images.unsplash.com/photo-1503387762-592dea58f21f?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Sustainability Consulting",
        description: "Integrating green building technologies and passive design strategies into every project.",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
    }
]
