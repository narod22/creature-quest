/**
 * Curated species database with verified facts, conservation status, and habitat info.
 *
 * Each species entry has:
 *   - status: IUCN Red List conservation status
 *     (LC=Least Concern, NT=Near Threatened, VU=Vulnerable, EN=Endangered,
 *      CR=Critically Endangered, EW=Extinct in Wild, EX=Extinct, DD=Data Deficient)
 *   - habitat: Primary habitat type(s)
 *   - range: Geographic range description
 *   - facts: Array of verified fact objects for quizzes and fun facts display
 *     Each fact: { text, q, a, wrong, category }
 *
 * ACCURACY POLICY: Every fact in this file has been verified. Do not add
 * Wikipedia-extracted or AI-generated facts without manual verification.
 * When in doubt, leave it out.
 */

// Conservation status labels for display
export const STATUS_LABELS = {
  LC: { label: 'Least Concern', color: 'green', emoji: '🟢' },
  NT: { label: 'Near Threatened', color: 'yellow', emoji: '🟡' },
  VU: { label: 'Vulnerable', color: 'orange', emoji: '🟠' },
  EN: { label: 'Endangered', color: 'red', emoji: '🔴' },
  CR: { label: 'Critically Endangered', color: 'darkred', emoji: '🔴' },
  EW: { label: 'Extinct in the Wild', color: 'black', emoji: '⚫' },
  EX: { label: 'Extinct', color: 'black', emoji: '⚫' },
  DD: { label: 'Data Deficient', color: 'gray', emoji: '⚪' },
}

