import type {Project} from '../types/project';

export const MockProjects: Project[] = [
    {
        id: 'p1',
        name: 'rigel',
        description: 'a rigel project',
        ownerId: 'u1',
        memberIds: ['u1', 'u2', 'u3']
    },
    {
        id: 'p2',
        name: 'vitis',
        description: 'a vitis project',
        ownerId: 'u1',
        memberIds: ['u1', 'u2', 'u3']
    }
]