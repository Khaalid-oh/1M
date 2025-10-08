export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  location: string;
  experience: number;
  skills: string[];
  avatar: string;
  appliedDate: string;
  cv: string;
  about: string;
}

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    email: 'emma.thompson@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Frontend Developer',
    status: 'active',
    location: 'San Francisco, CA',
    experience: 5,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    appliedDate: '2023-10-15',
    cv: '/cvs/emma-thompson-cv.pdf',
    about: 'Experienced frontend developer with a passion for creating beautiful, responsive user interfaces. Specialized in React and modern JavaScript frameworks.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1 (555) 987-6543',
    role: 'Full Stack Developer',
    status: 'active',
    location: 'New York, NY',
    experience: 7,
    skills: ['Node.js', 'React', 'MongoDB', 'Express', 'AWS'],
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    appliedDate: '2023-10-12',
    cv: '/cvs/michael-chen-cv.pdf',
    about: 'Full stack developer with extensive experience building scalable web applications. Strong background in both frontend and backend technologies.'
  },
  {
    id: '3',
    name: 'Sophia Rodriguez',
    email: 'sophia.r@example.com',
    phone: '+1 (555) 234-5678',
    role: 'UX/UI Designer',
    status: 'pending',
    location: 'Austin, TX',
    experience: 4,
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    appliedDate: '2023-10-18',
    cv: '/cvs/sophia-rodriguez-cv.pdf',
    about: 'Creative UX/UI designer focused on creating intuitive and engaging user experiences. Skilled in user research and prototyping.'
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '+1 (555) 876-5432',
    role: 'Backend Developer',
    status: 'inactive',
    location: 'Chicago, IL',
    experience: 6,
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    appliedDate: '2023-09-30',
    cv: '/cvs/james-wilson-cv.pdf',
    about: 'Backend developer with expertise in building robust APIs and microservices. Strong focus on performance optimization and security.'
  },
  {
    id: '5',
    name: 'Olivia Kim',
    email: 'olivia.kim@example.com',
    phone: '+1 (555) 345-6789',
    role: 'DevOps Engineer',
    status: 'active',
    location: 'Seattle, WA',
    experience: 8,
    skills: ['Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'CI/CD'],
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    appliedDate: '2023-10-05',
    cv: '/cvs/olivia-kim-cv.pdf',
    about: 'DevOps engineer specializing in cloud infrastructure and automation. Experienced in implementing CI/CD pipelines and managing containerized applications.'
  }
]; 