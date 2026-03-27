/**
 * Curated species lists for each category.
 *
 * Wikipedia's taxonomic categories are organized for scientists, not kids.
 * Browsing "Marine animals" returns parasitic trematodes and obscure nematodes.
 * Instead, we define popular, recognizable, kid-friendly species per category
 * and fetch their Wikipedia data by exact title.
 *
 * Each entry is the exact Wikipedia article title. When the user taps a
 * category, we look up these titles directly (no random subcategory drilling).
 * This guarantees quality results every time.
 */

export const CURATED_SPECIES = {
  // ── Mammals ──────────────────────────────────────────────────────────
  Mammals: [
    'African elephant', 'Blue whale', 'Red fox', 'Gray wolf', 'Lion',
    'Tiger', 'Polar bear', 'Giant panda', 'Giraffe', 'Cheetah',
    'Hippopotamus', 'Rhinoceros', 'Gorilla', 'Orangutan', 'Chimpanzee',
    'Red panda', 'Koala', 'Kangaroo', 'Platypus', 'Dolphin',
    'Humpback whale', 'Orca', 'Sea otter', 'Sloth', 'Bat',
    'Hedgehog', 'Pangolin', 'Narwhal', 'Wolverine', 'Fennec fox',
    'Snow leopard', 'Jaguar', 'Moose', 'Bison', 'Zebra',
    'Armadillo', 'Manatee', 'Wombat', 'Meerkat', 'Capybara',
  ],

  // ── Birds ────────────────────────────────────────────────────────────
  Birds: [
    'Bald eagle', 'Peregrine falcon', 'Snowy owl', 'Emperor penguin',
    'Flamingo', 'Hummingbird', 'Peacock', 'Toucan', 'Macaw',
    'Atlantic puffin', 'Kingfisher', 'Robin (bird)', 'Blue jay',
    'Cardinal (bird)', 'Crow', 'Raven', 'Woodpecker', 'Pelican',
    'Albatross', 'Ostrich', 'Emu', 'Kiwi (bird)', 'Cassowary',
    'Secretary bird', 'Shoebill', 'Harpy eagle', 'Golden eagle',
    'Barn owl', 'Great horned owl', 'Parrot', 'Cockatoo',
    'Swan', 'Crane (bird)', 'Heron', 'Stork', 'Condor',
    'Roadrunner', 'Chickadee', 'Wren', 'Hawk',
  ],

  // ── Reptiles ─────────────────────────────────────────────────────────
  Reptiles: [
    'Komodo dragon', 'Green sea turtle', 'Saltwater crocodile',
    'King cobra', 'Chameleon', 'Gecko', 'Iguana', 'Gila monster',
    'Leatherback sea turtle', 'Galápagos tortoise', 'Anaconda',
    'Rattlesnake', 'Python (genus)', 'Boa constrictor', 'Coral snake',
    'Alligator', 'Nile crocodile', 'Tuatara', 'Frilled-neck lizard',
    'Thorny devil', 'Blue-tongued skink', 'Monitor lizard',
    'Black mamba', 'Copperhead (snake)', 'Corn snake',
    'Box turtle', 'Snapping turtle', 'Bearded dragon',
    'Leopard gecko', 'Tokay gecko', 'Ball python',
    'Green tree python', 'Hawksbill sea turtle', 'Gharial',
  ],

  // ── Frogs & Salamanders ──────────────────────────────────────────────
  'Frogs & Salamanders': [
    'Red-eyed tree frog', 'Poison dart frog', 'Bullfrog',
    'Axolotl', 'Fire salamander', 'Giant salamander',
    'Cane toad', 'Glass frog', 'Tomato frog',
    'Golden poison frog', 'Goliath frog', 'Spring peeper',
    'Pacman frog', 'African clawed frog', 'Tree frog',
    'Hellbender', 'Newt', 'Spotted salamander',
    'Tiger salamander', 'Caecilian', 'Surinam toad',
    'Mudpuppy', 'Olm', 'Purple frog',
    'Darwin\'s frog', 'Wood frog', 'Leopard frog',
    'Waxy monkey tree frog', 'Blue poison dart frog',
  ],

  // ── Fish ──────────────────────────────────────────────────────────────
  Fish: [
    'Clownfish', 'Great white shark', 'Whale shark', 'Manta ray',
    'Seahorse', 'Anglerfish', 'Swordfish', 'Barracuda',
    'Piranha', 'Electric eel', 'Pufferfish', 'Lionfish',
    'Hammerhead shark', 'Tiger shark', 'Blue tang',
    'Betta (fish)', 'Goldfish', 'Koi', 'Salmon', 'Tuna',
    'Marlin', 'Moray eel', 'Stingray', 'Coelacanth',
    'Flying fish', 'Goblin shark', 'Megamouth shark',
    'Sunfish (fish)', 'Sturgeon', 'Catfish', 'Bass (fish)',
    'Grouper', 'Parrotfish', 'Boxfish', 'Archerfish',
  ],

  // ── Insects ───────────────────────────────────────────────────────────
  Insects: [
    'Monarch butterfly', 'Ladybug', 'Praying mantis', 'Firefly',
    'Dragonfly', 'Honeybee', 'Ant', 'Hercules beetle',
    'Atlas moth', 'Luna moth', 'Stick insect', 'Leaf insect',
    'Cicada', 'Cricket (insect)', 'Grasshopper', 'Cockroach',
    'Dung beetle', 'Jewel beetle', 'Stag beetle', 'Bombardier beetle',
    'Damselfly', 'Mayfly', 'Butterfly', 'Moth',
    'Walking stick', 'Water strider', 'Flea', 'Termite',
    'Carpenter ant', 'Bumblebee', 'Wasp', 'Hornet',
  ],

  // ── Spiders & Scorpions ──────────────────────────────────────────────
  'Spiders & Scorpions': [
    'Tarantula', 'Black widow spider', 'Jumping spider',
    'Orb-weaver spider', 'Wolf spider', 'Emperor scorpion',
    'Peacock spider', 'Goliath birdeater', 'Brown recluse spider',
    'Garden spider', 'Crab spider', 'Scorpion', 'Vinegaroon',
    'Tick', 'Harvestman', 'Solifugae', 'Trapdoor spider',
    'Funnel-web spider', 'Bark scorpion', 'Whip scorpion',
    'Diving bell spider', 'Huntsman spider', 'Daddy longlegs',
  ],

  // ── Ocean Creatures ──────────────────────────────────────────────────
  'Ocean Creatures': [
    'Giant squid', 'Octopus', 'Blue whale', 'Dolphin', 'Sea turtle',
    'Jellyfish', 'Coral', 'Seahorse', 'Starfish', 'Sea urchin',
    'Clownfish', 'Manta ray', 'Whale shark', 'Great white shark',
    'Orca', 'Humpback whale', 'Narwhal', 'Beluga whale',
    'Sea otter', 'Walrus', 'Seal', 'Manatee',
    'Anglerfish', 'Nautilus', 'Cuttlefish', 'Lobster',
    'Hermit crab', 'Sea anemone', 'Sea cucumber', 'Giant Pacific octopus',
    'Portuguese man o\' war', 'Moray eel', 'Lionfish', 'Pufferfish',
    'Hammerhead shark', 'Goblin shark', 'Megamouth shark',
    'Blue-ringed octopus', 'Mantis shrimp', 'Horseshoe crab',
  ],

  // ── Dinosaurs ────────────────────────────────────────────────────────
  Dinosaurs: [
    'Tyrannosaurus', 'Triceratops', 'Velociraptor', 'Stegosaurus',
    'Brachiosaurus', 'Ankylosaurus', 'Spinosaurus', 'Pteranodon',
    'Diplodocus', 'Parasaurolophus', 'Pachycephalosaurus',
    'Allosaurus', 'Iguanodon', 'Deinonychus', 'Archaeopteryx',
    'Therizinosaurus', 'Carnotaurus', 'Dilophosaurus',
    'Brontosaurus', 'Mosasaurus', 'Plesiosaurus', 'Ichthyosaurus',
    'Quetzalcoatlus', 'Megalodon', 'Woolly mammoth',
    'Saber-toothed cat', 'Dodo', 'Ammonite', 'Trilobite',
    'Anomalocaris', 'Dimetrodon', 'Giganotosaurus',
  ],

  // ── Crabs & Shrimp ──────────────────────────────────────────────────
  'Crabs & Shrimp': [
    'Hermit crab', 'Japanese spider crab', 'Blue crab',
    'Mantis shrimp', 'Lobster', 'Crayfish', 'Horseshoe crab',
    'Coconut crab', 'Fiddler crab', 'King crab',
    'Shrimp', 'Krill', 'Barnacle', 'Isopod',
    'Dungeness crab', 'Snow crab', 'Sally Lightfoot crab',
    'Pistol shrimp', 'Giant isopod', 'Amphipod',
    'Ghost crab', 'Christmas Island red crab', 'Yeti crab',
    'Decorator crab', 'Cleaner shrimp', 'Woodlouse',
  ],

  // ── Fungi ────────────────────────────────────────────────────────────
  Fungi: [
    'Fly agaric', 'Chanterelle', 'Morel', 'Shiitake',
    'Porcini', 'Oyster mushroom', 'Lion\'s mane mushroom',
    'Death cap', 'Destroying angel', 'Puffball',
    'Cordyceps', 'Turkey tail (fungus)', 'Bracket fungus',
    'Truffle', 'Stinkhorn', 'Bird\'s nest fungus',
    'Honey fungus', 'Chicken of the woods', 'Hen-of-the-wood',
    'Giant puffball', 'Ergot', 'Penicillium',
    'Yeast', 'Lichen', 'Chaga mushroom',
  ],

  // ── Sharks & Rays ────────────────────────────────────────────────────
  'Sharks & Rays': [
    'Great white shark', 'Hammerhead shark', 'Whale shark',
    'Tiger shark', 'Bull shark', 'Blue shark', 'Mako shark',
    'Goblin shark', 'Megamouth shark', 'Thresher shark',
    'Nurse shark', 'Blacktip reef shark', 'Lemon shark',
    'Manta ray', 'Stingray', 'Electric ray', 'Sawfish',
    'Eagle ray', 'Basking shark', 'Cookiecutter shark',
    'Wobbegong', 'Greenland shark', 'Leopard shark',
    'Angel shark', 'Frilled shark', 'Megalodon',
  ],
}

/**
 * Get a shuffled sample of curated species for a category.
 * Returns the Wikipedia article titles ready for batch lookup.
 */
export function getCuratedTitles(categoryLabel, count = 18) {
  const titles = CURATED_SPECIES[categoryLabel]
  if (!titles) return []

  // Shuffle and sample
  const shuffled = [...titles].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
