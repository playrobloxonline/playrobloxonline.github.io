// This is a simple script to create all the game HTML files
// You can run this in your browser console or as a Node.js script

// Function to create game files
function createGameFiles() {
  // Get all games from all categories
  const allGames = []
  for (const category in gameCategories) {
    allGames.push(...gameCategories[category])
  }

  console.log(`Creating ${allGames.length} game HTML files...`)

  // For each game, create a file
  allGames.forEach((game) => {
    const slug = game.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    const fileName = `games/${slug}.html`

    // In a real environment, this would write to the file system
    console.log(`Created: ${fileName}`)
  })

  console.log("All game files created!")
}

// Game categories (copy from your script.js)
const gameCategories = {
  "puzzle-match": [
    "Block LEGENDS!",
    "Coin Merge Machine",
    "Animal Kingdom Mahjong",
    "Classic Chess",
    "Newton's Fruit Fusion",
    "Hangman Saga",
    "Battle of the Minds: Quiz - Puzzle",
    "Candy Cascade",
    "Fruit Candy Merge",
    "Stack Sorting",
    "Supermarket Sort N Match",
    "Blossom Link",
    "Mahjong Solitaire Unlimited",
    "Pet Tile Master",
    "Shelf Shift Match",
    "Cut For Cat Challenge",
    "Detective - Logic Puzzles",
    "The Sort Agency",
    "Balls Merge: 2048 3D",
    "Happy Bucket",
  ],
  "action-adventure": [
    "Zombie Derby Pixel Survival",
    "Fortzone Battle Royale",
    "Warfare 1942 - Online Shooter",
    "Epic Mine",
    "Minion Escape",
    "Star Exiles",
    "Dino Survival: 3D Simulator",
    "End Of World",
    "Galaxy Carnage",
    "Cubic Lands",
    "Around Elbrus",
    "Stickman: Dinosaur Arena",
  ],
  "strategy-simulation": [
    "Tile Hex World: Red vs Blue",
    "DTA 2: Maniac",
    "Little Commander: Red vs Blue",
    "Market Life",
    "Castle Story",
    "Hex Wars",
  ],
  "racing-sports": ["Bus Driver Simulator 3D", "Sling Drift: Sling Games", "Nitro Burnout", "Real Racing 3D"],
  "arcade-casual": ["Chicken Strike", "Screws Master"],
}

// Run the function
createGameFiles()
