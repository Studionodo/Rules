// Deep-dive cards in English. One per rule, one per Gestalt principle.
// Editorial convention: no dashes as punctuation; colons, commas or separate sentences instead.
// Section shape: { t: title, p: [paragraphs] } or { t: title, li: [items] }.

export const DEEP = {
  terzi: {
    kind: "rule",
    title: "Rule of thirds",
    sections: [
      { t: "What it is", p: [
        "Imagine drawing two vertical and two horizontal lines across the viewfinder, evenly spaced: the frame splits into nine equal rectangles. The four lines are the lines of force, the four intersections are the power points. The rule suggests placing the main subject on one of those points, and linear elements, such as the horizon, a pole or the outline of a building, along one of the lines.",
        "The name first appears in 1797, in a treatise on landscape painting by John Thomas Smith. It was born for painters: photography inherited it."
      ] },
      { t: "Why it works", p: [
        "A subject in the center splits the image into two equal halves: the eye arrives, finds balance and stops. Moved onto a third, the subject creates a controlled imbalance: weight on one side, space on the other.",
        "That space is not empty. It becomes direction, expectation, context. The gaze is forced to move between subject and surroundings, and an image that keeps the eye moving holds the viewer longer."
      ] },
      { t: "How to use it in the field", li: [
        "Decide on the subject first. Without a clear subject, no grid will save you.",
        "Choose the intersection by direction: someone looking or walking to the right goes on the left, so they have space in front of them.",
        "Horizon on the lower line if the sky tells the story, on the upper line if the land does.",
        "In a portrait, the point to place on the intersection is the eye closest to the lens, not the center of the face.",
        "In Rules, the teal circle confirms when the subject lands on a power point."
      ] },
      { t: "Common mistakes", li: [
        "Applying it to everything: twenty photos with the subject always top right become a formula.",
        "Moving the subject and leaving purposeless space on the other side. Empty space has to say something.",
        "Forgetting the edges: an element cut in half at the border weighs more than the subject on the third.",
        "Believing it is enough. A correct composition of an uninteresting moment is still an uninteresting photo."
      ] },
      { t: "When to break it", p: [
        "Symmetry is the most obvious case: frontal architecture, reflections in water, corridors, portraits where the subject stares straight at you. There, the center conveys stability, solemnity, direct confrontation.",
        "You also break it when you want unease: a subject pressed against the edge creates tension, and that is a legitimate choice. Between a mistake and a choice there is only one difference: knowing why."
      ] }
    ],
    exercise: "Pick a still subject: a bench, a tree, a door. Take four photos, one for each power point, then a fifth with the subject in the center. At home, compare them and write one line on what changes in each. You will find the four points are not equivalent: it depends on where the light comes from and what surrounds the subject."
  },

  phi: {
    kind: "rule",
    title: "Phi grid",
    sections: [
      { t: "What it is", p: [
        "The phi grid divides the frame like the thirds, but with different proportions. The lines do not fall at 0.333 and 0.666 of each side, but at 0.382 and 0.618.",
        "These numbers come from the golden ratio, roughly 1 to 1.618, which geometry has studied for more than two thousand years. The result is a grid with a narrower central rectangle and four power points closer to the center."
      ] },
      { t: "Why it works", p: [
        "Compared with the thirds, the phi grid produces tighter compositions. The subject is not centered, so it keeps the energy of imbalance, but it is not pushed toward the edges either. It is a compromise between the stability of symmetry and the movement of the thirds.",
        "To be honest: there is no solid evidence that the golden ratio is perceived as more beautiful than other proportions. The phi grid is useful not because it is magic, but because it offers a more restrained alternative."
      ] },
      { t: "How to use it in the field", li: [
        "Use it when the subject is large in the frame, a face or a nearby figure: on the thirds it might crowd the edges.",
        "It works well with long focal lengths and blurred backgrounds, where the image lives mostly on the subject.",
        "In square and 4:5 formats the difference from the thirds is minimal: don’t waste time on it.",
        "Think by comparison: frame on the thirds, then tighten slightly toward the center and compare."
      ] },
      { t: "Common mistakes", li: [
        "Confusing it with the golden spiral: they come from the same number but are different tools.",
        "Using it for some supposed aesthetic superiority. It is a variant, not an upgraded version of the thirds.",
        "Measuring to the millimeter: in the viewfinder the difference between 0.333 and 0.382 is a few millimeters. What counts is the feeling, not the ruler."
      ] },
      { t: "When to break it", p: [
        "A small subject in a vast space, a lone figure on a beach, a boat on the open sea, asks for the opposite: wide margins and distance from the center. There the phi grid squeezes too much, and the thirds, or an even more off-center anchor, let the scene breathe."
      ] }
    ],
    exercise: "Photograph the same person from the waist up twice: first with the eyes on a power point of the thirds, then shifted slightly toward the center, as the phi grid asks. Look at both images the next day and note which feels more intimate and which more narrative."
  },

  spirale: {
    kind: "rule",
    title: "Golden spiral",
    sections: [
      { t: "What it is", p: [
        "Take a rectangle in golden proportion and cut a square out of it: what remains is a new, smaller golden rectangle. Repeat the cut several times and join the corners of the squares with an arc: you get a spiral that winds around a single point.",
        "In photography it is laid over the frame as a guide. The subject goes where the spiral closes, the eye, and the other elements of the scene should follow the curve toward it. The spiral can be oriented four ways, and flipped, depending on where the subject is."
      ] },
      { t: "Why it works", p: [
        "When it works, it is because the scene already contains a curved path: a bending road, a spiral staircase, the line of a back, a wave. The eye follows that path like a rail and reaches the subject effortlessly.",
        "The spiral does not create movement: it makes it visible and helps you place the subject at the end of the journey."
      ] },
      { t: "How to use it in the field", li: [
        "Look for the curve in the scene first. If there isn’t one, leave the spiral alone.",
        "Find where the path ends: that is where the subject belongs.",
        "Move yourself, not just the framing. Often a step to the side is enough for the curve to start from a corner of the frame.",
        "It works with architecture, landscapes with rivers or trails, full-length portraits with soft poses."
      ] },
      { t: "Common mistakes", li: [
        "Drawing the spiral over a photo already taken and declaring that it “fits”. With a little imagination anything fits: it is the most common trick in composition videos.",
        "Treating it as a law of nature. The golden ratio appears in some natural structures, but far less often than is claimed.",
        "Forcing the subject into the eye of the spiral even when the light says otherwise."
      ] },
      { t: "When to break it", p: [
        "In scenes built on straight lines and geometric rhythms, urban grids, facades, rows of windows, the spiral has nothing to hold on to. There you need symmetry, diagonals or repetition. Like any guide, the spiral is only useful if the scene resembles it."
      ] }
    ],
    exercise: "For an entire outing, photograph only scenes that contain a real curve: a staircase, a river, a bridge, a mountain road. For each, decide where the curve ends and put something or someone there. If after an hour you haven’t found any curves, that is a lesson too: the spiral isn’t imposed, it’s found."
  },

  piani: {
    kind: "rule",
    title: "Layers of depth",
    sections: [
      { t: "What it is", p: [
        "A photograph is flat: it has two dimensions. Depth is an illusion we build by arranging elements at different distances: the foreground, close to the lens; the middle ground, where the subject often sits; the background, which closes the scene.",
        "When these layers are recognizable, the eye moves through them as if walking into the image."
      ] },
      { t: "Why it works", p: [
        "The brain estimates distance from a few cues. Near objects look bigger, overlap distant ones, and are sharper and more contrasty; distant ones grow lighter and cooler because of haze.",
        "A photo that offers these cues across three layers delivers depth and scale: you understand how big the mountain is because you see the person in front of it. The foreground acts as a threshold: the viewer feels present, just behind the lens."
      ] },
      { t: "How to use them in the field", li: [
        "Before shooting, ask yourself: what is in front, what is in the middle, what is behind? If one of the three is missing, decide whether you need it.",
        "Get low: a few centimeters from the ground, a stone, a flower, a puddle become foreground.",
        "With a wide angle the foreground grows and depth is exaggerated; with a telephoto the layers compress onto each other. They are two different languages.",
        "Use light: a foreground in shadow and a subject in light separate the layers better than any aperture.",
        "Decide which layer to focus on: that is where you direct attention."
      ] },
      { t: "Common mistakes", li: [
        "A foreground added out of duty: a branch or a stone with no relation to the subject distracts instead of leading.",
        "Layers that overlap badly, like a head with a pole from the background sprouting out of it.",
        "Too many layers, all sharp and all important: the eye doesn’t know where to stop."
      ] },
      { t: "When to break it", p: [
        "The single plane, frontal and without depth, is a strong choice with a long history. Luigi Ghirri built a poetics on flat surfaces, walls, facades seen head on: there the image stops being a window and becomes a surface to be read.",
        "Architectural photography and portraits against a backdrop often choose a single plane too."
      ] }
    ],
    exercise: "Find a subject and photograph it three times: once with only subject and background, once with a foreground of your choosing, once dropping to knee height. Compare the sense of depth and ask yourself which foreground adds meaning and which merely fills space."
  },

  figura: {
    kind: "gestalt",
    title: "Figure and ground",
    sections: [
      { t: "What it is", p: [
        "It is the most basic principle of perception. Faced with any scene, the brain immediately separates the figure, the thing to look at, from the ground, everything else. The Danish psychologist Edgar Rubin studied it in 1915: he is the one behind the famous vase that turns into two profiles.",
        "The figure seems to stand in front and have a defined shape; the ground seems to continue behind it, without edges. If this separation doesn’t happen in a photograph, the viewer doesn’t know where to rest the eye."
      ] },
      { t: "Why it works", p: [
        "The figure stands out through difference. The brain looks for contrast: of brightness, light on dark or the reverse; of color, a red in a green field; of sharpness, a subject in focus against a blurred background; of texture, of size, of movement.",
        "The more differences add up, the more effortlessly the figure emerges."
      ] },
      { t: "How to use it in the field", li: [
        "Before looking at the subject, look at the background. That is where most photos are won or lost.",
        "Look for a plain or shaded background behind a lit subject: it is the most powerful separation there is.",
        "If the background is chaotic, change your point of view: a step to the side, or a low angle that sets the subject against the sky.",
        "Squint until the scene turns into patches. If the subject stays a distinct patch, the figure works.",
        "A wide aperture helps, but it doesn’t replace choosing the background."
      ] },
      { t: "Common mistakes", li: [
        "Subject and background of the same tone: a person in dark clothes against a dark wall disappears.",
        "A background more interesting than the subject: a colorful billboard, a strong light, readable text steal the attention.",
        "Relying on blur alone. A blurred background full of bright spots is still noisy."
      ] },
      { t: "When to break it", p: [
        "Ambiguity between figure and ground can be the very subject of the image. Much abstract and street photography plays on the swap: shadows that become figures, people who blend into a wall. It works when it is intentional, and when ambiguity is exactly what you want the viewer to feel."
      ] }
    ],
    exercise: "For a week, before every shot, look only at the background for three seconds. Then take two versions of the same subject: one with whatever background happens to be there, one after moving to find a clean one. The comparison will teach you more than any theory."
  },

  vicinanza: {
    kind: "gestalt",
    title: "Proximity",
    sections: [
      { t: "What it is", p: [
        "Elements close to each other are perceived as a group, even when they differ. It is one of the principles formulated by the Gestalt psychologists in Berlin in the early decades of the twentieth century.",
        "Six dots arranged in two groups of three are not read as six dots, but as two groups. In photography it applies to people, objects, windows, trees: the distance between things is information."
      ] },
      { t: "Why it works", p: [
        "The brain simplifies: instead of processing each element on its own, it groups what is close and treats it as a unit.",
        "With people, the mechanism becomes a story. Two figures close together seem related; a figure far from the others seems excluded, alone, different. The viewer builds a story from the spaces, even before reading faces and expressions."
      ] },
      { t: "How to use it in the field", li: [
        "In street photography, watch the distances: the right moment is often when two figures draw closer, or when one breaks away from the group.",
        "An empty space between two groups splits the image into two stories. Use it when you want a comparison.",
        "Proximity in a photo depends on point of view: two people meters apart can overlap with a telephoto. By moving, you can create or break a group.",
        "In a group portrait, the distance between bodies says who is bound to whom. Don’t line people up out of habit."
      ] },
      { t: "Common mistakes", li: [
        "Elements scattered at equal distances: the eye finds no groups or hierarchy and the image reads like a list.",
        "Unintended merges: a subject too close to an unrelated object seems to be part of it.",
        "Ignoring what lies outside the frame: cutting off a person who belongs to the group creates a noticeable absence."
      ] },
      { t: "When to break it", p: [
        "A regular distribution can be the subject itself: people on a beach seen from above, chairs in an empty square. Rhythm takes the place of the group. Even there, though, a single element out of place is enough to make it the protagonist."
      ] }
    ],
    exercise: "Sit in a busy place, a square or a station, and shoot only when the distances between people tell something: a couple, someone left out, two groups facing each other. At the end, choose three images and describe the relationship they suggest without looking at the faces."
  },

  somiglianza: {
    kind: "gestalt",
    title: "Similarity",
    sections: [
      { t: "What it is", p: [
        "Elements similar in shape, color, size, texture or orientation are perceived as part of the same set, even when they are far apart in the frame.",
        "Three red coats in three different parts of the scene are connected by the eye, as if an invisible line ran between them."
      ] },
      { t: "Why it works", p: [
        "The brain looks for regularity to save energy: what repeats is read as a pattern. This produces two useful effects.",
        "The first is rhythm: similar shapes repeating, arches, windows, umbrellas, create a cadence that is pleasant to travel through. The second is contrast: within a pattern, the odd element jumps out with enormous force. That is why a single red umbrella in a crowd of black ones immediately becomes the subject."
      ] },
      { t: "How to use it in the field", li: [
        "Look for repetition: columns, chairs, windows, people making the same gesture. They are the carpet you build on.",
        "Then look for, or wait for, the exception: a figure that breaks the rhythm, a color that doesn’t belong.",
        "Use color as glue: if a red dominates the scene, a second red far away creates a link and makes the eye travel.",
        "In black and white, similarity works through tones and shapes: two light patches call to each other."
      ] },
      { t: "Common mistakes", li: [
        "Unintended repetitions: a second element similar to the subject, at the edge, splits the gaze in two.",
        "Rhythm without exception: a perfectly repeated facade is decoration, not yet a photograph.",
        "Random colors everywhere: without similarities the image has no structure and looks noisy."
      ] },
      { t: "When to break it", p: [
        "When chaos is the theme, a market, a festival, a crowd, the absence of patterns conveys the energy of the place. Even then, the best photo is often the one where a small repetition emerges from the chaos, a gesture or a color that guides the eye."
      ] }
    ],
    exercise: "Choose one color for an entire outing. Photograph only scenes where that color appears at least twice, in different parts of the frame. Then make a second series where it appears only once, as an exception within a pattern. Two ways of using the same principle."
  },

  continuita: {
    kind: "gestalt",
    title: "Continuity",
    sections: [
      { t: "What it is", p: [
        "The eye follows lines and curves in the direction they travel, and perceives as a single shape whatever lines up, even when it is interrupted.",
        "A road, a handrail, the edge of a sidewalk, the direction of a glance or an outstretched arm: they are all rails the gaze slides along."
      ] },
      { t: "Why it works", p: [
        "The brain prefers smooth, predictable paths to abrupt turns: it follows a line as long as it can, and imagines it continuing even where it is hidden.",
        "In photography, this means lines decide the reading path. The viewer enters where the line begins and leaves where it ends: if the subject is at the end, the image leads there without needing anything else. The same goes for implied lines: a person’s gaze creates a direction that the viewer’s eye follows."
      ] },
      { t: "How to use it in the field", li: [
        "Let lines enter from a corner or the bottom edge: that is where reading begins.",
        "Check where they lead: toward the subject, not out of the frame.",
        "Diagonals give movement, horizontals calm, verticals strength and height. Choose by what you want to convey.",
        "Leave space in the direction of the gaze or the movement: the implied line needs to continue inside the image.",
        "With a wide angle, receding lines converge and emphasize depth."
      ] },
      { t: "Common mistakes", li: [
        "Lines that lead out of the frame toward an empty corner: the eye leaves and doesn’t come back.",
        "Lines that cut through the subject, like a horizon running through someone’s head.",
        "Too many lines in different directions: they compete for the gaze and none leads anywhere."
      ] },
      { t: "When to break it", p: [
        "A line that breaks off or leaves the frame can create unease and mystery: a road disappearing behind a bend keeps the viewer waiting. It is a precise narrative choice, useful when you want the image to ask a question instead of giving an answer."
      ] }
    ],
    exercise: "For an hour, photograph only lines that lead to something: a door, a person, a lit window. For each shot, note where the eye enters and where it arrives. Then repeat one scene, waiting for someone to stand at the end of the line: you’ll see the difference between a photo of lines and a photo with a subject."
  },

  chiusura: {
    kind: "gestalt",
    title: "Closure",
    sections: [
      { t: "What it is", p: [
        "Faced with an incomplete shape, the brain completes it on its own. A broken circle is seen as a circle; a face half in shadow is read as a whole face; a figure cut off by the edge continues, in the viewer’s mind, beyond the limit of the photo.",
        "The viewer adds what is missing without noticing."
      ] },
      { t: "Why it works", p: [
        "The brain can’t stand open shapes: it tends to close them in order to recognize them quickly. In photography, this turns the viewer into a participant.",
        "What you don’t show, they imagine, and what is imagined engages more than what is seen. That is why a detail often tells more than a whole scene, and a shadow more than a lit body."
      ] },
      { t: "How to use it in the field", li: [
        "Take away instead of adding: ask yourself which part of the subject is enough to suggest the whole.",
        "Use shadows: leaving half a face in the dark doesn’t hide, it suggests.",
        "If you crop, crop decisively: large portions yes, joints no. A decisive crop looks like a choice, a timid one looks like a mistake.",
        "Use natural frames: a door, a window, an arch enclose the subject and complete the shape.",
        "Off-frame space exists: a hand entering from the edge, the shadow of someone we can’t see, make us imagine a presence."
      ] },
      { t: "Common mistakes", li: [
        "Accidental crops: amputated feet, the top of a head sliced off. The brain doesn’t complete, it registers a mistake.",
        "Taking away too much: if the necessary clues are missing, the shape doesn’t close and the image becomes unreadable.",
        "Confusing suggestion with darkness. A dark image with no point of recognition suggests nothing."
      ] },
      { t: "When to break it", p: [
        "When clarity is the goal, documentation, product photography, an official portrait, the shape must be whole and readable. Even in reportage, sometimes, showing everything is an act of honesty: the viewer should be able to see without having to imagine."
      ] }
    ],
    exercise: "Photograph the same person, or object, showing less each time: whole, half, just a hand, just a shadow. Stop when it is no longer recognizable. The second to last shot, the one where you can still tell, is often the most interesting."
  },

  pregnanza: {
    kind: "gestalt",
    title: "Prägnanz",
    sections: [
      { t: "What it is", p: [
        "It is the principle that sums up all the others. Faced with an image, the brain always chooses the simplest, most regular and most stable interpretation possible. In German it is called Prägnanz, good form.",
        "A circle and a square overlapping are read as two simple figures, not as one complicated shape. In photography it means the strongest images are almost always the ones understood at first glance."
      ] },
      { t: "Why it works", p: [
        "The eye reads a photograph in a fraction of a second, long before analyzing it. If in that first instant it finds a clear structure, a subject, a shape, a contrast, the image sticks. If it finds confusion, the viewer moves on.",
        "Simplicity is not poverty: it is the condition for the image to land, and only then to open up to deeper readings."
      ] },
      { t: "How to use it in the field", li: [
        "Before shooting, try to describe the photo in one sentence. If you can’t, the image is still confused.",
        "Eliminate: every element in the frame must have a reason to be there. If it doesn’t, get closer, change focal length or point of view.",
        "Look for simple shapes: triangles, circles, clean diagonals, clearly separated masses of light and dark.",
        "Reduce the colors: two or three dominant hues are worth more than a rainbow.",
        "Squint: if the scene reduced to patches has a recognizable structure, the image holds."
      ] },
      { t: "Common mistakes", li: [
        "Confusing simplicity with emptiness: a minimalist photo without an idea is just an empty photo.",
        "Trying to include everything, landscape, person, sky, detail: the result is an inventory.",
        "Simplifying too late. In post-production you can crop, but you can’t add what you didn’t see in the field."
      ] },
      { t: "When to break it", p: [
        "Some images live on complexity: crowded scenes where the eye discovers a new detail with every reading. They work when there is still an order within the chaos, a starting point, a hierarchy. Successful complexity is simplicity that is harder to find."
      ] }
    ],
    exercise: "For an entire outing, take only images with at most three recognizable elements. Count them before pressing the shutter. When you get back, choose the simplest photo and the richest one, and ask yourself which you will remember a month from now."
  }
};
