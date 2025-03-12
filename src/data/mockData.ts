import saxophoneImg from '@/assets/icons/saxophone.png'
import dolphinImg from '@/assets/icons/dolphin.png'
import sakuraImg from '@/assets/icons/sakura.png'
import scooterImg from '@/assets/icons/scooter.png'

export const today = [
  {
    id: 1,
    imageSrc: saxophoneImg,
    backgroundImageStyle: 'var(--color-saxophone)',
    description: 'Netflix Shows',
    status: 'inReview',
    learntWords: 6,
    noOfReviews: 23,
  },
  {
    id: 2,
    imageSrc: dolphinImg,
    backgroundImageStyle: 'var(--color-dolphin)',
    description: 'YouTube',
    status: 'inReview',
    learntWords: 5,
    noOfReviews: 16,
  },
  {
    id: 3,
    imageSrc: '',
    backgroundImageStyle: 'var( --color--status-label-paused-magnolia)',
    description: 'Prime Video',
    status: 'paused',
    learntWords: 8,
    noOfReviews: 2,
  },
]

export const completedDecks = [
  {
    id: 1,
    imageSrc: sakuraImg,
    backgroundImageStyle: 'var(--color-sakura)',
    description: 'Japanese Dramas',
    status: 'completed',
    learntWords: 3,
    noOfReviews: 0,
  },
  {
    id: 2,
    imageSrc: scooterImg,
    backgroundImageStyle: 'var(--color-scooter)',
    description: 'Anime vocab',
    status: 'completed',
    learntWords: 20,
    noOfReviews: 0,
  },
  {
    id: 3,
    imageSrc: '',
    backgroundImageStyle: 'var(--color-dolphin)',
    textColor: 'var(--color-blue)',
    description: 'Kanji deck',
    status: 'completed',
    learntWords: 12,
    noOfReviews: 0,
  },
]