export const SPECIES_DATA = {
  // ══════════════════════════════════════════════════════════════════
  // MAMMALS
  // ══════════════════════════════════════════════════════════════════
  'African elephant': {
    status: 'EN',
    habitat: 'Savannas, forests, marshes',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'African elephants are the largest land animals on Earth.', q: 'What is the largest land animal on Earth?', a: 'African elephant', wrong: ['Blue whale', 'Giraffe', 'Hippopotamus'], category: 'size' },
      { text: 'An elephant can drink up to 50 gallons of water a day.', q: 'How much water can an elephant drink per day?', a: 'Up to 50 gallons', wrong: ['Up to 25 gallons', 'Up to 75 gallons', 'Up to 35 gallons'], category: 'diet' },
      { text: 'Elephants can recognize themselves in a mirror, which very few animals can do.', q: 'What special thing can elephants do with a mirror?', a: 'Recognize themselves', wrong: ['Get scared', 'Ignore it completely', 'Try to fight it'], category: 'ability' },
      { text: 'An elephant\'s trunk has over 40,000 muscles and can pick up a single blade of grass.', q: 'How many muscles does an elephant\'s trunk have?', a: 'Over 40,000', wrong: ['About 500', 'About 5,000', 'About 15,000'], category: 'body' },
      { text: 'Elephants mourn their dead and have been seen returning to the bones of family members years later.', q: 'What do elephants do when a family member dies?', a: 'They mourn and revisit the bones', wrong: ['They forget quickly', 'They leave the area forever', 'They bury them underground'], category: 'behavior' },
    ],
  },
  'Blue whale': {
    status: 'EN',
    habitat: 'Open ocean',
    range: 'All major oceans worldwide',
    facts: [
      { text: 'The blue whale is the largest animal that has ever lived on Earth, even bigger than any dinosaur.', q: 'Is the blue whale bigger than any dinosaur that ever lived?', a: 'Yes, it is the biggest animal ever', wrong: ['No, T. rex was bigger', 'No, Brachiosaurus was bigger', 'They were about the same size'], category: 'size' },
      { text: 'A blue whale\'s heart is about the size of a golf cart and weighs around 400 pounds.', q: 'How big is a blue whale\'s heart?', a: 'About the size of a golf cart', wrong: ['About the size of a basketball', 'About the size of a school bus', 'About the size of a football'], category: 'body' },
      { text: 'Blue whales can be heard from over 1,000 miles away.', q: 'How far away can a blue whale be heard?', a: 'Over 1,000 miles', wrong: ['About 500 miles', 'About 100 miles', 'About 2,000 miles'], category: 'ability' },
      { text: 'A blue whale\'s tongue alone can weigh as much as an elephant.', q: 'How heavy is a blue whale\'s tongue?', a: 'As much as an elephant', wrong: ['About 100 pounds', 'About 500 pounds', 'As much as a horse'], category: 'body' },
      { text: 'Blue whale calves gain about 200 pounds per day in their first year.', q: 'How fast does a baby blue whale grow?', a: 'About 200 pounds per day', wrong: ['About 10 pounds per day', 'About 50 pounds per day', 'About 500 pounds per day'], category: 'size' },
    ],
  },
  'Red fox': {
    status: 'LC',
    habitat: 'Forests, grasslands, mountains, deserts, suburban areas',
    range: 'North America, Europe, Asia, North Africa, Australia (introduced)',
    facts: [
      { text: 'Red foxes can hear a mouse squeaking or moving through snow from up to 100 feet away.', q: 'What amazing thing can a red fox hear?', a: 'A mouse moving under the snow', wrong: ['A bird flying overhead', 'A fish swimming', 'Thunder from 50 miles away'], category: 'ability' },
      { text: 'Red foxes are found on every continent except Antarctica.', q: 'Which continent do red foxes NOT live on?', a: 'Antarctica', wrong: ['Africa', 'Asia', 'South America'], category: 'habitat' },
      { text: 'A fox\'s tail is called a "brush" and helps them balance.', q: 'What is a fox\'s tail called?', a: 'A brush', wrong: ['A flag', 'A rudder', 'A whip'], category: 'body' },
      { text: 'Red foxes use Earth\'s magnetic field to help them pounce on prey hidden under snow.', q: 'What do foxes use to help them hunt under snow?', a: 'Earth\'s magnetic field', wrong: ['Their sense of smell only', 'Echolocation', 'Infrared vision'], category: 'ability' },
    ],
  },
  'Gray wolf': {
    status: 'LC',
    habitat: 'Forests, tundra, grasslands, mountains',
    range: 'North America, Europe, Asia',
    facts: [
      { text: 'Wolves can run up to 40 miles per hour when chasing prey.', q: 'How fast can a wolf run?', a: 'Up to 40 mph', wrong: ['Up to 25 mph', 'Up to 55 mph', 'Up to 30 mph'], category: 'speed' },
      { text: 'A wolf\'s howl can be heard up to 10 miles away.', q: 'How far away can a wolf\'s howl be heard?', a: 'Up to 10 miles', wrong: ['Up to 5 miles', 'Up to 3 miles', 'Up to 20 miles'], category: 'ability' },
      { text: 'Wolves live and hunt in family groups called packs.', q: 'What is a group of wolves called?', a: 'A pack', wrong: ['A herd', 'A flock', 'A school'], category: 'behavior' },
      { text: 'Wolves can eat up to 20 pounds of meat in a single meal.', q: 'How much meat can a wolf eat in one meal?', a: 'Up to 20 pounds', wrong: ['Up to 5 pounds', 'Up to 10 pounds', 'Up to 30 pounds'], category: 'diet' },
    ],
  },
  'Lion': {
    status: 'VU',
    habitat: 'Savannas, grasslands, open woodlands',
    range: 'Sub-Saharan Africa, small population in western India',
    facts: [
      { text: 'A lion\'s roar can be heard from 5 miles away.', q: 'How far away can you hear a lion roar?', a: '5 miles', wrong: ['2 miles', '8 miles', '1 mile'], category: 'ability' },
      { text: 'Lions are the only cats that live in groups, called prides.', q: 'What is a group of lions called?', a: 'A pride', wrong: ['A pack', 'A herd', 'A colony'], category: 'behavior' },
      { text: 'Lions sleep up to 20 hours a day, making them one of the sleepiest predators.', q: 'How many hours a day do lions sleep?', a: 'Up to 20 hours', wrong: ['About 8 hours', 'About 4 hours', 'About 12 hours'], category: 'behavior' },
      { text: 'Female lions do about 90% of the hunting for the pride.', q: 'Who does most of the hunting in a lion pride?', a: 'The females (about 90%)', wrong: ['The males', 'Males and females equally', 'The oldest lion'], category: 'behavior' },
      { text: 'A lion\'s mane makes males look bigger and more intimidating. Darker manes signal a healthier lion.', q: 'What does a darker mane tell you about a male lion?', a: 'He is healthier', wrong: ['He is older', 'He is the leader', 'He is younger'], category: 'body' },
    ],
  },
  'Cheetah': {
    status: 'VU',
    habitat: 'Savannas, grasslands, open woodlands',
    range: 'Sub-Saharan Africa, small population in Iran',
    facts: [
      { text: 'The cheetah is the fastest land animal, reaching speeds of 70 miles per hour.', q: 'How fast can a cheetah run?', a: 'Up to 70 mph', wrong: ['Up to 50 mph', 'Up to 60 mph', 'Up to 80 mph'], category: 'speed' },
      { text: 'A cheetah can go from 0 to 60 mph in just 3 seconds, faster than most sports cars.', q: 'How fast can a cheetah accelerate to 60 mph?', a: '3 seconds', wrong: ['5 seconds', '7 seconds', '1 second'], category: 'speed' },
      { text: 'Unlike lions and tigers, cheetahs cannot roar. They chirp, purr, and make a sound called a churr.', q: 'What sound does a cheetah make instead of roaring?', a: 'Chirps and purrs', wrong: ['Barks', 'Hisses', 'Screams'], category: 'ability' },
      { text: 'Cheetahs have "tear marks" running from their eyes to their mouth that help reduce sun glare while hunting.', q: 'Why do cheetahs have dark lines on their face?', a: 'To reduce sun glare while hunting', wrong: ['To scare prey', 'To attract mates', 'They are scars from fighting'], category: 'body' },
    ],
  },
  'Giant panda': {
    status: 'VU',
    habitat: 'Temperate mountain bamboo forests',
    range: 'Central China (Sichuan, Shaanxi, Gansu provinces)',
    facts: [
      { text: 'Giant pandas eat bamboo for about 12 hours every single day.', q: 'How many hours a day do pandas spend eating bamboo?', a: 'About 12 hours', wrong: ['About 8 hours', 'About 16 hours', 'About 6 hours'], category: 'diet' },
      { text: 'A newborn panda is about the size of a stick of butter.', q: 'How big is a newborn panda?', a: 'About the size of a stick of butter', wrong: ['About the size of a basketball', 'About the size of a cat', 'About the size of a watermelon'], category: 'size' },
      { text: 'Pandas have a special wrist bone that works like a thumb to grip bamboo.', q: 'What special body part helps pandas grip bamboo?', a: 'A special wrist bone like a thumb', wrong: ['Extra-long claws', 'Sticky paws', 'A suction cup tongue'], category: 'body' },
      { text: 'Giant pandas poop up to 40 times a day because bamboo is so hard to digest.', q: 'How often does a giant panda poop?', a: 'Up to 40 times a day', wrong: ['Once a day', 'About 5 times a day', 'Once a week'], category: 'behavior' },
    ],
  },
  'Giraffe': {
    status: 'VU',
    habitat: 'Savannas, grasslands, open woodlands',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'Giraffes are the tallest animals on Earth, reaching up to 18 feet tall.', q: 'How tall can a giraffe get?', a: 'Up to 18 feet', wrong: ['Up to 8 feet', 'Up to 30 feet', 'Up to 12 feet'], category: 'size' },
      { text: 'A giraffe\'s tongue is about 18 inches long and is dark purple to protect it from sunburn.', q: 'What color is a giraffe\'s tongue?', a: 'Dark purple', wrong: ['Pink', 'Red', 'White'], category: 'body' },
      { text: 'Wild giraffes sleep less than two hours a day, often in short naps of just a few minutes at a time.', q: 'How much sleep does a wild giraffe get per day?', a: 'Less than two hours', wrong: ['About 8 hours', 'About 4 hours', 'About 12 hours'], category: 'behavior' },
      { text: 'Every giraffe has a unique pattern of spots, like a human fingerprint.', q: 'What is unique about every giraffe\'s spots?', a: 'Each pattern is unique (like a fingerprint)', wrong: ['They all look the same', 'They change with age', 'Males have more spots'], category: 'body' },
    ],
  },
  'Dolphin': {
    status: 'LC',
    habitat: 'Oceans, some rivers and estuaries',
    range: 'All oceans and many major rivers worldwide',
    facts: [
      { text: 'Dolphins sleep with one eye open and half their brain awake.', q: 'How do dolphins sleep?', a: 'With one eye open and half their brain awake', wrong: ['Floating on their backs', 'At the bottom of the ocean', 'They never sleep'], category: 'behavior' },
      { text: 'Dolphins use echolocation, making clicking sounds to find food and navigate.', q: 'What special ability do dolphins use to find food?', a: 'Echolocation (clicking sounds)', wrong: ['X-ray vision', 'Smell underwater', 'Magnetic sense'], category: 'ability' },
      { text: 'Dolphins can swim up to 20 miles per hour.', q: 'How fast can a dolphin swim?', a: 'Up to 20 mph', wrong: ['Up to 5 mph', 'Up to 50 mph', 'Up to 100 mph'], category: 'speed' },
      { text: 'Dolphins call each other by name using unique whistles that are different for every individual.', q: 'How do dolphins identify each other?', a: 'Each dolphin has a unique whistle (like a name)', wrong: ['By sight only', 'By smell', 'They cannot tell each other apart'], category: 'behavior' },
    ],
  },
  'Polar bear': {
    status: 'VU',
    habitat: 'Arctic sea ice, coastal areas',
    range: 'Arctic regions (Canada, Russia, Norway, Greenland, Alaska)',
    facts: [
      { text: 'A polar bear\'s fur looks white, but each hair is actually hollow and transparent.', q: 'What is special about polar bear fur?', a: 'Each hair is actually hollow and transparent', wrong: ['It is waterproof metal', 'It changes color in summer', 'It glows in the dark'], category: 'body' },
      { text: 'Polar bears have one of the best senses of smell of any animal and can detect seals from several miles away.', q: 'What is one of the polar bear\'s best senses?', a: 'Smell (can detect seals from miles away)', wrong: ['Hearing (can hear fish underwater)', 'Sight (can see in total darkness)', 'Touch (can feel vibrations in ice)'], category: 'ability' },
      { text: 'Under their white fur, polar bears have black skin to absorb heat from the sun.', q: 'What color is a polar bear\'s skin under its fur?', a: 'Black', wrong: ['White', 'Pink', 'Brown'], category: 'body' },
      { text: 'Polar bears are excellent swimmers and have been spotted swimming over 60 miles without stopping.', q: 'Are polar bears good swimmers?', a: 'Yes, they can swim over 60 miles nonstop', wrong: ['No, they avoid water', 'Only in shallow water', 'Only for a few minutes'], category: 'ability' },
    ],
  },
  'Koala': {
    status: 'VU',
    habitat: 'Eucalyptus forests and woodlands',
    range: 'Eastern and southeastern Australia',
    facts: [
      { text: 'Koalas sleep up to 22 hours a day because eucalyptus leaves give them very little energy.', q: 'How many hours a day do koalas sleep?', a: 'Up to 22 hours', wrong: ['About 8 hours', 'About 4 hours', 'About 12 hours'], category: 'behavior' },
      { text: 'Koalas have fingerprints that look almost identical to human fingerprints.', q: 'What do koala fingerprints look like?', a: 'Almost identical to human fingerprints', wrong: ['Completely smooth', 'Like tiny circles', 'Like snowflakes'], category: 'body' },
      { text: 'Despite being called "koala bears," koalas are marsupials, not bears. They carry their babies in a pouch.', q: 'Are koalas actually bears?', a: 'No, they are marsupials (carry babies in a pouch)', wrong: ['Yes, they are a type of bear', 'They are rodents', 'They are primates'], category: 'body' },
    ],
  },
  'Platypus': {
    status: 'NT',
    habitat: 'Freshwater rivers, streams, and lakes',
    range: 'Eastern Australia and Tasmania',
    facts: [
      { text: 'The platypus is one of only five mammals that lay eggs. The other four are echidna species. Together they are called monotremes.', q: 'What makes the platypus unusual for a mammal?', a: 'It lays eggs', wrong: ['It can fly', 'It has scales', 'It lives in salt water'], category: 'ability' },
      { text: 'Male platypuses have venomous spurs on their back legs.', q: 'What weapon does a male platypus have?', a: 'Venomous spurs on their back legs', wrong: ['Sharp teeth', 'Electric shocks', 'Poisonous claws'], category: 'body' },
      { text: 'The platypus can detect the electric fields of its prey using its bill.', q: 'What can a platypus detect with its bill?', a: 'Electric fields from prey', wrong: ['Colors in the dark', 'Sounds from miles away', 'Temperature changes'], category: 'ability' },
      { text: 'When scientists first saw a platypus specimen in 1799, they thought it was a fake made by sewing animal parts together.', q: 'What did scientists first think when they saw a platypus?', a: 'They thought it was a fake', wrong: ['They were not surprised', 'They thought it was a reptile', 'They thought it was extinct'], category: 'behavior' },
    ],
  },
  'Sloth': {
    status: 'LC',
    habitat: 'Tropical rainforests',
    range: 'Central and South America',
    facts: [
      { text: 'Sloths are so slow that algae grows on their fur, making them look green.', q: 'Why do sloths sometimes look green?', a: 'Algae grows on their fur', wrong: ['They eat green leaves', 'They are born that color', 'They roll in moss'], category: 'body' },
      { text: 'Sloths only go to the bathroom about once a week.', q: 'How often does a sloth go to the bathroom?', a: 'About once a week', wrong: ['Every day', 'Every hour', 'Once a month'], category: 'behavior' },
      { text: 'Sloths can turn their heads nearly 270 degrees, almost all the way around.', q: 'How far can a sloth turn its head?', a: 'Nearly 270 degrees (almost all the way around)', wrong: ['Only a little bit', 'About 90 degrees', 'A full 360 degrees'], category: 'body' },
    ],
  },
  'Narwhal': {
    status: 'LC',
    habitat: 'Arctic ocean waters, pack ice',
    range: 'Arctic waters (Canada, Greenland, Norway, Russia)',
    facts: [
      { text: 'A narwhal\'s "horn" is actually a giant tooth that can grow up to 10 feet long.', q: 'What is a narwhal\'s horn actually made of?', a: 'It is a giant tooth', wrong: ['It is made of bone', 'It is made of hair', 'It is made of cartilage'], category: 'body' },
      { text: 'Narwhals can dive over 5,000 feet deep in the Arctic Ocean.', q: 'How deep can a narwhal dive?', a: 'Over 5,000 feet', wrong: ['About 3,000 feet', 'About 8,000 feet', 'About 2,000 feet'], category: 'ability' },
      { text: 'Narwhals are nicknamed "unicorns of the sea" because of their long spiral tusk.', q: 'What are narwhals nicknamed?', a: 'Unicorns of the sea', wrong: ['Dolphins of the north', 'Sea horses', 'Arctic swordfish'], category: 'body' },
    ],
  },
  'Capybara': {
    status: 'LC',
    habitat: 'Wetlands, rivers, lakes, marshes',
    range: 'South America',
    facts: [
      { text: 'The capybara is the largest rodent in the world, weighing up to 140 pounds.', q: 'What is the largest rodent in the world?', a: 'The capybara', wrong: ['The beaver', 'The porcupine', 'The guinea pig'], category: 'size' },
      { text: 'Capybaras are excellent swimmers and can hold their breath underwater for up to 5 minutes.', q: 'How long can a capybara hold its breath underwater?', a: 'Up to 5 minutes', wrong: ['Up to 2 minutes', 'Up to 8 minutes', 'Up to 1 minute'], category: 'ability' },
      { text: 'Capybaras are so friendly that other animals like birds, monkeys, and rabbits are often seen sitting on top of them.', q: 'What unusual thing happens around capybaras?', a: 'Other animals sit on top of them', wrong: ['Other animals run away', 'They chase other animals', 'They hide from everything'], category: 'behavior' },
    ],
  },
  'Tiger': {
    status: 'EN',
    habitat: 'Tropical forests, mangrove swamps, grasslands, temperate forests',
    range: 'South and Southeast Asia, eastern Russia, small populations in China',
    facts: [
      { text: 'Every tiger has a unique pattern of stripes, like a human fingerprint. No two tigers are alike.', q: 'What is unique about every tiger?', a: 'Their stripe pattern (like a fingerprint)', wrong: ['Their eye color', 'The shape of their ears', 'The length of their tail'], category: 'body' },
      { text: 'Tigers are the largest wild cats in the world, weighing up to 660 pounds.', q: 'What is the largest wild cat in the world?', a: 'Tiger', wrong: ['Lion', 'Leopard', 'Jaguar'], category: 'size' },
      { text: 'Unlike most cats, tigers love water and are excellent swimmers.', q: 'What do tigers surprisingly enjoy?', a: 'Swimming', wrong: ['Climbing trees', 'Digging burrows', 'Rolling in mud'], category: 'behavior' },
      { text: 'Tiger stripes are also on their skin. If you shaved a tiger, you would still see the stripes.', q: 'What happens if you could see a tiger\'s skin under its fur?', a: 'The stripes are on the skin too', wrong: ['The skin is plain gray', 'The skin is spotted', 'The skin is white'], category: 'body' },
    ],
  },
  'Snow leopard': {
    status: 'VU',
    habitat: 'High mountain ranges, alpine meadows, rocky terrain',
    range: 'Central Asia (Himalayas, Altai, Tian Shan mountains across 12 countries)',
    facts: [
      { text: 'Snow leopards cannot roar. They make a sound called a "chuff" to greet each other.', q: 'What sound does a snow leopard make instead of roaring?', a: 'A chuff', wrong: ['A bark', 'A whistle', 'A hiss'], category: 'ability' },
      { text: 'A snow leopard\'s thick tail is almost as long as its body and is used for balance and warmth.', q: 'Why does a snow leopard have such a long, thick tail?', a: 'For balance and warmth', wrong: ['To attract mates', 'To catch prey', 'To swim'], category: 'body' },
      { text: 'Snow leopards can leap up to 50 feet in a single bound, one of the longest jumps of any cat.', q: 'How far can a snow leopard jump?', a: 'Up to 50 feet', wrong: ['About 10 feet', 'About 25 feet', 'About 75 feet'], category: 'ability' },
    ],
  },
  'Gorilla': {
    status: 'CR',
    habitat: 'Tropical and subtropical forests',
    range: 'Central Africa (Congo, Rwanda, Uganda, Cameroon, Gabon)',
    facts: [
      { text: 'Gorillas share about 98% of their DNA with humans, making them one of our closest relatives.', q: 'How much DNA do gorillas share with humans?', a: 'About 98%', wrong: ['About 50%', 'About 75%', 'About 90%'], category: 'body' },
      { text: 'Gorillas make nests to sleep in every night, bending branches and leaves into a cozy bed.', q: 'What do gorillas build every night?', a: 'A sleeping nest from branches and leaves', wrong: ['A shelter from rocks', 'A dam across a stream', 'A tunnel underground'], category: 'behavior' },
      { text: 'A male gorilla can eat up to 40 pounds of food in a single day.', q: 'How much food can a male gorilla eat per day?', a: 'Up to 40 pounds', wrong: ['Up to 10 pounds', 'Up to 25 pounds', 'Up to 60 pounds'], category: 'diet' },
      { text: 'Gorillas can learn sign language. A gorilla named Koko learned over 1,000 signs.', q: 'What could the gorilla Koko do?', a: 'Use over 1,000 signs in sign language', wrong: ['Speak human words', 'Write with a pencil', 'Use a computer keyboard'], category: 'ability' },
    ],
  },
  'Orangutan': {
    status: 'CR',
    habitat: 'Tropical rainforests',
    range: 'Borneo and Sumatra (Indonesia, Malaysia)',
    facts: [
      { text: 'Orangutans are the largest tree-dwelling animals in the world.', q: 'What is the largest animal that lives in trees?', a: 'Orangutan', wrong: ['Gorilla', 'Chimpanzee', 'Sloth'], category: 'size' },
      { text: 'Orangutans have been seen using sticks as tools to get insects out of holes and honey from beehives.', q: 'What do orangutans use sticks for?', a: 'Getting insects and honey', wrong: ['Building dams', 'Fighting predators', 'Digging burrows'], category: 'behavior' },
      { text: 'The name "orangutan" comes from Malay words meaning "person of the forest."', q: 'What does the word "orangutan" mean?', a: 'Person of the forest', wrong: ['Red monkey', 'Tree climber', 'Big ape'], category: 'body' },
    ],
  },
  'Hippopotamus': {
    status: 'VU',
    habitat: 'Rivers, lakes, and wetlands',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'Hippos produce a natural red-tinted sunscreen from their skin that protects them from sunburn.', q: 'What unusual thing does hippo skin produce?', a: 'A natural sunscreen (red-tinted)', wrong: ['Waterproof wax', 'Invisible ink', 'Antifreeze'], category: 'body' },
      { text: 'Despite weighing up to 4,000 pounds, hippos can run up to 19 mph on land, faster than most humans.', q: 'Can a hippo outrun most humans?', a: 'Yes, they can run up to 19 mph', wrong: ['No, they can barely walk', 'No, they only move in water', 'Yes, up to 40 mph'], category: 'speed' },
      { text: 'Hippos spend up to 16 hours a day submerged in water to keep cool.', q: 'How long do hippos spend in water each day?', a: 'Up to 16 hours', wrong: ['About 2 hours', 'About 6 hours', 'About 10 hours'], category: 'behavior' },
    ],
  },
  'Crocodile': {
    status: 'LC',
    habitat: 'Rivers, lakes, wetlands, estuaries, coastal areas',
    range: 'Tropical regions of Africa, Asia, Americas, and Australia',
    facts: [
      { text: 'Crocodiles have the strongest bite ever measured in a living animal, over 3,700 pounds of force.', q: 'How strong is a crocodile\'s bite?', a: 'Over 3,700 pounds of force (strongest ever measured)', wrong: ['About 500 pounds of force', 'About 1,000 pounds of force', 'About 2,000 pounds of force'], category: 'ability' },
      { text: 'Crocodiles really do produce tears while eating. The phrase "crocodile tears" comes from this real behavior.', q: 'Do crocodiles actually cry while eating?', a: 'Yes, they produce real tears', wrong: ['No, that is completely made up', 'Only baby crocodiles do', 'Only in captivity'], category: 'behavior' },
      { text: 'Crocodiles can go over a year without eating a single meal.', q: 'How long can a crocodile survive without food?', a: 'Over a year', wrong: ['About a week', 'About a month', 'About three months'], category: 'ability' },
      { text: 'Crocodiles have been on Earth for about 200 million years, surviving the dinosaur extinction.', q: 'How long have crocodiles existed?', a: 'About 200 million years', wrong: ['About 10 million years', 'About 50 million years', 'About 500 million years'], category: 'lifespan' },
    ],
  },
  'Red panda': {
    status: 'EN',
    habitat: 'Temperate mountain forests with bamboo understory',
    range: 'Eastern Himalayas (Nepal, India, Bhutan, China, Myanmar)',
    facts: [
      { text: 'Red pandas are not closely related to giant pandas at all. They are in their own unique family.', q: 'Are red pandas related to giant pandas?', a: 'No, they are in their own unique family', wrong: ['Yes, they are cousins', 'Yes, they are the same species', 'Yes, red pandas are baby giant pandas'], category: 'body' },
      { text: 'Red pandas use their bushy tails as blankets to keep warm while sleeping in cold mountain forests.', q: 'How do red pandas use their tails?', a: 'As blankets to keep warm', wrong: ['To hang from tree branches', 'To swat away insects', 'To signal other red pandas'], category: 'behavior' },
      { text: 'The word "Firefox" in the Mozilla Firefox browser logo is actually a nickname for the red panda.', q: 'What tech company used the red panda as inspiration for its name?', a: 'Mozilla Firefox', wrong: ['Apple Safari', 'Google Chrome', 'Microsoft Edge'], category: 'body' },
    ],
  },
  'Orca': {
    status: 'DD',
    habitat: 'All oceans, from Arctic to Antarctic',
    range: 'Worldwide, all oceans',
    facts: [
      { text: 'Orcas (killer whales) are actually the largest members of the dolphin family, not whales.', q: 'What family do orcas actually belong to?', a: 'The dolphin family', wrong: ['The whale family', 'The shark family', 'The seal family'], category: 'body' },
      { text: 'Different orca pods have their own unique calls that are passed down through generations, like a family dialect.', q: 'What is special about orca pod communication?', a: 'Each pod has its own unique calls (like a dialect)', wrong: ['All orcas use the same sounds', 'They communicate with body language only', 'They are mostly silent'], category: 'behavior' },
      { text: 'Orcas are one of the few animals besides humans that go through menopause. Older females lead the pod using their knowledge.', q: 'What unusual life stage do orca females go through?', a: 'Menopause (older females become leaders)', wrong: ['They grow a second dorsal fin', 'They change color', 'They migrate alone'], category: 'behavior' },
    ],
  },
  'Pangolin': {
    status: 'CR',
    habitat: 'Tropical forests, savannas, grasslands',
    range: 'Sub-Saharan Africa and South/Southeast Asia',
    facts: [
      { text: 'Pangolins are the only mammals in the world that are covered in scales.', q: 'What makes pangolins unique among mammals?', a: 'They are the only mammals covered in scales', wrong: ['They are the only mammals that can fly', 'They are the smallest mammals', 'They are the fastest mammals'], category: 'body' },
      { text: 'When threatened, a pangolin rolls into a tight ball that even lions cannot pry open.', q: 'How does a pangolin defend itself?', a: 'Rolls into a ball that predators cannot open', wrong: ['Sprays a bad smell like a skunk', 'Plays dead', 'Runs away at high speed'], category: 'ability' },
      { text: 'Pangolins are the most trafficked mammals in the world, making conservation critical.', q: 'What unfortunate record do pangolins hold?', a: 'Most trafficked mammal in the world', wrong: ['Most common mammal', 'Fastest-growing mammal population', 'Least studied mammal'], category: 'behavior' },
    ],
  },
  'Wolverine': {
    status: 'LC',
    habitat: 'Boreal forests, tundra, alpine meadows',
    range: 'Northern North America, Northern Europe, Northern Asia',
    facts: [
      { text: 'Wolverines are the largest land-dwelling member of the weasel family, weighing up to 40 pounds.', q: 'What family does the wolverine belong to?', a: 'The weasel family', wrong: ['The bear family', 'The dog family', 'The cat family'], category: 'body' },
      { text: 'Wolverines have been known to drive bears and mountain lions away from their food.', q: 'What larger animals will wolverines stand up to?', a: 'Bears and mountain lions', wrong: ['Only animals smaller than themselves', 'No other animals', 'Only other wolverines'], category: 'behavior' },
      { text: 'Wolverines have specially shaped teeth that can crush frozen bones and meat.', q: 'What can wolverine teeth do?', a: 'Crush frozen bones and meat', wrong: ['Cut through metal', 'Regrow if lost', 'Change color'], category: 'body' },
    ],
  },
  'Honey badger': {
    status: 'LC',
    habitat: 'Savannas, grasslands, forests, deserts',
    range: 'Sub-Saharan Africa, western Asia, India',
    facts: [
      { text: 'Honey badgers have such thick, loose skin that even bee stings, porcupine quills, and snake bites have little effect.', q: 'What protects a honey badger from attacks?', a: 'Thick, loose skin that resists stings and bites', wrong: ['Hard armor plates', 'A poisonous odor', 'Extremely fast reflexes'], category: 'body' },
      { text: 'Honey badgers are known to fight off lions, hyenas, and venomous snakes, making them one of the most fearless animals.', q: 'What reputation do honey badgers have?', a: 'One of the most fearless animals', wrong: ['One of the most shy animals', 'The fastest digger', 'The best swimmer'], category: 'behavior' },
      { text: 'Honey badgers are smart enough to use tools. They have been seen stacking rocks to stand on and reach food.', q: 'What smart thing have honey badgers been seen doing?', a: 'Stacking rocks to reach food', wrong: ['Building nests from sticks', 'Fishing with twigs', 'Opening doors with their paws'], category: 'ability' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // BIRDS
  // ══════════════════════════════════════════════════════════════════
  'Bald eagle': {
    status: 'LC',
    habitat: 'Near large bodies of water with old-growth trees',
    range: 'North America (United States, Canada, northern Mexico)',
    facts: [
      { text: 'Bald eagles can see fish swimming from over a mile away.', q: 'How far away can a bald eagle spot a fish?', a: 'Over a mile', wrong: ['About half a mile', 'About 2 miles', 'About a quarter mile'], category: 'ability' },
      { text: 'The largest bald eagle nest ever recorded weighed over 2 tons, as much as a car. Eagles add to the same nest every year.', q: 'How heavy was the largest bald eagle nest ever found?', a: 'Over 2 tons (as much as a car)', wrong: ['About 500 pounds', 'About 200 pounds', 'About 1 ton'], category: 'size' },
      { text: 'Bald eagles are not actually bald. Their name comes from an old English word "balde" meaning white.', q: 'Why are bald eagles called "bald"?', a: 'From an old word meaning white (for their white head)', wrong: ['Because they lose feathers on their head', 'Because baby eagles have no feathers', 'Because they look bald from far away'], category: 'body' },
    ],
  },
  'Peregrine falcon': {
    status: 'LC',
    habitat: 'Mountains, cliffs, cities, open areas',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'The peregrine falcon is the fastest animal on Earth, diving at over 240 mph.', q: 'What is the fastest animal on Earth?', a: 'Peregrine falcon', wrong: ['Cheetah', 'Sailfish', 'Golden eagle'], category: 'speed' },
      { text: 'Peregrine falcons live on every continent except Antarctica.', q: 'Which continent do peregrine falcons NOT live on?', a: 'Antarctica', wrong: ['Australia', 'Africa', 'South America'], category: 'habitat' },
      { text: 'Peregrine falcons have a special cone-shaped bone in their nostrils that lets them breathe during high-speed dives.', q: 'How can peregrine falcons breathe while diving at 240 mph?', a: 'A special bone in their nostrils slows the airflow', wrong: ['They hold their breath', 'They close their nostrils', 'They breathe through their mouth'], category: 'body' },
    ],
  },
  'Emperor penguin': {
    status: 'NT',
    habitat: 'Antarctic sea ice and surrounding ocean',
    range: 'Antarctica',
    facts: [
      { text: 'Emperor penguins can hold their breath for over 20 minutes while diving.', q: 'How long can an emperor penguin hold its breath?', a: 'Over 20 minutes', wrong: ['About 10 minutes', 'About 30 minutes', 'About 5 minutes'], category: 'ability' },
      { text: 'Male emperor penguins keep the egg warm on their feet for 2 months without eating.', q: 'How do male emperor penguins keep their egg warm?', a: 'On their feet for 2 months', wrong: ['In a nest made of ice', 'Under their wings', 'By sitting in warm water'], category: 'behavior' },
      { text: 'Emperor penguins are the tallest of all penguin species, standing about 4 feet tall.', q: 'How tall is an emperor penguin?', a: 'About 4 feet tall', wrong: ['About 1 foot tall', 'About 2 feet tall', 'About 6 feet tall'], category: 'size' },
    ],
  },
  'Hummingbird': {
    status: 'LC',
    habitat: 'Gardens, forests, meadows, tropical areas',
    range: 'North and South America',
    facts: [
      { text: 'Hummingbirds can flap their wings up to 80 times per second.', q: 'How fast can a hummingbird flap its wings?', a: 'Up to 80 times per second', wrong: ['About 50 times per second', 'About 120 times per second', 'About 40 times per second'], category: 'speed' },
      { text: 'Hummingbirds are the only birds that can fly backwards.', q: 'What can hummingbirds do that no other bird can?', a: 'Fly backwards', wrong: ['Fly upside down', 'Fly in circles', 'Fly without flapping'], category: 'ability' },
      { text: 'A hummingbird\'s heart beats over 1,000 times per minute.', q: 'How fast does a hummingbird\'s heart beat?', a: 'Over 1,000 times per minute', wrong: ['About 600 times per minute', 'About 1,500 times per minute', 'About 800 times per minute'], category: 'body' },
      { text: 'The bee hummingbird is the smallest bird in the world, weighing less than a penny.', q: 'What is the smallest bird in the world?', a: 'Bee hummingbird (weighs less than a penny)', wrong: ['Sparrow', 'Wren', 'Goldfinch'], category: 'size' },
    ],
  },
  'Barn owl': {
    status: 'LC',
    habitat: 'Farmland, grasslands, marshes, near human buildings',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'Barn owls can hunt in complete darkness using only their incredible hearing.', q: 'How do barn owls hunt in total darkness?', a: 'Using their incredible hearing alone', wrong: ['They can see in total darkness', 'They use echolocation like bats', 'They use their sense of smell'], category: 'ability' },
      { text: 'A barn owl\'s face is shaped like a satellite dish to funnel sound directly into its ears.', q: 'Why is a barn owl\'s face shaped the way it is?', a: 'To funnel sound into its ears', wrong: ['To scare predators', 'To keep warm', 'To attract mates'], category: 'body' },
      { text: 'Barn owls swallow their prey whole and cough up pellets of bones and fur they cannot digest.', q: 'What do barn owls do with the bones they cannot digest?', a: 'Cough them up as pellets', wrong: ['Dissolve them with strong acid', 'Store them in a pouch', 'Leave them behind'], category: 'diet' },
    ],
  },
  'Flamingo': {
    status: 'LC',
    habitat: 'Shallow lakes, lagoons, mangrove swamps, tidal flats',
    range: 'Africa, southern Europe, Central and South America, Caribbean',
    facts: [
      { text: 'Flamingos are not born pink. They turn pink from eating shrimp and algae that contain natural pigments.', q: 'Why are flamingos pink?', a: 'From eating shrimp and algae with natural pigments', wrong: ['They are born that color', 'From sitting in the sun', 'From the minerals in the water'], category: 'body' },
      { text: 'Flamingos can only eat with their heads upside down, using their beaks as a filter.', q: 'How do flamingos eat?', a: 'With their heads upside down, filtering food', wrong: ['By diving underwater', 'By pecking like chickens', 'By catching fish mid-air'], category: 'behavior' },
      { text: 'A group of flamingos is called a "flamboyance."', q: 'What is a group of flamingos called?', a: 'A flamboyance', wrong: ['A flock', 'A colony', 'A pink'], category: 'behavior' },
    ],
  },
  'Snowy owl': {
    status: 'VU',
    habitat: 'Arctic tundra, open grasslands',
    range: 'Arctic regions, migrates south into Canada and northern United States',
    facts: [
      { text: 'Unlike most owls, snowy owls hunt during the day because they live in the Arctic where summer has 24 hours of daylight.', q: 'When do snowy owls hunt?', a: 'During the day (unlike most owls)', wrong: ['Only at night', 'Only at dawn', 'They do not hunt, they scavenge'], category: 'behavior' },
      { text: 'Female snowy owls have dark spots for camouflage, while males become almost pure white as they age.', q: 'Which snowy owl is whiter?', a: 'Males (they become almost pure white)', wrong: ['Females are whiter', 'Both are equally white', 'Baby owls are whitest'], category: 'body' },
      { text: 'A snowy owl can eat up to 5 lemmings per day, or over 1,600 per year.', q: 'How many lemmings can a snowy owl eat in a year?', a: 'Over 1,600', wrong: ['About 100', 'About 500', 'About 3,000'], category: 'diet' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // REPTILES & AMPHIBIANS
  // ══════════════════════════════════════════════════════════════════
  'Komodo dragon': {
    status: 'EN',
    habitat: 'Tropical savanna forest, dry open grassland',
    range: 'Indonesian islands (Komodo, Rinca, Flores, Gili Motang)',
    facts: [
      { text: 'The Komodo dragon is the largest living lizard, growing up to 10 feet long.', q: 'What is the largest living lizard?', a: 'Komodo dragon', wrong: ['Iguana', 'Monitor lizard', 'Gila monster'], category: 'size' },
      { text: 'Komodo dragons have venom in their bite that weakens their prey.', q: 'How does a Komodo dragon weaken its prey?', a: 'Venom in its bite', wrong: ['Squeezing like a snake', 'Electric shocks', 'Loud roaring'], category: 'ability' },
      { text: 'Komodo dragons can eat up to 80% of their own body weight in a single meal.', q: 'How much can a Komodo dragon eat in one meal?', a: 'Up to 80% of its body weight', wrong: ['About 10% of its body weight', 'About 25% of its body weight', 'About 50% of its body weight'], category: 'diet' },
    ],
  },
  'Chameleon': {
    status: 'LC',
    habitat: 'Tropical and subtropical forests, deserts, savannas',
    range: 'Africa (especially Madagascar), southern Europe, southern Asia',
    facts: [
      { text: 'Chameleons can move each eye independently, looking in two directions at once.', q: 'What can chameleon eyes do that is special?', a: 'Look in two different directions at once', wrong: ['See in the dark', 'See through walls', 'See colors humans cannot'], category: 'ability' },
      { text: 'A chameleon\'s tongue can be twice as long as its body and catches insects in a fraction of a second.', q: 'How long can a chameleon\'s tongue be?', a: 'Twice as long as its body', wrong: ['The same length as its body', 'Half its body length', 'Three inches'], category: 'body' },
      { text: 'Chameleons do not change color to match their surroundings. They change color based on mood, temperature, and communication.', q: 'Why do chameleons really change color?', a: 'Mood, temperature, and communication', wrong: ['To match their surroundings', 'To hide from predators', 'They cannot control it'], category: 'ability' },
    ],
  },
  'Sea turtle': {
    status: 'VU',
    habitat: 'Tropical and subtropical oceans, beaches for nesting',
    range: 'All tropical and subtropical oceans worldwide',
    facts: [
      { text: 'Sea turtles have been around for over 100 million years, meaning they lived alongside dinosaurs.', q: 'How long have sea turtles existed?', a: 'Over 100 million years (they lived with dinosaurs)', wrong: ['About 10 million years', 'About 1 million years', 'About 50 million years'], category: 'lifespan' },
      { text: 'Sea turtles can hold their breath for up to 7 hours while resting.', q: 'How long can a resting sea turtle hold its breath?', a: 'Up to 7 hours', wrong: ['Up to 20 minutes', 'Up to 1 hour', 'Up to 3 hours'], category: 'ability' },
      { text: 'Female sea turtles return to the exact same beach where they were born to lay their own eggs.', q: 'Where do female sea turtles lay their eggs?', a: 'The same beach where they were born', wrong: ['Any random beach', 'On rocks in the ocean', 'In shallow water'], category: 'behavior' },
    ],
  },
  'Axolotl': {
    status: 'CR',
    habitat: 'Freshwater lakes and canals',
    range: 'Lake Xochimilco near Mexico City, Mexico (extremely limited)',
    facts: [
      { text: 'Axolotls can regrow entire limbs, parts of their brain, and even their heart.', q: 'What amazing thing can an axolotl regrow?', a: 'Entire limbs, brain parts, and heart', wrong: ['Just their tail', 'Only their skin', 'Nothing, they cannot regrow'], category: 'ability' },
      { text: 'Axolotls stay in their baby form their entire lives, a trait called neoteny.', q: 'What is unusual about how axolotls grow up?', a: 'They stay in their baby form forever', wrong: ['They change color every year', 'They grow legs at age 10', 'They shrink as they age'], category: 'behavior' },
      { text: 'Wild axolotls are critically endangered and found in only one lake in the entire world.', q: 'How many places in the wild can you find axolotls?', a: 'Just one lake (Lake Xochimilco in Mexico)', wrong: ['Rivers across Mexico', 'Lakes throughout South America', 'Oceans worldwide'], category: 'habitat' },
    ],
  },
  'Poison dart frog': {
    status: 'LC',
    habitat: 'Tropical rainforest floor',
    range: 'Central and South America',
    facts: [
      { text: 'One golden poison dart frog has enough poison to kill 10 grown men.', q: 'How poisonous is a golden poison dart frog?', a: 'Enough poison to kill 10 men', wrong: ['Not poisonous at all', 'Only slightly irritating', 'Enough to give you a rash'], category: 'ability' },
      { text: 'Poison dart frogs get their poison from the insects they eat. Frogs raised in captivity are not poisonous.', q: 'Where do poison dart frogs get their poison?', a: 'From the insects they eat', wrong: ['They are born with it', 'From the water they live in', 'From plants they touch'], category: 'diet' },
      { text: 'Their bright colors are a warning to predators that they are toxic. This is called aposematic coloration.', q: 'Why are poison dart frogs so brightly colored?', a: 'To warn predators they are toxic', wrong: ['To attract mates', 'To blend in with flowers', 'For no particular reason'], category: 'body' },
    ],
  },
  'Electric eel': {
    status: 'LC',
    habitat: 'Freshwater rivers, streams, and floodplains',
    range: 'Amazon and Orinoco river basins in South America',
    facts: [
      { text: 'Electric eels can produce a shock of up to 860 volts, enough to stun a horse.', q: 'How powerful is an electric eel\'s shock?', a: 'Up to 860 volts', wrong: ['Up to 50 volts', 'Up to 200 volts', 'Up to 500 volts'], category: 'ability' },
      { text: 'Electric eels are not actually eels. They are more closely related to catfish and carp.', q: 'Are electric eels actually eels?', a: 'No, they are related to catfish and carp', wrong: ['Yes, they are true eels', 'They are a type of snake', 'They are related to sharks'], category: 'body' },
      { text: 'Electric eels must come to the surface to breathe air. About 80% of their oxygen comes from gulping air.', q: 'How do electric eels breathe?', a: 'By gulping air at the surface', wrong: ['Through gills only', 'Through their skin', 'They do not need oxygen'], category: 'body' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FISH & OCEAN CREATURES
  // ══════════════════════════════════════════════════════════════════
  'Great white shark': {
    status: 'VU',
    habitat: 'Coastal and offshore waters',
    range: 'Temperate and subtropical oceans worldwide',
    facts: [
      { text: 'Great white sharks can smell blood at incredibly tiny concentrations, as little as one drop diluted into a swimming pool.', q: 'How sensitive is a great white shark\'s sense of smell?', a: 'Can smell one drop of blood in a swimming pool', wrong: ['Can only smell blood up close', 'About the same as humans', 'Cannot smell at all'], category: 'ability' },
      { text: 'Great white sharks have about 300 teeth arranged in rows.', q: 'How many teeth does a great white shark have?', a: 'About 300', wrong: ['About 200', 'About 500', 'About 150'], category: 'body' },
      { text: 'When a great white loses a tooth, a new one moves forward to replace it, like a conveyor belt. They go through thousands in a lifetime.', q: 'What happens when a great white shark loses a tooth?', a: 'A new one moves forward to replace it', wrong: ['It stays missing', 'It grows back in the same spot', 'They stop eating until it heals'], category: 'body' },
    ],
  },
  'Seahorse': {
    status: 'VU',
    habitat: 'Shallow coastal waters, coral reefs, seagrass beds',
    range: 'Tropical and temperate waters worldwide',
    facts: [
      { text: 'Male seahorses are the ones who get pregnant and give birth, not the females.', q: 'Which seahorse parent gives birth to babies?', a: 'The father', wrong: ['The mother', 'Both parents', 'Neither, eggs hatch on their own'], category: 'behavior' },
      { text: 'Seahorses have no stomach, so food passes through them very quickly and they must eat almost constantly.', q: 'What is unusual about a seahorse\'s body?', a: 'They have no stomach', wrong: ['They have no heart', 'They have no eyes', 'They have no brain'], category: 'body' },
      { text: 'Seahorse pairs greet each other every morning with a special dance that can last for several minutes.', q: 'What do seahorse pairs do every morning?', a: 'A greeting dance together', wrong: ['Hunt for food together', 'Build a new nest', 'Change colors together'], category: 'behavior' },
    ],
  },
  'Clownfish': {
    status: 'LC',
    habitat: 'Coral reefs, sheltered areas near sea anemones',
    range: 'Indian Ocean, western Pacific Ocean, Red Sea',
    facts: [
      { text: 'Clownfish are immune to the stinging tentacles of sea anemones, which protects them from predators.', q: 'What protects a clownfish from predators?', a: 'Living in stinging sea anemones', wrong: ['Swimming very fast', 'Being poisonous', 'Hiding in sand'], category: 'ability' },
      { text: 'All clownfish are born male. Some change to female later in life.', q: 'What is unusual about how clownfish are born?', a: 'They are all born male', wrong: ['They are all born female', 'They have no gender', 'They are born in pairs'], category: 'behavior' },
      { text: 'Clownfish help their host anemone by cleaning it and bringing it food scraps.', q: 'How do clownfish help the anemone they live in?', a: 'By cleaning it and bringing food', wrong: ['By protecting it from sharks', 'By making it grow faster', 'They do not help the anemone'], category: 'behavior' },
    ],
  },
  'Giant squid': {
    status: 'LC',
    habitat: 'Deep ocean (600 to 3,000 feet deep)',
    range: 'All oceans worldwide',
    facts: [
      { text: 'Giant squid have some of the largest eyes of any animal, about the size of a dinner plate. Only the colossal squid\'s eyes may be bigger.', q: 'How big are giant squid eyes?', a: 'About the size of a dinner plate', wrong: ['About the size of a marble', 'About the size of a golf ball', 'About the size of a basketball'], category: 'body' },
      { text: 'Giant squid live deep in the ocean and were not photographed alive until 2004.', q: 'When was a giant squid first photographed alive?', a: '2004', wrong: ['1950', '1890', '2020'], category: 'behavior' },
      { text: 'Giant squid have three hearts and blue blood.', q: 'How many hearts does a giant squid have?', a: 'Three', wrong: ['One', 'Two', 'Five'], category: 'body' },
    ],
  },
  'Octopus': {
    status: 'LC',
    habitat: 'Coral reefs, ocean floor, open water',
    range: 'All oceans worldwide',
    facts: [
      { text: 'Octopuses have three hearts and blue blood.', q: 'How many hearts does an octopus have?', a: 'Three', wrong: ['One', 'Two', 'Eight'], category: 'body' },
      { text: 'An octopus can change its color and texture in less than one second.', q: 'How fast can an octopus change its color?', a: 'Less than one second', wrong: ['About one minute', 'About one hour', 'About 10 seconds'], category: 'ability' },
      { text: 'Octopuses have been observed using coconut shells as portable shelters.', q: 'What do octopuses sometimes use as a shelter?', a: 'Coconut shells', wrong: ['Seashells only', 'Rocks', 'Coral pieces'], category: 'behavior' },
      { text: 'An octopus has about two-thirds of its neurons in its arms. Each arm can taste, touch, and even "think" on its own.', q: 'Where are most of an octopus\'s neurons?', a: 'In its arms', wrong: ['In its head', 'In its body', 'It has no neurons'], category: 'body' },
    ],
  },
  'Jellyfish': {
    status: 'LC',
    habitat: 'All ocean waters, surface to deep sea',
    range: 'Every ocean worldwide',
    facts: [
      { text: 'Jellyfish have no brain, no heart, and no bones.', q: 'What organs does a jellyfish NOT have?', a: 'Brain, heart, and bones (none of them!)', wrong: ['Just no bones', 'Just no brain', 'They have all of those'], category: 'body' },
      { text: 'Some jellyfish can glow in the dark using bioluminescence.', q: 'What can some jellyfish do in the dark?', a: 'Glow (bioluminescence)', wrong: ['Turn invisible', 'Make loud sounds', 'Freeze solid'], category: 'ability' },
      { text: 'The immortal jellyfish can reverse its aging and become young again.', q: 'What can the "immortal jellyfish" do?', a: 'Reverse its aging and become young again', wrong: ['Live for exactly 1,000 years', 'Grow to the size of a whale', 'Survive in outer space'], category: 'ability' },
      { text: 'Jellyfish have been on Earth for over 500 million years, older than dinosaurs, trees, and even most fish.', q: 'How long have jellyfish existed?', a: 'Over 500 million years', wrong: ['About 100 million years', 'About 50 million years', 'About 1 million years'], category: 'lifespan' },
    ],
  },
  'Mantis shrimp': {
    status: 'LC',
    habitat: 'Tropical and subtropical ocean floor, coral reefs',
    range: 'Indian and Pacific Oceans',
    facts: [
      { text: 'The mantis shrimp strikes as fast as a bullet. The punch is so fast it creates bubbles that briefly boil the water from the pressure drop.', q: 'How fast is a mantis shrimp\'s punch?', a: 'As fast as a bullet', wrong: ['About as fast as a human punch', 'Barely noticeable', 'About as fast as a cat\'s paw swipe'], category: 'ability' },
      { text: 'Mantis shrimp have 16 types of color receptors (humans have 3), but they use them differently. They can see ultraviolet light and polarized light that humans cannot detect at all.', q: 'What can mantis shrimp see that humans cannot?', a: 'Ultraviolet and polarized light', wrong: ['X-rays', 'Radio waves', 'Sound waves'], category: 'ability' },
      { text: 'A mantis shrimp can break aquarium glass with a single punch.', q: 'What can a mantis shrimp break with its punch?', a: 'Aquarium glass', wrong: ['Nothing, the punch is weak', 'Only soft materials', 'Only other shrimp shells'], category: 'ability' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // INSECTS & ARACHNIDS
  // ══════════════════════════════════════════════════════════════════
  'Monarch butterfly': {
    status: 'EN',
    habitat: 'Meadows, fields, gardens, forests',
    range: 'North America (migrates Canada to Mexico), also found in Australia and Europe',
    facts: [
      { text: 'Monarch butterflies migrate up to 3,000 miles from Canada to Mexico every year.', q: 'How far do monarch butterflies migrate?', a: 'Up to 3,000 miles', wrong: ['About 1,000 miles', 'About 5,000 miles', 'About 500 miles'], category: 'behavior' },
      { text: 'Monarchs are poisonous to birds because they eat milkweed as caterpillars.', q: 'Why are monarch butterflies poisonous?', a: 'They eat milkweed as caterpillars', wrong: ['They are born with venom', 'They absorb poison from the air', 'They are not poisonous'], category: 'ability' },
      { text: 'No single monarch completes the entire round trip. It takes 3-4 generations to finish the full migration cycle.', q: 'How many generations does it take to complete the monarch migration?', a: '3 to 4 generations', wrong: ['One butterfly does the whole trip', 'Two generations', 'About 10 generations'], category: 'behavior' },
    ],
  },
  'Firefly': {
    status: 'LC',
    habitat: 'Forests, fields, marshes, near water',
    range: 'Tropical and temperate regions worldwide',
    facts: [
      { text: 'Firefly light is the most efficient light in the world, producing almost no heat.', q: 'What is special about firefly light?', a: 'It produces almost no heat', wrong: ['It is the brightest light in nature', 'It can burn things', 'It only works in water'], category: 'ability' },
      { text: 'Each firefly species has its own unique flash pattern to attract mates. Some even sync their flashes.', q: 'Why do different fireflies flash differently?', a: 'Each species has its own pattern to attract mates', wrong: ['It is random', 'To confuse predators', 'Because of the temperature'], category: 'behavior' },
    ],
  },
  'Praying mantis': {
    status: 'LC',
    habitat: 'Gardens, forests, grasslands, tropical areas',
    range: 'Tropical and temperate regions worldwide',
    facts: [
      { text: 'A praying mantis can turn its head 180 degrees to look behind it.', q: 'How far can a praying mantis turn its head?', a: '180 degrees (look behind itself)', wrong: ['Only a tiny bit', 'Full 360 degrees', 'It cannot turn its head at all'], category: 'body' },
      { text: 'Praying mantises are the only insects that can turn their heads to look over their shoulder.', q: 'What can a praying mantis do that no other insect can?', a: 'Turn its head to look over its shoulder', wrong: ['Fly backwards', 'Change color', 'Breathe underwater'], category: 'ability' },
      { text: 'A praying mantis has only one ear, located on its chest between its legs.', q: 'How many ears does a praying mantis have?', a: 'One (on its chest)', wrong: ['Two (on its head)', 'None', 'Six (one on each leg)'], category: 'body' },
    ],
  },
  'Tarantula': {
    status: 'LC',
    habitat: 'Deserts, rainforests, grasslands',
    range: 'Americas, Africa, Asia, southern Europe, Australia',
    facts: [
      { text: 'Despite their scary appearance, most tarantula bites are no worse than a bee sting.', q: 'How dangerous is a tarantula bite to humans?', a: 'About as bad as a bee sting', wrong: ['Deadly within minutes', 'Completely painless', 'It can dissolve skin'], category: 'ability' },
      { text: 'Tarantulas can live for over 20 years in captivity.', q: 'How long can a tarantula live?', a: 'Over 20 years', wrong: ['About 6 months', 'About 2 years', 'About 5 years'], category: 'lifespan' },
      { text: 'Tarantulas can regrow lost legs when they molt their exoskeleton.', q: 'What happens if a tarantula loses a leg?', a: 'It can regrow the leg when it molts', wrong: ['It stays missing forever', 'It grows two in its place', 'The spider dies'], category: 'body' },
    ],
  },
  'Jumping spider': {
    status: 'LC',
    habitat: 'Almost everywhere: forests, deserts, gardens, homes',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'Some jumping spiders can leap more than 40 times their own body length.', q: 'How far can a jumping spider jump?', a: 'More than 40 times its body length', wrong: ['About twice its body length', 'About 5 times its body length', 'They cannot jump'], category: 'ability' },
      { text: 'Jumping spiders have the best vision of any spider and can see in color.', q: 'What is special about jumping spider eyes?', a: 'Best vision of any spider and can see color', wrong: ['They are completely blind', 'They can only see red', 'They have heat vision'], category: 'ability' },
      { text: 'Male jumping spiders perform elaborate dances with leg waves and body vibrations to impress females.', q: 'How do male jumping spiders attract mates?', a: 'Elaborate dances with leg waves', wrong: ['By building webs', 'By singing', 'By changing color'], category: 'behavior' },
    ],
  },
  'Wolf spider': {
    status: 'LC',
    habitat: 'Grasslands, gardens, forests, beaches',
    range: 'Worldwide',
    facts: [
      { text: 'Wolf spiders do not build webs. They chase down their prey on foot like tiny wolves.', q: 'How do wolf spiders catch their food?', a: 'They chase prey on foot (no web)', wrong: ['They build large webs', 'They set traps in the ground', 'They wait in flowers'], category: 'behavior' },
      { text: 'Mother wolf spiders carry their egg sac attached to their spinnerets, and after hatching, babies ride on her back.', q: 'How does a mother wolf spider carry her babies?', a: 'The babies ride on her back', wrong: ['She carries them in her mouth', 'She hides them in a burrow', 'She wraps them in silk'], category: 'behavior' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // CRUSTACEANS
  // ══════════════════════════════════════════════════════════════════
  'Horseshoe crab': {
    status: 'VU',
    habitat: 'Shallow coastal waters, sandy beaches',
    range: 'Atlantic coast of North America, coasts of South and Southeast Asia',
    facts: [
      { text: 'Horseshoe crabs have been around for over 450 million years, older than dinosaurs.', q: 'How old is the horseshoe crab species?', a: 'Over 450 million years (older than dinosaurs)', wrong: ['About 200 million years', 'About 65 million years', 'About 300 million years'], category: 'lifespan' },
      { text: 'Horseshoe crab blood is blue and is used in medicine to test for dangerous bacteria.', q: 'What color is horseshoe crab blood?', a: 'Blue', wrong: ['Red', 'Green', 'Clear'], category: 'body' },
      { text: 'Despite their name, horseshoe crabs are not crabs. They are more closely related to spiders and scorpions.', q: 'Are horseshoe crabs actually crabs?', a: 'No, they are more related to spiders and scorpions', wrong: ['Yes, they are true crabs', 'They are related to lobsters', 'They are related to turtles'], category: 'body' },
    ],
  },
  'Japanese spider crab': {
    status: 'DD',
    habitat: 'Deep ocean floor (150-1,000 feet deep)',
    range: 'Pacific Ocean near Japan',
    facts: [
      { text: 'The Japanese spider crab has the longest leg span of any crab, up to 12 feet across.', q: 'How wide can a Japanese spider crab\'s legs stretch?', a: 'Up to 12 feet', wrong: ['About 8 feet', 'About 6 feet', 'About 15 feet'], category: 'size' },
      { text: 'Japanese spider crabs can live for up to 100 years.', q: 'How long can a Japanese spider crab live?', a: 'Up to 100 years', wrong: ['About 5 years', 'About 20 years', 'About 50 years'], category: 'lifespan' },
    ],
  },
  'Coconut crab': {
    status: 'DD',
    habitat: 'Tropical islands, coastal areas',
    range: 'Islands across the Indian and Pacific Oceans',
    facts: [
      { text: 'The coconut crab is the largest land-living arthropod and can crack open coconuts with its claws.', q: 'What can a coconut crab crack open with its claws?', a: 'Coconuts', wrong: ['Rocks', 'Metal cans', 'Glass bottles'], category: 'ability' },
      { text: 'Coconut crabs have a grip strength 10 times stronger than a human hand.', q: 'How strong is a coconut crab\'s grip?', a: '10 times stronger than a human hand', wrong: ['About the same as a human', 'Slightly stronger than a human', '100 times stronger'], category: 'ability' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // DINOSAURS
  // ══════════════════════════════════════════════════════════════════
  'Tyrannosaurus': {
    status: 'EX',
    habitat: 'Forests and plains (Late Cretaceous, 68-66 million years ago)',
    range: 'Western North America',
    facts: [
      { text: 'T. rex had the most powerful bite of any land animal ever, strong enough to crush bone.', q: 'What was special about a T. rex bite?', a: 'The most powerful bite of any land animal ever', wrong: ['It was actually quite weak', 'About the same as a lion', 'It had no teeth'], category: 'ability' },
      { text: 'A T. rex tooth could be up to 12 inches long, about the size of a banana.', q: 'How big was a T. rex tooth?', a: 'Up to 12 inches (size of a banana)', wrong: ['About 6 inches', 'About 18 inches', 'About 4 inches'], category: 'body' },
      { text: 'T. rex arms were tiny but could still lift about 400 pounds each.', q: 'How much could a T. rex arm lift?', a: 'About 400 pounds', wrong: ['About 200 pounds', 'About 100 pounds', 'About 600 pounds'], category: 'body' },
      { text: 'T. rex had excellent vision. Scientists estimate they could see about 6 times farther than humans.', q: 'How good was T. rex vision?', a: 'About 6 times farther than humans', wrong: ['They were nearly blind', 'About the same as humans', 'About twice as far as humans'], category: 'ability' },
    ],
  },
  'Triceratops': {
    status: 'EX',
    habitat: 'Plains and forests (Late Cretaceous, 68-66 million years ago)',
    range: 'Western North America',
    facts: [
      { text: 'Triceratops had a skull up to 7 feet long, one of the largest of any land animal.', q: 'How long was a Triceratops skull?', a: 'Up to 7 feet', wrong: ['About 4 feet', 'About 10 feet', 'About 5 feet'], category: 'size' },
      { text: 'Triceratops had between 400 and 800 teeth packed into its jaws.', q: 'How many teeth did a Triceratops have?', a: '400 to 800', wrong: ['About 100 to 200', 'About 50 to 100', 'Over 1,000'], category: 'body' },
      { text: 'The name "Triceratops" means "three-horned face."', q: 'What does the name Triceratops mean?', a: 'Three-horned face', wrong: ['Three-headed lizard', 'Giant shield', 'Horned warrior'], category: 'body' },
    ],
  },
  'Velociraptor': {
    status: 'EX',
    habitat: 'Deserts and arid plains (Late Cretaceous, 75-71 million years ago)',
    range: 'Central Asia (Mongolia, China)',
    facts: [
      { text: 'Real velociraptors were only about the size of a turkey, much smaller than in the movies.', q: 'How big was a real velociraptor?', a: 'About the size of a turkey', wrong: ['About the size of a horse', 'Taller than a human', 'About the size of a bus'], category: 'size' },
      { text: 'Velociraptors had feathers, making them look more like birds than the scaly creatures in movies.', q: 'Did velociraptors have feathers?', a: 'Yes, they were covered in feathers', wrong: ['No, they had smooth scales', 'No, they had tough armor', 'Only on their heads'], category: 'body' },
      { text: 'Velociraptors lived in Asia, not North America. The larger raptors in the Jurassic Park movies are actually based on Deinonychus.', q: 'Where did real velociraptors live?', a: 'Asia (Mongolia and China)', wrong: ['North America', 'Africa', 'Europe'], category: 'habitat' },
    ],
  },
  'Stegosaurus': {
    status: 'EX',
    habitat: 'Forests and plains (Late Jurassic, 155-150 million years ago)',
    range: 'Western North America, possibly Europe and Africa',
    facts: [
      { text: 'A Stegosaurus had a brain about the size of a walnut, despite being the size of a bus.', q: 'How big was a Stegosaurus brain?', a: 'About the size of a walnut', wrong: ['About the size of a basketball', 'About the size of a grapefruit', 'About the size of a baseball'], category: 'body' },
      { text: 'The plates on a Stegosaurus\'s back were likely used to regulate body temperature, not for fighting.', q: 'What were the plates on a Stegosaurus\'s back for?', a: 'Regulating body temperature', wrong: ['Fighting other dinosaurs', 'Attracting mates with color', 'Flying short distances'], category: 'body' },
      { text: 'Stegosaurus lived about 80 million years before T. rex. More time separates them than separates T. rex from us.', q: 'Did Stegosaurus and T. rex live at the same time?', a: 'No, Stegosaurus lived 80 million years earlier', wrong: ['Yes, they were enemies', 'Yes, they lived at the same time', 'Stegosaurus came after T. rex'], category: 'lifespan' },
    ],
  },
  'Ankylosaurus': {
    status: 'EX',
    habitat: 'Forests and plains (Late Cretaceous, 68-66 million years ago)',
    range: 'Western North America',
    facts: [
      { text: 'Ankylosaurus had a massive tail club made of solid bone that could break the legs of a T. rex.', q: 'What weapon did Ankylosaurus have on its tail?', a: 'A solid bone club', wrong: ['Sharp spikes', 'A venomous stinger', 'A whip-like tail'], category: 'body' },
      { text: 'Ankylosaurus was covered in thick bony plates called osteoderms, making it like a living tank.', q: 'What covered the body of Ankylosaurus?', a: 'Thick bony armor plates', wrong: ['Feathers', 'Scales like a fish', 'Thick fur'], category: 'body' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FUNGI
  // ══════════════════════════════════════════════════════════════════
  'Cordyceps': {
    status: 'LC',
    habitat: 'Tropical forests, damp environments',
    range: 'Tropical regions worldwide, especially Asia and South America',
    facts: [
      { text: 'Cordyceps is a fungus that takes over the brains of insects and controls their bodies.', q: 'What does the cordyceps fungus do to insects?', a: 'Takes over their brains and controls their bodies', wrong: ['Makes them grow bigger', 'Gives them super speed', 'Makes them invisible'], category: 'ability' },
      { text: 'The cordyceps fungus inspired the zombie creatures in the video game and TV show "The Last of Us."', q: 'What popular show was inspired by the cordyceps fungus?', a: 'The Last of Us', wrong: ['Stranger Things', 'The Walking Dead', 'Planet Earth'], category: 'behavior' },
    ],
  },
  'Fly agaric': {
    status: 'LC',
    habitat: 'Birch and pine forests',
    range: 'Northern hemisphere (North America, Europe, Asia)',
    facts: [
      { text: 'The red and white fly agaric mushroom is one of the most recognizable mushrooms in the world.', q: 'What colors is the fly agaric mushroom?', a: 'Red with white spots', wrong: ['Blue with green spots', 'All black', 'Yellow with brown stripes'], category: 'body' },
      { text: 'Fly agaric mushrooms are poisonous to humans but are eaten by reindeer in the wild.', q: 'What animal eats fly agaric mushrooms in the wild?', a: 'Reindeer', wrong: ['Bears', 'Wolves', 'No animals eat them'], category: 'diet' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FISH (WAVE 2)
  // ══════════════════════════════════════════════════════════════════
  'Anglerfish': {
    status: 'LC',
    habitat: 'Deep ocean floors and mid-water zones, typically 200-2000 meters deep',
    range: 'All major oceans worldwide',
    facts: [
      { text: 'Female anglerfish have a glowing lure on their head that attracts prey in the pitch-black deep sea.', q: 'What do female anglerfish use to attract prey?', a: 'A glowing lure on their head', wrong: ['Bright colored scales', 'Electric pulses', 'A special scent they release'], category: 'ability' },
      { text: 'Male anglerfish are tiny compared to females and permanently fuse to the female\'s body, sharing her bloodstream.', q: 'What happens to male anglerfish when they find a female?', a: 'They fuse permanently to her body', wrong: ['They build a nest nearby', 'They swim away after mating', 'They guard her from predators'], category: 'behavior' },
      { text: 'Some anglerfish can swallow prey up to twice their own body size thanks to their expandable stomachs.', q: 'How large can prey be that an anglerfish swallows?', a: 'Up to twice their own body size', wrong: ['Half their body size', 'About the same size', 'Up to five times their body size'], category: 'diet' },
      { text: 'The anglerfish\'s lure glows because of bioluminescent bacteria that live inside it.', q: 'Why does the anglerfish\'s lure glow?', a: 'Bioluminescent bacteria living inside it', wrong: ['A chemical the fish produces', 'Reflected moonlight', 'Electricity generated by the fish'], category: 'body' },
    ],
  },
  'Archerfish': {
    status: 'LC',
    habitat: 'Brackish mangroves, estuaries, and freshwater streams',
    range: 'Southeast Asia and Northern Australia',
    facts: [
      { text: 'Archerfish shoot jets of water from their mouths to knock insects off branches above the water surface.', q: 'How do archerfish catch insects above the water?', a: 'They shoot jets of water to knock them down', wrong: ['They jump out of the water', 'They use their tails to splash', 'They spit bubbles at them'], category: 'ability' },
      { text: 'Archerfish can hit targets up to 3 meters (about 10 feet) above the water with amazing accuracy.', q: 'How far above the water can archerfish hit targets?', a: 'Up to 3 meters (about 10 feet)', wrong: ['Up to 30 centimeters (1 foot)', 'Up to 1 meter (about 3 feet)', 'Up to 6 meters (about 20 feet)'], category: 'ability' },
      { text: 'These fish adjust their aim to account for the way light bends when it passes from air to water, which is called refraction.', q: 'What optical challenge do archerfish overcome when aiming?', a: 'Light refraction between air and water', wrong: ['Blurry underwater vision', 'Color blindness', 'Glare from the sun'], category: 'ability' },
      { text: 'Young archerfish learn to improve their aim by watching older fish shoot. They get better with practice.', q: 'How do young archerfish improve their aim?', a: 'By watching older fish and practicing', wrong: ['It is perfect from birth', 'Their parents teach them one-on-one', 'They practice on floating objects'], category: 'behavior' },
    ],
  },
  'Leafy Seadragon': {
    status: 'EN',
    habitat: 'Rocky reefs, seaweed beds, and seagrass meadows',
    range: 'Southern and western coast of Australia',
    facts: [
      { text: 'Leafy seadragons have leaf-shaped extensions all over their body that make them look just like floating seaweed.', q: 'What do leafy seadragons look like in the wild?', a: 'Floating seaweed', wrong: ['Colorful coral', 'A small shark', 'A piece of driftwood'], category: 'body' },
      { text: 'Like seahorses, male leafy seadragons carry the eggs. The female deposits up to 250 eggs onto the male\'s tail.', q: 'Who carries the eggs in leafy seadragons?', a: 'The male', wrong: ['The female', 'Both parents equally', 'They leave eggs on the seafloor'], category: 'behavior' },
      { text: 'Leafy seadragons have no teeth and no stomach. They suck up tiny crustaceans whole through their tube-like snout.', q: 'How do leafy seadragons eat?', a: 'They suck up food whole through their snout', wrong: ['They chew with tiny teeth', 'They filter feed like whales', 'They use their leaf-like fins to trap food'], category: 'diet' },
    ],
  },
  'Manta Ray': {
    status: 'EN',
    habitat: 'Open ocean, coastal reefs, and around oceanic islands',
    range: 'Tropical and subtropical waters worldwide',
    facts: [
      { text: 'Giant oceanic manta rays can have a wingspan of up to 7 meters (23 feet), making them the largest rays in the world.', q: 'How wide can a giant oceanic manta ray\'s wingspan get?', a: 'Up to 7 meters (23 feet)', wrong: ['Up to 2 meters (6.5 feet)', 'Up to 4 meters (13 feet)', 'Up to 12 meters (39 feet)'], category: 'size' },
      { text: 'Manta rays have the largest brain-to-body ratio of any fish and can recognize themselves in mirrors.', q: 'What is special about manta ray brains compared to other fish?', a: 'They have the largest brain-to-body ratio', wrong: ['They have two brains', 'Their brains glow in the dark', 'They have the smallest brain-to-body ratio'], category: 'body' },
      { text: 'Each manta ray has a unique pattern of spots on its belly, like a human fingerprint.', q: 'How can scientists tell individual manta rays apart?', a: 'Unique spot patterns on their bellies', wrong: ['The shape of their fins', 'Their different sizes', 'Scars on their backs'], category: 'body' },
      { text: 'Manta rays visit "cleaning stations" on reefs where small fish eat parasites off their skin.', q: 'Why do manta rays visit cleaning stations?', a: 'To have small fish remove parasites', wrong: ['To rest and sleep', 'To find mates', 'To hide from predators'], category: 'behavior' },
    ],
  },
  'Pufferfish': {
    status: 'LC',
    habitat: 'Tropical and subtropical coastal waters, coral reefs, and some freshwater rivers',
    range: 'Warm waters worldwide, especially Indo-Pacific',
    facts: [
      { text: 'Pufferfish inflate by swallowing huge amounts of water (or air) to become a round ball that is hard for predators to eat.', q: 'How do pufferfish puff up?', a: 'By swallowing water or air', wrong: ['By filling with gas from their blood', 'By flexing special muscles', 'By holding their breath really hard'], category: 'ability' },
      { text: 'Most pufferfish contain tetrodotoxin, a poison that is up to 1,200 times more toxic than cyanide.', q: 'How toxic is pufferfish poison compared to cyanide?', a: 'Up to 1,200 times more toxic', wrong: ['About the same', 'About 10 times more toxic', 'About 100 times more toxic'], category: 'body' },
      { text: 'Male white-spotted pufferfish create stunning circular sand patterns on the ocean floor to attract females.', q: 'Why do male pufferfish create sand circles on the seafloor?', a: 'To attract females', wrong: ['To mark their territory', 'To trap prey', 'To hide from predators'], category: 'behavior' },
      { text: 'Pufferfish have four fused teeth that form a beak strong enough to crack open clams and sea urchins.', q: 'What do pufferfish use to crack open shellfish?', a: 'Four fused teeth forming a beak', wrong: ['Strong jaws with many teeth', 'Their tail fin', 'A hard plate on their forehead'], category: 'body' },
    ],
  },
  'Hammerhead Shark': {
    status: 'CR',
    habitat: 'Coastal waters, continental shelves, and open ocean',
    range: 'Tropical and warm temperate waters worldwide',
    facts: [
      { text: 'A hammerhead shark\'s wide, flat head gives it 360-degree vision, so it can see above and below itself at the same time.', q: 'What visual advantage does the hammerhead shark\'s head shape give it?', a: '360-degree vision, seeing above and below at once', wrong: ['Ability to see in the dark', 'Telescopic long-distance vision', 'Ability to see colors humans cannot'], category: 'body' },
      { text: 'Hammerhead sharks use their wide heads like a metal detector, sweeping the seafloor to find stingrays buried in the sand.', q: 'How do hammerhead sharks find stingrays hidden in sand?', a: 'They sweep the seafloor with their wide heads to detect them', wrong: ['They use echolocation like dolphins', 'They follow the stingray\'s scent trail', 'They dig with their fins'], category: 'ability' },
      { text: 'Some hammerhead species form schools of over 100 sharks during the day, which is unusual for sharks.', q: 'What unusual social behavior do hammerhead sharks show?', a: 'They form large schools of over 100 sharks', wrong: ['They hunt in pairs', 'They take turns guarding pups', 'They share food with each other'], category: 'behavior' },
    ],
  },
  'Mudskipper': {
    status: 'LC',
    habitat: 'Mudflats, mangrove swamps, and tidal zones',
    range: 'Indo-Pacific coasts, Africa, and Australia',
    facts: [
      { text: 'Mudskippers are fish that can walk on land using their strong pectoral fins like little arms.', q: 'How do mudskippers move on land?', a: 'They walk using their pectoral fins like arms', wrong: ['They slither like snakes', 'They hop like frogs', 'They roll on their sides'], category: 'ability' },
      { text: 'Mudskippers can breathe through their skin and the lining of their mouth, letting them survive out of water for days.', q: 'How can mudskippers survive out of water?', a: 'They breathe through their skin and mouth lining', wrong: ['They have tiny lungs', 'They hold water in their gills', 'They go into hibernation'], category: 'body' },
      { text: 'Male mudskippers build mud walls around their burrows and do push-ups and backflips to impress females.', q: 'How do male mudskippers attract mates?', a: 'They do push-ups and backflips', wrong: ['They sing underwater songs', 'They change colors', 'They bring food gifts'], category: 'behavior' },
    ],
  },
  'Sunfish': {
    status: 'VU',
    habitat: 'Open ocean, from surface to deep waters',
    range: 'Tropical and temperate oceans worldwide',
    facts: [
      { text: 'The ocean sunfish (mola mola) is the heaviest bony fish in the world, weighing up to 2,300 kilograms (5,000 pounds).', q: 'What record does the ocean sunfish hold?', a: 'Heaviest bony fish in the world', wrong: ['Fastest swimming fish', 'Longest living fish', 'Deepest diving fish'], category: 'size' },
      { text: 'A single ocean sunfish can produce up to 300 million eggs at a time, more than any other vertebrate on Earth.', q: 'How many eggs can a sunfish produce at once?', a: 'Up to 300 million', wrong: ['Up to 3,000', 'Up to 300,000', 'Up to 3 million'], category: 'body' },
      { text: 'Sunfish look like someone cut a regular fish in half. They have no real tail fin and instead have a rudder-like structure called a clavus.', q: 'What is unusual about a sunfish\'s tail?', a: 'It has no real tail fin, just a rudder-like clavus', wrong: ['It has two tail fins', 'Its tail is longer than its body', 'Its tail glows in the dark'], category: 'body' },
    ],
  },
  'Lionfish': {
    status: 'LC',
    habitat: 'Coral reefs, rocky crevices, and lagoons',
    range: 'Native to Indo-Pacific; invasive in Atlantic, Caribbean, and Gulf of Mexico',
    facts: [
      { text: 'Lionfish have 18 venomous spines that deliver an extremely painful sting to predators.', q: 'How many venomous spines does a lionfish have?', a: '18', wrong: ['6', '12', '24'], category: 'body' },
      { text: 'A single female lionfish can release up to 2 million eggs per year, which is why they spread so fast as an invasive species.', q: 'About how many eggs can a female lionfish release per year?', a: 'Up to 2 million', wrong: ['Up to 2,000', 'Up to 20,000', 'Up to 200,000'], category: 'behavior' },
      { text: 'Lionfish use their large fan-like fins to corner and herd small fish before striking with lightning speed.', q: 'How do lionfish use their large fins when hunting?', a: 'To corner and herd small fish', wrong: ['To swim faster than prey', 'To stir up sand and hide', 'To create water currents that stun prey'], category: 'behavior' },
    ],
  },
  'Whale Shark': {
    status: 'EN',
    habitat: 'Open ocean and coastal waters, often near the surface',
    range: 'Tropical and warm temperate seas worldwide',
    facts: [
      { text: 'The whale shark is the largest fish in the world, growing up to 18 meters (60 feet).', q: 'What is the largest fish in the world?', a: 'The whale shark', wrong: ['The great white shark', 'The blue whale', 'The manta ray'], category: 'size' },
      { text: 'Despite being the biggest fish alive, whale sharks eat only tiny plankton, fish eggs, and small fish by filter feeding.', q: 'What do whale sharks eat?', a: 'Tiny plankton, fish eggs, and small fish', wrong: ['Large fish and seals', 'Seaweed and coral', 'Squid and octopus'], category: 'diet' },
      { text: 'Each whale shark has a unique pattern of pale spots and stripes, like a human fingerprint.', q: 'How do scientists identify individual whale sharks?', a: 'By their unique spot and stripe patterns', wrong: ['By their fin shapes', 'By DNA from water samples', 'By their swimming speed'], category: 'body' },
      { text: 'Whale sharks can live to be over 100 years old, with some estimates suggesting up to 130 years.', q: 'How long can whale sharks live?', a: 'Over 100 years, possibly up to 130', wrong: ['About 20-30 years', 'About 40-50 years', 'About 60-70 years'], category: 'lifespan' },
    ],
  },
  'Sawfish': {
    status: 'CR',
    habitat: 'Shallow coastal waters, estuaries, river mouths, and freshwater rivers',
    range: 'Tropical and subtropical Atlantic, Indo-Pacific (range severely reduced)',
    facts: [
      { text: 'Sawfish have a long, flat snout lined with sharp teeth-like structures that they use like a sword to slash through schools of fish.', q: 'How do sawfish use their saw-like snout?', a: 'They slash through schools of fish to stun and catch them', wrong: ['They dig for buried shellfish', 'They cut through seaweed', 'They fight other sawfish for territory'], category: 'ability' },
      { text: 'Sawfish can also detect the electric fields of hidden prey using special sensors in their saw, similar to sharks.', q: 'What hidden ability does the sawfish\'s snout have?', a: 'It can detect the electric fields of prey', wrong: ['It can sense water temperature changes', 'It can produce sounds to stun prey', 'It can smell prey from miles away'], category: 'ability' },
      { text: 'Sawfish are among the most endangered fish in the world. All five species are listed as Critically Endangered or Endangered.', q: 'How many of the five sawfish species are threatened with extinction?', a: 'All five', wrong: ['Just one', 'Two of the five', 'Three of the five'], category: 'habitat' },
    ],
  },
  'Stoplight Loosejaw': {
    status: 'LC',
    habitat: 'Deep ocean, 500-1,500 meters below the surface',
    range: 'Worldwide in deep tropical and temperate oceans',
    facts: [
      { text: 'The stoplight loosejaw produces red light from organs below its eyes, which is invisible to most deep-sea creatures, giving it a secret spotlight.', q: 'Why is the stoplight loosejaw\'s red light useful for hunting?', a: 'Most deep-sea creatures cannot see red light', wrong: ['Red light travels farther underwater', 'Red light attracts prey', 'Red light blinds predators'], category: 'ability' },
      { text: 'Its lower jaw has no skin or floor connecting the two sides, making it look like a bare skeleton when it opens its mouth.', q: 'What is unusual about the stoplight loosejaw\'s lower jaw?', a: 'It has no skin or floor connecting the two sides', wrong: ['It can unhinge completely', 'It has three rows of teeth', 'It glows green in the dark'], category: 'body' },
    ],
  },
  'Flying Fish': {
    status: 'LC',
    habitat: 'Open ocean surface waters',
    range: 'Tropical and warm temperate oceans worldwide',
    facts: [
      { text: 'Flying fish can glide through the air for distances of over 200 meters (650 feet) to escape predators.', q: 'How far can flying fish glide through the air?', a: 'Over 200 meters (650 feet)', wrong: ['About 5 meters (16 feet)', 'About 20 meters (65 feet)', 'Over 1 kilometer (3,280 feet)'], category: 'ability' },
      { text: 'They launch themselves out of the water at speeds up to 60 kilometers per hour (37 mph).', q: 'How fast can flying fish launch out of the water?', a: 'Up to 60 km/h (37 mph)', wrong: ['Up to 10 km/h (6 mph)', 'Up to 30 km/h (19 mph)', 'Up to 100 km/h (62 mph)'], category: 'speed' },
      { text: 'Flying fish can stay airborne for up to 45 seconds in a single glide, skimming just above the waves.', q: 'How long can flying fish stay in the air during one glide?', a: 'Up to 45 seconds', wrong: ['Up to 3 seconds', 'Up to 10 seconds', 'Up to 2 minutes'], category: 'ability' },
    ],
  },
  'Barreleye Fish': {
    status: 'LC',
    habitat: 'Deep ocean, 200-800 meters below the surface',
    range: 'North Pacific Ocean',
    facts: [
      { text: 'The barreleye fish has a completely transparent head, and you can see its brain and tubular green eyes right through its skull.', q: 'What is most unusual about the barreleye fish\'s head?', a: 'It is completely transparent', wrong: ['It glows bright blue', 'It is shaped like a hammer', 'It is covered in sharp spines'], category: 'body' },
      { text: 'Its tubular eyes point upward to spot the silhouettes of prey above it, but they can also rotate forward to look ahead.', q: 'Which direction do the barreleye\'s eyes normally point?', a: 'Upward', wrong: ['Forward', 'Downward', 'Sideways'], category: 'body' },
      { text: 'Scientists think the transparent shield protects the barreleye\'s eyes from the stinging cells of jellyfish.', q: 'Why might the barreleye fish have a transparent head shield?', a: 'To protect its eyes from jellyfish stings', wrong: ['To let more light reach its brain', 'To make it invisible to predators', 'To help regulate its body temperature'], category: 'body' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // INSECTS & ARACHNIDS (WAVE 2)
  // ══════════════════════════════════════════════════════════════════
  'Bombardier Beetle': {
    status: 'LC',
    habitat: 'Woodlands, grasslands, and under rocks or logs',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'Bombardier beetles spray boiling-hot toxic chemicals from their abdomen at predators. The spray reaches nearly 100 degrees Celsius (212 degrees Fahrenheit).', q: 'How hot is the bombardier beetle\'s defensive spray?', a: 'Nearly 100 degrees Celsius (212 degrees Fahrenheit)', wrong: ['About 40 degrees Celsius (104 degrees Fahrenheit)', 'About 60 degrees Celsius (140 degrees Fahrenheit)', 'About 200 degrees Celsius (392 degrees Fahrenheit)'], category: 'ability' },
      { text: 'The spray can pulse up to 500 times per second, creating a machine-gun-like effect.', q: 'How fast can the bombardier beetle\'s spray pulse?', a: 'Up to 500 times per second', wrong: ['About 5 times per second', 'About 50 times per second', 'About 5,000 times per second'], category: 'ability' },
      { text: 'The beetle can aim the spray in almost any direction by rotating the tip of its abdomen like a turret.', q: 'How does the bombardier beetle aim its spray?', a: 'By rotating the tip of its abdomen like a turret', wrong: ['By turning its whole body around', 'By tilting its head', 'It cannot aim and sprays randomly'], category: 'body' },
    ],
  },
  'Atlas Moth': {
    status: 'LC',
    habitat: 'Tropical and subtropical forests',
    range: 'Southeast Asia, southern China, and the Malay Archipelago',
    facts: [
      { text: 'The atlas moth is one of the largest insects in the world, with a wingspan of up to 30 centimeters (nearly 12 inches).', q: 'How large is the atlas moth\'s wingspan?', a: 'Up to 30 centimeters (nearly 12 inches)', wrong: ['Up to 5 centimeters (2 inches)', 'Up to 15 centimeters (6 inches)', 'Up to 60 centimeters (24 inches)'], category: 'size' },
      { text: 'Adult atlas moths have no mouths. They cannot eat and survive only on fat stored from their caterpillar stage, living just 1-2 weeks.', q: 'Why can\'t adult atlas moths eat?', a: 'They have no mouths', wrong: ['Their tongue is too short', 'They are allergic to all food', 'They only drink water'], category: 'body' },
      { text: 'The tips of the atlas moth\'s wings look remarkably like snake heads, which helps scare off birds.', q: 'What do the wing tips of an atlas moth resemble?', a: 'Snake heads', wrong: ['Owl eyes', 'Wasp stingers', 'Scorpion tails'], category: 'body' },
    ],
  },
  'Orchid Mantis': {
    status: 'LC',
    habitat: 'Tropical rainforest canopy and flowering plants',
    range: 'Southeast Asia, particularly Malaysia and Indonesia',
    facts: [
      { text: 'The orchid mantis looks so much like a flower that pollinating insects actually come to it, thinking it is a real orchid.', q: 'Why do insects fly toward the orchid mantis?', a: 'They mistake it for a real flower', wrong: ['They are attracted by a chemical scent', 'They are trying to escape a predator', 'The mantis uses a light to lure them'], category: 'ability' },
      { text: 'Studies have shown that the orchid mantis attracts even more pollinators than real flowers do.', q: 'How does the orchid mantis compare to real flowers at attracting insects?', a: 'It attracts even more pollinators', wrong: ['It attracts about the same number', 'It attracts far fewer insects', 'It only attracts flies, not bees'], category: 'ability' },
      { text: 'The orchid mantis can change color between white and pink over several days to match the flowers around it.', q: 'What colors can the orchid mantis change between?', a: 'White and pink', wrong: ['Green and brown', 'Blue and yellow', 'Red and orange'], category: 'body' },
    ],
  },
  'Hercules Beetle': {
    status: 'LC',
    habitat: 'Tropical rainforests, on the forest floor and in rotting wood',
    range: 'Central and South America, Caribbean islands',
    facts: [
      { text: 'The Hercules beetle is one of the strongest animals on Earth relative to its size, able to carry up to 850 times its own body weight.', q: 'How much weight can a Hercules beetle carry compared to its body weight?', a: 'Up to 850 times its own weight', wrong: ['Up to 10 times its own weight', 'Up to 100 times its own weight', 'Up to 5,000 times its own weight'], category: 'ability' },
      { text: 'Including its horn, the Hercules beetle can be up to 17 centimeters (nearly 7 inches) long, making it the longest beetle species.', q: 'How long can a Hercules beetle get including its horn?', a: 'Up to 17 centimeters (nearly 7 inches)', wrong: ['Up to 5 centimeters (2 inches)', 'Up to 10 centimeters (4 inches)', 'Up to 30 centimeters (12 inches)'], category: 'size' },
      { text: 'The Hercules beetle\'s wing covers change color from greenish-yellow to black when the humidity is high.', q: 'What causes a Hercules beetle\'s shell to change color?', a: 'Changes in humidity', wrong: ['Changes in temperature', 'Their mood', 'The time of day'], category: 'body' },
    ],
  },
  'Leafcutter Ant': {
    status: 'LC',
    habitat: 'Tropical and subtropical forests and grasslands',
    range: 'Southern United States through Central and South America',
    facts: [
      { text: 'Leafcutter ants do not eat the leaves they carry. They use them to grow a special fungus underground, which is their actual food.', q: 'What do leafcutter ants do with the leaves they carry?', a: 'They use them to grow fungus, which they eat', wrong: ['They eat the leaves directly', 'They use them to build their nest walls', 'They feed them to their larvae'], category: 'diet' },
      { text: 'A leafcutter ant colony can have over 8 million members and their underground nests can be the size of a house.', q: 'How many ants can be in a single leafcutter colony?', a: 'Over 8 million', wrong: ['About 1,000', 'About 50,000', 'About 500,000'], category: 'behavior' },
      { text: 'These ants have been farming fungus for over 50 million years, long before humans invented agriculture.', q: 'How long have leafcutter ants been farming fungus?', a: 'Over 50 million years', wrong: ['About 1 million years', 'About 10,000 years', 'About 5 million years'], category: 'behavior' },
    ],
  },
  'Dragonfly': {
    status: 'LC',
    habitat: 'Near freshwater ponds, lakes, streams, and wetlands',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'Dragonflies catch over 95% of the prey they chase, making them one of the most efficient hunters in the animal kingdom.', q: 'What percentage of prey do dragonflies successfully catch?', a: 'Over 95%', wrong: ['About 25%', 'About 50%', 'About 75%'], category: 'ability' },
      { text: 'Dragonflies can fly in all six directions: up, down, forward, backward, and side to side, and they can hover in place.', q: 'How many directions can dragonflies fly?', a: 'Six: up, down, forward, backward, and side to side', wrong: ['Two: forward and backward', 'Three: forward, backward, and up', 'Four: forward, backward, up, and down'], category: 'ability' },
      { text: 'Dragonflies have been around for about 300 million years. Ancient dragonflies had wingspans of up to 70 centimeters (28 inches).', q: 'How wide were the wings of ancient dragonflies?', a: 'Up to 70 centimeters (28 inches)', wrong: ['Up to 10 centimeters (4 inches)', 'Up to 30 centimeters (12 inches)', 'Up to 2 meters (6.5 feet)'], category: 'size' },
      { text: 'A dragonfly\'s eyes have up to 30,000 tiny lenses each, giving them nearly 360-degree vision.', q: 'How many tiny lenses can each dragonfly eye have?', a: 'Up to 30,000', wrong: ['About 100', 'About 1,000', 'About 10,000'], category: 'body' },
    ],
  },
  'Dung Beetle': {
    status: 'LC',
    habitat: 'Grasslands, forests, deserts, and farmland',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'Dung beetles are the only known insects that navigate using the Milky Way. They use the galaxy\'s glow to roll their dung balls in a straight line at night.', q: 'What do dung beetles use to navigate at night?', a: 'The Milky Way', wrong: ['The moon', 'Earth\'s magnetic field', 'The North Star'], category: 'ability' },
      { text: 'The horned dung beetle can pull 1,141 times its own body weight, making it the strongest insect in the world.', q: 'How much can the world\'s strongest dung beetle pull?', a: '1,141 times its own body weight', wrong: ['10 times its own body weight', '100 times its own body weight', '500 times its own body weight'], category: 'ability' },
      { text: 'Ancient Egyptians worshipped the scarab beetle (a type of dung beetle) as a symbol of the sun god Ra.', q: 'What did ancient Egyptians associate dung beetles with?', a: 'The sun god Ra', wrong: ['The river Nile', 'The god of death', 'The moon goddess'], category: 'behavior' },
    ],
  },
  'Goliath Beetle': {
    status: 'LC',
    habitat: 'Tropical forests, particularly in tree canopies',
    range: 'Equatorial Africa',
    facts: [
      { text: 'Goliath beetles are among the heaviest insects alive, with larvae weighing up to 100 grams (3.5 ounces).', q: 'How heavy can Goliath beetle larvae get?', a: 'Up to 100 grams (3.5 ounces)', wrong: ['Up to 5 grams (0.2 ounces)', 'Up to 25 grams (0.9 ounces)', 'Up to 500 grams (1.1 pounds)'], category: 'size' },
      { text: 'Adult Goliath beetles can be up to 11 centimeters (4.3 inches) long and can fly despite their heavy bodies.', q: 'Can Goliath beetles fly?', a: 'Yes, despite their heavy bodies', wrong: ['No, they are too heavy', 'Only the females can fly', 'Only for a few seconds at a time'], category: 'ability' },
      { text: 'Male Goliath beetles have a Y-shaped horn on their head that they use in battles with other males.', q: 'What shape is the horn on a male Goliath beetle\'s head?', a: 'Y-shaped', wrong: ['Straight spike', 'V-shaped', 'Curved hook'], category: 'body' },
    ],
  },
  'Giant Water Bug': {
    status: 'LC',
    habitat: 'Freshwater ponds, streams, and marshes',
    range: 'Worldwide in tropical and temperate regions',
    facts: [
      { text: 'Giant water bugs can grow up to 12 centimeters (nearly 5 inches) long, making them one of the largest insects in the world.', q: 'How big can giant water bugs get?', a: 'Up to 12 centimeters (nearly 5 inches)', wrong: ['Up to 2 centimeters (1 inch)', 'Up to 5 centimeters (2 inches)', 'Up to 25 centimeters (10 inches)'], category: 'size' },
      { text: 'These fierce hunters can catch and eat fish, frogs, and even small snakes by injecting them with digestive saliva.', q: 'What surprising animals can giant water bugs eat?', a: 'Fish, frogs, and even small snakes', wrong: ['Only mosquito larvae', 'Only other insects', 'Only tadpoles'], category: 'diet' },
      { text: 'Their bite is considered one of the most painful of any insect, earning them the nickname "toe-biters."', q: 'What is the common nickname for giant water bugs?', a: 'Toe-biters', wrong: ['Ankle-snappers', 'Water wasps', 'Pond piranhas'], category: 'body' },
    ],
  },
  'Peacock Spider': {
    status: 'LC',
    habitat: 'Leaf litter, ground cover, and low vegetation',
    range: 'Australia',
    facts: [
      { text: 'Male peacock spiders perform an elaborate dance, waving brightly colored belly flaps and their third pair of legs to impress females.', q: 'How do male peacock spiders try to attract mates?', a: 'By dancing and waving brightly colored belly flaps', wrong: ['By building elaborate webs', 'By singing ultrasonic songs', 'By bringing food gifts'], category: 'behavior' },
      { text: 'Peacock spiders are tiny, usually only 4-5 millimeters long, smaller than a grain of rice.', q: 'How big is a peacock spider?', a: 'Only 4-5 millimeters, smaller than a grain of rice', wrong: ['About 2 centimeters (1 inch)', 'About 5 centimeters (2 inches)', 'About 1 centimeter (0.4 inches)'], category: 'size' },
      { text: 'If a female is not impressed by the male\'s dance, she may try to attack and eat him.', q: 'What can happen if a female peacock spider rejects a male?', a: 'She may attack and eat him', wrong: ['She signals for a different male', 'She simply walks away', 'She destroys his web'], category: 'behavior' },
    ],
  },
  'Jewel Wasp': {
    status: 'LC',
    habitat: 'Tropical and subtropical regions, often near human dwellings',
    range: 'Africa, South Asia, Pacific Islands',
    facts: [
      { text: 'The jewel wasp turns cockroaches into zombies. It stings the roach\'s brain in a precise spot that removes its willpower to escape.', q: 'What does the jewel wasp\'s sting do to a cockroach\'s brain?', a: 'Removes its willpower to escape, making it a zombie', wrong: ['Kills it instantly', 'Puts it to sleep', 'Makes it run in circles'], category: 'ability' },
      { text: 'After zombifying the cockroach, the wasp leads it into a burrow by pulling its antenna, like walking a dog on a leash.', q: 'How does the jewel wasp move the zombified cockroach?', a: 'By pulling its antenna like a leash', wrong: ['By carrying it on its back', 'By pushing it from behind', 'By flying it through the air'], category: 'behavior' },
      { text: 'The jewel wasp has a beautiful metallic blue-green body that shimmers in the light.', q: 'What color is the jewel wasp?', a: 'Metallic blue-green', wrong: ['Bright yellow and black', 'Dark red and orange', 'Pure black'], category: 'body' },
    ],
  },
  'Periodical Cicada': {
    status: 'LC',
    habitat: 'Deciduous forests and woodlands',
    range: 'Eastern United States',
    facts: [
      { text: 'Periodical cicadas spend either 13 or 17 years underground as nymphs before emerging as adults.', q: 'How long do periodical cicadas live underground?', a: 'Either 13 or 17 years', wrong: ['1-2 years', '5-7 years', '25-30 years'], category: 'lifespan' },
      { text: 'When they emerge, they come out in groups of billions, with up to 1.5 million cicadas per acre in some areas.', q: 'How many cicadas can emerge per acre?', a: 'Up to 1.5 million', wrong: ['About 100', 'About 10,000', 'About 100,000'], category: 'behavior' },
      { text: 'Scientists believe they emerge in prime-numbered years (13 and 17) to avoid syncing up with predators that have shorter life cycles.', q: 'Why do scientists think cicadas emerge in prime-numbered years?', a: 'To avoid syncing with predator life cycles', wrong: ['Because of moon cycles', 'Because of temperature patterns', 'Because trees need that long to recover'], category: 'behavior' },
    ],
  },
  'Titan Beetle': {
    status: 'DD',
    habitat: 'Tropical rainforests',
    range: 'Amazon rainforest in South America',
    facts: [
      { text: 'The titan beetle is one of the largest beetles on Earth, growing up to 17 centimeters (6.7 inches) long.', q: 'How large can a titan beetle grow?', a: 'Up to 17 centimeters (6.7 inches)', wrong: ['Up to 5 centimeters (2 inches)', 'Up to 10 centimeters (4 inches)', 'Up to 30 centimeters (12 inches)'], category: 'size' },
      { text: 'Adult titan beetles do not eat. They live off energy stored from their larval stage and focus only on finding a mate.', q: 'What do adult titan beetles eat?', a: 'Nothing. They do not eat as adults.', wrong: ['Tree bark', 'Other insects', 'Rotting fruit'], category: 'diet' },
      { text: 'Their jaws are so powerful they can snap a wooden pencil in half.', q: 'How strong are a titan beetle\'s jaws?', a: 'Strong enough to snap a pencil in half', wrong: ['About as strong as a grasshopper', 'Strong enough to crack a walnut', 'Strong enough to cut through metal'], category: 'body' },
      { text: 'No one has ever found a titan beetle larva in the wild. Scientists think they may develop inside large trees for several years.', q: 'What is mysterious about titan beetle larvae?', a: 'None have ever been found in the wild', wrong: ['They glow in the dark', 'They live underwater', 'They can fly before becoming adults'], category: 'behavior' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // OCEAN INVERTEBRATES (WAVE 2)
  // ══════════════════════════════════════════════════════════════════
  'Blue-Ringed Octopus': {
    status: 'LC',
    habitat: 'Shallow coral reefs, tide pools, and rocky shores',
    range: 'Pacific and Indian Oceans, especially Australia and Japan',
    facts: [
      { text: 'The blue-ringed octopus is one of the most venomous animals in the ocean. It carries enough venom to kill 26 adults in minutes.', q: 'How many adults could one blue-ringed octopus\'s venom potentially kill?', a: '26', wrong: ['1', '5', '10'], category: 'ability' },
      { text: 'This octopus is tiny, about the size of a golf ball, making it easy to miss on the reef.', q: 'How big is a blue-ringed octopus?', a: 'About the size of a golf ball', wrong: ['About the size of a basketball', 'About the size of a dinner plate', 'About the size of a football'], category: 'size' },
      { text: 'Its bright blue rings only appear when it is threatened. Normally, it is camouflaged in sandy brown or yellow colors.', q: 'When do the blue-ringed octopus\'s rings appear?', a: 'When it feels threatened', wrong: ['All the time', 'Only at night', 'Only during mating season'], category: 'body' },
    ],
  },
  'Nautilus': {
    status: 'VU',
    habitat: 'Deep coral reef slopes, usually between 150-600 meters deep',
    range: 'Indo-Pacific, from the Andaman Sea to Fiji',
    facts: [
      { text: 'Nautiluses are living fossils. They have existed for over 500 million years and survived all five major mass extinctions.', q: 'How long have nautiluses existed?', a: 'Over 500 million years', wrong: ['About 10 million years', 'About 50 million years', 'About 200 million years'], category: 'lifespan' },
      { text: 'A nautilus has up to 90 tentacles, far more than an octopus (8) or squid (10), but none of them have suckers.', q: 'How many tentacles can a nautilus have?', a: 'Up to 90', wrong: ['8', '10', '20'], category: 'body' },
      { text: 'The nautilus controls its buoyancy by pumping gas and fluid in and out of the chambers in its spiral shell, like a submarine.', q: 'How does a nautilus control whether it floats or sinks?', a: 'By pumping gas and fluid in its shell chambers', wrong: ['By flapping its tentacles', 'By swallowing or spitting out water', 'By inflating its body'], category: 'ability' },
    ],
  },
  'Sea Cucumber': {
    status: 'LC',
    habitat: 'Ocean floor, from shallow tide pools to deep sea trenches',
    range: 'All oceans worldwide',
    facts: [
      { text: 'When threatened, some sea cucumbers eject their own internal organs to confuse predators, then regrow them later.', q: 'What do some sea cucumbers do when attacked?', a: 'Eject their internal organs and regrow them later', wrong: ['Release a cloud of ink', 'Curl into a ball', 'Bury themselves in sand instantly'], category: 'ability' },
      { text: 'Sea cucumbers breathe through their rear end. They pump water in and out for oxygen exchange.', q: 'How do sea cucumbers breathe?', a: 'Through their rear end', wrong: ['Through gills on their sides', 'Through their skin all over', 'Through a blowhole on top'], category: 'body' },
      { text: 'Some species can liquify their bodies to squeeze through tiny gaps, then solidify again on the other side.', q: 'What amazing physical ability do some sea cucumbers have?', a: 'They can liquify and then resolidify their bodies', wrong: ['They can change color instantly', 'They can inflate to 10 times their size', 'They can produce electricity'], category: 'ability' },
    ],
  },
  'Portuguese Man o\' War': {
    status: 'LC',
    habitat: 'Open ocean surface, driven by wind and currents',
    range: 'Atlantic, Indian, and Pacific Oceans, warm and tropical seas',
    facts: [
      { text: 'The Portuguese man o\' war is not a single animal. It is a colony of four different types of tiny organisms called polyps.', q: 'What is a Portuguese man o\' war?', a: 'A colony of four types of organisms working together', wrong: ['A single large jellyfish', 'A type of floating sea slug', 'Two animals living in symbiosis'], category: 'body' },
      { text: 'Its tentacles can extend up to 50 meters (165 feet) below the surface, longer than a blue whale.', q: 'How long can a Portuguese man o\' war\'s tentacles get?', a: 'Up to 50 meters (165 feet)', wrong: ['Up to 1 meter (3 feet)', 'Up to 5 meters (16 feet)', 'Up to 15 meters (49 feet)'], category: 'size' },
      { text: 'Its sting is incredibly painful and can still sting even weeks after the animal has died and washed ashore.', q: 'Can a dead Portuguese man o\' war still sting you?', a: 'Yes, even weeks after death', wrong: ['No, the venom breaks down immediately', 'Only for about 5 minutes after death', 'Only if touched within 1 hour'], category: 'ability' },
    ],
  },
  'Giant Pacific Octopus': {
    status: 'LC',
    habitat: 'Rocky reefs, kelp forests, and caves in cold waters',
    range: 'North Pacific Ocean, from Alaska to California and across to Japan',
    facts: [
      { text: 'The giant Pacific octopus is the largest octopus species, with an arm span of up to 6 meters (20 feet).', q: 'How wide can a giant Pacific octopus\'s arm span reach?', a: 'Up to 6 meters (20 feet)', wrong: ['Up to 1 meter (3 feet)', 'Up to 3 meters (10 feet)', 'Up to 12 meters (40 feet)'], category: 'size' },
      { text: 'Giant Pacific octopuses have been observed opening screw-top jars from the inside to escape.', q: 'What have giant Pacific octopuses been seen doing in captivity?', a: 'Opening screw-top jars from the inside', wrong: ['Stacking colored blocks', 'Drawing pictures with ink', 'Turning light switches on and off'], category: 'ability' },
      { text: 'They have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.', q: 'How many hearts does a giant Pacific octopus have?', a: 'Three', wrong: ['One', 'Two', 'Five'], category: 'body' },
    ],
  },
  'Giant Isopod': {
    status: 'LC',
    habitat: 'Deep ocean floor, 170-2,100 meters below the surface',
    range: 'Atlantic, Pacific, and Indian Oceans',
    facts: [
      { text: 'Giant isopods are basically enormous deep-sea relatives of the pill bugs (roly-polies) you find in your garden.', q: 'What common backyard creature are giant isopods related to?', a: 'Pill bugs (roly-polies)', wrong: ['Earthworms', 'Garden snails', 'Ladybugs'], category: 'body' },
      { text: 'They can grow up to 50 centimeters (20 inches) long, about the size of a football.', q: 'How big can a giant isopod get?', a: 'Up to 50 centimeters (20 inches)', wrong: ['Up to 5 centimeters (2 inches)', 'Up to 15 centimeters (6 inches)', 'Up to 1 meter (3 feet)'], category: 'size' },
      { text: 'Giant isopods can go over 5 years without eating. One in a Japanese aquarium refused food for 1,869 days.', q: 'How long can a giant isopod survive without food?', a: 'Over 5 years', wrong: ['About 2 weeks', 'About 3 months', 'About 1 year'], category: 'diet' },
    ],
  },
  'Mimic Octopus': {
    status: 'LC',
    habitat: 'Sandy bottoms and muddy estuaries in shallow tropical waters',
    range: 'Indo-Pacific, especially Indonesia and the Great Barrier Reef',
    facts: [
      { text: 'The mimic octopus can impersonate at least 15 different species, including lionfish, flatfish, sea snakes, and jellyfish.', q: 'How many species can the mimic octopus impersonate?', a: 'At least 15', wrong: ['Only 2', 'About 5', 'About 8'], category: 'ability' },
      { text: 'It changes not just its color and texture, but also its shape and behavior to match whichever animal it is copying.', q: 'What does the mimic octopus change when impersonating another animal?', a: 'Color, texture, shape, and behavior', wrong: ['Only its color', 'Only its shape', 'Only its color and texture'], category: 'ability' },
      { text: 'It appears to choose which animal to mimic based on which predator is threatening it, suggesting strategic decision-making.', q: 'How does the mimic octopus decide which animal to imitate?', a: 'Based on which specific predator is threatening it', wrong: ['It always mimics the same animal', 'It changes randomly', 'It copies the closest animal it can see'], category: 'behavior' },
    ],
  },
  'Cuttlefish': {
    status: 'LC',
    habitat: 'Shallow coastal waters, coral reefs, and sandy or muddy bottoms',
    range: 'Eastern Atlantic, Mediterranean, Indo-Pacific (not found in the Americas)',
    facts: [
      { text: 'Cuttlefish can change color, pattern, and texture in less than a second using millions of special skin cells called chromatophores.', q: 'How fast can cuttlefish change their appearance?', a: 'In less than a second', wrong: ['In about 10 seconds', 'In about a minute', 'In about an hour'], category: 'ability' },
      { text: 'Cuttlefish have W-shaped pupils that give them the ability to see behind themselves without turning around.', q: 'What unusual shape are cuttlefish pupils?', a: 'W-shaped', wrong: ['Round', 'Slit-shaped like a cat', 'Square like a goat'], category: 'body' },
      { text: 'They have green-blue blood because it uses copper instead of the iron in human blood.', q: 'Why is cuttlefish blood green-blue?', a: 'It uses copper instead of iron', wrong: ['Because of the food they eat', 'Because of chemicals in seawater', 'Because they have no red blood cells'], category: 'body' },
      { text: 'Cuttlefish can hypnotize prey by rapidly pulsing color waves across their body, stunning small crabs and fish before striking.', q: 'How do cuttlefish stun their prey?', a: 'By rapidly pulsing color waves across their body', wrong: ['By using electric shocks', 'By spraying ink at them', 'By making loud clicking sounds'], category: 'ability' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // OTHER AMAZING CREATURES (WAVE 2)
  // ══════════════════════════════════════════════════════════════════
  'Tardigrade': {
    status: 'LC',
    habitat: 'Everywhere: moss, leaf litter, ocean sediment, freshwater, even Antarctic ice',
    range: 'Worldwide, from mountain peaks to deep oceans',
    facts: [
      { text: 'Tardigrades (also called water bears) can survive in the vacuum of outer space, withstanding radiation and temperatures near absolute zero.', q: 'Where have tardigrades been proven to survive?', a: 'In the vacuum of outer space', wrong: ['Only in deep oceans', 'Only in hot springs', 'Only in Antarctic ice'], category: 'ability' },
      { text: 'They can survive being dried out for decades. When water returns, they come back to life.', q: 'What happens when a dried-out tardigrade gets water again?', a: 'It comes back to life', wrong: ['It dissolves', 'It stays dead', 'It grows into a new organism'], category: 'ability' },
      { text: 'Tardigrades are microscopic, only about 0.5 millimeters long. You need a microscope to see them clearly.', q: 'How big is a tardigrade?', a: 'About 0.5 millimeters, needing a microscope to see', wrong: ['About 1 centimeter, visible to the eye', 'About 5 centimeters, like a grape', 'About the size of an ant'], category: 'size' },
      { text: 'In 2019, thousands of tardigrades crash-landed on the Moon when an Israeli spacecraft crashed. They may still be there, dormant.', q: 'How did tardigrades end up on the Moon?', a: 'An Israeli spacecraft carrying them crashed on the lunar surface', wrong: ['NASA placed them there on purpose', 'They traveled there on a meteorite', 'They were launched by a Russian experiment'], category: 'habitat' },
    ],
  },
  'Naked Mole-Rat': {
    status: 'LC',
    habitat: 'Underground burrow systems in dry grasslands and savannas',
    range: 'East Africa: Ethiopia, Kenya, and Somalia',
    facts: [
      { text: 'Naked mole-rats are the only cold-blooded mammals. They cannot regulate their own body temperature.', q: 'What makes naked mole-rats unique among mammals?', a: 'They are the only cold-blooded mammals', wrong: ['They are the only mammals that lay eggs', 'They are the only mammals without hair', 'They are the only mammals that live underground'], category: 'body' },
      { text: 'They live in colonies with a queen, like bees or ants. The queen is the only female that has babies.', q: 'How is a naked mole-rat colony organized?', a: 'With a queen, like bees or ants', wrong: ['With a male leader', 'With no hierarchy at all', 'With rotating leadership'], category: 'behavior' },
      { text: 'Naked mole-rats are almost completely resistant to cancer. Scientists study them to understand why.', q: 'What disease are naked mole-rats nearly immune to?', a: 'Cancer', wrong: ['Malaria', 'The common cold', 'Heart disease'], category: 'body' },
      { text: 'They can survive up to 18 minutes without oxygen by switching their metabolism to use fructose, like a plant.', q: 'How long can naked mole-rats survive without oxygen?', a: 'Up to 18 minutes', wrong: ['About 30 seconds', 'About 2 minutes', 'About 5 minutes'], category: 'ability' },
      { text: 'Naked mole-rats can live over 30 years, extraordinary for a rodent. Most similar-sized rodents live only 2-3 years.', q: 'How long can naked mole-rats live?', a: 'Over 30 years', wrong: ['About 2-3 years', 'About 5-8 years', 'About 15 years'], category: 'lifespan' },
    ],
  },
  'Pistol Shrimp': {
    status: 'LC',
    habitat: 'Coral reefs, oyster beds, seagrass, and rocky shores',
    range: 'Tropical and subtropical oceans worldwide',
    facts: [
      { text: 'The pistol shrimp snaps its claw so fast that it creates a bubble that collapses with a bang reaching 218 decibels, louder than a gunshot.', q: 'How loud is a pistol shrimp\'s snap?', a: '218 decibels, louder than a gunshot', wrong: ['About 50 decibels, like a quiet conversation', 'About 100 decibels, like a motorcycle', 'About 140 decibels, like a jet engine'], category: 'ability' },
      { text: 'The collapsing bubble also produces a flash of light and temperatures close to the surface of the sun.', q: 'How hot does the pistol shrimp\'s bubble get?', a: 'Nearly 4,700 degrees Celsius, close to the sun\'s surface', wrong: ['About 100 degrees Celsius, like boiling water', 'About 500 degrees Celsius, like an oven', 'About 1,000 degrees Celsius, like lava'], category: 'ability' },
      { text: 'Pistol shrimp are only about 3-5 centimeters (1-2 inches) long, but their snap can stun or kill small fish.', q: 'How big is a pistol shrimp?', a: 'Only about 3-5 centimeters (1-2 inches)', wrong: ['About 15 centimeters (6 inches)', 'About 30 centimeters (12 inches)', 'About 1 centimeter (half an inch)'], category: 'size' },
    ],
  },
  'Vampire Squid': {
    status: 'LC',
    habitat: 'Deep ocean oxygen minimum zones, 600-1,200 meters below the surface',
    range: 'Tropical and temperate deep oceans worldwide',
    facts: [
      { text: 'Despite its scary name, the vampire squid does not suck blood. It eats "marine snow," tiny bits of dead organisms that drift down from above.', q: 'What does the vampire squid actually eat?', a: 'Marine snow (tiny bits of dead organisms drifting down)', wrong: ['Blood from fish', 'Live shrimp and small fish', 'Deep-sea worms'], category: 'diet' },
      { text: 'The vampire squid has the largest eyes relative to body size of any animal.', q: 'What body part is disproportionately large on a vampire squid?', a: 'Its eyes', wrong: ['Its tentacles', 'Its beak', 'Its fins'], category: 'body' },
      { text: 'When threatened, the vampire squid turns inside out, wrapping its webbed arms over its body to show spiny-looking projections.', q: 'What defensive move does the vampire squid use?', a: 'It turns inside out to show spiny projections', wrong: ['It squirts ink like other squid', 'It flashes bright colors', 'It detaches a tentacle as a decoy'], category: 'behavior' },
      { text: 'The vampire squid is neither a true squid nor an octopus. It is the only surviving member of its own ancient order.', q: 'Is the vampire squid a true squid?', a: 'No, it is the only member of its own ancient order', wrong: ['Yes, it is a type of deep-sea squid', 'No, it is actually an octopus', 'No, it is more closely related to jellyfish'], category: 'body' },
    ],
  },
  'Honey Fungus': {
    status: 'LC',
    habitat: 'Forests, woodlands, and gardens, growing on and around tree roots',
    range: 'Temperate regions worldwide',
    facts: [
      { text: 'The largest living organism on Earth is a honey fungus in Oregon\'s Blue Mountains. It covers about 9.6 square kilometers (3.7 square miles).', q: 'Where is the world\'s largest living organism?', a: 'Oregon\'s Blue Mountains (a honey fungus)', wrong: ['The Amazon rainforest (a tree)', 'The Great Barrier Reef (a coral)', 'Yellowstone (a bacterial mat)'], category: 'size' },
      { text: 'That Oregon honey fungus is estimated to be between 2,400 and 8,650 years old.', q: 'How old is the massive Oregon honey fungus estimated to be?', a: 'Between 2,400 and 8,650 years old', wrong: ['About 100 years old', 'About 500 years old', 'About 1 million years old'], category: 'lifespan' },
      { text: 'Honey fungus glows in the dark. Its bioluminescent threads create an eerie green glow in forest soil at night.', q: 'What unusual visual feature does honey fungus have?', a: 'It glows in the dark', wrong: ['It changes color with the seasons', 'It reflects UV light', 'It sparkles in sunlight'], category: 'ability' },
    ],
  },
  'Slime Mold': {
    status: 'LC',
    habitat: 'Forest floors, decaying wood, leaf litter, and soil',
    range: 'Worldwide, especially in temperate and tropical forests',
    facts: [
      { text: 'Slime molds have no brain, no neurons, and no nervous system, yet they can solve mazes and find the shortest path between food sources.', q: 'What is remarkable about slime molds despite having no brain?', a: 'They can solve mazes and find shortest paths', wrong: ['They can change color at will', 'They can move faster than insects', 'They can produce sounds'], category: 'ability' },
      { text: 'In experiments, a slime mold recreated the Tokyo rail network. Researchers placed food where cities were, and the mold connected them efficiently.', q: 'What human-designed system did slime mold recreate in an experiment?', a: 'The Tokyo rail network', wrong: ['The London Underground', 'The US highway system', 'The internet backbone'], category: 'ability' },
      { text: 'Slime molds are not plants, not animals, and not fungi. They belong to their own unique group of organisms.', q: 'What type of organism is a slime mold?', a: 'Its own unique group, not a plant, animal, or fungus', wrong: ['A type of fungus', 'A type of bacteria', 'A type of plant'], category: 'body' },
    ],
  },
  'Bioluminescent Dinoflagellate': {
    status: 'LC',
    habitat: 'Warm surface ocean waters and coastal bays',
    range: 'Tropical and subtropical oceans worldwide',
    facts: [
      { text: 'Dinoflagellates are tiny single-celled organisms that make the ocean glow neon blue at night when waves disturb them.', q: 'What causes the ocean to glow blue at night in some places?', a: 'Tiny organisms called dinoflagellates', wrong: ['Reflected moonlight', 'Underwater volcanic activity', 'Bioluminescent fish'], category: 'ability' },
      { text: 'The glow is a defense mechanism. The flash of light startles predators or attracts bigger predators that eat the attacker.', q: 'Why do dinoflagellates glow?', a: 'To startle predators or attract bigger predators to eat the attacker', wrong: ['To attract mates', 'To photosynthesize at night', 'To communicate with each other'], category: 'behavior' },
      { text: 'During the day, many dinoflagellates photosynthesize like plants. At night, they produce light. They are both plant-like and animal-like.', q: 'What makes dinoflagellates unusual among living things?', a: 'They photosynthesize like plants but also behave like animals', wrong: ['They can live forever', 'They are the smallest living things', 'They only exist in saltwater'], category: 'body' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════════════
  // BIRDS (WAVE 2)
  // ══════════════════════════════════════════════════════════════════
  'Arctic Tern': {
    status: 'LC',
    habitat: 'Coastal areas, open ocean, and tundra nesting sites',
    range: 'Breeds in Arctic regions, migrates to Antarctic — found on every ocean',
    facts: [
      { text: 'Arctic terns fly from the Arctic to Antarctica and back every year, a round trip of about 44,000 miles.', q: 'How far does an Arctic tern migrate each year (round trip)?', a: 'About 44,000 miles', wrong: ['About 10,000 miles', 'About 25,000 miles', 'About 60,000 miles'], category: 'behavior' },
      { text: 'Over its lifetime, an Arctic tern may fly more than 1.5 million miles — enough to fly to the Moon and back three times.', q: 'How far can an Arctic tern fly in its lifetime?', a: 'More than 1.5 million miles', wrong: ['About 500,000 miles', 'About 100,000 miles', 'About 5 million miles'], category: 'ability' },
      { text: 'Arctic terns can live for more than 30 years, which is very long for a bird their size.', q: 'How long can Arctic terns live?', a: 'More than 30 years', wrong: ['About 5 years', 'About 12 years', 'About 50 years'], category: 'lifespan' },
      { text: 'Because they migrate from pole to pole, Arctic terns see more daylight than any other animal on Earth.', q: 'Why do Arctic terns see more daylight than any other animal?', a: 'They migrate from pole to pole, following the sun', wrong: ['They have special eyes that detect extra light', 'They never sleep', 'They live at the equator where days are longest'], category: 'behavior' },
    ],
  },

  'Atlantic Puffin': {
    status: 'VU',
    habitat: 'Rocky coastal cliffs and open ocean',
    range: 'North Atlantic Ocean, from northeastern United States to northern Europe',
    facts: [
      { text: 'Puffins can hold 10 or more fish in their beaks at once, lined up neatly in a row.', q: 'How many fish can a puffin hold in its beak at once?', a: '10 or more', wrong: ['Only 1', '2 to 3', 'About 20'], category: 'ability' },
      { text: 'Puffins flap their wings up to 400 times per minute to stay airborne.', q: 'How many times per minute can a puffin flap its wings?', a: 'Up to 400 times', wrong: ['Up to 50 times', 'Up to 150 times', 'Up to 1,000 times'], category: 'speed' },
      { text: 'Puffins spend most of their lives at sea and only come to land to breed.', q: 'When do puffins come to land?', a: 'Only to breed', wrong: ['Every night to sleep', 'Whenever it rains', 'Every winter to stay warm'], category: 'behavior' },
      { text: 'A puffin\'s colorful beak actually fades to gray in winter and becomes bright again in spring.', q: 'What happens to a puffin\'s beak color in winter?', a: 'It fades to gray', wrong: ['It turns bright red', 'It stays the same all year', 'It turns white'], category: 'body' },
    ],
  },

  'Kiwi': {
    status: 'VU',
    habitat: 'Temperate and subtropical forests with dense undergrowth',
    range: 'New Zealand',
    facts: [
      { text: 'Kiwis are the only birds with nostrils at the tip of their beak, which they use to sniff out food underground.', q: 'Where are a kiwi\'s nostrils located?', a: 'At the tip of its beak', wrong: ['At the base of its beak', 'On top of its head', 'They don\'t have nostrils'], category: 'body' },
      { text: 'Kiwi eggs are huge compared to their body size — one egg can weigh up to 20% of the mother\'s body weight.', q: 'How big is a kiwi egg compared to the mother\'s body?', a: 'Up to 20% of her body weight', wrong: ['About 2% of her body weight', 'About 50% of her body weight', 'About 5% of her body weight'], category: 'size' },
      { text: 'Kiwis are about the same size as a chicken but lay an egg almost six times bigger than a chicken egg.', q: 'How does a kiwi egg compare to a chicken egg?', a: 'Almost six times bigger', wrong: ['About the same size', 'About twice as big', 'About ten times bigger'], category: 'size' },
      { text: 'Kiwis have whisker-like feathers around their beaks that help them feel their way in the dark.', q: 'What helps kiwis navigate in the dark?', a: 'Whisker-like feathers around their beaks', wrong: ['Echolocation like bats', 'Glowing eyes', 'A special radar sense'], category: 'body' },
    ],
  },

  'Shoebill': {
    status: 'VU',
    habitat: 'Freshwater swamps and marshes with dense papyrus',
    range: 'Central and East Africa, from South Sudan to Zambia',
    facts: [
      { text: 'The shoebill can stand perfectly still for hours waiting for fish, then strike with lightning speed.', q: 'How does a shoebill hunt for fish?', a: 'It stands still for hours, then strikes fast', wrong: ['It dives underwater like a pelican', 'It chases fish by running through water', 'It uses its wings to scoop fish up'], category: 'behavior' },
      { text: 'A shoebill\'s beak is so powerful it can snap a lungfish in half or even bite through a baby crocodile.', q: 'How powerful is a shoebill\'s beak?', a: 'Strong enough to bite through a baby crocodile', wrong: ['It can only eat soft plants', 'About as strong as a duck\'s beak', 'It can crush rocks'], category: 'ability' },
      { text: 'Shoebills can grow up to 5 feet tall, making them one of the tallest flying birds in Africa.', q: 'How tall can a shoebill grow?', a: 'Up to 5 feet tall', wrong: ['Up to 2 feet tall', 'Up to 8 feet tall', 'Up to 3 feet tall'], category: 'size' },
      { text: 'Shoebills make a machine-gun-like clapping sound with their beaks to communicate.', q: 'What sound do shoebills make to communicate?', a: 'A machine-gun-like clapping with their beaks', wrong: ['A musical song like a robin', 'A loud roar like a lion', 'They communicate silently through dance'], category: 'behavior' },
    ],
  },

  'Blue Jay': {
    status: 'LC',
    habitat: 'Deciduous and mixed forests, parks, and suburban gardens',
    range: 'Eastern and central North America',
    facts: [
      { text: 'Blue jays aren\'t actually blue. Their feathers have no blue pigment — the color comes from light scattering through the feather structure.', q: 'Why do blue jays look blue?', a: 'Light scattering through their feather structure', wrong: ['They have blue pigment in their feathers', 'They eat blueberries that turn them blue', 'They absorb blue light from the sky'], category: 'body' },
      { text: 'Blue jays can mimic the calls of hawks to scare other birds away from food sources.', q: 'What other bird can blue jays imitate?', a: 'Hawks', wrong: ['Parrots', 'Owls', 'Ducks'], category: 'ability' },
      { text: 'Blue jays store thousands of acorns each fall and can remember where most of them are hidden.', q: 'What do blue jays store for winter?', a: 'Thousands of acorns', wrong: ['Worms in underground tunnels', 'Berries in tree holes', 'Insects under rocks'], category: 'diet' },
      { text: 'A group of blue jays will sometimes gang up and "mob" predators like owls and cats to chase them away.', q: 'What do blue jays do when they spot a predator?', a: 'They gang up and mob it to chase it away', wrong: ['They play dead', 'They hide silently and freeze', 'They fly away individually as fast as possible'], category: 'behavior' },
    ],
  },

  'Lyrebird': {
    status: 'LC',
    habitat: 'Temperate rainforests and wet eucalyptus forests',
    range: 'Eastern Australia',
    facts: [
      { text: 'Lyrebirds can mimic almost any sound they hear, including chainsaws, camera shutters, car alarms, and other bird species.', q: 'What makes the lyrebird famous?', a: 'It can mimic almost any sound it hears', wrong: ['It has the longest tail of any bird', 'It can fly the highest of any bird', 'It sings only one perfect note'], category: 'ability' },
      { text: 'A single lyrebird can imitate the calls of more than 20 different bird species.', q: 'How many bird species can a lyrebird imitate?', a: 'More than 20', wrong: ['About 3', 'Only 1 at a time', 'About 100'], category: 'ability' },
      { text: 'The male lyrebird\'s tail feathers can be over 2 feet long and are shaped like a lyre, an ancient stringed instrument.', q: 'What is the lyrebird named after?', a: 'A lyre, an ancient stringed instrument', wrong: ['The word "liar" because it imitates sounds', 'A famous scientist named Dr. Lyre', 'The lyrical quality of its song'], category: 'body' },
      { text: 'Lyrebirds are excellent diggers and use their strong feet to scratch through leaf litter looking for insects and worms.', q: 'How do lyrebirds find food?', a: 'They scratch through leaf litter with their strong feet', wrong: ['They dive into rivers to catch fish', 'They pluck insects from the air while flying', 'They use their beaks to drill into trees'], category: 'diet' },
    ],
  },

  'Harpy Eagle': {
    status: 'VU',
    habitat: 'Tropical lowland rainforests',
    range: 'Central and South America, from southern Mexico to northern Argentina',
    facts: [
      { text: 'A harpy eagle\'s talons are as long as a grizzly bear\'s claws — up to 5 inches long.', q: 'How long are a harpy eagle\'s talons?', a: 'Up to 5 inches, as long as grizzly bear claws', wrong: ['About 1 inch long', 'About 10 inches long', 'About half an inch long'], category: 'body' },
      { text: 'Harpy eagles can carry prey that weighs almost as much as they do, snatching monkeys and sloths right out of trees.', q: 'What kind of animals do harpy eagles hunt?', a: 'Monkeys and sloths from trees', wrong: ['Only fish from rivers', 'Only small insects', 'Only other birds'], category: 'diet' },
      { text: 'Harpy eagles have a wingspan of up to 7 feet, but their wings are relatively short and wide to help them fly through dense forest.', q: 'Why are harpy eagle wings short and wide?', a: 'To help them fly through dense forest', wrong: ['Because they can\'t fly very well', 'To help them swim', 'Because they live in open deserts'], category: 'body' },
      { text: 'Harpy eagles build nests that can be 5 feet across and reuse them for many years, adding sticks each season.', q: 'How wide can a harpy eagle nest be?', a: 'About 5 feet across', wrong: ['About 1 foot across', 'About 10 feet across', 'About 6 inches across'], category: 'habitat' },
    ],
  },

  'Resplendent Quetzal': {
    status: 'NT',
    habitat: 'Cloud forests at elevations of 4,000 to 10,000 feet',
    range: 'Central America, from southern Mexico to western Panama',
    facts: [
      { text: 'The male quetzal\'s tail feathers can grow up to 3 feet long — longer than its entire body.', q: 'How long can a male quetzal\'s tail feathers grow?', a: 'Up to 3 feet long', wrong: ['About 6 inches', 'About 1 foot', 'About 6 feet'], category: 'body' },
      { text: 'Ancient Aztecs and Maya considered the quetzal sacred and used its feathers in royal headdresses. Killing one was punishable by death.', q: 'How did the ancient Maya and Aztecs treat quetzals?', a: 'They considered them sacred and killing one meant death', wrong: ['They kept them as common pets', 'They hunted them for food', 'They had no interest in them'], category: 'behavior' },
      { text: 'The currency of Guatemala is called the "quetzal" and the bird appears on the country\'s flag and coat of arms.', q: 'Which country named its currency after the quetzal?', a: 'Guatemala', wrong: ['Mexico', 'Costa Rica', 'Brazil'], category: 'habitat' },
      { text: 'Quetzals eat wild avocados whole and are important for spreading avocado seeds through the forest.', q: 'What fruit do quetzals help spread through the forest?', a: 'Wild avocados', wrong: ['Bananas', 'Mangoes', 'Coconuts'], category: 'diet' },
    ],
  },

  'Secretary Bird': {
    status: 'EN',
    habitat: 'Open grasslands and savannas',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'Secretary birds kill snakes by stomping on them with a force five times their own body weight in just 15 milliseconds.', q: 'How do secretary birds kill snakes?', a: 'By stomping on them with incredible force', wrong: ['By dropping them from great heights', 'By using their sharp beak to bite them', 'By squeezing them with their talons'], category: 'ability' },
      { text: 'Secretary birds can walk more than 20 miles a day while hunting across the African savanna.', q: 'How far can a secretary bird walk in a day while hunting?', a: 'More than 20 miles', wrong: ['About 1 mile', 'About 5 miles', 'About 50 miles'], category: 'behavior' },
      { text: 'Secretary birds stand about 4 feet tall, making them one of the tallest birds of prey in the world.', q: 'How tall is a secretary bird?', a: 'About 4 feet tall', wrong: ['About 1 foot tall', 'About 2 feet tall', 'About 7 feet tall'], category: 'size' },
      { text: 'The secretary bird gets its name from the quill-like feathers on the back of its head that look like old-fashioned ink pens tucked behind an ear.', q: 'Why is the secretary bird called a "secretary" bird?', a: 'Its head feathers look like quill pens tucked behind an ear', wrong: ['It was discovered by a secretary', 'It makes sounds like a typewriter', 'It organizes its nest very neatly'], category: 'body' },
    ],
  },

  'Kakapo': {
    status: 'CR',
    habitat: 'Native forest with dense ground cover',
    range: 'New Zealand (restricted to predator-free offshore islands)',
    facts: [
      { text: 'The kakapo is the world\'s only flightless parrot and also the heaviest parrot, weighing up to 9 pounds.', q: 'What makes the kakapo unique among parrots?', a: 'It is the only flightless parrot and the heaviest', wrong: ['It is the smallest parrot', 'It is the only parrot that can swim', 'It is the loudest parrot'], category: 'body' },
      { text: 'There are only about 250 kakapos alive today, and every single one has a name.', q: 'What is special about each living kakapo?', a: 'Every single one has been given a name', wrong: ['They each have a unique color pattern', 'They each live on a different island', 'They each have a tracking collar'], category: 'behavior' },
      { text: 'Kakapos can live for more than 90 years, making them one of the longest-lived birds on Earth.', q: 'How long can kakapos live?', a: 'More than 90 years', wrong: ['About 10 years', 'About 25 years', 'About 150 years'], category: 'lifespan' },
      { text: 'Male kakapos dig a bowl-shaped hole in the ground and boom into it all night to attract females. The sound can be heard 3 miles away.', q: 'How do male kakapos attract females?', a: 'They boom into a bowl-shaped hole that carries sound 3 miles', wrong: ['They do a colorful dance in the treetops', 'They bring gifts of fruit and flowers', 'They build the biggest nest they can'], category: 'behavior' },
      { text: 'When scared, kakapos sometimes just freeze and don\'t move, which worked when their only predators were eagles but not against introduced cats and rats.', q: 'What does a kakapo do when frightened?', a: 'It freezes and stays completely still', wrong: ['It runs away at high speed', 'It fights back with its sharp beak', 'It flies up into a tree'], category: 'behavior' },
    ],
  },

  'Cassowary': {
    status: 'LC',
    habitat: 'Tropical rainforests and mangrove forests',
    range: 'Northern Australia, New Guinea, and nearby islands',
    facts: [
      { text: 'Cassowaries are considered one of the most dangerous birds in the world. They have a dagger-like claw on each foot that can be 5 inches long.', q: 'How long is a cassowary\'s dagger-like claw?', a: 'Up to 5 inches long', wrong: ['About 1 inch long', 'About 10 inches long', 'They don\'t have claws'], category: 'body' },
      { text: 'The bony crest on a cassowary\'s head, called a casque, may help the bird push through dense rainforest vegetation.', q: 'What is the bony crest on a cassowary\'s head called?', a: 'A casque', wrong: ['A crown', 'A horn', 'A comb'], category: 'body' },
      { text: 'Cassowaries can run up to 31 miles per hour through dense jungle and can jump nearly 5 feet straight up.', q: 'How fast can a cassowary run?', a: 'Up to 31 miles per hour', wrong: ['Up to 10 miles per hour', 'Up to 50 miles per hour', 'Up to 70 miles per hour'], category: 'speed' },
      { text: 'Cassowaries are important seed spreaders. They eat fallen fruit whole and poop out the seeds in new locations, helping the rainforest grow.', q: 'How do cassowaries help rainforests?', a: 'They spread seeds by eating fruit and pooping in new places', wrong: ['They dig holes that collect rainwater', 'They pollinate flowers with their beaks', 'They eat harmful insects that damage trees'], category: 'habitat' },
    ],
  },

  'Kingfisher': {
    status: 'LC',
    habitat: 'Rivers, streams, lakes, and wooded areas near water',
    range: 'Found on every continent except Antarctica, with greatest diversity in Asia and Australasia',
    facts: [
      { text: 'The shape of the kingfisher\'s beak inspired the design of Japan\'s bullet train nose, which reduced noise and improved speed.', q: 'What did the kingfisher\'s beak inspire?', a: 'The design of Japan\'s bullet train nose', wrong: ['The shape of airplane wings', 'The design of submarine hulls', 'The shape of racing car spoilers'], category: 'body' },
      { text: 'Kingfishers dive into water at speeds up to 25 miles per hour and barely make a splash because of their streamlined shape.', q: 'How fast can a kingfisher dive into water?', a: 'Up to 25 miles per hour', wrong: ['Up to 5 miles per hour', 'Up to 60 miles per hour', 'Up to 100 miles per hour'], category: 'speed' },
      { text: 'Kingfishers have special lenses in their eyes that adjust for the way light bends in water, so they can see fish clearly even while diving.', q: 'How can kingfishers see fish clearly underwater?', a: 'Special lenses that adjust for light bending in water', wrong: ['They use echolocation like dolphins', 'They have waterproof eyelids', 'They sense electric fields like sharks'], category: 'ability' },
      { text: 'Many kingfisher species nest in tunnels they dig into riverbanks, sometimes 3 feet deep or more.', q: 'Where do many kingfishers build their nests?', a: 'In tunnels dug into riverbanks', wrong: ['In treetops like most birds', 'Floating on the water surface', 'Inside hollow logs'], category: 'habitat' },
    ],
  },

  'Osprey': {
    status: 'LC',
    habitat: 'Near rivers, lakes, reservoirs, and coastlines',
    range: 'Every continent except Antarctica; one of the most widespread birds of prey',
    facts: [
      { text: 'Ospreys are the only raptor in North America that dives feet-first into water to catch fish.', q: 'How do ospreys catch fish?', a: 'They dive feet-first into the water', wrong: ['They scoop fish up with their beaks', 'They wade in shallow water like herons', 'They grab fish from other birds'], category: 'behavior' },
      { text: 'An osprey\'s outer toe can swivel backward to give it two toes in front and two behind, perfect for gripping slippery fish.', q: 'What special toe adaptation helps ospreys hold fish?', a: 'Their outer toe can swivel backward', wrong: ['They have webbed feet like ducks', 'They have suction cups on their toes', 'Their toes are covered in tiny hooks'], category: 'body' },
      { text: 'Ospreys catch fish on about 70% of their dives, making them one of the most successful fishing birds.', q: 'How often do ospreys successfully catch a fish when they dive?', a: 'About 70% of the time', wrong: ['About 10% of the time', 'About 30% of the time', 'About 99% of the time'], category: 'ability' },
      { text: 'After catching a fish, ospreys rotate it to face headfirst in their talons to reduce wind resistance while flying.', q: 'How do ospreys carry fish while flying?', a: 'Headfirst to reduce wind resistance', wrong: ['Sideways in their beak', 'Tail-first so it doesn\'t escape', 'Tucked under their wing'], category: 'behavior' },
    ],
  },

  'Pelican': {
    status: 'LC',
    habitat: 'Coastal waters, estuaries, lakes, and rivers',
    range: 'Every continent except Antarctica',
    facts: [
      { text: 'A pelican\'s pouch can hold up to 3 gallons of water — that\'s about three times more than its stomach can hold.', q: 'How much water can a pelican\'s pouch hold?', a: 'Up to 3 gallons', wrong: ['About 1 cup', 'About half a gallon', 'About 10 gallons'], category: 'body' },
      { text: 'Brown pelicans dive-bomb from as high as 60 feet in the air to catch fish, hitting the water at 40 miles per hour.', q: 'From how high can brown pelicans dive for fish?', a: 'Up to 60 feet', wrong: ['About 5 feet', 'About 200 feet', 'About 20 feet'], category: 'ability' },
      { text: 'Pelicans have air sacs under their skin that act like bubble wrap, cushioning their bodies when they slam into the water.', q: 'What protects pelicans when they dive into water?', a: 'Air sacs under their skin that cushion the impact', wrong: ['Extra-thick skull bones', 'A layer of waterproof feathers', 'They close their eyes before hitting the water'], category: 'body' },
      { text: 'Pelicans are one of the heaviest flying birds, with some species weighing up to 33 pounds.', q: 'How heavy can the largest pelican species get?', a: 'Up to 33 pounds', wrong: ['Up to 5 pounds', 'Up to 15 pounds', 'Up to 60 pounds'], category: 'size' },
    ],
  },

  'Toucan': {
    status: 'LC',
    habitat: 'Tropical and subtropical rainforest canopy',
    range: 'Central and South America',
    facts: [
      { text: 'A toucan\'s huge beak can be one-third of its total body length, but it\'s incredibly light because it\'s mostly hollow with thin rods of bone inside.', q: 'Why is a toucan\'s big beak so light?', a: 'It is mostly hollow with thin rods of bone', wrong: ['It is made of lightweight plastic-like material', 'It is filled with air like a balloon', 'It is made entirely of cartilage'], category: 'body' },
      { text: 'Toucans use their beaks as built-in air conditioners. Blood flows through the beak to release heat and cool the bird down.', q: 'How do toucans use their beaks to stay cool?', a: 'Blood flows through the beak to release heat', wrong: ['They fan themselves with their beak', 'They fill their beak with cold water', 'They dip their beak in streams'], category: 'ability' },
      { text: 'Toucans sleep by tucking their beak over their back and folding their tail over their head, turning into a feathery ball.', q: 'How do toucans sleep?', a: 'Tucking their beak over their back and tail over their head', wrong: ['Hanging upside down like bats', 'Standing on one leg with eyes open', 'Floating on water'], category: 'behavior' },
      { text: 'Toucans are social birds that squeeze together in tree holes to sleep — sometimes 5 or 6 toucans cram into one hole.', q: 'How many toucans might sleep together in one tree hole?', a: '5 or 6', wrong: ['Only 1', 'About 20', 'About 2'], category: 'behavior' },
    ],
  },

  'Woodpecker': {
    status: 'LC',
    habitat: 'Forests, woodlands, and suburban areas with trees',
    range: 'Every continent except Antarctica and Australia',
    facts: [
      { text: 'Woodpeckers peck up to 20 times per second, hitting the tree at speeds of 15 miles per hour.', q: 'How many times per second can a woodpecker peck?', a: 'Up to 20 times per second', wrong: ['About 2 times per second', 'About 5 times per second', 'About 50 times per second'], category: 'speed' },
      { text: 'A woodpecker\'s tongue can be so long that it wraps around the back of its skull. Some species have tongues over 4 inches long.', q: 'Where does a woodpecker\'s tongue go when not in use?', a: 'It wraps around the back of its skull', wrong: ['It coils up inside its beak', 'It folds in half inside its mouth', 'It retracts into its throat'], category: 'body' },
      { text: 'Woodpeckers have special spongy bone in their skulls that absorbs the shock of all that pecking and protects their brains.', q: 'What protects a woodpecker\'s brain from all the pecking?', a: 'Special spongy bone in its skull', wrong: ['A very small brain that doesn\'t touch the skull', 'Extra-thick feathers on its head', 'A special liquid between its brain and skull'], category: 'body' },
      { text: 'Woodpeckers have stiff tail feathers that they use as a tripod to prop themselves against tree trunks while pecking.', q: 'How do woodpeckers support themselves on tree trunks?', a: 'They use stiff tail feathers as a tripod', wrong: ['They have suction cups on their feet', 'They grip with their beak', 'They use their wings to press against the bark'], category: 'body' },
    ],
  },

  'Snowy Egret': {
    status: 'LC',
    habitat: 'Marshes, wetlands, ponds, and coastal shorelines',
    range: 'North, Central, and South America',
    facts: [
      { text: 'Snowy egrets have bright yellow feet that they wiggle in the water to attract fish, making the fish think the toes are tasty worms.', q: 'How do snowy egrets use their yellow feet to catch fish?', a: 'They wiggle them in the water to lure fish closer', wrong: ['They stomp the water to stun fish', 'They use them to dig fish out of mud', 'The color scares fish into their beak'], category: 'ability' },
      { text: 'In the early 1900s, snowy egrets were nearly hunted to extinction because their beautiful feathers were worth more than gold by weight for fancy hats.', q: 'Why were snowy egrets nearly hunted to extinction?', a: 'Their feathers were worth more than gold for fancy hats', wrong: ['People ate them as a delicacy', 'They were captured as pets', 'Farmers thought they ate their crops'], category: 'behavior' },
      { text: 'Snowy egrets can stir up the water with one foot while standing on the other, flushing hidden fish and shrimp out of hiding.', q: 'What hunting technique makes snowy egrets unique?', a: 'Stirring water with one foot while standing on the other', wrong: ['Diving underwater like a pelican', 'Working in teams to herd fish', 'Using their wings as a net'], category: 'ability' },
    ],
  },

  'Raven': {
    status: 'LC',
    habitat: 'Forests, mountains, tundra, deserts, and urban areas',
    range: 'Throughout the Northern Hemisphere, from the Arctic to Central America, North Africa, and Asia',
    facts: [
      { text: 'Ravens are among the smartest birds on Earth. They can solve multi-step puzzles, use tools, and even plan for the future.', q: 'What makes ravens unusual among birds?', a: 'They can solve puzzles, use tools, and plan ahead', wrong: ['They are the fastest flying birds', 'They can swim underwater', 'They have the best eyesight of any bird'], category: 'ability' },
      { text: 'Ravens have been seen sliding down snowy hillsides on their backs, apparently just for fun.', q: 'What surprising behavior have ravens been seen doing in snow?', a: 'Sliding down hillsides on their backs for fun', wrong: ['Building snow forts', 'Making snowballs and throwing them', 'Ice skating on frozen ponds'], category: 'behavior' },
      { text: 'Ravens can imitate human speech, other animal calls, and even mechanical sounds like car engines.', q: 'What sounds can ravens imitate?', a: 'Human speech, animal calls, and mechanical sounds', wrong: ['Only other bird calls', 'They cannot imitate any sounds', 'Only musical instruments'], category: 'ability' },
      { text: 'Ravens can live for more than 20 years in the wild and over 40 years in captivity.', q: 'How long can ravens live in the wild?', a: 'More than 20 years', wrong: ['About 3 years', 'About 8 years', 'More than 50 years'], category: 'lifespan' },
      { text: 'A group of ravens is called an "unkindness" or a "conspiracy."', q: 'What is a group of ravens called?', a: 'An unkindness or a conspiracy', wrong: ['A flock or a gaggle', 'A murder or a mob', 'A parliament or a congress'], category: 'behavior' },
    ],
  },

  'Bee Hummingbird': {
    status: 'NT',
    habitat: 'Dense forests and forest edges with abundant flowers',
    range: 'Cuba and the Isle of Youth',
    facts: [
      { text: 'The bee hummingbird is the smallest bird in the world, weighing less than a dime at about 1.8 grams.', q: 'How much does the world\'s smallest bird weigh?', a: 'About 1.8 grams, less than a dime', wrong: ['About 20 grams', 'About 100 grams', 'About 50 grams'], category: 'size' },
      { text: 'Bee hummingbirds flap their wings 80 times per second, so fast they make a humming sound.', q: 'How many times per second does a bee hummingbird flap its wings?', a: '80 times per second', wrong: ['10 times per second', '200 times per second', '40 times per second'], category: 'speed' },
      { text: 'Bee hummingbird nests are only about 1 inch across, and their eggs are the size of coffee beans.', q: 'How big is a bee hummingbird egg?', a: 'About the size of a coffee bean', wrong: ['About the size of a marble', 'About the size of a grape', 'About the size of a pea'], category: 'size' },
      { text: 'A bee hummingbird\'s heart beats up to 1,260 times per minute — that\'s 21 beats per second.', q: 'How fast does a bee hummingbird\'s heart beat?', a: 'Up to 1,260 times per minute', wrong: ['About 100 times per minute', 'About 300 times per minute', 'About 500 times per minute'], category: 'body' },
    ],
  },

  'Albatross': {
    status: 'VU',
    habitat: 'Open ocean and remote breeding islands',
    range: 'Southern Ocean and North Pacific Ocean',
    facts: [
      { text: 'The wandering albatross has the longest wingspan of any living bird, stretching up to 11.5 feet from tip to tip.', q: 'How wide is the wingspan of a wandering albatross?', a: 'Up to 11.5 feet', wrong: ['About 4 feet', 'About 7 feet', 'About 15 feet'], category: 'size' },
      { text: 'Albatrosses can fly for hours without flapping their wings, using a technique called dynamic soaring to ride ocean winds.', q: 'How do albatrosses fly without flapping?', a: 'Dynamic soaring — riding ocean winds', wrong: ['They fill up with helium-like gas', 'They have jet-powered feathers', 'They bounce off ocean waves'], category: 'ability' },
      { text: 'Albatrosses can sleep while flying, shutting down half their brain at a time while the other half keeps navigating.', q: 'How can albatrosses sleep while flying?', a: 'They shut down half their brain at a time', wrong: ['They lock their wings in place and nap', 'They fly in circles on autopilot', 'They actually never sleep'], category: 'ability' },
      { text: 'Albatrosses mate for life and can live for more than 60 years. The oldest known wild bird is an albatross named Wisdom, who is over 70.', q: 'How old is the oldest known wild bird, an albatross named Wisdom?', a: 'Over 70 years old', wrong: ['About 20 years old', 'About 40 years old', 'About 100 years old'], category: 'lifespan' },
    ],
  },

  'Roadrunner': {
    status: 'LC',
    habitat: 'Desert scrub, grasslands, and open woodland',
    range: 'Southwestern United States and Mexico',
    facts: [
      { text: 'Roadrunners can run up to 20 miles per hour, making them one of the fastest running birds that can also fly.', q: 'How fast can a roadrunner run?', a: 'Up to 20 miles per hour', wrong: ['Up to 5 miles per hour', 'Up to 40 miles per hour', 'Up to 60 miles per hour'], category: 'speed' },
      { text: 'Roadrunners eat rattlesnakes. Two roadrunners will team up — one distracts the snake while the other grabs it behind the head.', q: 'How do roadrunners hunt rattlesnakes?', a: 'Two team up — one distracts, the other grabs the head', wrong: ['They drop rocks on the snake from above', 'They wait until the snake is asleep', 'They scare it into a hole and block the exit'], category: 'diet' },
      { text: 'Roadrunners sunbathe by spreading their wings and exposing dark skin patches on their backs to absorb heat on cold desert mornings.', q: 'How do roadrunners warm up on cold mornings?', a: 'They expose dark skin patches on their backs to absorb sun', wrong: ['They huddle together in groups', 'They run fast to generate body heat', 'They bury themselves in warm sand'], category: 'behavior' },
      { text: 'The cartoon Road Runner says "beep beep," but real roadrunners actually make a cooing sound like a dove.', q: 'What sound does a real roadrunner make?', a: 'A cooing sound like a dove', wrong: ['A "beep beep" like the cartoon', 'A loud screech like a hawk', 'A barking sound like a dog'], category: 'behavior' },
    ],
  },

  'Frigatebird': {
    status: 'LC',
    habitat: 'Tropical and subtropical oceans, coastal breeding islands',
    range: 'Tropical Atlantic, Pacific, and Indian Oceans',
    facts: [
      { text: 'Male frigatebirds inflate a bright red throat pouch to the size of a balloon to attract females during mating season.', q: 'How do male frigatebirds attract females?', a: 'They inflate a bright red throat pouch like a balloon', wrong: ['They do a dance on the water', 'They bring the female shiny objects', 'They sing the loudest song'], category: 'behavior' },
      { text: 'Frigatebirds can stay in the air for weeks at a time without landing, sleeping on the wing in 10-second bursts.', q: 'How long can frigatebirds stay airborne?', a: 'Weeks at a time', wrong: ['About one hour', 'About one day', 'About one year'], category: 'ability' },
      { text: 'Frigatebirds steal food from other seabirds in midair by harassing them until they drop or vomit up their catch.', q: 'How do frigatebirds often get their food?', a: 'By stealing it from other birds in midair', wrong: ['By diving deep underwater', 'By fishing with their feet', 'By eating seaweed off rocks'], category: 'diet' },
      { text: 'Frigatebirds have the largest wingspan-to-body-weight ratio of any bird, which helps them soar effortlessly.', q: 'What gives frigatebirds their amazing soaring ability?', a: 'The largest wingspan-to-body-weight ratio of any bird', wrong: ['Extra-large lungs for better breathing', 'Hollow bones filled with helium', 'Special feathers that generate lift'], category: 'body' },
    ],
  },

  'Potoo': {
    status: 'LC',
    habitat: 'Tropical forests and forest edges',
    range: 'Central and South America, from Mexico to Argentina',
    facts: [
      { text: 'Potoos are masters of camouflage. During the day, they sit perfectly still on a broken branch and look exactly like a piece of dead wood.', q: 'How do potoos hide during the day?', a: 'They sit on a branch and look exactly like dead wood', wrong: ['They burrow underground', 'They hide inside hollow trees', 'They turn invisible like a chameleon'], category: 'ability' },
      { text: 'Potoos have tiny slits in their eyelids that let them see predators even when their eyes appear to be completely closed.', q: 'How can potoos watch for danger with their eyes closed?', a: 'Tiny slits in their eyelids let them peek out', wrong: ['They have eyes on the backs of their heads', 'They use echolocation', 'They feel vibrations through the branch'], category: 'body' },
      { text: 'Potoos have one of the creepiest calls in the bird world — a long, haunting moan that sounds like a ghost wailing in the forest.', q: 'What does a potoo\'s call sound like?', a: 'A haunting moan like a ghost wailing', wrong: ['A cheerful whistle like a robin', 'A rapid clicking like a dolphin', 'Complete silence — potoos never vocalize'], category: 'behavior' },
    ],
  },

  'King Cobra': {
    status: 'VU',
    habitat: 'Dense tropical forests, bamboo thickets, and mangrove swamps',
    range: 'South and Southeast Asia, from India to Indonesia',
    facts: [
      { text: 'The king cobra is the longest venomous snake in the world, growing up to 18 feet long.', q: 'How long can a king cobra grow?', a: 'Up to 18 feet', wrong: ['Up to 6 feet', 'Up to 10 feet', 'Up to 30 feet'], category: 'size' },
      { text: 'King cobras are the only snakes in the world that build nests for their eggs, gathering leaves into a mound and guarding them.', q: 'What is unique about king cobra parenting?', a: 'They are the only snakes that build nests for eggs', wrong: ['They carry eggs in their mouth like crocodiles', 'The father guards the babies for a year', 'They give live birth instead of laying eggs'], category: 'behavior' },
      { text: 'A single bite from a king cobra contains enough venom to kill an elephant or 20 people.', q: 'How powerful is king cobra venom?', a: 'One bite can kill an elephant or 20 people', wrong: ['It is completely harmless to humans', 'It can kill a mouse but not a human', 'It only causes a small rash'], category: 'ability' },
      { text: 'King cobras mostly eat other snakes, including other venomous species. Their scientific name Ophiophagus means "snake eater."', q: 'What does the king cobra mainly eat?', a: 'Other snakes, including venomous ones', wrong: ['Mice and rats', 'Frogs and fish', 'Insects and worms'], category: 'diet' },
    ],
  },

  'Gila Monster': {
    status: 'NT',
    habitat: 'Desert scrub, rocky foothills, and oak woodlands',
    range: 'Southwestern United States and northwestern Mexico',
    facts: [
      { text: 'The Gila monster is one of only a few venomous lizards in the world. It delivers venom by chewing — the venom flows from glands in its lower jaw.', q: 'How does a Gila monster deliver venom?', a: 'By chewing — venom flows from its lower jaw', wrong: ['Through fangs like a snake', 'By spitting venom at prey', 'Through a stinger on its tail'], category: 'ability' },
      { text: 'Gila monsters spend up to 95% of their lives underground in burrows, only coming out to eat and bask.', q: 'How much time do Gila monsters spend underground?', a: 'Up to 95% of their lives', wrong: ['About 10% of their lives', 'About 50% of their lives', 'They never go underground'], category: 'habitat' },
      { text: 'A Gila monster can eat a meal equal to one-third of its body weight in one sitting, then survive months without eating again.', q: 'How long can a Gila monster go without food?', a: 'Months after one big meal', wrong: ['Only a few hours', 'About one week', 'About one day'], category: 'diet' },
      { text: 'A protein found in Gila monster venom led to the development of a diabetes medication that helps millions of people.', q: 'What medical breakthrough came from Gila monster venom?', a: 'A diabetes medication', wrong: ['A cure for the common cold', 'A heart surgery technique', 'An acne treatment'], category: 'ability' },
    ],
  },

  'Green Anaconda': {
    status: 'LC',
    habitat: 'Swamps, marshes, slow-moving rivers, and tropical rainforests',
    range: 'South America, primarily the Amazon and Orinoco river basins',
    facts: [
      { text: 'The green anaconda is the heaviest snake in the world, weighing up to 550 pounds. That\'s heavier than a grand piano.', q: 'How heavy can a green anaconda get?', a: 'Up to 550 pounds', wrong: ['Up to 50 pounds', 'Up to 150 pounds', 'Up to 1,000 pounds'], category: 'size' },
      { text: 'Anacondas don\'t chew their food — they swallow prey whole, including animals as large as deer and caimans.', q: 'What large animals can anacondas swallow?', a: 'Deer and caimans', wrong: ['Only frogs and mice', 'Only fish and birds', 'Only insects and worms'], category: 'diet' },
      { text: 'Anacondas are excellent swimmers and can hold their breath underwater for up to 10 minutes while waiting to ambush prey.', q: 'How long can an anaconda hold its breath underwater?', a: 'Up to 10 minutes', wrong: ['About 30 seconds', 'About 2 minutes', 'About 1 hour'], category: 'ability' },
      { text: 'After eating a really big meal, an anaconda might not eat again for weeks or even months while it slowly digests.', q: 'How long can an anaconda go without eating after a big meal?', a: 'Weeks or even months', wrong: ['Just a few hours', 'About one day', 'About one year'], category: 'diet' },
    ],
  },

  'Panther Chameleon': {
    status: 'LC',
    habitat: 'Tropical forests and coastal lowlands',
    range: 'Madagascar',
    facts: [
      { text: 'Panther chameleons can move each eye independently, so one eye can look forward while the other looks backward at the same time.', q: 'What can panther chameleon eyes do that human eyes cannot?', a: 'Move independently — one can look forward and one backward', wrong: ['See in complete darkness', 'See ultraviolet and infrared light', 'Zoom in like binoculars'], category: 'body' },
      { text: 'A panther chameleon\'s tongue can shoot out to catch an insect in just 0.07 seconds — faster than you can blink.', q: 'How fast can a panther chameleon\'s tongue strike?', a: '0.07 seconds — faster than a blink', wrong: ['About 1 second', 'About 5 seconds', 'About 0.5 seconds'], category: 'speed' },
      { text: 'Chameleons don\'t change color to match their surroundings. They change color to communicate mood, regulate temperature, and attract mates.', q: 'Why do chameleons actually change color?', a: 'To communicate mood, regulate temperature, and attract mates', wrong: ['To match their background for camouflage', 'To scare away predators with bright colors', 'They change color randomly without reason'], category: 'ability' },
      { text: 'Panther chameleons from different parts of Madagascar come in wildly different colors — blue, green, red, and orange — based on their home region.', q: 'What determines a panther chameleon\'s main color?', a: 'The region of Madagascar it comes from', wrong: ['What it eats', 'Its age', 'The season'], category: 'body' },
    ],
  },

  'Leatherback Sea Turtle': {
    status: 'VU',
    habitat: 'Open ocean and coastal nesting beaches',
    range: 'All tropical and subtropical oceans, ranging into cold northern and southern waters',
    facts: [
      { text: 'The leatherback is the largest turtle in the world, growing up to 7 feet long and weighing up to 2,000 pounds.', q: 'How heavy can a leatherback sea turtle get?', a: 'Up to 2,000 pounds', wrong: ['Up to 100 pounds', 'Up to 500 pounds', 'Up to 5,000 pounds'], category: 'size' },
      { text: 'Leatherbacks can dive deeper than 4,000 feet — that\'s deeper than most military submarines go.', q: 'How deep can leatherback sea turtles dive?', a: 'Deeper than 4,000 feet', wrong: ['About 50 feet', 'About 500 feet', 'About 1,000 feet'], category: 'ability' },
      { text: 'Leatherbacks eat mainly jellyfish. They have backward-pointing spines in their throat that stop slippery jellyfish from escaping.', q: 'What do leatherbacks mainly eat?', a: 'Jellyfish', wrong: ['Seaweed and algae', 'Fish and shrimp', 'Crabs and clams'], category: 'diet' },
      { text: 'Unlike other sea turtles, leatherbacks don\'t have a hard shell. Their back is covered in tough, rubbery skin with tiny bone plates underneath.', q: 'What makes the leatherback different from other sea turtles?', a: 'It has rubbery skin instead of a hard shell', wrong: ['It is the smallest sea turtle', 'It lives in freshwater', 'It can breathe underwater'], category: 'body' },
    ],
  },

  'Tokay Gecko': {
    status: 'LC',
    habitat: 'Tropical rainforests, rocky areas, and human buildings',
    range: 'Southeast Asia, from India to Indonesia, and introduced in Florida and Hawaii',
    facts: [
      { text: 'Tokay geckos are named after their call, which sounds like someone yelling "TO-KAY!" over and over at night.', q: 'How did the tokay gecko get its name?', a: 'From its loud call that sounds like "TO-KAY!"', wrong: ['It was named after a city in Japan', 'It was named after the scientist who discovered it', 'It means "spotted lizard" in Thai'], category: 'behavior' },
      { text: 'Gecko feet are covered in millions of tiny hair-like structures called setae that let them walk on walls and even ceilings using molecular forces.', q: 'How can geckos walk on walls and ceilings?', a: 'Millions of tiny hairs that use molecular forces', wrong: ['Tiny suction cups on their feet', 'Sticky glue that they produce', 'Miniature claws that grip surfaces'], category: 'body' },
      { text: 'Tokay geckos have one of the strongest bites of any lizard their size and are known for biting and not letting go.', q: 'What is the tokay gecko known for among lizards?', a: 'An extremely strong bite that it won\'t release', wrong: ['Running faster than any other lizard', 'Having the longest tongue', 'Being the most colorful gecko'], category: 'ability' },
      { text: 'Geckos don\'t have eyelids. Instead, they lick their eyes with their tongue to keep them clean and moist.', q: 'How do geckos keep their eyes clean?', a: 'They lick them with their tongue', wrong: ['They blink very quickly', 'They have a clear eyelid that wipes across', 'They wash their face in water'], category: 'body' },
    ],
  },

  'Frilled Lizard': {
    status: 'LC',
    habitat: 'Tropical savanna woodlands and dry forests',
    range: 'Northern Australia and southern New Guinea',
    facts: [
      { text: 'When threatened, the frilled lizard opens a huge frill around its neck that can spread up to 12 inches wide, making it look much bigger and scarier.', q: 'How wide can a frilled lizard\'s frill spread?', a: 'Up to 12 inches', wrong: ['About 2 inches', 'About 3 feet', 'About 6 inches'], category: 'body' },
      { text: 'Frilled lizards run on their two back legs when they need to sprint, looking like tiny dinosaurs.', q: 'How do frilled lizards run when they need to go fast?', a: 'On their two back legs, like tiny dinosaurs', wrong: ['On all four legs like a dog', 'They hop like kangaroos', 'They slither like snakes'], category: 'speed' },
      { text: 'The frilled lizard appeared on the Australian 2-cent coin before it was discontinued in 1991.', q: 'Where did the frilled lizard appear as a national symbol?', a: 'On the Australian 2-cent coin', wrong: ['On the New Zealand flag', 'On the Indonesian passport', 'On the Malaysian postage stamp'], category: 'habitat' },
      { text: 'Frilled lizards spend most of their time in trees and only come to the ground to eat or to run to another tree.', q: 'Where do frilled lizards spend most of their time?', a: 'In trees', wrong: ['Underground in burrows', 'In the water', 'On open desert sand'], category: 'habitat' },
    ],
  },

  'Red-Eyed Tree Frog': {
    status: 'LC',
    habitat: 'Tropical lowland rainforests near ponds and rivers',
    range: 'Central America, from southern Mexico to Panama',
    facts: [
      { text: 'When a predator gets close, the red-eyed tree frog flashes its bright red eyes to startle it, giving the frog time to escape. This is called startle coloration.', q: 'Why does the red-eyed tree frog flash its red eyes?', a: 'To startle predators and buy time to escape', wrong: ['To attract mates', 'To see better in the dark', 'To communicate with other frogs'], category: 'ability' },
      { text: 'Red-eyed tree frog eggs can hatch early if they sense vibrations from a predator like a snake. The tadpoles drop into the water below to escape.', q: 'What can red-eyed tree frog eggs do when a predator is near?', a: 'Hatch early so tadpoles can drop into water and escape', wrong: ['Change color to blend in', 'Release a bad smell', 'Become hard like stones'], category: 'ability' },
      { text: 'Red-eyed tree frogs have bright blue and yellow stripes on their sides that they flash when jumping, confusing predators.', q: 'What hidden colors do red-eyed tree frogs have?', a: 'Blue and yellow stripes on their sides', wrong: ['Purple dots on their bellies', 'Orange rings around their legs', 'White patches on their backs'], category: 'body' },
      { text: 'Red-eyed tree frogs have suction-cup toe pads that let them stick to leaves, even smooth ones, high up in the rainforest canopy.', q: 'How do red-eyed tree frogs climb smooth leaves?', a: 'Suction-cup toe pads', wrong: ['Sharp claws like a cat', 'Sticky slime on their skin', 'Tiny hooks on their feet'], category: 'body' },
    ],
  },

  'Thorny Devil': {
    status: 'LC',
    habitat: 'Arid scrublands and sandy deserts',
    range: 'Central and western Australia',
    facts: [
      { text: 'The thorny devil drinks water through its skin. Tiny grooves between its spines channel dew and rain straight to its mouth using capillary action.', q: 'How does the thorny devil drink water?', a: 'Through tiny grooves in its skin that channel water to its mouth', wrong: ['It drinks from puddles like other lizards', 'It absorbs moisture from the food it eats', 'It sucks water from cactus plants'], category: 'ability' },
      { text: 'Thorny devils eat only ants and can gobble up thousands of them in a single day — sometimes up to 3,000.', q: 'How many ants can a thorny devil eat in one day?', a: 'Up to 3,000', wrong: ['About 10', 'About 100', 'About 50,000'], category: 'diet' },
      { text: 'The thorny devil has a fake head on the back of its neck. When threatened, it tucks its real head down and presents the fake one to predators.', q: 'What is the bump on the back of a thorny devil\'s neck?', a: 'A fake head used to trick predators', wrong: ['A water storage hump', 'A venom gland', 'An extra eye for seeing behind it'], category: 'body' },
      { text: 'Thorny devils can change color to match their mood and temperature, turning from yellow to dark brown.', q: 'Why do thorny devils change color?', a: 'Based on mood and temperature', wrong: ['To attract mates during breeding season', 'To match the color of the ants they eat', 'They don\'t actually change color'], category: 'ability' },
    ],
  },

  'Mata Mata Turtle': {
    status: 'LC',
    habitat: 'Slow-moving streams, swamps, and marshes with muddy bottoms',
    range: 'Northern South America, in the Amazon and Orinoco river basins',
    facts: [
      { text: 'The mata mata turtle looks like a pile of dead leaves and bark sitting on the river bottom. It stays perfectly still until a fish swims by, then sucks it in like a vacuum.', q: 'How does the mata mata turtle hunt?', a: 'It disguises as leaves and vacuums in fish that swim near', wrong: ['It chases fish through the water at high speed', 'It catches fish with its sharp claws', 'It lures fish with a worm-shaped tongue'], category: 'ability' },
      { text: 'The mata mata\'s head is flat and triangular with flaps of skin and a long snorkel-like nose it uses to breathe at the surface without moving.', q: 'How does the mata mata breathe without breaking its camouflage?', a: 'It sticks its long snorkel-like nose above the water', wrong: ['It has gills like a fish', 'It holds its breath for hours', 'It absorbs oxygen through its shell'], category: 'body' },
      { text: 'Mata mata turtles don\'t chew their food at all. They open their huge mouths to create a vacuum that sucks prey in whole with a rush of water.', q: 'How do mata mata turtles eat their prey?', a: 'They suck it in whole by creating a vacuum with their mouth', wrong: ['They tear food apart with sharp jaws', 'They swallow small pebbles to grind food', 'They use their front legs to hold and bite food'], category: 'diet' },
    ],
  },

  'Glass Frog': {
    status: 'LC',
    habitat: 'Cloud forests and rainforests near streams',
    range: 'Central and South America, from southern Mexico to Bolivia',
    facts: [
      { text: 'Glass frogs have see-through skin on their bellies. You can actually see their heart beating, their intestines, and their bones right through the skin.', q: 'What can you see through a glass frog\'s belly?', a: 'Its heart, intestines, and bones', wrong: ['Nothing — the name refers to their shiny skin', 'Only their skeleton', 'Just a faint shadow of their organs'], category: 'body' },
      { text: 'Glass frog dads guard their eggs by sitting on them at night to protect them from wasps and other predators.', q: 'Which parent guards glass frog eggs?', a: 'The father', wrong: ['The mother', 'Both parents equally', 'Neither — the eggs are left alone'], category: 'behavior' },
      { text: 'Scientists recently discovered that glass frogs become nearly invisible while sleeping by hiding most of their red blood cells inside their liver.', q: 'How do glass frogs become nearly invisible while sleeping?', a: 'They hide red blood cells inside their liver', wrong: ['They flatten themselves paper-thin', 'They produce a special clear coating', 'They change color to match leaves exactly'], category: 'ability' },
      { text: 'Glass frogs lay their eggs on leaves hanging over streams so that when the tadpoles hatch, they drop right into the water below.', q: 'Where do glass frogs lay their eggs?', a: 'On leaves hanging over streams', wrong: ['Underwater attached to rocks', 'In foam nests on the ground', 'Inside tree hollows filled with rainwater'], category: 'behavior' },
    ],
  },

  'Tuatara': {
    status: 'LC',
    habitat: 'Coastal forests and scrublands, often in seabird burrows',
    range: 'New Zealand (offshore islands only)',
    facts: [
      { text: 'Tuataras look like lizards but they\'re actually the last surviving member of an ancient group of reptiles that lived alongside dinosaurs over 200 million years ago.', q: 'What makes tuataras special among reptiles?', a: 'They\'re the last of an ancient group from the dinosaur era', wrong: ['They are the largest reptile in New Zealand', 'They are the only reptile that can fly', 'They are actually a type of frog'], category: 'body' },
      { text: 'Tuataras have a third eye on top of their head called a parietal eye. It has a lens and retina but gets covered by scales as they grow.', q: 'What unusual feature is on top of a tuatara\'s head?', a: 'A third eye called a parietal eye', wrong: ['A horn used for fighting', 'An extra nostril for underwater breathing', 'A heat-sensing pit like a snake'], category: 'body' },
      { text: 'Tuataras can live for more than 100 years and don\'t stop growing until they\'re around 35 years old.', q: 'How long can tuataras live?', a: 'More than 100 years', wrong: ['About 10 years', 'About 25 years', 'About 50 years'], category: 'lifespan' },
      { text: 'Tuataras are most active at temperatures that would make most reptiles too cold to move — they prefer about 60 degrees Fahrenheit.', q: 'What temperature do tuataras prefer?', a: 'About 60 degrees Fahrenheit — cooler than most reptiles', wrong: ['Over 100 degrees Fahrenheit', 'About 85 degrees Fahrenheit', 'They need tropical heat above 90 degrees'], category: 'habitat' },
    ],
  },

  'Corn Snake': {
    status: 'LC',
    habitat: 'Pine forests, rocky hillsides, farmland, and suburban areas',
    range: 'Southeastern United States',
    facts: [
      { text: 'Corn snakes got their name because they were often found in corn cribs, hunting the mice that came to eat stored grain.', q: 'How did corn snakes get their name?', a: 'They were found in corn cribs hunting mice', wrong: ['Their scales look like kernels of corn', 'They eat corn as part of their diet', 'They were discovered in Cornfield, Kansas'], category: 'habitat' },
      { text: 'Corn snakes are excellent climbers and can scale vertical brick walls and tree trunks using tiny ridges on their belly scales.', q: 'How can corn snakes climb vertical surfaces?', a: 'Using tiny ridges on their belly scales', wrong: ['They have sticky pads like geckos', 'They use their tail to grip like a monkey', 'They can only climb rough rope'], category: 'ability' },
      { text: 'Corn snakes are constrictors. They squeeze their prey to stop blood flow, not to suffocate it, and the prey passes out in seconds.', q: 'How do corn snakes actually kill their prey?', a: 'By squeezing to stop blood flow, not suffocation', wrong: ['By injecting venom through fangs', 'By drowning prey in water', 'By biting the prey\'s neck'], category: 'ability' },
      { text: 'Corn snakes can come in over 800 different color and pattern combinations thanks to selective breeding.', q: 'How many color varieties can corn snakes come in?', a: 'Over 800 combinations', wrong: ['Only about 5', 'About 20', 'About 100'], category: 'body' },
    ],
  },

  'Hellbender Salamander': {
    status: 'NT',
    habitat: 'Clear, fast-flowing rocky streams and rivers',
    range: 'Eastern United States, from New York to Georgia and west to Missouri',
    facts: [
      { text: 'The hellbender is the largest salamander in North America, growing up to 2 feet long, and it can live for over 25 years.', q: 'How long can a hellbender salamander grow?', a: 'Up to 2 feet long', wrong: ['About 3 inches', 'About 6 inches', 'About 4 feet long'], category: 'size' },
      { text: 'Hellbenders breathe through their skin. Their wrinkly, folded skin increases the surface area so they can absorb more oxygen from the water.', q: 'Why do hellbenders have such wrinkly skin?', a: 'To increase surface area for breathing through their skin', wrong: ['Because they are very old', 'To scare away predators', 'To help them grip slippery rocks'], category: 'body' },
      { text: 'Hellbenders have been around for about 65 million years, meaning they survived the asteroid that wiped out the dinosaurs.', q: 'How long have hellbenders existed?', a: 'About 65 million years', wrong: ['About 1 million years', 'About 10,000 years', 'About 500 million years'], category: 'lifespan' },
      { text: 'Hellbenders go by many funny nicknames including "snot otter," "devil dog," and "Allegheny alligator."', q: 'What is a funny nickname for the hellbender salamander?', a: 'Snot otter', wrong: ['Swamp chicken', 'River monkey', 'Mud bunny'], category: 'behavior' },
    ],
  },

  'Saltwater Crocodile': {
    status: 'LC',
    habitat: 'Coastal waters, estuaries, rivers, and mangrove swamps',
    range: 'Southeast Asia, northern Australia, and eastern India',
    facts: [
      { text: 'The saltwater crocodile is the largest living reptile on Earth, growing up to 23 feet long and weighing over 2,200 pounds.', q: 'How long can a saltwater crocodile grow?', a: 'Up to 23 feet', wrong: ['Up to 8 feet', 'Up to 15 feet', 'Up to 35 feet'], category: 'size' },
      { text: 'Saltwater crocodiles have the strongest bite ever measured in a living animal — over 3,700 pounds of force.', q: 'How strong is a saltwater crocodile\'s bite?', a: 'Over 3,700 pounds of force', wrong: ['About 200 pounds of force', 'About 1,000 pounds of force', 'About 10,000 pounds of force'], category: 'ability' },
      { text: 'Saltwater crocs can swim in the open ocean for hundreds of miles, riding ocean currents to reach distant islands.', q: 'How do saltwater crocodiles travel between islands?', a: 'They ride ocean currents for hundreds of miles', wrong: ['They walk along the ocean floor', 'They fly short distances using their tail', 'They only live on one island their whole life'], category: 'ability' },
      { text: 'Crocodiles swallow stones on purpose. The stones sit in their stomach and help them stay balanced and dive deeper underwater.', q: 'Why do crocodiles swallow stones?', a: 'To help them balance and dive deeper', wrong: ['To help grind up food', 'By accident when eating prey', 'To sharpen their teeth'], category: 'behavior' },
    ],
  },

  'Gaboon Viper': {
    status: 'LC',
    habitat: 'Tropical rainforests and nearby woodlands',
    range: 'Central and West Africa',
    facts: [
      { text: 'The Gaboon viper has the longest fangs of any snake — up to 2 inches long — and produces more venom per bite than almost any other snake.', q: 'How long are a Gaboon viper\'s fangs?', a: 'Up to 2 inches long', wrong: ['About a quarter inch', 'About half an inch', 'About 4 inches'], category: 'body' },
      { text: 'Gaboon vipers have an incredible leaf-shaped pattern on their skin that makes them nearly invisible on the forest floor.', q: 'How do Gaboon vipers hide on the forest floor?', a: 'Their leaf-shaped pattern makes them nearly invisible', wrong: ['They bury themselves in mud', 'They change color like a chameleon', 'They cover themselves with actual leaves'], category: 'ability' },
      { text: 'Gaboon vipers are ambush predators that can lie perfectly still for days waiting for prey to walk past.', q: 'How long can a Gaboon viper wait motionless for prey?', a: 'Days at a time', wrong: ['Only a few seconds', 'About 10 minutes', 'About one hour'], category: 'behavior' },
      { text: 'The Gaboon viper\'s head can be nearly 6 inches wide, making it one of the widest-headed snakes in the world.', q: 'How wide can a Gaboon viper\'s head be?', a: 'Nearly 6 inches wide', wrong: ['About 1 inch wide', 'About 2 inches wide', 'About 10 inches wide'], category: 'size' },
    ],
  },

  'Marine Iguana': {
    status: 'VU',
    habitat: 'Rocky coastlines and intertidal zones',
    range: 'Galapagos Islands, Ecuador',
    facts: [
      { text: 'Marine iguanas are the only lizards in the world that swim in the ocean. They dive up to 65 feet deep to eat algae off underwater rocks.', q: 'What makes marine iguanas unique among lizards?', a: 'They are the only lizards that swim in the ocean', wrong: ['They are the fastest lizards', 'They are the only lizards that eat meat', 'They are the smallest lizards in the world'], category: 'ability' },
      { text: 'Marine iguanas sneeze out salt. They have special glands near their noses that filter salt from seawater, and they blast it out in a spray.', q: 'How do marine iguanas get rid of excess salt?', a: 'They sneeze it out through special salt glands', wrong: ['They sweat it out through their skin', 'They spit it out after drinking fresh water', 'They shed their skin to remove it'], category: 'body' },
      { text: 'Marine iguanas can shrink their skeletons during food shortages, becoming up to 20% shorter, then grow back when food returns.', q: 'What amazing thing can marine iguanas do during food shortages?', a: 'Shrink their skeletons by up to 20%', wrong: ['Hibernate for two years straight', 'Switch to eating insects instead', 'Grow webbed feet for better swimming'], category: 'ability' },
      { text: 'After swimming in cold ocean water, marine iguanas pile on top of each other on rocks to warm up in the sun, sometimes in groups of hundreds.', q: 'How do marine iguanas warm up after swimming?', a: 'They pile on top of each other on sun-warmed rocks', wrong: ['They dig into hot sand', 'They do push-ups to generate heat', 'They eat hot volcanic rocks'], category: 'behavior' },
    ],
  },

  'Cane Toad': {
    status: 'LC',
    habitat: 'Tropical and subtropical areas, grasslands, and urban areas',
    range: 'Native to Central and South America; invasive in Australia, Caribbean, and Pacific islands',
    facts: [
      { text: 'Cane toads were brought to Australia in 1935 to eat beetles, but they ignored the beetles and became one of the worst invasive species ever.', q: 'Why were cane toads brought to Australia?', a: 'To eat beetles, but they ignored them entirely', wrong: ['As pets that escaped into the wild', 'To control mosquitoes', 'They arrived accidentally on cargo ships'], category: 'habitat' },
      { text: 'Cane toads have poison glands behind their eyes that squirt venom strong enough to kill dogs, cats, and even crocodiles that try to eat them.', q: 'How do cane toads defend themselves?', a: 'Poison glands behind their eyes that can kill predators', wrong: ['Sharp spines on their backs', 'A loud screech that scares predators', 'They play dead convincingly'], category: 'ability' },
      { text: 'A single female cane toad can lay up to 30,000 eggs at once, which is why they spread so quickly in Australia.', q: 'How many eggs can a female cane toad lay at once?', a: 'Up to 30,000', wrong: ['About 50', 'About 500', 'About 5,000'], category: 'behavior' },
      { text: 'Cane toads will eat almost anything that fits in their mouth, including insects, small mammals, other frogs, and even dog food from outdoor bowls.', q: 'What unusual food have cane toads been known to eat?', a: 'Dog food from outdoor bowls', wrong: ['Plastic bags', 'Small rocks', 'Flowers and leaves'], category: 'diet' },
    ],
  },

  'Gharial': {
    status: 'CR',
    habitat: 'Deep, fast-flowing rivers with sandbanks for basking',
    range: 'Northern India and Nepal',
    facts: [
      { text: 'The gharial has an extremely long, thin snout with over 100 sharp teeth, perfectly designed for catching fish with a quick sideways snap.', q: 'How many teeth does a gharial have?', a: 'Over 100', wrong: ['About 20', 'About 40', 'About 200'], category: 'body' },
      { text: 'Male gharials have a bulbous growth on the tip of their snout called a ghara, which they use to blow bubbles and make buzzing sounds to attract females.', q: 'What is the bump on a male gharial\'s nose used for?', a: 'Blowing bubbles and making buzzing sounds to attract mates', wrong: ['Detecting prey underwater using sonar', 'Storing extra food', 'Breathing while fully submerged'], category: 'behavior' },
      { text: 'Gharials are one of the most critically endangered crocodilians, with fewer than 650 adults left in the wild.', q: 'How many adult gharials are left in the wild?', a: 'Fewer than 650', wrong: ['About 50,000', 'About 10,000', 'About 5,000'], category: 'habitat' },
      { text: 'Despite growing up to 20 feet long, gharials are not dangerous to humans. Their thin snout is too fragile to eat anything bigger than fish.', q: 'Are gharials dangerous to people?', a: 'No — their thin snout is too fragile for large prey', wrong: ['Yes — they are the most dangerous crocodilian', 'Only during mating season', 'Only baby gharials bite'], category: 'ability' },
    ],
  },

  'Fire Salamander': {
    status: 'LC',
    habitat: 'Cool, moist forests near streams and ponds',
    range: 'Central and southern Europe',
    facts: [
      { text: 'Fire salamanders got their name because people in ancient times saw them crawling out of logs thrown on fires — they were just hiding in the wood.', q: 'How did fire salamanders get their name?', a: 'People saw them crawl out of logs placed on fires', wrong: ['They can survive in actual fire', 'Their skin is hot to the touch', 'They live near volcanoes'], category: 'behavior' },
      { text: 'Fire salamanders can spray poison from glands behind their eyes up to several inches away to defend themselves.', q: 'How do fire salamanders defend themselves?', a: 'They can spray poison from glands behind their eyes', wrong: ['They bite with venomous fangs', 'They play dead like opossums', 'They shed their tail like a lizard'], category: 'ability' },
      { text: 'Their bold black and yellow pattern is a warning to predators that says "I\'m toxic, don\'t eat me." This is called aposematic coloration.', q: 'What do a fire salamander\'s bright colors signal?', a: 'A warning that it is toxic', wrong: ['That it is looking for a mate', 'That it is friendly and safe to touch', 'That it is cold and needs warmth'], category: 'body' },
      { text: 'Fire salamanders can live for over 20 years in the wild, and some in captivity have lived past 50.', q: 'How long can a fire salamander live in captivity?', a: 'Over 50 years', wrong: ['About 2 years', 'About 5 years', 'About 10 years'], category: 'lifespan' },
    ],
  },

  'Jackson\'s Chameleon': {
    status: 'LC',
    habitat: 'Montane forests and woodlands at high elevations',
    range: 'East Africa (Kenya, Tanzania); introduced in Hawaii',
    facts: [
      { text: 'Male Jackson\'s chameleons have three horns on their heads, making them look like mini triceratops dinosaurs.', q: 'How many horns does a male Jackson\'s chameleon have?', a: 'Three', wrong: ['One', 'Two', 'Five'], category: 'body' },
      { text: 'Jackson\'s chameleons give live birth instead of laying eggs, which is rare for chameleons. A mother can have 8 to 30 babies at once.', q: 'What is unusual about Jackson\'s chameleon reproduction?', a: 'They give live birth instead of laying eggs', wrong: ['The father carries the babies', 'They lay eggs in water like frogs', 'Each baby hatches from a different colored egg'], category: 'behavior' },
      { text: 'A Jackson\'s chameleon\'s tongue can be 1.5 times the length of its entire body and shoots out to catch insects faster than the human eye can follow.', q: 'How long is a Jackson\'s chameleon\'s tongue compared to its body?', a: '1.5 times its body length', wrong: ['Half its body length', 'The same length as its body', 'Three times its body length'], category: 'body' },
      { text: 'Male Jackson\'s chameleons use their horns to joust with rivals, locking horns and trying to push each other off branches.', q: 'How do male Jackson\'s chameleons fight?', a: 'They lock horns and try to push each other off branches', wrong: ['They bite each other\'s tails', 'They change to the scariest color', 'They make loud growling sounds'], category: 'behavior' },
    ],
  },

  'Chinese Giant Salamander': {
    status: 'CR',
    habitat: 'Cold, fast-flowing mountain streams and underground rivers in caves',
    range: 'Central China',
    facts: [
      { text: 'The Chinese giant salamander is the largest amphibian in the world, growing up to nearly 6 feet long — about the length of a tall human.', q: 'How long can a Chinese giant salamander grow?', a: 'Nearly 6 feet', wrong: ['About 1 foot', 'About 2 feet', 'About 10 feet'], category: 'size' },
      { text: 'Chinese giant salamanders have been around for 170 million years, making them older than most dinosaurs. They\'re called "living fossils."', q: 'How long have Chinese giant salamanders existed?', a: 'About 170 million years', wrong: ['About 1 million years', 'About 10 million years', 'About 500 million years'], category: 'lifespan' },
      { text: 'Chinese giant salamanders absorb oxygen through their wrinkly skin and can sense vibrations in the water to detect prey, since their eyesight is very poor.', q: 'How do Chinese giant salamanders find prey with poor eyesight?', a: 'They sense vibrations in the water', wrong: ['They use echolocation', 'They smell prey from miles away', 'They use their tongue to taste the water'], category: 'ability' },
      { text: 'The Chinese giant salamander makes a sound that resembles a crying baby, earning it the nickname "baby fish" in Chinese.', q: 'What unusual sound does the Chinese giant salamander make?', a: 'A sound like a crying baby', wrong: ['A deep roar like a bull', 'A high-pitched whistle', 'A clicking sound like a dolphin'], category: 'behavior' },
    ],
  },

  'Leaf-Tailed Gecko': {
    status: 'VU',
    habitat: 'Primary and secondary tropical rainforests',
    range: 'Madagascar',
    facts: [
      { text: 'The leaf-tailed gecko has a flat tail shaped exactly like a dead leaf, complete with veins and even fake insect bite holes.', q: 'What does a leaf-tailed gecko\'s tail look like?', a: 'A dead leaf, complete with veins and fake bug holes', wrong: ['A green living leaf', 'A small snake', 'A piece of bark'], category: 'body' },
      { text: 'These geckos press their bodies flat against tree bark and have tiny skin flaps along their sides that eliminate shadows, making them virtually invisible.', q: 'How do leaf-tailed geckos eliminate their shadows?', a: 'Tiny skin flaps along their sides', wrong: ['They only come out on cloudy days', 'They glow to match the light', 'They cover themselves in tree sap'], category: 'ability' },
      { text: 'When caught, the leaf-tailed gecko opens its mouth super wide to reveal a bright red or orange interior, trying to scare the predator with a sudden flash of color.', q: 'What does a leaf-tailed gecko do when caught by a predator?', a: 'Opens its mouth wide to flash a bright red or orange interior', wrong: ['It plays dead and goes limp', 'It makes a loud screaming sound', 'It bites with venomous fangs'], category: 'behavior' },
      { text: 'Leaf-tailed geckos can shed their tail if grabbed, and the dropped tail keeps wiggling to distract the predator while the gecko escapes.', q: 'What happens when a leaf-tailed gecko drops its tail?', a: 'The tail keeps wiggling to distract the predator', wrong: ['It grows back instantly', 'It explodes with a bad smell', 'It turns into a new gecko'], category: 'ability' },
    ],
  },

  'Hoatzin': {
    status: 'LC',
    habitat: 'Swamps, mangroves, and flooded forests along rivers',
    range: 'Amazon and Orinoco river basins in South America',
    facts: [
      { text: 'Hoatzin chicks are born with claws on their wings that they use to climb trees, just like baby dinosaurs might have. They lose the claws as adults.', q: 'What do hoatzin chicks have on their wings that other birds don\'t?', a: 'Claws they use to climb trees', wrong: ['Extra feathers for flying early', 'Webbed wing tips for swimming', 'Sharp spines for defense'], category: 'body' },
      { text: 'The hoatzin is sometimes called the "stinkbird" because it digests leaves by fermenting them in its crop, giving it a smell like cow manure.', q: 'Why is the hoatzin called the "stinkbird"?', a: 'It ferments leaves in its crop and smells like manure', wrong: ['It sprays a stinky liquid when scared', 'It rolls in mud to stay cool', 'It eats rotting fish'], category: 'diet' },
      { text: 'The hoatzin is the only bird that digests food like a cow, using bacteria to break down tough leaves in a special enlarged crop.', q: 'How does the hoatzin digest food differently from other birds?', a: 'It ferments leaves with bacteria like a cow', wrong: ['It swallows stones to grind food', 'It eats its food twice like a rabbit', 'It dissolves food with strong acid like a vulture'], category: 'diet' },
      { text: 'If a hoatzin chick is threatened by a predator, it drops from its nest into the water below, swims to safety, then climbs back up using its wing claws.', q: 'How do hoatzin chicks escape predators?', a: 'They drop into water, swim away, and climb back up with wing claws', wrong: ['They fly away immediately', 'They play dead in the nest', 'The parents carry them away'], category: 'behavior' },
    ],
  },

  'Clark\'s Nutcracker': {
    status: 'LC',
    habitat: 'Mountain conifer forests near the tree line',
    range: 'Western North America, from British Columbia to Mexico',
    facts: [
      { text: 'Clark\'s nutcrackers hide up to 98,000 pine seeds every fall in thousands of different locations and can remember where most of them are months later.', q: 'How many seeds can a Clark\'s nutcracker hide in one fall?', a: 'Up to 98,000 seeds', wrong: ['About 100 seeds', 'About 1,000 seeds', 'About 10,000 seeds'], category: 'ability' },
      { text: 'Clark\'s nutcrackers can carry up to 150 seeds at a time in a special pouch under their tongue.', q: 'How do Clark\'s nutcrackers carry so many seeds at once?', a: 'In a special pouch under their tongue', wrong: ['In their stomach', 'In their claws', 'Stuck to their feathers'], category: 'body' },
      { text: 'The seeds that Clark\'s nutcrackers forget to dig up often sprout into new trees. They are responsible for planting entire forests of whitebark pine.', q: 'What happens to the seeds Clark\'s nutcrackers don\'t retrieve?', a: 'They grow into new trees, planting entire forests', wrong: ['Other birds eat them all', 'They decompose by spring', 'Squirrels steal every last one'], category: 'habitat' },
      { text: 'Clark\'s nutcrackers can find their buried seeds even under 3 feet of snow by remembering landmarks like rocks and trees.', q: 'How do Clark\'s nutcrackers find seeds buried under snow?', a: 'They remember landmarks like rocks and trees', wrong: ['They smell the seeds through the snow', 'They use echolocation', 'They follow other birds to the spots'], category: 'ability' },
    ],
  },

  'Surinam Toad': {
    status: 'LC',
    habitat: 'Slow-moving streams, swamps, and muddy pools in tropical forests',
    range: 'Northern South America, from Trinidad to Bolivia',
    facts: [
      { text: 'The Surinam toad is one of the flattest animals on Earth. Its body is so flat that it looks like a dead leaf floating in the water.', q: 'What does a Surinam toad look like?', a: 'A flat dead leaf floating in the water', wrong: ['A round ball like a pufferfish', 'A brightly colored flower', 'A small rock on the riverbed'], category: 'body' },
      { text: 'Female Surinam toads carry their eggs embedded in the skin of their backs. The babies develop inside the skin and pop out as fully formed tiny toads.', q: 'Where do Surinam toad babies develop?', a: 'Embedded in the skin of the mother\'s back', wrong: ['In a foam nest on the water surface', 'Inside the father\'s mouth', 'In an underground burrow'], category: 'behavior' },
      { text: 'Surinam toads have no tongue and no teeth. They stuff food into their mouths using their long, sensitive fingers.', q: 'How do Surinam toads eat without a tongue or teeth?', a: 'They stuff food in with their long fingers', wrong: ['They suck food in like a vacuum', 'They swallow water and filter out food', 'They wait for food to float into their mouth'], category: 'diet' },
      { text: 'Surinam toads sense prey in murky water using star-shaped touch sensors on their fingertips that detect tiny vibrations.', q: 'How do Surinam toads find prey in dark, murky water?', a: 'Star-shaped touch sensors on their fingertips', wrong: ['Echolocation like bats', 'Heat-sensing pits like snakes', 'Electrical sensors like sharks'], category: 'ability' },
    ],
  },

  'Eastern Indigo Snake': {
    status: 'NT',
    habitat: 'Pine flatwoods, hardwood forests, and coastal scrub',
    range: 'Southeastern United States, primarily Florida and Georgia',
    facts: [
      { text: 'The eastern indigo snake is the longest native snake in the United States, growing up to 8.5 feet long.', q: 'How long can an eastern indigo snake grow?', a: 'Up to 8.5 feet', wrong: ['Up to 3 feet', 'Up to 5 feet', 'Up to 15 feet'], category: 'size' },
      { text: 'Eastern indigo snakes are immune to rattlesnake venom and regularly eat rattlesnakes as part of their diet.', q: 'What is the eastern indigo snake immune to?', a: 'Rattlesnake venom', wrong: ['Fire ant stings', 'Scorpion venom', 'Bee stings'], category: 'ability' },
      { text: 'Unlike most snakes that squeeze or use venom, indigo snakes just pin prey down with their body and swallow it alive.', q: 'How do eastern indigo snakes kill their prey?', a: 'They pin it down and swallow it alive', wrong: ['They constrict it like a python', 'They inject venom through fangs', 'They drown it in water'], category: 'diet' },
      { text: 'Indigo snakes share gopher tortoise burrows in winter to keep warm, living alongside rattlesnakes, frogs, and other animals in the same underground den.', q: 'Where do indigo snakes shelter in winter?', a: 'In gopher tortoise burrows with other animals', wrong: ['They hibernate in trees', 'They migrate south like birds', 'They dig their own deep burrows'], category: 'habitat' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // MAMMALS (WAVE 2)
  // ══════════════════════════════════════════════════════════════════
  'African Wild Dog': {
    status: 'EN',
    habitat: 'Savannas, grasslands, and open woodlands',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'African wild dogs vote on group decisions by sneezing! The more sneezes, the more likely the pack will move.', q: 'How do African wild dogs "vote" on decisions?', a: 'By sneezing', wrong: ['By barking', 'By wagging their tails', 'By howling'], category: 'behavior' },
      { text: 'African wild dogs have an 80% hunting success rate, making them one of the most efficient predators on Earth.', q: 'What is the African wild dog hunting success rate?', a: 'About 80%', wrong: ['About 30%', 'About 50%', 'About 95%'], category: 'ability' },
      { text: 'Every African wild dog has a unique coat pattern, like a human fingerprint. No two are alike!', q: 'What is unique about each African wild dog coat?', a: 'Every pattern is different', wrong: ['They all look the same', 'Males are always darker', 'Puppies are born without spots'], category: 'body' },
      { text: 'African wild dogs can run at speeds up to 44 mph during a chase.', q: 'How fast can African wild dogs run?', a: 'Up to 44 mph', wrong: ['Up to 25 mph', 'Up to 60 mph', 'Up to 35 mph'], category: 'speed' },
    ],
  },
  'Fennec Fox': {
    status: 'LC',
    habitat: 'Sandy deserts and arid regions',
    range: 'North Africa and the Sahara Desert',
    facts: [
      { text: 'The fennec fox is the smallest fox in the world, weighing only 2 to 3 pounds!', q: 'How much does a fennec fox weigh?', a: '2 to 3 pounds', wrong: ['8 to 10 pounds', '5 to 7 pounds', '15 to 20 pounds'], category: 'size' },
      { text: 'Fennec foxes have enormous ears that can be 6 inches long, which help them hear prey underground and release body heat.', q: 'Why do fennec foxes have such big ears?', a: 'To hear prey and release heat', wrong: ['To scare predators', 'To collect rainwater', 'To communicate with other foxes'], category: 'body' },
      { text: 'Fennec foxes can go almost indefinitely without drinking water, getting moisture from the food they eat.', q: 'How do fennec foxes survive without much water?', a: 'They get moisture from food', wrong: ['They store water in their tails', 'They lick morning dew off rocks', 'They drink from cactus plants'], category: 'ability' },
      { text: 'Fennec foxes can jump 2 feet high and 4 feet forward from a standing position.', q: 'How high can a fennec fox jump from a standstill?', a: '2 feet', wrong: ['6 inches', '5 feet', '8 feet'], category: 'ability' },
    ],
  },
  'Okapi': {
    status: 'EN',
    habitat: 'Dense tropical rainforests',
    range: 'Democratic Republic of the Congo',
    facts: [
      { text: 'The okapi tongue is so long (about 18 inches) that it can lick its own ears and eyelids!', q: 'How long is an okapi tongue?', a: 'About 18 inches', wrong: ['About 6 inches', 'About 30 inches', 'About 12 inches'], category: 'body' },
      { text: 'Even though okapis look like zebras from behind, they are actually the only living relative of the giraffe.', q: 'What animal is the okapi most closely related to?', a: 'The giraffe', wrong: ['The zebra', 'The horse', 'The antelope'], category: 'body' },
      { text: 'Okapis were not known to Western science until 1901, making them one of the last large mammals to be discovered.', q: 'When were okapis first discovered by Western scientists?', a: '1901', wrong: ['1750', '1850', '1950'], category: 'behavior' },
      { text: 'Baby okapis do not poop for the first month or two of life, which helps them avoid being detected by predators.', q: 'How do baby okapis avoid predators in their first weeks?', a: 'They do not poop so predators cannot smell them', wrong: ['They can run within minutes of birth', 'Their mothers hide them in trees', 'They are born with camouflage that fades'], category: 'behavior' },
    ],
  },
  'Mandrill': {
    status: 'VU',
    habitat: 'Tropical rainforests and forest-savanna mosaics',
    range: 'Central West Africa (Cameroon, Gabon, Congo)',
    facts: [
      { text: 'The mandrill is the largest monkey in the world, with males weighing up to 77 pounds.', q: 'How heavy can a male mandrill get?', a: 'Up to 77 pounds', wrong: ['Up to 30 pounds', 'Up to 120 pounds', 'Up to 50 pounds'], category: 'size' },
      { text: 'A mandrill troop can have over 600 members, making it the largest group of any primate species.', q: 'How many mandrills can be in a single troop?', a: 'Over 600', wrong: ['About 50', 'Around 150', 'Up to 300'], category: 'behavior' },
      { text: 'The brighter a male mandrill face and backside, the healthier and more dominant he is.', q: 'What do bright colors on a mandrill face indicate?', a: 'Health and dominance', wrong: ['Old age', 'That it is angry', 'That it is female'], category: 'body' },
      { text: 'Mandrills have cheek pouches that can hold nearly as much food as their stomachs.', q: 'What is special about mandrill cheek pouches?', a: 'They can hold nearly a stomach-full of food', wrong: ['They glow in the dark', 'They are used for breathing underwater', 'They inflate to scare predators'], category: 'body' },
    ],
  },
  'Sea Otter': {
    status: 'EN',
    habitat: 'Coastal waters with kelp forests',
    range: 'North Pacific Ocean (Alaska, California, Russia, Japan)',
    facts: [
      { text: 'Sea otters have the densest fur of any mammal: about 1 million hairs per square inch!', q: 'About how many hairs per square inch does a sea otter have?', a: '1 million', wrong: ['100,000', '10,000', '5 million'], category: 'body' },
      { text: 'Sea otters hold hands while sleeping so they do not drift apart. This is called a "raft."', q: 'Why do sea otters hold hands while sleeping?', a: 'So they do not drift apart', wrong: ['To stay warm', 'To protect from sharks', 'To show affection'], category: 'behavior' },
      { text: 'Sea otters use rocks as tools to crack open shellfish, making them one of the few tool-using mammals.', q: 'What tool do sea otters use to open shellfish?', a: 'Rocks', wrong: ['Their teeth only', 'Coral pieces', 'Sticks'], category: 'ability' },
      { text: 'A sea otter eats about 25% of its body weight in food every single day to stay warm.', q: 'How much food does a sea otter eat daily compared to its body weight?', a: 'About 25%', wrong: ['About 5%', 'About 10%', 'About 50%'], category: 'diet' },
    ],
  },
  'Aye-Aye': {
    status: 'EN',
    habitat: 'Tropical rainforests and dry deciduous forests',
    range: 'Madagascar',
    facts: [
      { text: 'The aye-aye has a super-thin middle finger that it uses to tap on trees and fish out insects, like using a built-in fishing rod!', q: 'What does the aye-aye use its long middle finger for?', a: 'Tapping trees and pulling out insects', wrong: ['Digging underground burrows', 'Climbing smooth bark', 'Fighting other aye-ayes'], category: 'ability' },
      { text: 'The aye-aye is the largest nocturnal primate in the world.', q: 'What record does the aye-aye hold among primates?', a: 'Largest nocturnal primate', wrong: ['Smallest primate overall', 'Fastest primate', 'Loudest primate'], category: 'size' },
      { text: 'Aye-ayes have teeth that never stop growing, similar to rodents, which is very unusual for a primate.', q: 'What is unusual about aye-aye teeth?', a: 'They never stop growing', wrong: ['They fall out and regrow every year', 'They are bright orange', 'They have no teeth at all'], category: 'body' },
    ],
  },
  'Wombat': {
    status: 'LC',
    habitat: 'Eucalyptus forests, grasslands, and coastal scrub',
    range: 'Australia',
    facts: [
      { text: 'Wombats are the only animals in the world that produce cube-shaped poop! They stack it to mark territory.', q: 'What shape is wombat poop?', a: 'Cube-shaped', wrong: ['Round like marbles', 'Long and thin', 'Flat like pancakes'], category: 'body' },
      { text: 'A wombat backside is mostly cartilage, acting like armor. They block their burrow entrance with it to stop predators.', q: 'How do wombats defend their burrows from predators?', a: 'They block the entrance with their tough backside', wrong: ['They spray a bad smell', 'They bite with powerful jaws', 'They dig a second exit and escape'], category: 'ability' },
      { text: 'Wombats can run up to 25 mph in short bursts, which is surprisingly fast for their stocky build.', q: 'How fast can a wombat run?', a: 'Up to 25 mph', wrong: ['Up to 5 mph', 'Up to 15 mph', 'Up to 40 mph'], category: 'speed' },
      { text: 'Wombat burrows can be over 650 feet long with multiple entrances and chambers.', q: 'How long can a wombat burrow be?', a: 'Over 650 feet', wrong: ['About 10 feet', 'About 50 feet', 'About 200 feet'], category: 'habitat' },
    ],
  },
  'Tasmanian Devil': {
    status: 'EN',
    habitat: 'Forests, scrublands, and coastal areas',
    range: 'Tasmania (Australia)',
    facts: [
      { text: 'The Tasmanian devil has the strongest bite for its size of any living mammal, powerful enough to crunch through bone.', q: 'What is special about the Tasmanian devil bite?', a: 'Strongest bite for its size of any mammal', wrong: ['It is venomous', 'It can bite through steel', 'It is the weakest of all predators'], category: 'ability' },
      { text: 'Tasmanian devils store fat in their tails. A healthy devil has a thick, swollen tail!', q: 'Where do Tasmanian devils store extra fat?', a: 'In their tails', wrong: ['In their cheeks', 'In a hump on their back', 'In their belly pouch'], category: 'body' },
      { text: 'Baby Tasmanian devils are called imps and are the size of a grain of rice when born.', q: 'How big is a baby Tasmanian devil at birth?', a: 'About the size of a grain of rice', wrong: ['About the size of a golf ball', 'About the size of a mouse', 'About the size of a grape'], category: 'size' },
      { text: 'Tasmanian devils can eat up to 40% of their body weight in a single meal.', q: 'How much can a Tasmanian devil eat in one meal?', a: 'Up to 40% of its body weight', wrong: ['Up to 5% of its body weight', 'Up to 15% of its body weight', 'Up to 80% of its body weight'], category: 'diet' },
    ],
  },
  'Numbat': {
    status: 'EN',
    habitat: 'Eucalyptus woodlands',
    range: 'Western Australia',
    facts: [
      { text: 'Numbats eat up to 20,000 termites every single day using their long, sticky tongue!', q: 'How many termites can a numbat eat per day?', a: 'Up to 20,000', wrong: ['About 500', 'About 5,000', 'About 50,000'], category: 'diet' },
      { text: 'The numbat is one of the only marsupials that is active during the daytime instead of at night.', q: 'What is unusual about when numbats are active?', a: 'They are active during the day', wrong: ['They are only active at dawn', 'They hibernate for 6 months', 'They are only active during full moons'], category: 'behavior' },
      { text: 'Numbats have up to 52 teeth, more than almost any other land mammal.', q: 'How many teeth can a numbat have?', a: 'Up to 52', wrong: ['About 20', 'About 32', 'About 80'], category: 'body' },
    ],
  },
  'Japanese Macaque': {
    status: 'LC',
    habitat: 'Forests from subtropical to subarctic',
    range: 'Japan',
    facts: [
      { text: 'Japanese macaques, called "snow monkeys," bathe in natural hot springs during freezing winters to stay warm.', q: 'How do snow monkeys stay warm in winter?', a: 'They bathe in hot springs', wrong: ['They hibernate in caves', 'They huddle in snow igloos', 'They migrate south'], category: 'behavior' },
      { text: 'Japanese macaques are the most northern-living non-human primates on Earth, surviving temperatures as low as -4F.', q: 'How cold can it get where Japanese macaques live?', a: 'As low as -4F', wrong: ['About 32F', 'About 50F', 'About 15F'], category: 'habitat' },
      { text: 'Snow monkeys have been observed making and rolling snowballs just for fun!', q: 'What do snow monkeys do with snowballs?', a: 'They make and roll them for fun', wrong: ['They eat them for water', 'They throw them at predators', 'They use them to build shelters'], category: 'behavior' },
      { text: 'Japanese macaques wash their food in water before eating, a behavior that young monkeys learn from their mothers.', q: 'What do Japanese macaques do with their food before eating?', a: 'Wash it in water', wrong: ['Bury it underground first', 'Dry it in the sun', 'Share it equally with the group'], category: 'behavior' },
    ],
  },
  'Naked Mole Rat': {
    status: 'LC',
    habitat: 'Underground tunnel systems in dry grasslands',
    range: 'East Africa (Ethiopia, Kenya, Somalia)',
    facts: [
      { text: 'Naked mole rats can live for over 30 years, which is insanely long for a rodent their size.', q: 'How long can a naked mole rat live?', a: 'Over 30 years', wrong: ['About 3 years', 'About 8 years', 'About 15 years'], category: 'lifespan' },
      { text: 'Naked mole rats are one of only two mammal species that live in colonies with a queen, like bees or ants.', q: 'What makes naked mole rat colonies similar to bee hives?', a: 'They have a queen who is the only one that breeds', wrong: ['They make honey', 'They build hexagonal tunnels', 'They communicate by dancing'], category: 'behavior' },
      { text: 'Naked mole rats almost never get cancer, which makes scientists study them to help fight cancer in humans.', q: 'What disease are naked mole rats almost immune to?', a: 'Cancer', wrong: ['The common cold', 'Malaria', 'Heart disease'], category: 'ability' },
      { text: 'Naked mole rats can run backward just as fast as they run forward through their tunnels.', q: 'What can naked mole rats do when running in tunnels?', a: 'Run backward as fast as forward', wrong: ['See in complete darkness', 'Swim through flooded tunnels', 'Glow to light the way'], category: 'ability' },
      { text: 'Naked mole rats can survive up to 18 minutes without oxygen by switching to a fructose-based metabolism, like a plant!', q: 'How long can naked mole rats survive without oxygen?', a: 'Up to 18 minutes', wrong: ['About 1 minute', 'About 5 minutes', 'About 45 minutes'], category: 'ability' },
    ],
  },
  'Quokka': {
    status: 'VU',
    habitat: 'Dense vegetation near swamps and scrubland',
    range: 'Western Australia (mainly Rottnest Island)',
    facts: [
      { text: 'Quokkas always look like they are smiling, earning them the title of "world happiest animal."', q: 'What nickname has the quokka earned?', a: 'World happiest animal', wrong: ['World smallest kangaroo', 'World furriest rodent', 'World friendliest marsupial'], category: 'body' },
      { text: 'Quokkas can survive for long periods without water by getting moisture from the plants they eat.', q: 'How do quokkas survive with little water?', a: 'They get moisture from plants', wrong: ['They lick morning dew off leaves', 'They dig wells in sand', 'They store water in their tails'], category: 'ability' },
      { text: 'When the Dutch explorer Willem de Vlamingh first saw quokkas in 1696, he thought they were giant rats and named the island "Rottnest" (rat nest).', q: 'Why is Rottnest Island called "Rottnest"?', a: 'An explorer thought quokkas were giant rats', wrong: ['The island is shaped like a rat', 'Rats once overran the island', 'It was named after a Dutch word for paradise'], category: 'habitat' },
    ],
  },
  'Ring-tailed Lemur': {
    status: 'EN',
    habitat: 'Dry forests, scrublands, and gallery forests',
    range: 'Southern Madagascar',
    facts: [
      { text: 'Male ring-tailed lemurs have "stink fights" where they rub their tails with smelly wrist glands and wave them at rivals.', q: 'How do male ring-tailed lemurs fight for dominance?', a: 'They have stink fights with their tails', wrong: ['They wrestle on the ground', 'They scream the loudest', 'They race through the trees'], category: 'behavior' },
      { text: 'Ring-tailed lemur groups are led by a dominant female, not a male.', q: 'Who leads a ring-tailed lemur group?', a: 'A dominant female', wrong: ['The oldest male', 'The biggest male', 'The youngest adult'], category: 'behavior' },
      { text: 'Ring-tailed lemurs spend more time on the ground than any other lemur species.', q: 'What is unusual about ring-tailed lemurs compared to other lemurs?', a: 'They spend more time on the ground', wrong: ['They cannot climb trees', 'They swim across rivers', 'They are nocturnal'], category: 'behavior' },
      { text: 'Ring-tailed lemurs sunbathe in a yoga-like pose with arms outstretched to warm up in the morning.', q: 'How do ring-tailed lemurs warm up in the morning?', a: 'They sunbathe with arms outstretched', wrong: ['They huddle in a pile', 'They exercise by jumping', 'They rub their fur with warm leaves'], category: 'behavior' },
    ],
  },
  'Humpback Whale': {
    status: 'LC',
    habitat: 'Open oceans and coastal waters',
    range: 'All major oceans worldwide',
    facts: [
      { text: 'Humpback whale songs can last up to 20 hours and be heard from over 20 miles away.', q: 'How long can a humpback whale song last?', a: 'Up to 20 hours', wrong: ['About 5 minutes', 'About 1 hour', 'About 3 hours'], category: 'ability' },
      { text: 'Humpback whales migrate up to 16,000 miles round trip each year, one of the longest migrations of any mammal.', q: 'How far do humpback whales migrate in a year?', a: 'Up to 16,000 miles round trip', wrong: ['About 500 miles', 'About 3,000 miles', 'About 8,000 miles'], category: 'behavior' },
      { text: 'Humpback whales blow bubbles in a circle to trap fish, then swim up through the bubble net with mouths open. This is called bubble-net feeding.', q: 'What is bubble-net feeding?', a: 'Blowing bubbles in a circle to trap fish', wrong: ['Catching fish in their blowholes', 'Using their fins to create whirlpools', 'Following fishing boats for scraps'], category: 'ability' },
      { text: 'A humpback whale calf gains about 100 pounds per day in its first year of life!', q: 'How much weight does a humpback whale calf gain daily?', a: 'About 100 pounds', wrong: ['About 10 pounds', 'About 25 pounds', 'About 500 pounds'], category: 'size' },
    ],
  },
  'Vampire Bat': {
    status: 'LC',
    habitat: 'Tropical and subtropical forests, caves',
    range: 'Mexico, Central America, South America',
    facts: [
      { text: 'Vampire bats are the only mammals that survive entirely on blood! They drink about 2 tablespoons per night.', q: 'How much blood does a vampire bat drink per night?', a: 'About 2 tablespoons', wrong: ['About 1 cup', 'About a teaspoon', 'About a pint'], category: 'diet' },
      { text: 'Vampire bats share food with hungry roost-mates by regurgitating blood, and they remember who helped them in the past.', q: 'How do vampire bats share food with friends?', a: 'They regurgitate blood for hungry bats', wrong: ['They lead friends to prey', 'They save blood in pouches', 'They take turns hunting'], category: 'behavior' },
      { text: 'Vampire bat saliva contains an anticoagulant so powerful that scientists named it "draculin" and use it to study blood clot treatments.', q: 'What is the blood-thinning chemical in vampire bat saliva called?', a: 'Draculin', wrong: ['Vampirin', 'Batase', 'Hemoglobin'], category: 'body' },
      { text: 'Vampire bats can run on the ground using their wings as front legs, reaching a galloping speed.', q: 'How do vampire bats move on the ground?', a: 'They gallop using their wings as front legs', wrong: ['They hop like frogs', 'They slither like snakes', 'They roll in a ball'], category: 'ability' },
    ],
  },
  'Echidna': {
    status: 'LC',
    habitat: 'Forests, grasslands, and deserts',
    range: 'Australia and New Guinea',
    facts: [
      { text: 'Along with the platypus, the echidna is one of only two mammals in the world that lays eggs!', q: 'What makes echidnas extremely rare among mammals?', a: 'They lay eggs', wrong: ['They have no fur', 'They can fly', 'They breathe through their skin'], category: 'body' },
      { text: 'Baby echidnas are called puggles, and they are about the size of a jellybean when they hatch.', q: 'What is a baby echidna called?', a: 'A puggle', wrong: ['A kit', 'A joey', 'A pup'], category: 'size' },
      { text: 'Echidnas have no teeth. Instead, they crush food between their tongue and the roof of their mouth.', q: 'How do echidnas chew their food?', a: 'They crush it between their tongue and the roof of their mouth', wrong: ['They swallow everything whole', 'They use their spines to grind food', 'They have hidden teeth in their throat'], category: 'body' },
      { text: 'When threatened, an echidna digs straight down into the ground, leaving only a ball of sharp spines on the surface.', q: 'How does an echidna defend itself?', a: 'It digs into the ground leaving only its spines exposed', wrong: ['It shoots its spines like a porcupine', 'It rolls away at high speed', 'It sprays a foul-smelling liquid'], category: 'ability' },
    ],
  },
  'Manatee': {
    status: 'VU',
    habitat: 'Shallow coastal waters, rivers, and estuaries',
    range: 'Southeastern United States, Caribbean, West Africa, Amazon',
    facts: [
      { text: 'Manatees constantly replace their teeth. Old teeth fall out from the front and new ones grow in from the back, like a conveyor belt!', q: 'How do manatees replace their teeth?', a: 'New teeth grow in from the back as old ones fall out in front', wrong: ['They grow a whole new set once a year', 'They never lose their baby teeth', 'Their teeth repair themselves'], category: 'body' },
      { text: 'Despite their size, manatees have very little body fat and get cold easily, which is why they seek warm water.', q: 'Why do manatees need warm water?', a: 'They have very little body fat and get cold easily', wrong: ['Warm water has more food', 'Cold water hurts their skin', 'Their babies can only survive in warm water'], category: 'habitat' },
      { text: 'Manatees are related to elephants! Their closest living relative on land is the elephant.', q: 'What is the manatee closest living land relative?', a: 'The elephant', wrong: ['The hippo', 'The pig', 'The rhino'], category: 'body' },
      { text: 'Manatees can eat over 100 pounds of aquatic plants per day, spending 6-8 hours eating.', q: 'How much can a manatee eat in a day?', a: 'Over 100 pounds of plants', wrong: ['About 10 pounds', 'About 30 pounds', 'About 250 pounds'], category: 'diet' },
    ],
  },
  'Sugar Glider': {
    status: 'LC',
    habitat: 'Forests and woodlands',
    range: 'Australia, New Guinea, Indonesia',
    facts: [
      { text: 'Sugar gliders can glide up to 150 feet through the air using a membrane of skin between their front and back legs.', q: 'How far can a sugar glider glide?', a: 'Up to 150 feet', wrong: ['About 10 feet', 'About 50 feet', 'About 500 feet'], category: 'ability' },
      { text: 'Sugar gliders got their name because they love sweet foods like nectar, fruit, and tree sap.', q: 'Why are sugar gliders called "sugar" gliders?', a: 'They love sweet foods like nectar and sap', wrong: ['Their fur feels like sugar crystals', 'They are white like sugar', 'They were first found near sugar cane fields'], category: 'diet' },
      { text: 'Sugar gliders have a special fourth finger that is extra long, which they use to scoop insects out of tree bark.', q: 'What do sugar gliders use their extra-long finger for?', a: 'Scooping insects out of tree bark', wrong: ['Hanging upside down', 'Opening fruit', 'Grooming other gliders'], category: 'body' },
    ],
  },
  'Proboscis Monkey': {
    status: 'EN',
    habitat: 'Mangrove forests, riverine forests, and swamps',
    range: 'Borneo (Indonesia, Malaysia, Brunei)',
    facts: [
      { text: 'Male proboscis monkeys have enormous droopy noses that can be over 4 inches long. Females prefer males with bigger noses!', q: 'How long can a male proboscis monkey nose get?', a: 'Over 4 inches', wrong: ['About 1 inch', 'About 8 inches', 'About 2 inches'], category: 'body' },
      { text: 'Proboscis monkeys are one of the best swimmers of all primates and have partially webbed feet.', q: 'What makes proboscis monkeys unusual swimmers?', a: 'They have partially webbed feet', wrong: ['They can hold their breath for 30 minutes', 'They use their noses as snorkels', 'They have waterproof fur'], category: 'ability' },
      { text: 'A proboscis monkey belly can make up to 25% of its body weight because of its huge, complex stomach for digesting leaves.', q: 'Why do proboscis monkeys have such big bellies?', a: 'They have a huge complex stomach for digesting leaves', wrong: ['They store water in their bellies', 'They eat rocks to help digestion', 'Their bellies are filled with air for floating'], category: 'body' },
    ],
  },
  'Iberian Lynx': {
    status: 'EN',
    habitat: 'Mediterranean scrubland and open forests',
    range: 'Spain and Portugal',
    facts: [
      { text: 'The Iberian lynx was once the most endangered cat in the world, with only about 94 left in 2002. Conservation brought them back to over 2,000!', q: 'How many Iberian lynx were left in 2002?', a: 'About 94', wrong: ['About 500', 'About 1,000', 'About 20'], category: 'behavior' },
      { text: 'Iberian lynx depend heavily on rabbits, which make up about 80-100% of their diet.', q: 'What is the main food of the Iberian lynx?', a: 'Rabbits', wrong: ['Fish', 'Deer', 'Birds'], category: 'diet' },
      { text: 'Iberian lynx have distinctive "beard" tufts on their cheeks and black tufts on the tips of their ears.', q: 'What are the distinctive features on an Iberian lynx face?', a: 'Beard-like cheek tufts and black ear tufts', wrong: ['A striped forehead', 'A mane like a lion', 'Spots that change color with seasons'], category: 'body' },
    ],
  },
  'Pygmy Marmoset': {
    status: 'LC',
    habitat: 'Tropical rainforests near rivers',
    range: 'Western Amazon Basin (Brazil, Colombia, Ecuador, Peru)',
    facts: [
      { text: 'The pygmy marmoset is the smallest monkey in the world, weighing about as much as a stick of butter (around 4 ounces)!', q: 'How much does a pygmy marmoset weigh?', a: 'About 4 ounces', wrong: ['About 2 pounds', 'About 1 pound', 'About 8 ounces'], category: 'size' },
      { text: 'Pygmy marmosets can rotate their heads 180 degrees to look directly behind them.', q: 'How far can a pygmy marmoset turn its head?', a: '180 degrees', wrong: ['90 degrees', '270 degrees', '360 degrees'], category: 'body' },
      { text: 'Pygmy marmosets eat tree sap by gnawing tiny holes in bark with their teeth. A single family can create thousands of holes.', q: 'How do pygmy marmosets get tree sap?', a: 'They gnaw holes in the bark', wrong: ['They lick it off the surface', 'They wait for woodpeckers to make holes', 'They peel the bark off with their hands'], category: 'diet' },
      { text: 'Pygmy marmosets can leap up to 15 feet between branches, which is over 30 times their body length.', q: 'How far can a pygmy marmoset jump?', a: 'Up to 15 feet', wrong: ['About 3 feet', 'About 8 feet', 'About 30 feet'], category: 'ability' },
    ],
  },
  'Dugong': {
    status: 'VU',
    habitat: 'Warm coastal waters with seagrass beds',
    range: 'Indo-Pacific (East Africa to Australia)',
    facts: [
      { text: 'Dugongs are thought to have inspired ancient legends about mermaids!', q: 'What mythical creature are dugongs thought to have inspired?', a: 'Mermaids', wrong: ['Sea serpents', 'Krakens', 'Selkies'], category: 'behavior' },
      { text: 'Dugongs can live for over 70 years, which is one of the longest lifespans of any marine mammal.', q: 'How long can a dugong live?', a: 'Over 70 years', wrong: ['About 20 years', 'About 35 years', 'About 50 years'], category: 'lifespan' },
      { text: 'Dugongs eat only seagrass. They are sometimes called "sea cows" because they graze on underwater meadows.', q: 'Why are dugongs called sea cows?', a: 'They graze on seagrass like cows graze on grass', wrong: ['They are the same size as cows', 'They moo underwater', 'They look like cows with flippers'], category: 'diet' },
    ],
  },
  'Clouded Leopard': {
    status: 'VU',
    habitat: 'Tropical and subtropical forests',
    range: 'Southeast Asia (Nepal to China to Indonesia)',
    facts: [
      { text: 'The clouded leopard has the longest canine teeth relative to its body size of any living cat.', q: 'What is special about clouded leopard canine teeth?', a: 'They are the longest relative to body size of any cat', wrong: ['They are retractable', 'They are venomous', 'They grow back if broken'], category: 'body' },
      { text: 'Clouded leopards can hang upside down from branches using only their hind feet and can even climb down trees headfirst.', q: 'What can clouded leopards do that most big cats cannot?', a: 'Climb down trees headfirst', wrong: ['Swim underwater for 10 minutes', 'Run faster than 80 mph', 'Jump over 30 feet high'], category: 'ability' },
      { text: 'Clouded leopards can open their jaws wider than any other cat species, almost to a 100-degree angle.', q: 'How wide can a clouded leopard open its jaws?', a: 'Almost 100 degrees', wrong: ['About 45 degrees', 'About 60 degrees', 'About 150 degrees'], category: 'body' },
    ],
  },
  'Fossa': {
    status: 'VU',
    habitat: 'Tropical forests',
    range: 'Madagascar',
    facts: [
      { text: 'The fossa is the largest predator on Madagascar and looks like a mix between a cat and a mongoose, but is actually related to the mongoose.', q: 'What is the fossa most closely related to?', a: 'The mongoose', wrong: ['The cat', 'The dog', 'The weasel'], category: 'body' },
      { text: 'Fossas have semi-retractable claws and flexible ankles that can rotate 180 degrees, allowing them to climb down trees headfirst.', q: 'What allows fossas to climb down trees headfirst?', a: 'Ankles that rotate 180 degrees', wrong: ['Suction cups on their paws', 'A prehensile tail', 'Extra-long claws'], category: 'ability' },
      { text: 'Fossas can grow up to 6 feet long from nose to tail tip, with the tail making up nearly half their total length.', q: 'How long can a fossa get including its tail?', a: 'Up to 6 feet', wrong: ['About 2 feet', 'About 4 feet', 'About 8 feet'], category: 'size' },
    ],
  },
  'Binturong': {
    status: 'VU',
    habitat: 'Dense tropical forests',
    range: 'Southeast Asia',
    facts: [
      { text: 'Binturongs smell like buttered popcorn! A chemical in their scent glands is the same compound that gives popcorn its smell.', q: 'What does a binturong smell like?', a: 'Buttered popcorn', wrong: ['Vanilla', 'Cinnamon', 'Fresh bread'], category: 'body' },
      { text: 'The binturong is one of only two carnivores with a prehensile tail that can grip branches like an extra hand.', q: 'What can a binturong do with its tail?', a: 'Grip branches like an extra hand', wrong: ['Spray musk at predators', 'Crack nuts open', 'Swat insects out of the air'], category: 'ability' },
      { text: 'Binturongs are also called "bearcats" even though they are not related to either bears or cats.', q: 'What is the binturong common nickname?', a: 'Bearcat', wrong: ['Tree bear', 'Forest cat', 'Climbing fox'], category: 'body' },
    ],
  },
  'Babirusa': {
    status: 'VU',
    habitat: 'Tropical rainforests near rivers and lakes',
    range: 'Indonesian islands (Sulawesi, Togian, Sula, Buru)',
    facts: [
      { text: 'Male babirusas have tusks that grow upward through the top of their snout and curve back toward their forehead. If not worn down, they can grow into the skull!', q: 'What is dangerous about male babirusa tusks?', a: 'They can curve back and grow into their own skull', wrong: ['They are filled with venom', 'They electrify when threatened', 'They fall out and regrow every year'], category: 'body' },
      { text: 'The name "babirusa" means "pig-deer" in the Malay language because of their deer-like tusks.', q: 'What does "babirusa" mean?', a: 'Pig-deer', wrong: ['Tusk-pig', 'Forest runner', 'River monster'], category: 'body' },
      { text: 'Babirusas are one of the oldest living pig species, with fossils dating back 35,000 years showing they have barely changed.', q: 'How old are babirusa fossils?', a: 'About 35,000 years', wrong: ['About 1,000 years', 'About 100,000 years', 'About 5 million years'], category: 'body' },
    ],
  },
  'Aardvark': {
    status: 'LC',
    habitat: 'Savannas, grasslands, and woodlands',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'The word "aardvark" means "earth pig" in Afrikaans, and it is the first animal listed in many English dictionaries.', q: 'What does "aardvark" mean?', a: 'Earth pig', wrong: ['Night digger', 'Ant hunter', 'Long nose'], category: 'body' },
      { text: 'An aardvark can dig a burrow faster than several people with shovels! Their powerful claws cut through hard soil with ease.', q: 'How fast can an aardvark dig?', a: 'Faster than several people with shovels', wrong: ['About one foot per hour', 'Only in soft sand', 'About the same speed as a human'], category: 'ability' },
      { text: 'Aardvarks can eat up to 50,000 termites and ants in a single night using their sticky, foot-long tongue.', q: 'How many insects can an aardvark eat in one night?', a: 'Up to 50,000', wrong: ['About 1,000', 'About 10,000', 'About 200,000'], category: 'diet' },
      { text: 'Aardvark teeth have no enamel and are made up of tubes of a material called dentin, making them unique among mammals.', q: 'What is unusual about aardvark teeth?', a: 'They have no enamel', wrong: ['They have three rows of teeth', 'They glow in the dark', 'They are made of bone instead of teeth'], category: 'body' },
    ],
  },
  'Tarsier': {
    status: 'VU',
    habitat: 'Dense forest and thick vegetation',
    range: 'Southeast Asian islands (Philippines, Borneo, Sumatra)',
    facts: [
      { text: 'Each tarsier eyeball is as big as its entire brain! They are the mammals with the largest eyes relative to body size.', q: 'How big is each tarsier eyeball compared to its brain?', a: 'As big as its entire brain', wrong: ['Half the size of its brain', 'Twice the size of its brain', 'The same size as a marble'], category: 'body' },
      { text: 'Tarsiers can rotate their heads nearly 360 degrees, like an owl, because their eyes cannot move in their sockets.', q: 'Why can tarsiers rotate their heads so far?', a: 'Their eyes cannot move in their sockets', wrong: ['They have extra neck bones', 'They need to watch for flying predators', 'Their ears are on the back of their head'], category: 'body' },
      { text: 'Tarsiers are the only fully carnivorous primates, eating insects, lizards, and even small birds.', q: 'What makes the tarsier diet unique among primates?', a: 'They are fully carnivorous', wrong: ['They eat only fruit', 'They eat rocks for minerals', 'They are the only primates that eat leaves'], category: 'diet' },
      { text: 'Tarsiers can leap over 40 times their own body length in a single jump!', q: 'How far can a tarsier jump relative to its size?', a: 'Over 40 times its body length', wrong: ['About 5 times its body length', 'About 15 times its body length', 'About 100 times its body length'], category: 'ability' },
    ],
  },
  'Maned Wolf': {
    status: 'NT',
    habitat: 'Grasslands and scrub forests',
    range: 'Central South America (Brazil, Argentina, Paraguay)',
    facts: [
      { text: 'The maned wolf is not actually a wolf, a fox, or a dog. It is the only species in its genus and has its own unique branch on the family tree.', q: 'What is the maned wolf most closely related to?', a: 'Nothing closely; it is the only species in its genus', wrong: ['The gray wolf', 'The red fox', 'The African wild dog'], category: 'body' },
      { text: 'Maned wolf pee smells so strongly of marijuana that police once searched a zoo in the Netherlands after visitors complained about the smell!', q: 'What does maned wolf urine famously smell like?', a: 'Marijuana', wrong: ['Roses', 'Skunk spray', 'Coffee'], category: 'body' },
      { text: 'Up to 50% of the maned wolf diet is fruit, especially the "wolf apple" (lobeira). They are the most vegetarian of all canids.', q: 'What surprising food makes up a big part of the maned wolf diet?', a: 'Fruit', wrong: ['Fish', 'Mushrooms', 'Eggs'], category: 'diet' },
      { text: 'Maned wolves have super-long legs that help them see over tall grass in their savanna habitat. They stand about 3 feet tall at the shoulder.', q: 'Why do maned wolves have such long legs?', a: 'To see over tall grass', wrong: ['To run faster than prey', 'To wade through deep water', 'To climb trees'], category: 'body' },
    ],
  },
  'Star-nosed Mole': {
    status: 'LC',
    habitat: 'Moist, low-elevation areas near water',
    range: 'Eastern North America',
    facts: [
      { text: 'The star-nosed mole has 22 pink tentacles on its nose that can touch 12 objects per second, making it the fastest-eating mammal on Earth.', q: 'How many tentacles does a star-nosed mole have on its nose?', a: '22', wrong: ['8', '12', '36'], category: 'body' },
      { text: 'Star-nosed moles can smell underwater by blowing air bubbles onto objects and then sniffing the bubbles back in!', q: 'How does the star-nosed mole smell things underwater?', a: 'By blowing and re-inhaling air bubbles', wrong: ['It cannot smell underwater', 'Through its tentacles', 'By tasting the water'], category: 'ability' },
      { text: 'The star-nosed mole can identify and eat a piece of food in as little as 120 milliseconds, faster than the human eye can follow.', q: 'How fast can a star-nosed mole eat a piece of food?', a: '120 milliseconds', wrong: ['About 2 seconds', 'About 10 seconds', 'About 500 milliseconds'], category: 'speed' },
    ],
  },
  'Slow Loris': {
    status: 'VU',
    habitat: 'Tropical rainforests and bamboo groves',
    range: 'Southeast Asia (India to Philippines)',
    facts: [
      { text: 'The slow loris is one of the only venomous mammals in the world! It produces venom from a gland on its elbow and mixes it with saliva for a toxic bite.', q: 'Where does the slow loris produce venom?', a: 'From a gland on its elbow', wrong: ['From fangs in its mouth', 'From its tail', 'From glands under its eyes'], category: 'ability' },
      { text: 'Slow lorises move so slowly and silently through trees that they can sneak up on birds and grab them with their hands.', q: 'How do slow lorises catch birds?', a: 'They move silently and grab them by hand', wrong: ['They set traps with sticky sap', 'They mimic bird calls', 'They wait at nests to catch returning birds'], category: 'behavior' },
      { text: 'Slow lorises have a special blood vessel network in their hands and feet that lets them grip branches for hours without getting tired.', q: 'How can slow lorises grip branches for so long?', a: 'A special blood vessel network in their hands and feet', wrong: ['Suction cups on their fingers', 'They lock their joints in place', 'Their claws hook into the bark'], category: 'body' },
    ],
  },
  'Bowhead Whale': {
    status: 'LC',
    habitat: 'Arctic and subarctic waters',
    range: 'Arctic Ocean (Alaska, Canada, Greenland, Russia)',
    facts: [
      { text: 'Bowhead whales can live over 200 years, making them the longest-lived mammals on Earth. One was found with a harpoon tip from the 1800s still in its body!', q: 'How long can bowhead whales live?', a: 'Over 200 years', wrong: ['About 50 years', 'About 80 years', 'About 120 years'], category: 'lifespan' },
      { text: 'The bowhead whale skull is so thick and strong that it can break through Arctic ice up to 2 feet thick to breathe.', q: 'How thick of ice can a bowhead whale break through?', a: 'Up to 2 feet', wrong: ['About 2 inches', 'About 6 inches', 'Up to 6 feet'], category: 'ability' },
      { text: 'Bowhead whales have the largest mouth of any animal. Their mouth can be over 16 feet long and 8 feet wide.', q: 'How big is a bowhead whale mouth?', a: 'Over 16 feet long and 8 feet wide', wrong: ['About 5 feet long', 'About 10 feet long', 'About 25 feet long and 12 feet wide'], category: 'size' },
    ],
  },
  'Giant Otter': {
    status: 'EN',
    habitat: 'Rivers, lakes, and wetlands in tropical forests',
    range: 'South America (Amazon and Orinoco river basins)',
    facts: [
      { text: 'Giant otters can grow up to 6 feet long, making them the longest members of the weasel family.', q: 'How long can a giant otter get?', a: 'Up to 6 feet', wrong: ['About 3 feet', 'About 4 feet', 'About 8 feet'], category: 'size' },
      { text: 'Giant otter families are so fierce that they can chase off caimans (relatives of alligators) and even jaguars.', q: 'What large predators can giant otter families chase away?', a: 'Caimans and jaguars', wrong: ['Anacondas only', 'Piranhas only', 'Nothing larger than themselves'], category: 'ability' },
      { text: 'Each giant otter has a unique throat pattern of cream-colored markings that scientists use to tell individuals apart.', q: 'How do scientists tell individual giant otters apart?', a: 'By unique throat markings', wrong: ['By tail length', 'By whisker patterns', 'By ear shape'], category: 'body' },
      { text: 'Giant otters eat 6 to 9 pounds of fish per day, and they eat while floating on their backs.', q: 'How much fish does a giant otter eat daily?', a: '6 to 9 pounds', wrong: ['About 1 pound', 'About 3 pounds', 'About 15 pounds'], category: 'diet' },
    ],
  },
  'Kinkajou': {
    status: 'LC',
    habitat: 'Tropical rainforests',
    range: 'Central and South America (Mexico to Brazil)',
    facts: [
      { text: 'Kinkajous can turn their feet backward to run easily in either direction along branches, and they have a prehensile tail for gripping.', q: 'What can kinkajous do with their feet?', a: 'Turn them backward to run either direction', wrong: ['Stick to smooth surfaces', 'Produce a clicking sound', 'Open fruit like hands'], category: 'ability' },
      { text: 'Kinkajous look like monkeys and act like monkeys, but they are actually related to raccoons!', q: 'What animal is the kinkajou most closely related to?', a: 'The raccoon', wrong: ['The monkey', 'The sloth', 'The lemur'], category: 'body' },
      { text: 'Kinkajous are important pollinators because they stick their long tongues deep into flowers to drink nectar, getting pollen on their faces.', q: 'How do kinkajous help pollinate flowers?', a: 'They drink nectar and get pollen on their faces', wrong: ['They carry seeds in their fur', 'They dig up and replant seeds', 'They spread fruit pulp on branches'], category: 'diet' },
    ],
  },
  'Gerenuk': {
    status: 'NT',
    habitat: 'Dry scrublands and light woodlands',
    range: 'East Africa (Somalia, Ethiopia, Kenya, Tanzania)',
    facts: [
      { text: 'The gerenuk is the only antelope that regularly stands on its hind legs to reach high branches, stretching to nearly 8 feet tall.', q: 'What does the gerenuk do to reach food other antelopes cannot?', a: 'Stands on its hind legs', wrong: ['Climbs trees', 'Jumps straight up', 'Uses its horns to pull branches down'], category: 'behavior' },
      { text: 'Gerenuks never need to drink water. They get all the moisture they need from the plants they eat.', q: 'How do gerenuks get their water?', a: 'Entirely from the plants they eat', wrong: ['From morning dew on grass', 'From digging water holes', 'From sucking moisture from tree bark'], category: 'ability' },
      { text: 'The name "gerenuk" comes from the Somali word meaning "giraffe-necked," because of their extremely long, thin necks.', q: 'What does "gerenuk" mean in Somali?', a: 'Giraffe-necked', wrong: ['Long legs', 'Tree eater', 'Desert walker'], category: 'body' },
    ],
  },
  'Saiga Antelope': {
    status: 'CR',
    habitat: 'Grasslands, steppes, and semi-arid deserts',
    range: 'Central Asia (Kazakhstan, Mongolia, Russia)',
    facts: [
      { text: 'The saiga has one of the weirdest noses in the animal kingdom: a huge, floppy, trunk-like nose that filters dust in summer and warms cold air in winter.', q: 'What does the saiga unusual nose do?', a: 'Filters dust and warms cold air', wrong: ['Helps it smell water miles away', 'Makes loud mating calls', 'Stores extra food'], category: 'body' },
      { text: 'Saiga herds used to number in the millions, roaming alongside woolly mammoths during the Ice Age.', q: 'What Ice Age animal did saigas once live alongside?', a: 'Woolly mammoths', wrong: ['Saber-toothed tigers only', 'Giant sloths only', 'Dire wolves only'], category: 'habitat' },
      { text: 'In 2015, over 200,000 saiga antelopes died in just three weeks from a bacterial disease triggered by unusually warm, humid weather.', q: 'How many saigas died in the 2015 mass die-off?', a: 'Over 200,000', wrong: ['About 5,000', 'About 50,000', 'About 1 million'], category: 'behavior' },
    ],
  },
  'African Civet': {
    status: 'LC',
    habitat: 'Forests, woodlands, and dense vegetation near water',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'African civets produce a musky substance called civetone that was once used in expensive perfumes, including Chanel No. 5.', q: 'What famous perfume once used a substance from African civets?', a: 'Chanel No. 5', wrong: ['Old Spice', 'Eau de Toilette', 'Dior Sauvage'], category: 'body' },
      { text: 'African civets use shared "latrines," where the whole community poops in the same spot to communicate through scent.', q: 'Why do African civets poop in the same spot?', a: 'To communicate through scent', wrong: ['To keep their territory clean', 'To attract insects for food', 'To mark their sleeping areas'], category: 'behavior' },
      { text: 'Despite looking like a cat, the African civet is more closely related to mongooses and hyenas.', q: 'What is the African civet more closely related to?', a: 'Mongooses and hyenas', wrong: ['House cats', 'Raccoons', 'Weasels'], category: 'body' },
    ],
  },
  'Spectacled Bear': {
    status: 'VU',
    habitat: 'Cloud forests, grasslands, and scrublands',
    range: 'Andes Mountains, South America',
    facts: [
      { text: 'The spectacled bear is the only bear species in South America and the last remaining short-faced bear in the world.', q: 'What is special about the spectacled bear among bear species?', a: 'It is the only bear in South America', wrong: ['It is the smallest bear', 'It is the only bear that climbs trees', 'It is the only bear that eats fruit'], category: 'habitat' },
      { text: 'Spectacled bears get their name from the light-colored rings around their eyes that look like glasses. Every bear pattern is unique.', q: 'Why are they called spectacled bears?', a: 'Light rings around their eyes look like glasses', wrong: ['They have excellent eyesight', 'Early explorers wore spectacles when they discovered them', 'Their eyes reflect light at night'], category: 'body' },
      { text: 'Spectacled bears are mostly vegetarian, with plants making up about 95% of their diet. They especially love bromeliads and cactus fruits.', q: 'What percentage of the spectacled bear diet is plants?', a: 'About 95%', wrong: ['About 50%', 'About 25%', 'About 75%'], category: 'diet' },
      { text: 'Spectacled bears build platforms in trees out of broken branches, like nests, where they sit and eat.', q: 'What do spectacled bears build in trees?', a: 'Platforms out of broken branches', wrong: ['Dens lined with leaves', 'Bridges between trees', 'Shelters from rain'], category: 'behavior' },
    ],
  },
  'Ocelot': {
    status: 'LC',
    habitat: 'Tropical forests, mangroves, and thorn scrub',
    range: 'Southern United States to South America',
    facts: [
      { text: 'Every ocelot has a unique coat pattern, and their fur was once so prized that up to 200,000 were killed each year for the fur trade.', q: 'How many ocelots were once killed yearly for fur?', a: 'Up to 200,000', wrong: ['About 5,000', 'About 50,000', 'About 500,000'], category: 'body' },
      { text: 'Ocelots are excellent swimmers and do not avoid water like most cats.', q: 'What makes ocelots different from most cats around water?', a: 'They are excellent swimmers and do not avoid water', wrong: ['They can hold their breath for 10 minutes', 'They catch fish with their tails', 'They build dams like beavers'], category: 'ability' },
      { text: 'Ocelots are nocturnal and can see six times better than humans in the dark.', q: 'How much better can ocelots see in the dark compared to humans?', a: 'Six times better', wrong: ['Twice as well', 'Ten times better', 'About the same'], category: 'ability' },
    ],
  },
  'Tibetan Fox': {
    status: 'LC',
    habitat: 'High-altitude grasslands and barren slopes',
    range: 'Tibetan Plateau and surrounding areas (China, Nepal, India)',
    facts: [
      { text: 'The Tibetan fox has an unusually square-shaped face that has made it an internet sensation for looking permanently unimpressed.', q: 'What is the Tibetan fox famous for on the internet?', a: 'Its square face that looks permanently unimpressed', wrong: ['Its ability to do backflips', 'Its bright orange fur', 'Its high-pitched bark'], category: 'body' },
      { text: 'Tibetan foxes live at altitudes up to 17,100 feet, which is higher than any base camp on Mount Everest.', q: 'How high can Tibetan foxes live?', a: 'Up to 17,100 feet elevation', wrong: ['About 3,000 feet', 'About 8,000 feet', 'About 25,000 feet'], category: 'habitat' },
      { text: 'Tibetan foxes often follow brown bears and wait for the bears to dig out pikas from burrows, then grab the ones that escape.', q: 'Why do Tibetan foxes follow brown bears?', a: 'To catch pikas that escape when bears dig', wrong: ['For protection from wolves', 'To steal the bears fish', 'To stay warm in the bears shadow'], category: 'behavior' },
    ],
  },
  'Pika': {
    status: 'LC',
    habitat: 'Rocky mountain slopes and talus fields',
    range: 'North America and Asia',
    facts: [
      { text: 'Pikas are tiny relatives of rabbits that live on mountaintops and make a loud "EEEP!" alarm call that echoes across the rocks.', q: 'What are pikas related to?', a: 'Rabbits', wrong: ['Mice', 'Hamsters', 'Guinea pigs'], category: 'body' },
      { text: 'Pikas spend the summer collecting flowers and grasses, drying them into "haystacks" to eat through the winter. They are tiny farmers!', q: 'What do pikas do with plants in summer?', a: 'Dry them into haystacks for winter food', wrong: ['Build nests with them', 'Trade them with other pikas', 'Use them to plug their burrow entrances'], category: 'behavior' },
      { text: 'Pikas are so sensitive to heat that a body temperature above 78F can be fatal. Climate change is pushing them higher up mountains.', q: 'What temperature can be fatal to a pika?', a: 'Above 78F', wrong: ['Above 100F', 'Above 120F', 'Above 90F'], category: 'habitat' },
    ],
  },
  'Markhor': {
    status: 'NT',
    habitat: 'Steep, rugged mountain terrain',
    range: 'Central Asia (Pakistan, Afghanistan, Tajikistan, Uzbekistan)',
    facts: [
      { text: 'The markhor has spectacular corkscrew-shaped horns that can grow over 5 feet long!', q: 'How long can markhor horns get?', a: 'Over 5 feet', wrong: ['About 1 foot', 'About 3 feet', 'About 8 feet'], category: 'body' },
      { text: 'The markhor is the national animal of Pakistan. The word "markhor" means "snake eater" in Persian, though they actually eat grasses and leaves.', q: 'What does "markhor" mean?', a: 'Snake eater', wrong: ['Mountain climber', 'Spiral horn', 'Rock jumper'], category: 'body' },
      { text: 'Markhors are incredible climbers and can scale near-vertical cliff faces to escape predators like snow leopards.', q: 'How do markhors escape predators?', a: 'By climbing near-vertical cliff faces', wrong: ['By running faster than 60 mph', 'By hiding in caves', 'By fighting with their horns'], category: 'ability' },
    ],
  },
  'Jerboa': {
    status: 'LC',
    habitat: 'Deserts and semi-arid regions',
    range: 'North Africa, Central Asia, China',
    facts: [
      { text: 'Jerboas can jump over 10 times their body length in a single bound, making them look like tiny bouncing kangaroos.', q: 'How far can a jerboa jump relative to its size?', a: 'Over 10 times its body length', wrong: ['About 2 times its body length', 'About 5 times its body length', 'About 50 times its body length'], category: 'ability' },
      { text: 'Some jerboas have ears that are two-thirds the length of their body, giving them incredible hearing to detect predators.', q: 'How big can jerboa ears get compared to their body?', a: 'Two-thirds of their body length', wrong: ['One-quarter of their body length', 'Twice their body length', 'The same length as their body'], category: 'body' },
      { text: 'Jerboas never drink water. They get all the moisture they need from seeds and plants.', q: 'How do jerboas survive without drinking water?', a: 'They get moisture from seeds and plants', wrong: ['They absorb dew through their skin', 'They store water in their tails', 'They lick salt deposits for moisture'], category: 'ability' },
    ],
  },
  'Indri': {
    status: 'CR',
    habitat: 'Tropical montane forests',
    range: 'Eastern Madagascar',
    facts: [
      { text: 'The indri is the largest living lemur, weighing up to 21 pounds, and unlike most lemurs, it has almost no tail.', q: 'What makes the indri different from most other lemurs?', a: 'It has almost no tail', wrong: ['It can fly short distances', 'It lives on the ground', 'It hunts other animals'], category: 'body' },
      { text: 'Indris sing haunting songs that can be heard from over 1.2 miles away. Family groups use songs to communicate across the forest.', q: 'How far away can an indri song be heard?', a: 'Over 1.2 miles', wrong: ['About 100 feet', 'About a quarter mile', 'About 5 miles'], category: 'ability' },
      { text: 'Indris can leap up to 33 feet between tree trunks in a single jump, pushing off with their powerful legs.', q: 'How far can an indri leap between trees?', a: 'Up to 33 feet', wrong: ['About 5 feet', 'About 15 feet', 'About 50 feet'], category: 'ability' },
    ],
  },
  'Dhole': {
    status: 'EN',
    habitat: 'Forests, grasslands, and alpine regions',
    range: 'Central and Southeast Asia',
    facts: [
      { text: 'Dholes (Asian wild dogs) can whistle to communicate with their pack, a sound no other canid species makes.', q: 'What unique sound can dholes make?', a: 'Whistling', wrong: ['Purring like a cat', 'Chirping like a bird', 'Roaring like a lion'], category: 'ability' },
      { text: 'Dhole packs have been known to drive tigers and leopards away from their kills through sheer numbers and teamwork.', q: 'What large predators can dhole packs chase away?', a: 'Tigers and leopards', wrong: ['Only jackals and foxes', 'Bears only', 'Elephants'], category: 'behavior' },
      { text: 'Dholes let their pups eat first, which is the opposite of most canid packs where the dominant adults eat first.', q: 'Who eats first in a dhole pack?', a: 'The pups', wrong: ['The alpha male', 'The alpha female', 'The oldest pack member'], category: 'behavior' },
    ],
  },
  'Bongo': {
    status: 'NT',
    habitat: 'Dense tropical and montane forests',
    range: 'Central and West Africa',
    facts: [
      { text: 'The bongo is the largest and most colorful forest antelope in Africa, with bright orange-red fur and 10-15 vertical white stripes.', q: 'What color is a bongo?', a: 'Bright orange-red with white stripes', wrong: ['Brown with black spots', 'Gray with no markings', 'Black with white patches'], category: 'body' },
      { text: 'Bongos are so shy that they are almost never seen in the wild. Scientists often study them using camera traps.', q: 'How do scientists usually study bongos?', a: 'Using camera traps', wrong: ['By following their footprints', 'By listening for their calls', 'By tracking radio collars only'], category: 'behavior' },
      { text: 'Both male and female bongos have spiraling horns, which is unusual because in most antelope species only males have horns.', q: 'What is unusual about bongo horns?', a: 'Both males and females have them', wrong: ['They are the longest of any antelope', 'They shed and regrow every year', 'They are covered in velvet'], category: 'body' },
    ],
  },
  'Flying Fox': {
    status: 'VU',
    habitat: 'Tropical forests and mangroves',
    range: 'South and Southeast Asia, Australia, Pacific Islands',
    facts: [
      { text: 'The large flying fox has a wingspan of up to 5.6 feet, making it one of the largest bats in the world!', q: 'How wide is the wingspan of a large flying fox?', a: 'Up to 5.6 feet', wrong: ['About 1 foot', 'About 3 feet', 'About 8 feet'], category: 'size' },
      { text: 'Despite being called flying foxes, these bats are gentle fruit eaters. They use their big eyes (not echolocation) to find food.', q: 'How do flying foxes find their food?', a: 'Using their eyes, not echolocation', wrong: ['By smell only', 'By echolocation like other bats', 'By following other animals'], category: 'ability' },
      { text: 'Flying foxes are critical for pollinating and spreading seeds for over 300 plant species in tropical ecosystems.', q: 'How many plant species do flying foxes help pollinate or spread?', a: 'Over 300', wrong: ['About 10', 'About 50', 'About 150'], category: 'habitat' },
    ],
  },
  'Tree Kangaroo': {
    status: 'EN',
    habitat: 'Tropical montane forests',
    range: 'New Guinea and northeastern Australia',
    facts: [
      { text: 'Tree kangaroos can jump from heights of 60 feet to the ground without getting hurt!', q: 'How high can a tree kangaroo jump from without injury?', a: '60 feet', wrong: ['About 10 feet', 'About 25 feet', 'About 100 feet'], category: 'ability' },
      { text: 'Unlike ground kangaroos, tree kangaroos can move their back legs independently, which helps them walk along branches.', q: 'What can tree kangaroos do that ground kangaroos cannot?', a: 'Move their back legs independently', wrong: ['Use their tail as a hand', 'Jump higher', 'Swim across rivers'], category: 'body' },
      { text: 'Tree kangaroos are incredibly clumsy on the ground but are agile climbers. They spend most of their lives in the treetops.', q: 'Where do tree kangaroos spend most of their time?', a: 'In the treetops', wrong: ['On the forest floor', 'In underground burrows', 'Near rivers and streams'], category: 'habitat' },
    ],
  },
  'Amazon River Dolphin': {
    status: 'EN',
    habitat: 'Freshwater rivers and flooded forests',
    range: 'Amazon and Orinoco river basins, South America',
    facts: [
      { text: 'The Amazon river dolphin (boto) is pink! They are born gray and turn pinker as they age, especially when excited.', q: 'What color is an adult Amazon river dolphin?', a: 'Pink', wrong: ['Gray', 'Blue', 'White'], category: 'body' },
      { text: 'Amazon river dolphins can turn their heads 90 degrees because their neck vertebrae are not fused, unlike ocean dolphins.', q: 'What can Amazon river dolphins do that ocean dolphins cannot?', a: 'Turn their heads 90 degrees', wrong: ['Breathe air and water', 'Walk on river banks', 'See in complete darkness'], category: 'body' },
      { text: 'During flood season, Amazon river dolphins swim through the flooded forest between trees, hunting fish among the submerged branches.', q: 'Where do river dolphins hunt during flood season?', a: 'Through flooded forests between trees', wrong: ['In deep river channels only', 'In the ocean near river mouths', 'In underground cave systems'], category: 'habitat' },
    ],
  },
  'Margay': {
    status: 'NT',
    habitat: 'Dense tropical forests',
    range: 'Central and South America (Mexico to Argentina)',
    facts: [
      { text: 'The margay is the only cat that can rotate its ankles 180 degrees, allowing it to climb down trees headfirst like a squirrel.', q: 'What can the margay do that no other cat can?', a: 'Rotate its ankles 180 degrees', wrong: ['See in ultraviolet light', 'Purr and roar at the same time', 'Hold its breath for 10 minutes'], category: 'body' },
      { text: 'Margays have been observed mimicking the calls of baby monkeys to lure adult monkeys closer so they can hunt them!', q: 'How do margays trick monkeys?', a: 'By mimicking baby monkey calls', wrong: ['By playing dead', 'By hiding in monkey nests', 'By pretending to be injured'], category: 'ability' },
      { text: 'Margays spend almost their entire lives in trees and can even sleep hanging from a branch by one foot.', q: 'Where do margays spend most of their lives?', a: 'In trees', wrong: ['In underground dens', 'Near water sources', 'On open grasslands'], category: 'habitat' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // REPTILES, FISH & INVERTEBRATES (WAVE 3)
  // ══════════════════════════════════════════════════════════════════
  'Blue Iguana': {
    status: 'EN',
    habitat: 'Dry rocky forests and coastal shrublands',
    range: 'Grand Cayman Island, Caribbean',
    facts: [
      { text: 'Blue iguanas can live over 60 years, making them one of the longest-lived lizards on Earth.', q: 'How long can blue iguanas live?', a: 'Over 60 years', wrong: ['About 20 years', 'Up to 35 years', 'Around 10 years'], category: 'lifespan' },
      { text: 'They turn a brighter blue when they are happy or showing off for other iguanas.', q: 'When do blue iguanas turn a brighter shade of blue?', a: 'When happy or displaying', wrong: ['When cold', 'When sleeping', 'When scared'], category: 'body' },
      { text: 'By 2002, fewer than 15 blue iguanas were left in the wild. Breeding programs brought them back to over 1,000.', q: 'How few blue iguanas were left in the wild by 2002?', a: 'Fewer than 15', wrong: ['About 200', 'Around 500', 'Fewer than 100'], category: 'behavior' },
      { text: 'Blue iguanas can grow up to 5 feet long including their tail.', q: 'How long can a blue iguana grow?', a: 'Up to 5 feet', wrong: ['Up to 2 feet', 'Up to 8 feet', 'Up to 3 feet'], category: 'size' },
    ],
  },
  'Pygmy Chameleon': {
    status: 'LC',
    habitat: 'Leaf litter on forest floors',
    range: 'East Africa, Tanzania and neighboring countries',
    facts: [
      { text: 'Some pygmy chameleons are so small they can stand on the head of a match.', q: 'How small are some pygmy chameleons?', a: 'They can stand on a matchhead', wrong: ['About the size of a tennis ball', 'As big as a golf ball', 'The size of a mouse'], category: 'size' },
      { text: 'Instead of changing bright colors like bigger chameleons, pygmy chameleons mostly just mimic dead leaves.', q: 'What do pygmy chameleons mimic with their color?', a: 'Dead leaves', wrong: ['Bright flowers', 'Tree bark', 'Green moss'], category: 'ability' },
      { text: 'They sleep on low twigs at night, and researchers find them by searching with flashlights because their pale sleeping color stands out.', q: 'How do researchers find pygmy chameleons at night?', a: 'Flashlights reveal their pale sleeping color', wrong: ['They glow in the dark', 'They make chirping sounds', 'They reflect infrared light'], category: 'behavior' },
    ],
  },
  'Caiman Lizard': {
    status: 'LC',
    habitat: 'Flooded forests and swampy wetlands',
    range: 'South America, Amazon Basin',
    facts: [
      { text: 'Caiman lizards have flattened teeth in the back of their mouths designed to crush snail shells like a nutcracker.', q: 'What are caiman lizard back teeth designed to crush?', a: 'Snail shells', wrong: ['Fish bones', 'Nuts and seeds', 'Crab claws'], category: 'diet' },
      { text: 'They have a clear third eyelid that acts like built-in swimming goggles underwater.', q: 'What does the caiman lizard\'s third eyelid do?', a: 'Acts like swimming goggles underwater', wrong: ['Helps them see in the dark', 'Protects from sand', 'Lets them sleep with eyes open'], category: 'body' },
      { text: 'After crushing a snail, they spit out the broken shell pieces and only swallow the soft body inside.', q: 'What do caiman lizards do after crushing a snail shell?', a: 'Spit out the shell and eat only the body', wrong: ['Swallow everything whole', 'Save the shells in a pile', 'Eat the shell for calcium'], category: 'diet' },
      { text: 'They can grow over 4 feet long and weigh up to 10 pounds, making them one of the biggest lizards in the Americas.', q: 'How long can a caiman lizard grow?', a: 'Over 4 feet', wrong: ['About 1 foot', 'Up to 7 feet', 'Around 2 feet'], category: 'size' },
    ],
  },
  'Flying Dragon Lizard': {
    status: 'LC',
    habitat: 'Tropical rainforest canopy',
    range: 'Southeast Asia',
    facts: [
      { text: 'Flying dragon lizards have wing-like flaps of skin stretched over extended ribs that let them glide up to 26 feet between trees.', q: 'How far can a flying dragon lizard glide?', a: 'Up to 26 feet', wrong: ['Up to 5 feet', 'Up to 100 feet', 'Up to 50 feet'], category: 'ability' },
      { text: 'They almost never come down to the ground. Even to lay eggs, females only visit the forest floor briefly.', q: 'How often do flying dragon lizards come to the ground?', a: 'Almost never', wrong: ['Every day to hunt', 'Every night to sleep', 'Weekly to drink water'], category: 'habitat' },
      { text: 'Males flash their brightly colored wing flaps to warn rival males to stay away from their territory.', q: 'Why do male flying dragons flash their wing flaps?', a: 'To warn rival males away', wrong: ['To attract insects', 'To cool down', 'To scare predators'], category: 'behavior' },
      { text: 'They are tiny, only about 8 inches long including the tail, and weigh less than a slice of bread.', q: 'About how long is a flying dragon lizard?', a: 'About 8 inches', wrong: ['About 2 feet', 'About 4 inches', 'About 18 inches'], category: 'size' },
    ],
  },
  'Tomato Frog': {
    status: 'LC',
    habitat: 'Swamps, shallow pools, and urban gardens',
    range: 'Madagascar',
    facts: [
      { text: 'When threatened, tomato frogs puff up their body and ooze a thick white glue from their skin that can gum up a snake\'s mouth.', q: 'What do tomato frogs ooze when threatened?', a: 'A thick white glue-like substance', wrong: ['Poison ink', 'Hot acid', 'Slippery oil'], category: 'ability' },
      { text: 'Only females are bright tomato-red. Males are a duller brownish-orange.', q: 'Which tomato frogs are bright red?', a: 'Only the females', wrong: ['Only the males', 'Both males and females', 'Only the babies'], category: 'body' },
      { text: 'They are ambush predators that sit and wait with their mouth open for insects to wander close enough to grab.', q: 'How do tomato frogs hunt?', a: 'Sit and wait for prey to come close', wrong: ['Chase insects through the forest', 'Dig underground to find worms', 'Swim after aquatic prey'], category: 'behavior' },
    ],
  },
  'Brookesia Micra': {
    status: 'EN',
    habitat: 'Leaf litter in dry deciduous forest on a tiny island',
    range: 'Nosy Hara islet, Madagascar',
    facts: [
      { text: 'Brookesia micra is one of the smallest reptiles ever discovered. Adults are small enough to stand on the tip of a matchstick.', q: 'How small is an adult Brookesia micra?', a: 'It can stand on a matchstick tip', wrong: ['About the size of a golf ball', 'About as long as a pencil', 'The size of a grape'], category: 'size' },
      { text: 'Their entire known habitat is a single tiny island off Madagascar that is only about half a square mile.', q: 'How large is Brookesia micra\'s entire known habitat?', a: 'About half a square mile on one island', wrong: ['The whole island of Madagascar', 'A 50 square mile forest', 'Several islands in the Indian Ocean'], category: 'habitat' },
      { text: 'At night they climb a few inches up onto small twigs to sleep, which is considered "high up" for an animal this small.', q: 'Where does Brookesia micra sleep at night?', a: 'A few inches up on small twigs', wrong: ['Underground in burrows', 'On the tops of trees', 'Floating on water'], category: 'behavior' },
    ],
  },
  'Emerald Tree Boa': {
    status: 'LC',
    habitat: 'Tropical rainforest canopy near rivers',
    range: 'South America, Amazon Basin',
    facts: [
      { text: 'Emerald tree boas have heat-sensing pits along their lips that let them detect warm-blooded prey in total darkness.', q: 'How do emerald tree boas find prey in the dark?', a: 'Heat-sensing pits along their lips', wrong: ['Echolocation like bats', 'Extremely good eyesight', 'Vibration sensors in their tail'], category: 'ability' },
      { text: 'Baby emerald tree boas are born bright red or orange and slowly turn green as they grow up.', q: 'What color are baby emerald tree boas?', a: 'Bright red or orange', wrong: ['Dark green', 'Black with white stripes', 'Yellow'], category: 'body' },
      { text: 'They have the largest front teeth of any non-venomous snake relative to their body size.', q: 'What is unusual about emerald tree boa teeth?', a: 'Largest front teeth of any non-venomous snake for their size', wrong: ['They have no teeth at all', 'Their teeth are venomous', 'They regrow teeth every week'], category: 'body' },
      { text: 'They coil around branches in a distinctive "saddle" position and can strike prey while hanging upside down.', q: 'How do emerald tree boas rest on branches?', a: 'Coiled in a saddle position', wrong: ['Stretched straight along the branch', 'Wrapped tightly in a ball', 'Hanging by their tail'], category: 'behavior' },
    ],
  },
  'Shovel-Snouted Lizard': {
    status: 'LC',
    habitat: 'Sand dunes in coastal desert',
    range: 'Namib Desert, southwestern Africa',
    facts: [
      { text: 'To avoid burning their feet on scorching sand, these lizards do a "thermal dance," lifting two legs at a time in alternation.', q: 'Why do shovel-snouted lizards lift their feet in a dance?', a: 'The sand is too hot to stand on', wrong: ['To attract a mate', 'To scare off predators', 'To shake off parasites'], category: 'behavior' },
      { text: 'They dive headfirst into sand dunes and "swim" through loose sand to escape predators and the heat.', q: 'How do shovel-snouted lizards escape predators?', a: 'They dive into and swim through sand', wrong: ['They fly short distances', 'They spray venom', 'They camouflage instantly'], category: 'ability' },
      { text: 'Their specially shaped snout works like a shovel to help them burrow into sand in less than a second.', q: 'What helps this lizard burrow so fast?', a: 'A shovel-shaped snout', wrong: ['Extra-long claws', 'A drill-like tail', 'Vibrating body scales'], category: 'body' },
    ],
  },
  'Boomslang': {
    status: 'LC',
    habitat: 'Savannas, shrublands, and lowland forests',
    range: 'Sub-Saharan Africa',
    facts: [
      { text: 'The boomslang has enormous eyes that take up almost its entire head, giving it incredible eyesight for a snake.', q: 'What is unusual about the boomslang\'s eyes?', a: 'They are enormous relative to its head', wrong: ['They can see infrared light', 'They have three eyelids', 'They glow at night'], category: 'body' },
      { text: 'Its venom prevents blood from clotting, but it is so shy and reluctant to bite that human envenomations are extremely rare.', q: 'What does boomslang venom do?', a: 'Prevents blood from clotting', wrong: ['Paralyzes muscles', 'Dissolves tissue', 'Causes hallucinations'], category: 'ability' },
      { text: 'Boomslangs can inflate their necks to twice the normal size to look bigger and scarier when threatened.', q: 'How do boomslangs try to scare threats away?', a: 'Inflate their neck to twice its size', wrong: ['Rattle their tail', 'Spit venom at enemies', 'Play dead on the ground'], category: 'behavior' },
      { text: 'The name "boomslang" means "tree snake" in Afrikaans, and they spend most of their lives in trees.', q: 'What does "boomslang" mean?', a: 'Tree snake in Afrikaans', wrong: ['Boom snake in Dutch', 'Big fang in Zulu', 'Fast strike in Swahili'], category: 'habitat' },
    ],
  },
  'Chinese Crocodile Lizard': {
    status: 'EN',
    habitat: 'Cool mountain streams in subtropical forests',
    range: 'Southern China and northern Vietnam',
    facts: [
      { text: 'Chinese crocodile lizards can sit so still on branches above water that they appear to be in a trance. Scientists call this "sleep hunting."', q: 'What is the Chinese crocodile lizard\'s unusual hunting style called?', a: 'Sleep hunting', wrong: ['Speed striking', 'Stone sitting', 'Dream catching'], category: 'behavior' },
      { text: 'Unlike most lizards, they give birth to live babies instead of laying eggs.', q: 'How do Chinese crocodile lizards have babies?', a: 'They give birth to live young', wrong: ['They lay eggs in sand', 'They lay eggs in water', 'They lay eggs in tree hollows'], category: 'behavior' },
      { text: 'Their tail has bony ridged scales that look just like a crocodile\'s tail, which is how they got their name.', q: 'Why are they called crocodile lizards?', a: 'Their tail has bony ridged scales like a crocodile', wrong: ['They hunt like crocodiles', 'They live with crocodiles', 'They are closely related to crocodiles'], category: 'body' },
    ],
  },
  'Namib Sand Gecko': {
    status: 'LC',
    habitat: 'Wind-blown sand dunes in extreme desert',
    range: 'Namib Desert, Namibia',
    facts: [
      { text: 'Namib sand geckos lick their own eyeballs to drink the fog moisture that condenses on them during cool desert nights.', q: 'How do Namib sand geckos drink water?', a: 'They lick fog moisture off their own eyeballs', wrong: ['They dig wells in the sand', 'They absorb water through their skin', 'They drink from cacti'], category: 'ability' },
      { text: 'Their webbed feet act like snowshoes, spreading their weight so they can run across loose sand without sinking.', q: 'Why do Namib sand geckos have webbed feet?', a: 'To run on loose sand without sinking', wrong: ['To swim in flash floods', 'To dig burrows faster', 'To climb smooth rocks'], category: 'body' },
      { text: 'Their skin is nearly translucent. You can sometimes see their internal organs through their belly.', q: 'What is unusual about the Namib sand gecko\'s skin?', a: 'It is nearly translucent', wrong: ['It is covered in tiny spines', 'It changes color like a chameleon', 'It is waterproof and waxy'], category: 'body' },
    ],
  },
  'Olm': {
    status: 'VU',
    habitat: 'Underground cave rivers and lakes in total darkness',
    range: 'Caves of the Dinaric Alps, Slovenia and Croatia',
    facts: [
      { text: 'Olms are completely blind and have spent so long in dark caves that their eyes are covered by skin.', q: 'Why are olms blind?', a: 'Their eyes are covered over by skin from living in dark caves', wrong: ['They scratch their eyes on rocks', 'Cave fish ate their eyes', 'They are born without eye sockets'], category: 'body' },
      { text: 'Olms can survive without eating for up to 10 years by slowing their metabolism to almost nothing.', q: 'How long can an olm survive without food?', a: 'Up to 10 years', wrong: ['About 2 weeks', 'Up to 6 months', 'About 3 years'], category: 'ability' },
      { text: 'They can live over 100 years, making them one of the longest-lived amphibians on Earth.', q: 'How long can olms live?', a: 'Over 100 years', wrong: ['About 20 years', 'Up to 40 years', 'Around 60 years'], category: 'lifespan' },
      { text: 'Medieval Europeans who found olms washed out of caves thought they were baby dragons.', q: 'What did medieval Europeans think olms were?', a: 'Baby dragons', wrong: ['Cursed fish', 'Water fairies', 'Ghost eels'], category: 'behavior' },
    ],
  },
  'Mimic Poison Frog': {
    status: 'LC',
    habitat: 'Tropical rainforest floor and low vegetation',
    range: 'Northern Peru',
    facts: [
      { text: 'The mimic poison frog copies the color patterns of other more toxic poison frogs in its area to fool predators into thinking it is more dangerous.', q: 'Why does the mimic poison frog copy other frogs\' colors?', a: 'To fool predators into thinking it is more dangerous', wrong: ['To attract more mates', 'To camouflage with flowers', 'To communicate with other species'], category: 'ability' },
      { text: 'Males carry their tadpoles on their backs to small pools of water in plants high up in the trees.', q: 'How do mimic poison frog males transport tadpoles?', a: 'Carry them on their backs to water pools in plants', wrong: ['In their mouths like fish', 'In a pouch like kangaroos', 'They roll them down streams'], category: 'behavior' },
      { text: 'Different populations of this single species look completely different depending on which toxic frog they are copying.', q: 'Why do different populations of mimic poison frogs look different?', a: 'They copy different toxic frog species in their area', wrong: ['The soil minerals color their skin', 'Their diet changes their color', 'Males and females are different colors'], category: 'body' },
    ],
  },
  'Spiny Bush Viper': {
    status: 'LC',
    habitat: 'Tropical rainforest, often in trees and shrubs near water',
    range: 'Central Africa, Congo Basin region',
    facts: [
      { text: 'Spiny bush vipers have rough, keeled scales that stick up like tiny spines, giving them a dragon-like appearance.', q: 'What makes the spiny bush viper look like a dragon?', a: 'Rough keeled scales that stick up like spines', wrong: ['Wings on its ribs', 'A forked horn on its head', 'Bony plates on its back'], category: 'body' },
      { text: 'They hunt at night using a sit-and-wait strategy, hanging from branches and striking at frogs and lizards that pass below.', q: 'How do spiny bush vipers hunt?', a: 'Hang from branches and strike prey passing below', wrong: ['Chase prey across the ground', 'Dig up burrowing insects', 'Lure prey with their tail'], category: 'behavior' },
      { text: 'Their prehensile tail grips branches like a fifth hand, letting them hang in positions no other viper can manage.', q: 'What does the spiny bush viper use its prehensile tail for?', a: 'Gripping branches like a hand', wrong: ['Making rattling sounds', 'Luring prey closer', 'Digging nests in the ground'], category: 'ability' },
    ],
  },
  'Vietnamese Mossy Frog': {
    status: 'LC',
    habitat: 'Rocky limestone caves and mountain streams',
    range: 'Northern Vietnam and southern China',
    facts: [
      { text: 'Their bumpy green and brown skin looks exactly like a clump of moss. When they curl up, even scientists have trouble spotting them.', q: 'What does the Vietnamese mossy frog\'s skin look like?', a: 'A clump of moss', wrong: ['Tree bark', 'A pile of mud', 'A wet rock'], category: 'body' },
      { text: 'When scared, they curl into a ball and play dead, looking even more like a mossy rock.', q: 'What does the Vietnamese mossy frog do when scared?', a: 'Curls into a ball and plays dead', wrong: ['Jumps into water', 'Puffs up and hisses', 'Sprays a foul-smelling liquid'], category: 'behavior' },
      { text: 'They can throw their voice like a ventriloquist, making their calls seem to come from a different direction.', q: 'What unusual vocal trick can mossy frogs do?', a: 'Throw their voice like a ventriloquist', wrong: ['Sing in two tones at once', 'Mimic bird calls', 'Make ultrasonic sounds only bats can hear'], category: 'ability' },
    ],
  },
  'Panther Grouper': {
    status: 'LC',
    habitat: 'Coral reefs and lagoons',
    range: 'Indo-Pacific Ocean, from East Africa to Fiji',
    facts: [
      { text: 'Panther groupers can change sex. They start life as female and can become male as they grow larger.', q: 'What is unusual about panther grouper sex?', a: 'They start female and can change to male', wrong: ['Males become female when stressed', 'They are all born male', 'They have no fixed sex'], category: 'body' },
      { text: 'They can swallow prey nearly as large as themselves because their mouths and stomachs can stretch to enormous sizes.', q: 'How large of prey can a panther grouper eat?', a: 'Nearly as large as themselves', wrong: ['Only tiny shrimp', 'About one-quarter their size', 'About half their size'], category: 'diet' },
      { text: 'Baby panther groupers mimic toxic flatworms by swimming with a wobbling motion and displaying similar spotted patterns to avoid predators.', q: 'What do baby panther groupers mimic to avoid predators?', a: 'Toxic flatworms', wrong: ['Sea snakes', 'Lionfish', 'Jellyfish'], category: 'ability' },
    ],
  },
  'Goblin Shark': {
    status: 'LC',
    habitat: 'Deep ocean, along continental shelves and submarine canyons',
    range: 'Worldwide in deep waters, most found near Japan',
    facts: [
      { text: 'The goblin shark can shoot its entire jaw forward out of its mouth to grab prey, like a spring-loaded trap.', q: 'What can the goblin shark do with its jaw?', a: 'Shoot it forward out of its mouth to grab prey', wrong: ['Crush shells like a nutcracker', 'Unhinge it like a snake', 'Lock it shut with extreme force'], category: 'ability' },
      { text: 'They live so deep in the ocean, usually below 800 feet, that fewer than 50 have ever been seen alive.', q: 'How deep do goblin sharks usually live?', a: 'Below 800 feet', wrong: ['About 50 feet deep', 'Just below the surface', 'About 200 feet deep'], category: 'habitat' },
      { text: 'Their long flat snout is covered in electroreceptors that detect the faint electrical signals of nearby prey in total darkness.', q: 'What does the goblin shark use its long snout for?', a: 'Detecting electrical signals from prey', wrong: ['Digging in the seafloor', 'Poking into crevices for food', 'Balancing while swimming'], category: 'body' },
      { text: 'Goblin sharks are sometimes called "living fossils" because their family has existed for about 125 million years.', q: 'How old is the goblin shark lineage?', a: 'About 125 million years', wrong: ['About 10 million years', 'About 500 million years', 'About 50 million years'], category: 'lifespan' },
    ],
  },
  'Weedy Seadragon': {
    status: 'LC',
    habitat: 'Kelp forests and seagrass beds in temperate waters',
    range: 'Southern coast of Australia',
    facts: [
      { text: 'Weedy seadragons have leaf-like appendages all over their body that help them blend in with seaweed so perfectly that predators swim right past them.', q: 'Why do weedy seadragons have leaf-like appendages?', a: 'To camouflage with seaweed', wrong: ['To swim faster', 'To absorb sunlight', 'To attract prey'], category: 'body' },
      { text: 'Like seahorses, the males carry the eggs. The female deposits up to 250 eggs onto a spongy patch under the male\'s tail.', q: 'Who carries the eggs in weedy seadragons?', a: 'The male', wrong: ['The female', 'Both parents', 'Neither, eggs float freely'], category: 'behavior' },
      { text: 'They have no teeth and no stomach. They suck up tiny shrimp and plankton through their tube-shaped snout like a living straw.', q: 'How do weedy seadragons eat?', a: 'Suck up prey through their snout like a straw', wrong: ['Filter water through their gills', 'Chew with bony plates', 'Trap food in their appendages'], category: 'diet' },
    ],
  },
  'Tasselled Wobbegong': {
    status: 'LC',
    habitat: 'Coral reefs, rocky reefs, and sandy bottoms',
    range: 'Northern Australia, Papua New Guinea, and Indonesia',
    facts: [
      { text: 'Tasselled wobbegongs have a fringe of fleshy tassels around their head that look like seaweed, making them almost invisible on the ocean floor.', q: 'What are the fleshy tassels around a wobbegong\'s head for?', a: 'Camouflage that looks like seaweed', wrong: ['Sensing vibrations in water', 'Filtering food from water', 'Attracting small fish'], category: 'body' },
      { text: 'They are ambush predators that lie perfectly still for hours, then snap up fish that swim over their mouth in a fraction of a second.', q: 'How fast does a wobbegong strike at prey?', a: 'A fraction of a second', wrong: ['About 5 seconds', 'They chase prey slowly', 'About 2 seconds'], category: 'speed' },
      { text: 'Wobbegongs have been documented trying to swallow sharks that are nearly as long as themselves.', q: 'What surprising prey have wobbegongs tried to eat?', a: 'Sharks nearly their own size', wrong: ['Dolphins', 'Sea turtles', 'Stingrays only'], category: 'diet' },
      { text: 'Their name "wobbegong" comes from an Australian Aboriginal word thought to mean "shaggy beard."', q: 'What does "wobbegong" likely mean?', a: 'Shaggy beard', wrong: ['Flat fish', 'Rock monster', 'Hidden teeth'], category: 'body' },
    ],
  },
  'Ocean Sunfish': {
    status: 'VU',
    habitat: 'Open ocean, tropical and temperate waters worldwide',
    range: 'All tropical and temperate oceans worldwide',
    facts: [
      { text: 'Ocean sunfish are the heaviest bony fish in the world, weighing up to 5,000 pounds, about as much as a pickup truck.', q: 'How heavy can ocean sunfish get?', a: 'Up to 5,000 pounds', wrong: ['Up to 500 pounds', 'Up to 1,000 pounds', 'Up to 10,000 pounds'], category: 'size' },
      { text: 'A single female can produce 300 million eggs at once, more than any other known vertebrate.', q: 'How many eggs can a female ocean sunfish produce at once?', a: '300 million', wrong: ['About 10,000', 'About 1 million', 'About 50 million'], category: 'behavior' },
      { text: 'They love to float sideways at the surface and let seabirds pick parasites off their skin, essentially getting a spa treatment.', q: 'Why do ocean sunfish float sideways at the surface?', a: 'To let seabirds pick off their parasites', wrong: ['To warm up in the sun', 'Because they are dying', 'To breathe air'], category: 'behavior' },
      { text: 'Baby sunfish are tiny and covered in spines. They grow to 60 million times their birth size, the biggest growth of any vertebrate.', q: 'How much do sunfish grow from birth to adult?', a: '60 million times their birth size', wrong: ['About 100 times', 'About 10,000 times', 'About 1 million times'], category: 'size' },
    ],
  },
  'Greenland Shark': {
    status: 'VU',
    habitat: 'Deep, cold Arctic and North Atlantic waters',
    range: 'Arctic Ocean and North Atlantic',
    facts: [
      { text: 'Greenland sharks can live over 400 years, making them the longest-lived vertebrate ever discovered.', q: 'How long can Greenland sharks live?', a: 'Over 400 years', wrong: ['About 80 years', 'Up to 150 years', 'About 200 years'], category: 'lifespan' },
      { text: 'They swim at about 0.76 miles per hour, which is slower than most people walk. They are one of the slowest sharks alive.', q: 'How fast do Greenland sharks typically swim?', a: 'About 0.76 miles per hour', wrong: ['About 5 miles per hour', 'About 15 miles per hour', 'About 25 miles per hour'], category: 'speed' },
      { text: 'Most Greenland sharks are blind because a parasite attaches to their eyeballs and eats away at them.', q: 'Why are most Greenland sharks blind?', a: 'A parasite eats away at their eyeballs', wrong: ['The deep water pressure damages their eyes', 'They are born without eyes', 'Ice crystals scratch their eyes'], category: 'body' },
      { text: 'They don\'t reach adulthood until about 150 years old, meaning a shark born when the USA was founded would only now be middle-aged.', q: 'At what age do Greenland sharks reach adulthood?', a: 'About 150 years', wrong: ['About 10 years', 'About 30 years', 'About 50 years'], category: 'lifespan' },
    ],
  },
  'Mandarin Fish': {
    status: 'LC',
    habitat: 'Sheltered coastal reefs and lagoons',
    range: 'Western Pacific Ocean, from Japan to Australia',
    facts: [
      { text: 'Mandarin fish are one of only two known fish species that produce their own blue pigment instead of using structural color or light tricks.', q: 'What is special about the mandarin fish\'s blue color?', a: 'They produce their own blue pigment', wrong: ['It comes from their diet', 'Tiny crystals in their skin reflect blue light', 'Bacteria on their skin glow blue'], category: 'body' },
      { text: 'Instead of scales, they are covered in a thick layer of smelly, bitter mucus that makes predators spit them out immediately.', q: 'What protects mandarin fish from predators?', a: 'Smelly bitter mucus instead of scales', wrong: ['Venomous dorsal spines', 'An electric shock', 'Sharp bony plates'], category: 'ability' },
      { text: 'They only mate at dusk, and pairs rise together in a brief spiraling dance before releasing eggs and sperm into the water.', q: 'When do mandarin fish mate?', a: 'Only at dusk', wrong: ['Only at dawn', 'Only during full moons', 'Only in winter'], category: 'behavior' },
    ],
  },
  'Red-Bellied Piranha': {
    status: 'LC',
    habitat: 'Rivers, lakes, floodplains, and flooded forests',
    range: 'South America, Amazon and Orinoco river basins',
    facts: [
      { text: 'A group of piranhas can strip a large fish to the bone in under a minute, but attacks on humans are extremely rare and almost never fatal.', q: 'How fast can piranhas strip a fish?', a: 'Under a minute', wrong: ['About 10 minutes', 'About an hour', 'Under 10 seconds'], category: 'diet' },
      { text: 'Piranhas bark. They make a drumming bark sound using their swim bladder to warn other piranhas to back off.', q: 'What sound do piranhas make?', a: 'A barking or drumming sound', wrong: ['A clicking sound like dolphins', 'A hissing sound', 'A whistling sound'], category: 'ability' },
      { text: 'They are actually quite timid. In an aquarium, piranhas are easily scared and tend to hide in corners when startled.', q: 'How do piranhas behave when startled?', a: 'They hide in corners and act timid', wrong: ['They attack anything nearby', 'They jump out of the water', 'They form a tight defensive ball'], category: 'behavior' },
      { text: 'Their teeth interlock like a bear trap and are so sharp that indigenous people in the Amazon use them as cutting tools.', q: 'What do some indigenous people use piranha teeth for?', a: 'Cutting tools', wrong: ['Jewelry only', 'Fish hooks', 'Musical instruments'], category: 'body' },
    ],
  },
  'Oarfish': {
    status: 'LC',
    habitat: 'Open ocean, deep water between 600 and 3,000 feet',
    range: 'All tropical and temperate oceans worldwide',
    facts: [
      { text: 'Oarfish are the longest bony fish in the world, reaching lengths of up to 36 feet, longer than a school bus.', q: 'How long can oarfish grow?', a: 'Up to 36 feet', wrong: ['Up to 10 feet', 'Up to 20 feet', 'Up to 50 feet'], category: 'size' },
      { text: 'They swim vertically, head up and tail down, which is extremely unusual for a fish.', q: 'What is unusual about how oarfish swim?', a: 'They swim vertically with head up', wrong: ['They swim backwards', 'They spin in circles', 'They swim upside down'], category: 'behavior' },
      { text: 'Scientists believe oarfish sightings inspired many ancient legends of giant sea serpents.', q: 'What legends may oarfish have inspired?', a: 'Giant sea serpent legends', wrong: ['Mermaid legends', 'Kraken legends', 'Loch Ness Monster legends'], category: 'behavior' },
      { text: 'If grabbed by a predator, an oarfish can shed its tail end on purpose and survive with a shorter body.', q: 'What can an oarfish do if a predator grabs its tail?', a: 'Shed the tail end and survive shorter', wrong: ['Deliver an electric shock', 'Release a cloud of ink', 'Coil around the predator'], category: 'ability' },
    ],
  },
  'Frogfish': {
    status: 'LC',
    habitat: 'Coral reefs, rocky reefs, and sandy bottoms',
    range: 'Tropical and subtropical oceans worldwide',
    facts: [
      { text: 'Frogfish have a built-in fishing rod. A modified dorsal spine on their head has a fleshy lure at the tip that they wiggle to attract prey.', q: 'How do frogfish attract prey?', a: 'A fleshy lure on a spine they wiggle like a fishing rod', wrong: ['They release a sweet-smelling chemical', 'They flash bioluminescent lights', 'They vibrate to create sound waves'], category: 'ability' },
      { text: 'They swallow prey in about 6 milliseconds, one of the fastest strikes in the entire animal kingdom.', q: 'How fast is a frogfish strike?', a: 'About 6 milliseconds', wrong: ['About 1 second', 'About 100 milliseconds', 'About half a second'], category: 'speed' },
      { text: 'Frogfish walk on the ocean floor using their arm-like pectoral fins instead of swimming.', q: 'How do frogfish move along the ocean floor?', a: 'They walk on their arm-like fins', wrong: ['They roll sideways', 'They hop like frogs', 'They slide on mucus like snails'], category: 'behavior' },
      { text: 'They can change their color and texture over several weeks to perfectly match the sponge or coral they are sitting on.', q: 'How do frogfish camouflage themselves?', a: 'They change color and texture over weeks to match surroundings', wrong: ['They cover themselves in sand', 'They are always transparent', 'They only hunt at night when it is dark'], category: 'body' },
    ],
  },
  'Electric Ray': {
    status: 'DD',
    habitat: 'Sandy and muddy bottoms, from shallows to deep water',
    range: 'Worldwide in tropical, subtropical, and temperate oceans',
    facts: [
      { text: 'Electric rays can produce a shock of up to 220 volts, enough to stun a person and strong enough to knock a grown adult off their feet.', q: 'How much voltage can an electric ray produce?', a: 'Up to 220 volts', wrong: ['About 10 volts', 'About 50 volts', 'Up to 600 volts'], category: 'ability' },
      { text: 'Ancient Romans used electric rays as a form of medicine, placing them on patients to shock away headaches and gout.', q: 'How did ancient Romans use electric rays?', a: 'As a shock treatment for headaches and gout', wrong: ['As a food delicacy at feasts', 'As guard animals in pools', 'As a natural battery for lights'], category: 'behavior' },
      { text: 'Their electric organs are made from modified muscle cells called electrocytes, stacked like batteries in a flashlight.', q: 'What are electric ray organs made from?', a: 'Modified muscle cells called electrocytes', wrong: ['Specialized nerve cells', 'Copper-rich blood cells', 'Magnetic bone plates'], category: 'body' },
    ],
  },
  'Coelacanth': {
    status: 'CR',
    habitat: 'Deep underwater caves along steep rocky coastlines',
    range: 'East coast of Africa and Indonesia',
    facts: [
      { text: 'Coelacanths were thought to have gone extinct 66 million years ago with the dinosaurs, until a live one was caught by a fisherman in 1938.', q: 'When was a living coelacanth rediscovered?', a: '1938', wrong: ['1998', '1875', '1955'], category: 'lifespan' },
      { text: 'They have a unique joint in their skull that lets the front half of their head swing upward, allowing them to open their mouth extra wide.', q: 'What is unusual about a coelacanth\'s skull?', a: 'A joint lets the front half swing up for a wider mouth opening', wrong: ['It is made of cartilage like a shark', 'It has built-in sonar', 'The skull is transparent'], category: 'body' },
      { text: 'Their fins move in an alternating pattern similar to how four-legged animals walk, hinting at the evolution from fish to land animals.', q: 'How do coelacanth fins move?', a: 'In an alternating pattern like walking legs', wrong: ['They all move together', 'They spin like propellers', 'They ripple like a wave'], category: 'ability' },
      { text: 'Coelacanths can live about 100 years and gestate their young for approximately 5 years, one of the longest pregnancies in the animal kingdom.', q: 'How long is a coelacanth\'s pregnancy?', a: 'About 5 years', wrong: ['About 6 months', 'About 1 year', 'About 2 years'], category: 'lifespan' },
    ],
  },
  'Candiru': {
    status: 'LC',
    habitat: 'Freshwater rivers with sandy bottoms',
    range: 'Amazon River basin, South America',
    facts: [
      { text: 'Candiru are tiny parasitic catfish, usually less than an inch long, that feed by attaching to the gills of larger fish and drinking their blood.', q: 'How do candiru feed?', a: 'They attach to fish gills and drink blood', wrong: ['They eat algae off rocks', 'They hunt insects at the surface', 'They eat dead fish on the bottom'], category: 'diet' },
      { text: 'They find their host fish by sensing the chemical ammonia that fish release from their gills when breathing.', q: 'How do candiru find their host fish?', a: 'By sensing ammonia released from fish gills', wrong: ['By following bubbles', 'By listening for heartbeats', 'By seeing in the dark'], category: 'ability' },
      { text: 'Despite scary legends, they are nearly transparent and almost invisible in the water, making them fascinating to scientists.', q: 'Why are candiru hard to spot in water?', a: 'They are nearly transparent', wrong: ['They swim too fast to see', 'They burrow in sand', 'They only come out at night'], category: 'body' },
    ],
  },
  'Blobfish': {
    status: 'DD',
    habitat: 'Deep ocean floor at extreme pressure',
    range: 'Deep waters off Australia, Tasmania, and New Zealand',
    facts: [
      { text: 'The blobfish\'s famous droopy face only happens when it is brought to the surface. In its deep-sea home, it looks like a normal fish.', q: 'When does a blobfish look blobby?', a: 'Only when brought to the surface', wrong: ['All the time', 'Only when sleeping', 'Only when scared'], category: 'body' },
      { text: 'They live at depths where the pressure is over 100 times greater than at the surface, which would crush a human.', q: 'How much pressure do blobfish live under?', a: 'Over 100 times surface pressure', wrong: ['About 5 times surface pressure', 'About 20 times surface pressure', 'About 50 times surface pressure'], category: 'habitat' },
      { text: 'Instead of a gas-filled swim bladder, their entire body is made of a jelly-like substance slightly less dense than water, letting them float effortlessly.', q: 'How does a blobfish float without a swim bladder?', a: 'Their body is jelly-like and slightly less dense than water', wrong: ['They constantly swim to stay afloat', 'They trap air bubbles in their skin', 'They have hollow bones filled with oil'], category: 'body' },
    ],
  },
  'Longhorn Cowfish': {
    status: 'LC',
    habitat: 'Coral reefs and sandy lagoons',
    range: 'Indo-Pacific, from East Africa to Japan and Australia',
    facts: [
      { text: 'Longhorn cowfish have two horns on their head and two on their rear that make them look like a tiny underwater cow.', q: 'Why are they called cowfish?', a: 'They have horn-like projections like a cow', wrong: ['They moo when startled', 'They graze on seagrass like cows', 'They are black and white like cows'], category: 'body' },
      { text: 'When stressed, cowfish release a deadly toxin from their skin called ostracitoxin that can kill every other fish in an aquarium.', q: 'What happens when a cowfish gets stressed?', a: 'It releases a toxin that can kill other fish nearby', wrong: ['Its horns grow longer', 'It changes color to red', 'It inflates like a pufferfish'], category: 'ability' },
      { text: 'Their body is encased in a bony box made of fused hexagonal plates, like natural armor.', q: 'What protects the cowfish\'s body?', a: 'A bony box of fused hexagonal plates', wrong: ['Thick rubbery skin', 'Poisonous slime', 'Overlapping fish scales'], category: 'body' },
    ],
  },
  'Velvet Ant': {
    status: 'LC',
    habitat: 'Sandy dry habitats, deserts, meadows, and forest edges',
    range: 'Worldwide, especially North America and tropical regions',
    facts: [
      { text: 'Velvet ants are not actually ants. They are wasps! The females are wingless and fuzzy, which makes them look like colorful ants.', q: 'What are velvet ants really?', a: 'Wasps with wingless fuzzy females', wrong: ['A type of beetle', 'True ants with venom', 'A type of spider'], category: 'body' },
      { text: 'Their sting is so painful it earned them the nickname "cow killer," though it cannot actually kill a cow.', q: 'What is the velvet ant\'s nickname?', a: 'Cow killer', wrong: ['Fire ant', 'Death wasp', 'Bullet bug'], category: 'ability' },
      { text: 'Their exoskeleton is so tough that entomologists have trouble pushing pins through them when preparing specimens for collections.', q: 'How tough is a velvet ant\'s exoskeleton?', a: 'So tough that pins can barely penetrate it', wrong: ['About as tough as a regular ant', 'Soft and flexible like rubber', 'Hard but very brittle'], category: 'body' },
      { text: 'When grabbed, they make a squeaking sound to warn predators that a very painful sting is coming.', q: 'What warning do velvet ants give before stinging?', a: 'They make a squeaking sound', wrong: ['They release a bad smell', 'They flash bright colors', 'They play dead first'], category: 'behavior' },
    ],
  },
  'Hickory Horned Devil': {
    status: 'LC',
    habitat: 'Deciduous forests with hickory, walnut, and sweetgum trees',
    range: 'Eastern United States',
    facts: [
      { text: 'The hickory horned devil is the largest caterpillar in North America, growing up to 6 inches long, about the size of a hot dog.', q: 'How big is the hickory horned devil caterpillar?', a: 'Up to 6 inches, about hot dog-sized', wrong: ['About 1 inch long', 'Up to 12 inches long', 'About 3 inches long'], category: 'size' },
      { text: 'Despite looking absolutely terrifying with huge curved horns, it is completely harmless and cannot sting or bite.', q: 'Are hickory horned devils dangerous?', a: 'No, they are completely harmless', wrong: ['Yes, their horns are venomous', 'Yes, they spray acid', 'Yes, they deliver a painful bite'], category: 'ability' },
      { text: 'It transforms into the regal moth, which has a wingspan up to 6 inches and is one of the largest moths in North America.', q: 'What does the hickory horned devil become as an adult?', a: 'The regal moth', wrong: ['The luna moth', 'The atlas moth', 'The cecropia moth'], category: 'body' },
      { text: 'When ready to pupate, the caterpillar turns turquoise, crawls underground, and spends the entire winter in the soil before emerging as a moth.', q: 'Where does the hickory horned devil pupate?', a: 'Underground in the soil', wrong: ['In a silk cocoon on a branch', 'Inside a rolled-up leaf', 'Under tree bark'], category: 'behavior' },
    ],
  },
  'Antlion': {
    status: 'LC',
    habitat: 'Sandy soils in sheltered dry areas',
    range: 'Worldwide in warm and tropical regions',
    facts: [
      { text: 'Antlion larvae dig cone-shaped pit traps in sand and wait buried at the bottom for ants to slide in, like a real-life sarlacc pit.', q: 'How do antlion larvae catch prey?', a: 'They dig cone-shaped pit traps in sand', wrong: ['They spin webs like spiders', 'They chase prey at high speed', 'They use sticky tongues'], category: 'behavior' },
      { text: 'If an ant tries to climb out of the pit, the antlion flicks sand at it to knock it back down.', q: 'What does an antlion do if prey tries to escape?', a: 'Flicks sand to knock it back down', wrong: ['Jumps out to grab it', 'Spits venom at it', 'Collapses the entire pit'], category: 'ability' },
      { text: 'Adult antlions look like delicate dragonflies and are harmless. The fierce predator stage is only during their larval period.', q: 'What do adult antlions look like?', a: 'Delicate dragonfly-like insects', wrong: ['Large armored beetles', 'Fuzzy moths', 'Giant ants'], category: 'body' },
      { text: 'Antlion larvae have no way to get rid of waste, so they store it all in their body until they become adults.', q: 'How do antlion larvae deal with waste?', a: 'Store all waste until they become adults', wrong: ['They excrete it into the sand pit', 'They vomit it up after each meal', 'They absorb it completely'], category: 'body' },
    ],
  },
  'Ironclad Beetle': {
    status: 'LC',
    habitat: 'Deciduous forests, often found under bark of dead trees',
    range: 'Western United States, especially desert regions',
    facts: [
      { text: 'The diabolical ironclad beetle can survive being run over by a car. Its exoskeleton interlocks like a jigsaw puzzle, distributing force.', q: 'What can an ironclad beetle survive?', a: 'Being run over by a car', wrong: ['A fall from a skyscraper', 'Being submerged for a month', 'Being frozen in ice'], category: 'ability' },
      { text: 'Engineers are studying its shell design to build stronger joints for aircraft and other structures.', q: 'Why do engineers study ironclad beetles?', a: 'To design stronger joints for aircraft', wrong: ['To make better car tires', 'To improve bullet-proof vests', 'To build robot legs'], category: 'body' },
      { text: 'They play dead so convincingly, and their shell is so tough, that entomologists sometimes cannot push a steel pin through them to mount specimens.', q: 'What problem do scientists have with ironclad beetle specimens?', a: 'Pins cannot penetrate their shell', wrong: ['They keep escaping from jars', 'Their color fades quickly', 'They decompose within hours'], category: 'body' },
    ],
  },
  'Glowworm': {
    status: 'LC',
    habitat: 'Dark caves and sheltered overhangs near streams',
    range: 'New Zealand and parts of Australia',
    facts: [
      { text: 'New Zealand glowworms create a ceiling of thousands of tiny blue lights in caves that looks like a starry night sky underground.', q: 'What do glowworm-lit caves look like?', a: 'A starry night sky underground', wrong: ['A glowing green fog', 'Flashing disco lights', 'A single bright spotlight'], category: 'ability' },
      { text: 'They catch prey by dangling sticky silk threads from the ceiling, up to 70 threads at once, like a living curtain of fishing lines.', q: 'How do glowworms catch prey?', a: 'Dangling sticky silk threads from the ceiling', wrong: ['Jumping on passing insects', 'Releasing a sweet scent', 'Using their light to stun insects'], category: 'behavior' },
      { text: 'Glowworms are not actually worms. They are the larvae of a fungus gnat, a type of fly.', q: 'What are glowworms actually?', a: 'Larvae of a fungus gnat fly', wrong: ['A type of tiny snake', 'A true worm species', 'Baby fireflies'], category: 'body' },
      { text: 'The hungrier a glowworm is, the brighter it glows, because it is trying harder to attract prey.', q: 'When do glowworms glow brightest?', a: 'When they are hungriest', wrong: ['When they are about to become adults', 'When it is coldest', 'When there is a full moon'], category: 'behavior' },
    ],
  },
  'Thorn Bug': {
    status: 'LC',
    habitat: 'Tropical and subtropical trees and shrubs',
    range: 'Southern United States through Central and South America',
    facts: [
      { text: 'Thorn bugs look exactly like plant thorns, so predators walk right past them without noticing.', q: 'How do thorn bugs avoid predators?', a: 'They look exactly like plant thorns', wrong: ['They spray a bad-smelling chemical', 'They jump away at super speed', 'They hide underground during the day'], category: 'body' },
      { text: 'Mother thorn bugs guard their eggs fiercely, buzzing their wings and kicking at wasps and other predators that come too close.', q: 'How do mother thorn bugs protect their eggs?', a: 'Buzzing wings and kicking at predators', wrong: ['Covering eggs with poison', 'Carrying eggs on their back', 'Building a wall of plant material'], category: 'behavior' },
      { text: 'They communicate with each other by sending vibrations through the stems of plants, like having a private telephone line.', q: 'How do thorn bugs communicate?', a: 'By sending vibrations through plant stems', wrong: ['By flashing ultraviolet light', 'By releasing pheromones into the air', 'By making clicking sounds with their wings'], category: 'ability' },
    ],
  },
  'Whip Scorpion': {
    status: 'LC',
    habitat: 'Tropical and subtropical forests, caves, and leaf litter',
    range: 'Worldwide in tropical regions, especially Americas and Asia',
    facts: [
      { text: 'When threatened, whip scorpions spray a stream of concentrated acetic acid (vinegar) from their tail, earning them the nickname "vinegaroon."', q: 'Why are whip scorpions called vinegaroons?', a: 'They spray vinegar-like acid from their tail', wrong: ['They smell like wine', 'They eat fermented fruit', 'Their body is shaped like a wine bottle'], category: 'ability' },
      { text: 'Despite their scary appearance, whip scorpions have no venom and no stinger. They are completely harmless to humans.', q: 'Are whip scorpions venomous?', a: 'No, they have no venom or stinger', wrong: ['Yes, extremely venomous', 'Only the males are venomous', 'Yes, but only mildly'], category: 'body' },
      { text: 'They use their long whip-like tail as an antenna, waving it around to feel their surroundings in the dark.', q: 'What is the whip scorpion\'s tail used for?', a: 'Feeling surroundings like an antenna', wrong: ['Stinging prey', 'Balancing while running', 'Attracting mates'], category: 'body' },
      { text: 'Whip scorpions are ancient creatures that have existed for over 300 million years, predating the dinosaurs by about 70 million years.', q: 'How long have whip scorpions existed?', a: 'Over 300 million years', wrong: ['About 50 million years', 'About 150 million years', 'About 10 million years'], category: 'lifespan' },
    ],
  },
  'Harlequin Beetle': {
    status: 'LC',
    habitat: 'Tropical rainforests on dead and dying trees',
    range: 'Central and South America',
    facts: [
      { text: 'Harlequin beetles have front legs so ridiculously long that their leg span can be wider than their body length, looking like they are wearing stilts.', q: 'What is unusual about harlequin beetle legs?', a: 'Their front legs can be wider than their body length', wrong: ['They have 10 legs instead of 6', 'Their legs are covered in fur', 'Their back legs are used as wings'], category: 'body' },
      { text: 'Tiny hitchhiking creatures called pseudoscorpions ride on harlequin beetles like passengers on a bus to travel between trees.', q: 'What creatures hitchhike on harlequin beetles?', a: 'Pseudoscorpions', wrong: ['Baby spiders', 'Tiny frogs', 'Mites and ticks'], category: 'behavior' },
      { text: 'Their bold red, black, and yellow pattern on their wing covers looks like an intricate hand-painted design.', q: 'What colors make up the harlequin beetle\'s pattern?', a: 'Red, black, and yellow', wrong: ['Blue, green, and white', 'Orange and purple', 'Gold and silver'], category: 'body' },
    ],
  },
  'Dobsonfly': {
    status: 'LC',
    habitat: 'Near clean fast-flowing rivers and streams',
    range: 'North America, Central America, and East Asia',
    facts: [
      { text: 'Male dobsonflies have mandibles (jaws) up to 1 inch long that look terrifying but are so long they cannot actually bite hard enough to hurt you.', q: 'Can male dobsonflies hurt you with their huge jaws?', a: 'No, their jaws are too long to bite hard', wrong: ['Yes, they deliver a painful bite', 'Yes, the jaws are venomous', 'No, because they have no jaws'], category: 'body' },
      { text: 'Female dobsonflies have shorter mandibles and can actually deliver a surprisingly painful bite, unlike the males with their showy jaws.', q: 'Which dobsonfly can actually bite harder?', a: 'The female with shorter mandibles', wrong: ['The male with longer mandibles', 'Neither can bite', 'Both bite equally hard'], category: 'ability' },
      { text: 'Their larvae, called hellgrammites, live underwater for up to 5 years before becoming adults that live only a few days.', q: 'How long do dobsonfly larvae live underwater?', a: 'Up to 5 years', wrong: ['About 2 weeks', 'About 3 months', 'About 1 year'], category: 'lifespan' },
    ],
  },
  'Emerald Cockroach Wasp': {
    status: 'LC',
    habitat: 'Tropical regions, often near human dwellings where cockroaches live',
    range: 'Africa, South Asia, and Pacific Islands',
    facts: [
      { text: 'The emerald cockroach wasp turns cockroaches into zombies by stinging them precisely in the brain, removing their willpower to escape.', q: 'How does the emerald cockroach wasp control cockroaches?', a: 'By stinging them precisely in the brain', wrong: ['By biting off their legs', 'By wrapping them in silk', 'By spraying them with paralyzing venom'], category: 'ability' },
      { text: 'After zombifying a cockroach, the wasp leads it by the antenna like a dog on a leash to a burrow where she lays an egg on it.', q: 'How does the wasp move the zombified cockroach?', a: 'Leads it by the antenna like a leash', wrong: ['Carries it through the air', 'Rolls it along the ground', 'Pushes it from behind'], category: 'behavior' },
      { text: 'Their metallic emerald green color is one of the most vivid in the insect world, created by layers of thin film in their exoskeleton.', q: 'What creates the wasp\'s vivid green color?', a: 'Layers of thin film in the exoskeleton', wrong: ['Green pigment from their diet', 'Chlorophyll absorbed from plants', 'Fluorescent bacteria on their surface'], category: 'body' },
    ],
  },
  'Giant African Millipede': {
    status: 'LC',
    habitat: 'Tropical and subtropical forests in leaf litter and rotting wood',
    range: 'East Africa, from Mozambique to Kenya',
    facts: [
      { text: 'Giant African millipedes can grow up to 15 inches long and are one of the largest millipede species on Earth.', q: 'How long can giant African millipedes grow?', a: 'Up to 15 inches', wrong: ['Up to 5 inches', 'Up to 3 feet', 'Up to 8 inches'], category: 'size' },
      { text: 'Despite the name millipede meaning "thousand feet," they have around 256 legs, not a thousand.', q: 'How many legs does a giant African millipede actually have?', a: 'Around 256', wrong: ['Exactly 1,000', 'About 50', 'About 100'], category: 'body' },
      { text: 'When threatened, they curl into a tight spiral and ooze a mild irritant from pores along their sides that stains skin brown.', q: 'What do giant millipedes do when threatened?', a: 'Curl up and ooze a mild irritant', wrong: ['Run away at high speed', 'Bite with venomous fangs', 'Make a loud hissing sound'], category: 'ability' },
      { text: 'They are champion recyclers, eating dead leaves and rotting wood and turning it into rich soil, like nature\'s composting machines.', q: 'Why are giant millipedes important for forests?', a: 'They turn dead plant material into rich soil', wrong: ['They pollinate flowers', 'They control insect populations', 'They spread seeds to new areas'], category: 'diet' },
    ],
  },
  'Assassin Bug': {
    status: 'LC',
    habitat: 'Gardens, forests, grasslands, and human structures',
    range: 'Worldwide in tropical and temperate regions',
    facts: [
      { text: 'Assassin bugs stab prey with a sharp beak and inject enzymes that dissolve the insides, then slurp out the liquefied guts like a smoothie.', q: 'How do assassin bugs eat their prey?', a: 'Inject enzymes to dissolve insides, then slurp them out', wrong: ['Chew them with powerful jaws', 'Swallow prey whole', 'Tear off small pieces to eat'], category: 'diet' },
      { text: 'Some species stack the dead bodies of their victims on their back as camouflage and as armor against predators.', q: 'What do some assassin bugs do with prey bodies?', a: 'Stack them on their back as camouflage', wrong: ['Bury them to eat later', 'Feed them to their young', 'Use them to build nests'], category: 'behavior' },
      { text: 'The kissing bug, a type of assassin bug, bites people on the face while they sleep and can spread a serious disease called Chagas disease.', q: 'Where do kissing bugs typically bite humans?', a: 'On the face while sleeping', wrong: ['On the hands while eating', 'On the feet while walking', 'On the arms while gardening'], category: 'behavior' },
    ],
  },
  'Wheel Bug': {
    status: 'LC',
    habitat: 'Gardens, forests, and meadows among vegetation',
    range: 'Eastern United States and parts of Central America',
    facts: [
      { text: 'Wheel bugs have a distinctive cogwheel-shaped crest on their back that looks like a gear from a machine, and no one is entirely sure what it is for.', q: 'What is unusual on a wheel bug\'s back?', a: 'A cogwheel-shaped crest', wrong: ['A pair of tiny wings', 'A row of venomous spines', 'A set of fake eyespots'], category: 'body' },
      { text: 'Their bite is extremely painful, reportedly worse than a bee sting, and the pain can last for hours.', q: 'How painful is a wheel bug bite?', a: 'Worse than a bee sting, lasting hours', wrong: ['Barely noticeable', 'About the same as a mosquito bite', 'Painful for about 2 seconds'], category: 'ability' },
      { text: 'They are beneficial garden predators that eat pest insects like stink bugs, caterpillars, and Japanese beetles.', q: 'Why are wheel bugs good for gardens?', a: 'They eat pest insects', wrong: ['They pollinate flowers', 'They aerate the soil', 'They repel deer and rabbits'], category: 'diet' },
    ],
  },
  'Flannel Moth Caterpillar': {
    status: 'LC',
    habitat: 'Deciduous forests, gardens, and parks on shade trees',
    range: 'Eastern and southern United States, Central America',
    facts: [
      { text: 'The flannel moth caterpillar looks like a tiny fluffy toupee or a furry cat toy, but touching it causes searing pain because venomous spines hide under the fur.', q: 'What is hidden under the flannel moth caterpillar\'s fur?', a: 'Venomous spines', wrong: ['Tiny suction cups', 'Harmless soft bristles', 'Sticky glue threads'], category: 'ability' },
      { text: 'Its sting is considered one of the most painful of any insect in North America, sometimes sending people to the hospital.', q: 'How bad is the flannel moth caterpillar\'s sting?', a: 'One of the most painful in North America', wrong: ['Completely painless', 'About as bad as a mosquito bite', 'Mildly itchy for a few minutes'], category: 'ability' },
      { text: 'The venomous spines break off in your skin and are so small they are almost impossible to remove without special tape.', q: 'Why are flannel moth caterpillar stings hard to treat?', a: 'Tiny spines break off in skin and are hard to remove', wrong: ['The venom has no antidote', 'The sting area swells too large', 'The caterpillar keeps stinging repeatedly'], category: 'body' },
    ],
  },
  'Io Moth': {
    status: 'LC',
    habitat: 'Deciduous forests, gardens, parks, and suburban areas',
    range: 'Eastern North America, from Canada to Florida',
    facts: [
      { text: 'Io moths have giant eyespots on their hindwings that they flash suddenly to startle predators, making the moth look like a much larger animal face.', q: 'Why do io moths have eyespots on their wings?', a: 'To startle predators by looking like a bigger animal', wrong: ['To attract mates', 'To see in the dark', 'To absorb sunlight for warmth'], category: 'ability' },
      { text: 'The caterpillars are covered in clusters of green venomous spines that deliver a sting compared to a bee sting on contact.', q: 'What makes io moth caterpillars dangerous to touch?', a: 'Clusters of green venomous spines', wrong: ['Acidic slime on their skin', 'Sharp biting mouthparts', 'Tiny barbed hairs that cause rashes'], category: 'body' },
      { text: 'Males are bright yellow and females are reddish-brown, making them look like completely different species.', q: 'How do male and female io moths look different?', a: 'Males are yellow, females are reddish-brown', wrong: ['Males have spots, females do not', 'Females are twice as large', 'Males have long tail streamers'], category: 'body' },
      { text: 'Adult io moths have no working mouthparts and cannot eat. They live off stored energy from their caterpillar stage for their entire adult lives.', q: 'Why can\'t adult io moths eat?', a: 'They have no working mouthparts', wrong: ['Their stomachs dissolve after metamorphosis', 'Their proboscis is sealed shut', 'They are too busy mating to eat'], category: 'diet' },
    ],
  },

}
