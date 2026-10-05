// Short page copy in English. Editable without touching the layout.
// Editorial convention: no dashes as punctuation, in English too.

export const RULES = [
  {
    id: 'terzi',
    short: 'Thirds',
    num: '01',
    title: 'Rule of thirds',
    body: 'Two horizontal and two vertical lines divide the frame into nine parts. The four intersections are the power points: that is where the eye comes to rest naturally. The horizon goes on a line, not across the middle.',
    breakIt: 'Symmetry, reflections, frontal portraits: the center is a choice, not a mistake.'
  },
  {
    id: 'phi',
    short: 'Phi',
    num: '02',
    title: 'Phi grid',
    body: 'Same logic, different proportions: the lines fall at 0.382 and 0.618 of each side. The power points draw closer to the center and the composition becomes tighter. Dashed, the thirds for comparison.',
    breakIt: 'With a small subject in a large space, the thirds leave more room to breathe.'
  },
  {
    id: 'spirale',
    short: 'Spiral',
    num: '03',
    title: 'Golden spiral',
    body: 'A sequence of golden rectangles generates a curve that winds around a single point. The subject sits in the eye of the spiral; lines and masses lead toward it along the curve. It can be oriented four ways.',
    breakIt: 'If the scene has no curve to follow, the spiral is just a drawing laid on top.'
  },
  {
    id: 'piani',
    short: 'Layers',
    num: '04',
    title: 'Layers of depth',
    body: 'Foreground, middle ground, background. Three layers give depth to a medium that only has two dimensions and make scale readable. An element close to the lens draws the viewer in.',
    breakIt: 'A single plane, frontal and flat, is a strong choice: Ghirri turned it into a poetics.'
  }
];

export const GESTALT = [
  { id: 'figura', title: 'Figure and ground', body: 'What stands out is what gets read. Tone, color or sharpness decide what becomes the figure.' },
  { id: 'vicinanza', title: 'Proximity', body: 'What is close forms a group. The distance between people tells their relationship.' },
  { id: 'somiglianza', title: 'Similarity', body: 'Matching shapes and colors connect even at a distance. The odd one out becomes the subject.' },
  { id: 'continuita', title: 'Continuity', body: 'The eye follows lines and curves to the end. Roads, handrails, glances guide the reading.' },
  { id: 'chiusura', title: 'Closure', body: 'The brain completes what is missing. Leaving part outside the frame draws the viewer in.' },
  { id: 'pregnanza', title: 'Prägnanz', body: 'Among several readings, the simplest wins. Fewer elements, stronger image.' }
];

// Tools: how to build the image. Each one rests on a Gestalt principle ("principle" field).
export const TOOLS = [
  {
    id: 'linee',
    num: '05',
    title: 'Leading lines',
    body: 'Roads, fences, rivers, tracks, the edge of a wall: lines the eye follows on its own. Start one at a corner or the bottom edge and let it end at the subject: the image takes the viewer where you want.',
    breakIt: 'A line that leaves the frame creates anticipation and mystery, when it is a choice.',
    principle: 'continuita'
  },
  {
    id: 'cornice',
    num: '06',
    title: 'Frame within a frame',
    body: 'A window, an arch, a door or some branches can enclose the subject. The frame isolates it, adds depth and tells the viewer where to rest the eye. It often works best when it is darker than the subject.',
    breakIt: 'If the frame is more interesting than the subject, or crushes it, leave it out.',
    principle: 'chiusura'
  },
  {
    id: 'negativo',
    num: '07',
    title: 'Negative space',
    body: 'The emptiness around the subject is not a lack: it is what gives it weight. Sky, a smooth wall, water or fog let the image breathe and speak of solitude, scale, silence.',
    breakIt: 'If the emptiness says nothing, the subject is just too small: get closer.',
    principle: 'figura'
  },
  {
    id: 'riempi',
    num: '08',
    title: 'Fill the frame',
    body: 'Get close until the subject dominates and the rest disappears. Remove background and distractions and show what cannot be seen from afar: a hand, a glance, a texture. The viewer has no doubt about what to look at.',
    breakIt: 'When context is part of the story, a whole setting says more than a detail.',
    principle: 'pregnanza'
  },
  {
    id: 'dispari',
    num: '09',
    title: 'Rule of odds',
    body: 'Three elements, five, seven: odd groups look more natural than even ones, because there is always a central element and the others accompany it. It is a heuristic, not a law: it helps loosen compositions that are too rigid.',
    breakIt: 'A pair is already a relationship: two people looking at each other do not need a third.',
    principle: 'vicinanza'
  }
];
