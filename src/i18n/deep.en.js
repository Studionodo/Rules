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
        "In Rules, turn on the camera grid and bring your subject onto one of the four intersections."
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
  },

  linee: {
    kind: "tool",
    title: "Leading lines",
    sections: [
      { t: "What it is", p: [
        "Leading lines are lines already in the scene, like a road, a railway track, a fence, the edge of a river or a wall, that carry the gaze toward a point. You don’t have to create them: you have to recognize them and decide where the eye starts and where it ends.",
        "They are the practical tool of continuity: the eye follows a line as long as it can, and whoever follows it arrives where you made it end."
      ] },
      { t: "Why it works", p: [
        "The brain prefers smooth paths to broken ones, and when it meets a line it travels along it almost without noticing. A line that converges in depth, like a road narrowing away, also adds an illusion of distance, because parallels seem to draw closer as they recede.",
        "The result is an image with a reading order: you enter at one point, cross the scene, arrive at the subject. It is the difference between a photo where the eye wanders and one where it is accompanied."
      ] },
      { t: "How to use them in the field", li: [
        "Before shooting, look at the ground, not just the subject: roads, stairs, long shadows and low walls are lines already waiting.",
        "Let the line enter from a corner or the bottom edge of the frame: that is where the viewer starts reading.",
        "Check where it ends: it must lead to the subject, not out of the image and not to a dead spot.",
        "Get low or step aside: a few steps change the angle and decide whether the line converges, curves or cuts across the scene.",
        "With a wide angle, lines in depth converge more; with a telephoto they flatten and draw closer."
      ] },
      { t: "Common mistakes", li: [
        "A line that leads out of the frame toward an empty corner: the eye leaves and doesn’t come back.",
        "Too many lines in different directions: they compete for the gaze and none leads anywhere.",
        "A line that cuts through the subject or sprouts from its head, like a pole or a horizon.",
        "Using a line just because it is there: if it doesn’t lead to something, it is only a stripe across the photo."
      ] },
      { t: "When to break them", p: [
        "A line that leaves the frame or breaks off creates anticipation and mystery: a road vanishing behind a bend raises a question instead of giving an answer. Horizontal lines, which calm instead of lead, are also a valid choice when you want stillness rather than movement."
      ] }
    ],
    exercise: "For an hour, photograph only roads, stairs, fences and edges that lead to something. For each shot, note where the eye enters and where it arrives. Then redo one scene, waiting for a person or an object to arrive at the end of the line: you’ll see the difference between a photo of lines and a photo with a subject."
  },

  cornice: {
    kind: "tool",
    title: "Frame within a frame",
    sections: [
      { t: "What it is", p: [
        "It means enclosing the subject within an element of the scene that acts as a frame: a window, an arch, a door, the gap between two buildings, the branches of a tree, even a person’s arms. The frame sits in the foreground or around, the subject sits inside or beyond.",
        "It is a way of using layers together with closure: the frame gives depth and the brain completes the shape it encloses."
      ] },
      { t: "Why it works", p: [
        "A frame tells the viewer where to look: everything inside becomes important, everything outside becomes context. It isolates the subject from its surroundings and reduces distractions, because the edge of the frame cuts out what isn’t needed.",
        "It also adds depth: the frame is a foreground, the subject a middle or far layer, and between the two the eye travels through space. The frame is often darker than the subject, and the contrast makes it stand out."
      ] },
      { t: "How to use it in the field", li: [
        "Look for openings: gaps, windows, arches, porticos, branches. Walk around until the subject appears in the right spot of the frame.",
        "Expose for the subject, not the frame: if the frame turns into a dark silhouette, that is just fine, even helpful.",
        "Place the subject on a power point inside the frame, not necessarily in the center: the frame is a new frame inside the frame.",
        "Check the edges of the frame: they should be clean and readable, not cut at random.",
        "Play with focus: a blurred frame in the foreground and a sharp subject is a classic solution."
      ] },
      { t: "Common mistakes", li: [
        "A frame more interesting than the subject, stealing the attention.",
        "A frame that crushes the subject or covers part of it for no reason.",
        "Very bright areas at the edge of the frame, like a blown out window, that pull the eye away from the subject.",
        "Using it as a trick: if the frame has no relation to the subject, it is just an added border."
      ] },
      { t: "When to break it", p: [
        "When the subject needs air and surroundings, or when the frame weighs the image down, leave it out. A frame that hides a lot can also be a narrative choice: seeing something through a crack, in secret, tells of waiting, distance, sometimes a prying gaze."
      ] }
    ],
    exercise: "Choose a place with many openings: a portico, a square with arches, a corridor with windows. Photograph the same person or object from three different positions, using a different frame each time. Then look at which frame adds meaning and which is only decoration."
  },

  negativo: {
    kind: "tool",
    title: "Negative space",
    sections: [
      { t: "What it is", p: [
        "Negative space is the empty or uninteresting area around the subject: sky, a smooth wall, calm water, fog, snow, a plain backdrop. It is not a mistake to fill, it is an element of the composition, like silence in a sentence.",
        "The subject is the positive space: the emptiness around it sets it off and gives it weight."
      ] },
      { t: "Why it works", p: [
        "It is figure and ground in an extreme form: the simpler the ground, the more the figure stands out. Emptiness rests the eye and forces it onto the subject, because it has nowhere else to go.",
        "Space also communicates. A small subject in an enormous space speaks of solitude, scale, silence; the same subject squeezed into the frame says something else. Where you put the emptiness matters too: in front of a walking figure it gives movement room to breathe, behind it gives weight to what it leaves."
      ] },
      { t: "How to use it in the field", li: [
        "Look for simple backgrounds: sky, walls, sand, water, snow. Then wait for the subject to enter the right spot.",
        "Make the subject small by stepping back or using a wide angle: distance creates the space.",
        "Decide which side the emptiness is on: in front of the subject, in the direction of the gaze or movement, to give room; behind, to give weight.",
        "Use exposure: a bright sky with a dark subject, or the reverse, makes the emptiness cleaner.",
        "Take away: if there is an unneeded element in a corner, change the framing until it disappears."
      ] },
      { t: "Common mistakes", li: [
        "Emptiness that says nothing: just a small subject, with no relation to the space.",
        "Dirty emptiness: wires, signs, stains in the sky or on the wall that disturb the silence.",
        "The subject placed in the center of the emptiness, with no balance: negative space almost always works better with an off-center subject.",
        "Confusing it with an underexposed or overexposed photo: the emptiness must have tone and character."
      ] },
      { t: "When to break it", p: [
        "Where the theme is crowding, a market, a crowd, a festival, emptiness would take truth away from the scene. And with a subject that only tells its story up close, a face, a hand, filling the frame works better."
      ] }
    ],
    exercise: "Photograph the same subject three times, starting close and stepping back little by little. Note at what distance the emptiness starts to become meaning and at what distance it becomes just lost space. Then repeat with the emptiness behind and with the emptiness in front, and compare how the sense of movement changes."
  },

  riempi: {
    kind: "tool",
    title: "Fill the frame",
    sections: [
      { t: "What it is", p: [
        "It means getting close to the subject, physically or with the zoom, until it takes up most of the image and the background disappears or becomes just an idea. Less scene, more subject: a face, a hand, a texture, an architectural detail.",
        "It is the opposite of negative space and works for the same reason: it removes what isn’t needed. A famous saying attributed to Robert Capa holds that if your photos aren’t good enough, you aren’t close enough."
      ] },
      { t: "Why it works", p: [
        "It is Prägnanz: fewer elements, faster reading. When the subject dominates, the viewer has no doubt about what to look at and the photo reads in an instant.",
        "Up close you see things you can’t see from afar: the grain of the skin, the rust, the expression in the eyes. And physical closeness also changes the relationship with the person you photograph: the most intense portraits almost always come from up close."
      ] },
      { t: "How to use it in the field", li: [
        "Before getting closer, decide which detail tells the whole: the eyes, the hands, a gesture, an object.",
        "Get closer with your feet: zoom magnifies, but your point of view only changes if you move.",
        "Check the edges: cropping part of a subject can strengthen it, but crop decisively and away from the joints.",
        "With a person, give it time: the first closeness is uncomfortable, after a few minutes they forget about you and the expression becomes real.",
        "Check focus and exposure, which are less forgiving up close: depth of field shrinks."
      ] },
      { t: "Common mistakes", li: [
        "Getting closer for no reason: a detail that tells nothing is just a crop.",
        "Cropping in the wrong place: wrists, ankles, the top of the head cut in half.",
        "Distorting features: a wide angle very close to a face deforms it.",
        "Forgetting respect: getting close to a person without their consent, where it matters, ruins the relationship and the photo."
      ] },
      { t: "When to break it", p: [
        "When context is part of the story, a whole setting says more than a detail: in reportage and landscape the scene is often the subject. And where emptiness has a meaning, filling the frame would take that meaning away."
      ] }
    ],
    exercise: "Choose a subject and photograph it five times, each time closer: whole, half, a quarter, a detail, a detail within the detail. Then choose the shot where the subject stops being a thing and becomes an idea: it is usually the second to last."
  },

  dispari: {
    kind: "tool",
    title: "Rule of odds",
    sections: [
      { t: "What it is", p: [
        "It suggests composing with an odd number of similar elements: three people, five trees, seven windows, instead of two, four or six. Odd groups look more natural and less rigid.",
        "It is a workshop heuristic, not a law, and it has no solid scientific basis. It works often enough to be useful, and should be used knowing why it works."
      ] },
      { t: "Why it works", p: [
        "In an odd group there is always a central element and the others sit around it: the eye has a point of support and the composition has a natural center without being symmetrical. With an even number, instead, the elements face each other and the whole splits in half, which can feel static.",
        "It is a consequence of proximity: three nearby elements read as a single group, and the group has a shape, often a triangle, which is one of the most stable and simple shapes for the brain."
      ] },
      { t: "How to use it in the field", li: [
        "Count the elements before shooting: if there are four, you can wait for one to leave or frame to exclude one.",
        "Arrange the three elements asymmetrically: an irregular triangle works better than a tidy row.",
        "Use differences in size, distance or height: a group of three is livelier if they aren’t all the same.",
        "With people, two are often already a relationship. The third can be the one who watches, the one who pulls away, the one who looks at the camera.",
        "Count only the elements the eye truly reads as subjects, not the minor details."
      ] },
      { t: "Common mistakes", li: [
        "Applying it mechanically: counting objects without asking whether they count.",
        "Placing the three elements in a perfect row: the image becomes rigid, like a catalog.",
        "Forcing a third element that doesn’t belong just to follow the rule.",
        "Forgetting that the edge of the frame counts: an element cut by the margin changes the number."
      ] },
      { t: "When to break it", p: [
        "A pair is already a story: two people looking at each other, two trees mirroring each other, don’t need a third element. Even numbers are also powerful when you look for symmetry, comparison, tension between two poles."
      ] }
    ],
    exercise: "In a place with many people or many identical things, benches, trees, windows, choose a group of three and photograph it in three ways: in a row, in a triangle, with one slightly apart. Then remove or add an element, going to four, and compare. Write one line about what changes in the sense of balance."
  }
};
