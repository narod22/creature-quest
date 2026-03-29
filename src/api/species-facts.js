/**
 * Curated fun facts database for popular species.
 *
 * Each species has an array of fact objects. Each fact has:
 *   - text: The fun fact as a kid-friendly sentence
 *   - q: A quiz question derived from the fact
 *   - a: The correct answer
 *   - wrong: Array of plausible wrong answers (2-3)
 *   - category: What kind of fact (speed, size, diet, ability, habitat, body, lifespan, behavior)
 *
 * This replaces the old approach of asking "what type of animal is this?"
 * over and over. Now quizzes ask genuinely interesting questions.
 */

export const SPECIES_FACTS = {
  // ── Mammals ──────────────────────────────────────────────────────
  'African elephant': [
    { text: 'African elephants are the largest land animals on Earth.', q: 'What is the largest land animal on Earth?', a: 'African elephant', wrong: ['Blue whale', 'Giraffe', 'Hippopotamus'], category: 'size' },
    { text: 'An elephant can drink up to 50 gallons of water a day.', q: 'How much water can an elephant drink per day?', a: 'Up to 50 gallons', wrong: ['Up to 25 gallons', 'Up to 75 gallons', 'Up to 35 gallons'], category: 'diet' },
    { text: 'Elephants can recognize themselves in a mirror, which very few animals can do.', q: 'What special thing can elephants do with a mirror?', a: 'Recognize themselves', wrong: ['Get scared', 'Ignore it completely', 'Try to fight it'], category: 'ability' },
  ],
  'Blue whale': [
    { text: 'The blue whale is the largest animal that has ever lived on Earth, even bigger than any dinosaur.', q: 'Is the blue whale bigger than any dinosaur that ever lived?', a: 'Yes, it is the biggest animal ever', wrong: ['No, T. rex was bigger', 'No, Brachiosaurus was bigger', 'They were about the same size'], category: 'size' },
    { text: 'A blue whale\'s heart is about the size of a small car.', q: 'How big is a blue whale\'s heart?', a: 'About the size of a small car', wrong: ['About the size of a basketball', 'About the size of a watermelon', 'About the size of a football'], category: 'body' },
    { text: 'Blue whales can be heard from over 1,000 miles away.', q: 'How far away can a blue whale be heard?', a: 'Over 1,000 miles', wrong: ['About 500 miles', 'About 100 miles', 'About 2,000 miles'], category: 'ability' },
  ],
  'Red fox': [
    { text: 'Red foxes can hear a mouse digging underground from over 100 feet away.', q: 'What amazing thing can a red fox hear?', a: 'A mouse digging underground', wrong: ['A bird flying overhead', 'A fish swimming', 'Thunder from 50 miles away'], category: 'ability' },
    { text: 'Red foxes are found on every continent except Antarctica.', q: 'Which continent do red foxes NOT live on?', a: 'Antarctica', wrong: ['Africa', 'Asia', 'South America'], category: 'habitat' },
    { text: 'A fox\'s tail is called a "brush" and helps them balance.', q: 'What is a fox\'s tail called?', a: 'A brush', wrong: ['A flag', 'A rudder', 'A whip'], category: 'body' },
  ],
  'Gray wolf': [
    { text: 'Wolves can run up to 40 miles per hour when chasing prey.', q: 'How fast can a wolf run?', a: 'Up to 40 mph', wrong: ['Up to 25 mph', 'Up to 55 mph', 'Up to 30 mph'], category: 'speed' },
    { text: 'A wolf\'s howl can be heard up to 10 miles away.', q: 'How far away can a wolf\'s howl be heard?', a: 'Up to 10 miles', wrong: ['Up to 5 miles', 'Up to 3 miles', 'Up to 20 miles'], category: 'ability' },
    { text: 'Wolves live and hunt in family groups called packs.', q: 'What is a group of wolves called?', a: 'A pack', wrong: ['A herd', 'A flock', 'A school'], category: 'behavior' },
  ],
  'Lion': [
    { text: 'A lion\'s roar can be heard from 5 miles away.', q: 'How far away can you hear a lion roar?', a: '5 miles', wrong: ['2 miles', '8 miles', '1 mile'], category: 'ability' },
    { text: 'Lions are the only cats that live in groups, called prides.', q: 'What is a group of lions called?', a: 'A pride', wrong: ['A pack', 'A herd', 'A colony'], category: 'behavior' },
    { text: 'Lions sleep up to 20 hours a day.', q: 'How many hours a day do lions sleep?', a: 'Up to 20 hours', wrong: ['About 8 hours', 'About 4 hours', 'About 12 hours'], category: 'behavior' },
  ],
  'Cheetah': [
    { text: 'The cheetah is the fastest land animal, reaching speeds of 70 miles per hour.', q: 'How fast can a cheetah run?', a: 'Up to 70 mph', wrong: ['Up to 50 mph', 'Up to 60 mph', 'Up to 80 mph'], category: 'speed' },
    { text: 'A cheetah can go from 0 to 60 mph in just 3 seconds, faster than most sports cars.', q: 'How fast can a cheetah accelerate to 60 mph?', a: '3 seconds', wrong: ['5 seconds', '7 seconds', '1 second'], category: 'speed' },
    { text: 'Cheetahs are the only big cats that cannot roar. They chirp and purr instead.', q: 'What sound does a cheetah make instead of roaring?', a: 'Chirps and purrs', wrong: ['Barks', 'Hisses', 'Screams'], category: 'ability' },
  ],
  'Giant panda': [
    { text: 'Giant pandas eat bamboo for about 12 hours every single day.', q: 'How many hours a day do pandas spend eating bamboo?', a: 'About 12 hours', wrong: ['About 8 hours', 'About 16 hours', 'About 6 hours'], category: 'diet' },
    { text: 'A newborn panda is about the size of a stick of butter.', q: 'How big is a newborn panda?', a: 'About the size of a stick of butter', wrong: ['About the size of a basketball', 'About the size of a cat', 'About the size of a watermelon'], category: 'size' },
    { text: 'Pandas have a special wrist bone that works like a thumb to grip bamboo.', q: 'What special body part helps pandas grip bamboo?', a: 'A special wrist bone like a thumb', wrong: ['Extra-long claws', 'Sticky paws', 'A suction cup tongue'], category: 'body' },
  ],
  'Giraffe': [
    { text: 'Giraffes are the tallest animals on Earth, reaching up to 18 feet tall.', q: 'How tall can a giraffe get?', a: 'Up to 18 feet', wrong: ['Up to 8 feet', 'Up to 30 feet', 'Up to 12 feet'], category: 'size' },
    { text: 'A giraffe\'s tongue is about 18 inches long and is dark purple to protect it from sunburn.', q: 'What color is a giraffe\'s tongue?', a: 'Dark purple', wrong: ['Pink', 'Red', 'White'], category: 'body' },
    { text: 'Giraffes only need about 30 minutes of sleep per day.', q: 'How much sleep does a giraffe need per day?', a: 'About 30 minutes', wrong: ['About 8 hours', 'About 4 hours', 'About 12 hours'], category: 'behavior' },
  ],
  'Dolphin': [
    { text: 'Dolphins sleep with one eye open and half their brain awake.', q: 'How do dolphins sleep?', a: 'With one eye open and half their brain awake', wrong: ['Floating on their backs', 'At the bottom of the ocean', 'They never sleep'], category: 'behavior' },
    { text: 'Dolphins use echolocation, making clicking sounds to find food and navigate.', q: 'What special ability do dolphins use to find food?', a: 'Echolocation (clicking sounds)', wrong: ['X-ray vision', 'Smell underwater', 'Magnetic sense'], category: 'ability' },
    { text: 'Dolphins can swim up to 20 miles per hour.', q: 'How fast can a dolphin swim?', a: 'Up to 20 mph', wrong: ['Up to 5 mph', 'Up to 50 mph', 'Up to 100 mph'], category: 'speed' },
  ],
  'Polar bear': [
    { text: 'A polar bear\'s fur looks white, but each hair is actually hollow and transparent.', q: 'What is special about polar bear fur?', a: 'Each hair is actually hollow and transparent', wrong: ['It is waterproof metal', 'It changes color in summer', 'It glows in the dark'], category: 'body' },
    { text: 'Polar bears can smell a seal on the ice from 20 miles away.', q: 'How far away can a polar bear smell a seal?', a: '20 miles', wrong: ['10 miles', '5 miles', '30 miles'], category: 'ability' },
    { text: 'Under their white fur, polar bears have black skin to absorb heat from the sun.', q: 'What color is a polar bear\'s skin under its fur?', a: 'Black', wrong: ['White', 'Pink', 'Brown'], category: 'body' },
  ],
  'Koala': [
    { text: 'Koalas sleep up to 22 hours a day because eucalyptus leaves give them very little energy.', q: 'How many hours a day do koalas sleep?', a: 'Up to 22 hours', wrong: ['About 8 hours', 'About 4 hours', 'About 12 hours'], category: 'behavior' },
    { text: 'Koalas have fingerprints that look almost identical to human fingerprints.', q: 'What do koala fingerprints look like?', a: 'Almost identical to human fingerprints', wrong: ['Completely smooth', 'Like tiny circles', 'Like snowflakes'], category: 'body' },
  ],
  'Platypus': [
    { text: 'The platypus is one of only two mammals that lay eggs.', q: 'What makes the platypus unusual for a mammal?', a: 'It lays eggs', wrong: ['It can fly', 'It has scales', 'It lives in salt water'], category: 'ability' },
    { text: 'Male platypuses have venomous spurs on their back legs.', q: 'What weapon does a male platypus have?', a: 'Venomous spurs on their back legs', wrong: ['Sharp teeth', 'Electric shocks', 'Poisonous claws'], category: 'body' },
    { text: 'The platypus can detect the electric fields of its prey using its bill.', q: 'What can a platypus detect with its bill?', a: 'Electric fields from prey', wrong: ['Colors in the dark', 'Sounds from miles away', 'Temperature changes'], category: 'ability' },
  ],
  'Sloth': [
    { text: 'Sloths are so slow that algae grows on their fur, making them look green.', q: 'Why do sloths sometimes look green?', a: 'Algae grows on their fur', wrong: ['They eat green leaves', 'They are born that color', 'They roll in moss'], category: 'body' },
    { text: 'Sloths only go to the bathroom about once a week.', q: 'How often does a sloth go to the bathroom?', a: 'About once a week', wrong: ['Every day', 'Every hour', 'Once a month'], category: 'behavior' },
  ],
  'Narwhal': [
    { text: 'A narwhal\'s "horn" is actually a giant tooth that can grow up to 10 feet long.', q: 'What is a narwhal\'s horn actually made of?', a: 'It is a giant tooth', wrong: ['It is made of bone', 'It is made of hair', 'It is made of cartilage'], category: 'body' },
    { text: 'Narwhals can dive over 5,000 feet deep in the Arctic Ocean.', q: 'How deep can a narwhal dive?', a: 'Over 5,000 feet', wrong: ['About 3,000 feet', 'About 8,000 feet', 'About 2,000 feet'], category: 'ability' },
  ],
  'Capybara': [
    { text: 'The capybara is the largest rodent in the world, weighing up to 140 pounds.', q: 'What is the largest rodent in the world?', a: 'The capybara', wrong: ['The beaver', 'The porcupine', 'The guinea pig'], category: 'size' },
    { text: 'Capybaras are excellent swimmers and can hold their breath underwater for up to 5 minutes.', q: 'How long can a capybara hold its breath underwater?', a: 'Up to 5 minutes', wrong: ['Up to 2 minutes', 'Up to 8 minutes', 'Up to 1 minute'], category: 'ability' },
  ],

  // ── Birds ────────────────────────────────────────────────────────
  'Bald eagle': [
    { text: 'Bald eagles can see fish swimming from over a mile away.', q: 'How far away can a bald eagle spot a fish?', a: 'Over a mile', wrong: ['About half a mile', 'About 2 miles', 'About a quarter mile'], category: 'ability' },
    { text: 'A bald eagle\'s nest can weigh as much as a car, over 2 tons.', q: 'How heavy can a bald eagle\'s nest get?', a: 'Over 2 tons (as much as a car)', wrong: ['About 500 pounds', 'About 200 pounds', 'About 1 ton'], category: 'size' },
  ],
  'Peregrine falcon': [
    { text: 'The peregrine falcon is the fastest animal on Earth, diving at over 240 mph.', q: 'What is the fastest animal on Earth?', a: 'Peregrine falcon', wrong: ['Cheetah', 'Sailfish', 'Golden eagle'], category: 'speed' },
    { text: 'Peregrine falcons live on every continent except Antarctica.', q: 'Which continent do peregrine falcons NOT live on?', a: 'Antarctica', wrong: ['Australia', 'Africa', 'South America'], category: 'habitat' },
  ],
  'Emperor penguin': [
    { text: 'Emperor penguins can hold their breath for over 20 minutes while diving.', q: 'How long can an emperor penguin hold its breath?', a: 'Over 20 minutes', wrong: ['About 10 minutes', 'About 30 minutes', 'About 5 minutes'], category: 'ability' },
    { text: 'Male emperor penguins keep the egg warm on their feet for 2 months without eating.', q: 'How do male emperor penguins keep their egg warm?', a: 'On their feet for 2 months', wrong: ['In a nest made of ice', 'Under their wings', 'By sitting in warm water'], category: 'behavior' },
  ],
  'Hummingbird': [
    { text: 'Hummingbirds can flap their wings up to 80 times per second.', q: 'How fast can a hummingbird flap its wings?', a: 'Up to 80 times per second', wrong: ['About 50 times per second', 'About 120 times per second', 'About 40 times per second'], category: 'speed' },
    { text: 'Hummingbirds are the only birds that can fly backwards.', q: 'What can hummingbirds do that no other bird can?', a: 'Fly backwards', wrong: ['Fly upside down', 'Fly in circles', 'Fly without flapping'], category: 'ability' },
    { text: 'A hummingbird\'s heart beats over 1,000 times per minute.', q: 'How fast does a hummingbird\'s heart beat?', a: 'Over 1,000 times per minute', wrong: ['About 600 times per minute', 'About 1,500 times per minute', 'About 800 times per minute'], category: 'body' },
  ],

  // ── Reptiles ─────────────────────────────────────────────────────
  'Komodo dragon': [
    { text: 'The Komodo dragon is the largest living lizard, growing up to 10 feet long.', q: 'What is the largest living lizard?', a: 'Komodo dragon', wrong: ['Iguana', 'Monitor lizard', 'Gila monster'], category: 'size' },
    { text: 'Komodo dragons have venom in their bite that weakens their prey.', q: 'How does a Komodo dragon weaken its prey?', a: 'Venom in its bite', wrong: ['Squeezing like a snake', 'Electric shocks', 'Loud roaring'], category: 'ability' },
  ],
  'Chameleon': [
    { text: 'Chameleons can move each eye independently, looking in two directions at once.', q: 'What can chameleon eyes do that is special?', a: 'Look in two different directions at once', wrong: ['See in the dark', 'See through walls', 'See colors humans cannot'], category: 'ability' },
    { text: 'A chameleon\'s tongue can be twice as long as its body and catches insects in a fraction of a second.', q: 'How long can a chameleon\'s tongue be?', a: 'Twice as long as its body', wrong: ['The same length as its body', 'Half its body length', 'Three inches'], category: 'body' },
  ],

  // ── Amphibians ───────────────────────────────────────────────────
  'Axolotl': [
    { text: 'Axolotls can regrow entire limbs, parts of their brain, and even their heart.', q: 'What amazing thing can an axolotl regrow?', a: 'Entire limbs, brain parts, and heart', wrong: ['Just their tail', 'Only their skin', 'Nothing, they cannot regrow'], category: 'ability' },
    { text: 'Axolotls stay in their baby form their entire lives, a trait called neoteny.', q: 'What is unusual about how axolotls grow up?', a: 'They stay in their baby form forever', wrong: ['They change color every year', 'They grow legs at age 10', 'They shrink as they age'], category: 'behavior' },
  ],
  'Poison dart frog': [
    { text: 'One golden poison dart frog has enough poison to kill 10 grown men.', q: 'How poisonous is a golden poison dart frog?', a: 'Enough poison to kill 10 men', wrong: ['Not poisonous at all', 'Only slightly irritating', 'Enough to give you a rash'], category: 'ability' },
    { text: 'Poison dart frogs get their poison from the insects they eat. Frogs raised in captivity are not poisonous.', q: 'Where do poison dart frogs get their poison?', a: 'From the insects they eat', wrong: ['They are born with it', 'From the water they live in', 'From plants they touch'], category: 'diet' },
  ],

  // ── Fish ──────────────────────────────────────────────────────────
  'Great white shark': [
    { text: 'Great white sharks can detect a single drop of blood in 25 gallons of water.', q: 'How sensitive is a great white shark\'s sense of smell?', a: 'Can detect one drop of blood in 25 gallons', wrong: ['Can only smell blood up close', 'About the same as humans', 'Cannot smell at all'], category: 'ability' },
    { text: 'Great white sharks have about 300 teeth arranged in rows.', q: 'How many teeth does a great white shark have?', a: 'About 300', wrong: ['About 200', 'About 500', 'About 150'], category: 'body' },
  ],
  'Seahorse': [
    { text: 'Male seahorses are the ones who get pregnant and give birth, not the females.', q: 'Which seahorse parent gives birth to babies?', a: 'The father', wrong: ['The mother', 'Both parents', 'Neither, eggs hatch on their own'], category: 'behavior' },
    { text: 'Seahorses have no stomach, so food passes through them very quickly and they must eat almost constantly.', q: 'What is unusual about a seahorse\'s body?', a: 'They have no stomach', wrong: ['They have no heart', 'They have no eyes', 'They have no brain'], category: 'body' },
  ],
  'Clownfish': [
    { text: 'Clownfish are immune to the stinging tentacles of sea anemones, which protects them from predators.', q: 'What protects a clownfish from predators?', a: 'Living in stinging sea anemones', wrong: ['Swimming very fast', 'Being poisonous', 'Hiding in sand'], category: 'ability' },
    { text: 'All clownfish are born male. Some change to female later in life.', q: 'What is unusual about how clownfish are born?', a: 'They are all born male', wrong: ['They are all born female', 'They have no gender', 'They are born in pairs'], category: 'behavior' },
  ],

  // ── Ocean Creatures ──────────────────────────────────────────────
  'Giant squid': [
    { text: 'Giant squid have the largest eyes of any animal, about the size of a dinner plate.', q: 'How big are giant squid eyes?', a: 'About the size of a dinner plate', wrong: ['About the size of a marble', 'About the size of a golf ball', 'About the size of a basketball'], category: 'body' },
    { text: 'Giant squid live deep in the ocean and were not photographed alive until 2004.', q: 'When was a giant squid first photographed alive?', a: '2004', wrong: ['1950', '1890', '2020'], category: 'behavior' },
    { text: 'Giant squid have three hearts and blue blood.', q: 'How many hearts does a giant squid have?', a: 'Three', wrong: ['One', 'Two', 'Five'], category: 'body' },
  ],
  'Octopus': [
    { text: 'Octopuses have three hearts and blue blood.', q: 'How many hearts does an octopus have?', a: 'Three', wrong: ['One', 'Two', 'Eight'], category: 'body' },
    { text: 'An octopus can change its color and texture in less than one second.', q: 'How fast can an octopus change its color?', a: 'Less than one second', wrong: ['About one minute', 'About one hour', 'About 10 seconds'], category: 'ability' },
    { text: 'Octopuses have been observed using coconut shells as portable shelters.', q: 'What do octopuses sometimes use as a shelter?', a: 'Coconut shells', wrong: ['Seashells only', 'Rocks', 'Coral pieces'], category: 'behavior' },
  ],
  'Jellyfish': [
    { text: 'Jellyfish have no brain, no heart, and no bones.', q: 'What organs does a jellyfish NOT have?', a: 'Brain, heart, and bones (none of them!)', wrong: ['Just no bones', 'Just no brain', 'They have all of those'], category: 'body' },
    { text: 'Some jellyfish can glow in the dark using bioluminescence.', q: 'What can some jellyfish do in the dark?', a: 'Glow (bioluminescence)', wrong: ['Turn invisible', 'Make loud sounds', 'Freeze solid'], category: 'ability' },
    { text: 'The immortal jellyfish can reverse its aging and become young again.', q: 'What can the "immortal jellyfish" do?', a: 'Reverse its aging and become young again', wrong: ['Live for exactly 1,000 years', 'Grow to the size of a whale', 'Survive in outer space'], category: 'ability' },
  ],
  'Mantis shrimp': [
    { text: 'The mantis shrimp can punch with the force of a bullet, fast enough to boil the water around its fist.', q: 'How powerful is a mantis shrimp\'s punch?', a: 'As strong as a bullet', wrong: ['About as strong as a human finger tap', 'Barely noticeable', 'Strong enough to crack a peanut'], category: 'ability' },
    { text: 'Mantis shrimp can see 16 types of color, while humans can only see 3.', q: 'How many types of color can a mantis shrimp see?', a: '16 types', wrong: ['3 types (same as humans)', 'No colors at all', '100 types'], category: 'ability' },
  ],

  // ── Dinosaurs ────────────────────────────────────────────────────
  'Tyrannosaurus': [
    { text: 'T. rex had the most powerful bite of any land animal ever, strong enough to crush bone.', q: 'What was special about a T. rex bite?', a: 'The most powerful bite of any land animal ever', wrong: ['It was actually quite weak', 'About the same as a lion', 'It had no teeth'], category: 'ability' },
    { text: 'A T. rex tooth could be up to 12 inches long, about the size of a banana.', q: 'How big was a T. rex tooth?', a: 'Up to 12 inches (size of a banana)', wrong: ['About 6 inches', 'About 18 inches', 'About 4 inches'], category: 'body' },
    { text: 'T. rex arms were tiny but could still lift about 400 pounds each.', q: 'How much could a T. rex arm lift?', a: 'About 400 pounds', wrong: ['About 200 pounds', 'About 100 pounds', 'About 600 pounds'], category: 'body' },
  ],
  'Triceratops': [
    { text: 'Triceratops had a skull up to 7 feet long, one of the largest of any land animal.', q: 'How long was a Triceratops skull?', a: 'Up to 7 feet', wrong: ['About 4 feet', 'About 10 feet', 'About 5 feet'], category: 'size' },
    { text: 'Triceratops had between 400 and 800 teeth packed into its jaws.', q: 'How many teeth did a Triceratops have?', a: '400 to 800', wrong: ['About 100 to 200', 'About 50 to 100', 'Over 1,000'], category: 'body' },
  ],
  'Velociraptor': [
    { text: 'Real velociraptors were only about the size of a turkey, much smaller than in the movies.', q: 'How big was a real velociraptor?', a: 'About the size of a turkey', wrong: ['About the size of a horse', 'Taller than a human', 'About the size of a bus'], category: 'size' },
    { text: 'Velociraptors had feathers, making them look more like birds than the scaly creatures in movies.', q: 'Did velociraptors have feathers?', a: 'Yes, they were covered in feathers', wrong: ['No, they had smooth scales', 'No, they had tough armor', 'Only on their heads'], category: 'body' },
  ],

  // ── Insects ───────────────────────────────────────────────────────
  'Monarch butterfly': [
    { text: 'Monarch butterflies migrate up to 3,000 miles from Canada to Mexico every year.', q: 'How far do monarch butterflies migrate?', a: 'Up to 3,000 miles', wrong: ['About 1,000 miles', 'About 5,000 miles', 'About 500 miles'], category: 'behavior' },
    { text: 'Monarchs are poisonous to birds because they eat milkweed as caterpillars.', q: 'Why are monarch butterflies poisonous?', a: 'They eat milkweed as caterpillars', wrong: ['They are born with venom', 'They absorb poison from the air', 'They are not poisonous'], category: 'ability' },
  ],
  'Firefly': [
    { text: 'Firefly light is the most efficient light in the world, producing almost no heat.', q: 'What is special about firefly light?', a: 'It produces almost no heat', wrong: ['It is the brightest light in nature', 'It can burn things', 'It only works in water'], category: 'ability' },
  ],
  'Praying mantis': [
    { text: 'A praying mantis can turn its head 180 degrees to look behind it.', q: 'How far can a praying mantis turn its head?', a: '180 degrees (look behind itself)', wrong: ['Only a tiny bit', 'Full 360 degrees', 'It cannot turn its head at all'], category: 'body' },
    { text: 'Praying mantises are the only insects that can turn their heads to look over their shoulder.', q: 'What can a praying mantis do that no other insect can?', a: 'Turn its head to look over its shoulder', wrong: ['Fly backwards', 'Change color', 'Breathe underwater'], category: 'ability' },
  ],

  // ── Arachnids ────────────────────────────────────────────────────
  'Tarantula': [
    { text: 'Despite their scary appearance, most tarantula bites are no worse than a bee sting.', q: 'How dangerous is a tarantula bite to humans?', a: 'About as bad as a bee sting', wrong: ['Deadly within minutes', 'Completely painless', 'It can dissolve skin'], category: 'ability' },
    { text: 'Tarantulas can live for over 20 years in captivity.', q: 'How long can a tarantula live?', a: 'Over 20 years', wrong: ['About 6 months', 'About 2 years', 'About 5 years'], category: 'lifespan' },
  ],
  'Jumping spider': [
    { text: 'Jumping spiders can leap up to 50 times their own body length.', q: 'How far can a jumping spider jump?', a: 'Up to 50 times its body length', wrong: ['About twice its body length', 'About 5 times its body length', 'They cannot jump'], category: 'ability' },
    { text: 'Jumping spiders have the best vision of any spider and can see in color.', q: 'What is special about jumping spider eyes?', a: 'Best vision of any spider and can see color', wrong: ['They are completely blind', 'They can only see red', 'They have heat vision'], category: 'ability' },
  ],

  // ── Crustaceans ──────────────────────────────────────────────────
  'Horseshoe crab': [
    { text: 'Horseshoe crabs have been around for over 450 million years, older than dinosaurs.', q: 'How old is the horseshoe crab species?', a: 'Over 450 million years (older than dinosaurs)', wrong: ['About 200 million years', 'About 65 million years', 'About 300 million years'], category: 'lifespan' },
    { text: 'Horseshoe crab blood is blue and is used in medicine to test for dangerous bacteria.', q: 'What color is horseshoe crab blood?', a: 'Blue', wrong: ['Red', 'Green', 'Clear'], category: 'body' },
  ],
  'Japanese spider crab': [
    { text: 'The Japanese spider crab has the longest leg span of any crab, up to 12 feet across.', q: 'How wide can a Japanese spider crab\'s legs stretch?', a: 'Up to 12 feet', wrong: ['About 8 feet', 'About 6 feet', 'About 15 feet'], category: 'size' },
  ],
  'Coconut crab': [
    { text: 'The coconut crab is the largest land-living arthropod and can crack open coconuts with its claws.', q: 'What can a coconut crab crack open with its claws?', a: 'Coconuts', wrong: ['Rocks', 'Metal cans', 'Glass bottles'], category: 'ability' },
  ],

  // ── Fungi ─────────────────────────────────────────────────────────
  'Cordyceps': [
    { text: 'Cordyceps is a fungus that takes over the brains of insects and controls their bodies.', q: 'What does the cordyceps fungus do to insects?', a: 'Takes over their brains and controls their bodies', wrong: ['Makes them grow bigger', 'Gives them super speed', 'Makes them invisible'], category: 'ability' },
  ],
  'Fly agaric': [
    { text: 'The red and white fly agaric mushroom is one of the most recognizable mushrooms in the world.', q: 'What colors is the fly agaric mushroom?', a: 'Red with white spots', wrong: ['Blue with green spots', 'All black', 'Yellow with brown stripes'], category: 'body' },
  ],
}
