import type { Comment } from '../types/comment'

// Seeded so the list has a busy thread (t1), a short one (t2), a single
// comment (t4), and tasks with none at all - every state S7.3 has to render.
// Kept in ascending createdAt order, the way a real API would return a thread.
export const mockComments: Comment[] = [
  {
    id: 'c1',
    taskId: 't1',
    authorId: 'u2',
    body: 'Started on the three-column layout. Using CSS grid rather than flex so the columns stay equal width.',
    createdAt: '2026-08-10T11:20:00.000Z',
  },
  {
    id: 'c2',
    taskId: 't1',
    authorId: 'u1',
    body: 'Looks good. Can we keep the column headers sticky when the list scrolls?',
    createdAt: '2026-08-11T09:05:00.000Z',
  },
  {
    id: 'c3',
    taskId: 't1',
    authorId: 'u3',
    body: 'Sticky headers are in. One thing to watch - the shadow renders over the first card on Safari.',
    createdAt: '2026-08-12T15:42:00.000Z',
  },
  {
    id: 'c4',
    taskId: 't2',
    authorId: 'u1',
    body: 'Blocked until the navigator UI lands, since the route params depend on its shape.',
    createdAt: '2026-08-12T08:30:00.000Z',
  },
  {
    id: 'c5',
    taskId: 't2',
    authorId: 'u2',
    body: 'Unblocked now. Wiring the detail route today.',
    createdAt: '2026-08-16T08:35:00.000Z',
  },
  {
    id: 'c6',
    taskId: 't4',
    authorId: 'u4',
    body: 'Reproduced it - the collapse only breaks when the window is resized while the sidebar is already closed.',
    createdAt: '2026-08-18T13:10:00.000Z',
  },
]
