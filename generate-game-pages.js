// This script would be run once to generate all the individual game HTML files
// You can run this with Node.js

const fs = require("fs")
const path = require("path")

// Game categories
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

// Get all games
const allGames = []
for (const category in gameCategories) {
  allGames.push(...gameCategories[category])
}

// Create games directory if it doesn't exist
const gamesDir = path.join(__dirname, "games")
if (!fs.existsSync(gamesDir)) {
  fs.mkdirSync(gamesDir)
}

// Read the template file
const templatePath = path.join(__dirname, "games", "game-template.html")
const template = fs.readFileSync(templatePath, "utf8")

// Generate a file for each game
allGames.forEach((game) => {
  const slug = game.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const filePath = path.join(gamesDir, `${slug}.html`)

  // Replace placeholders in the template
  const content = template
    .replace(/Game Title/g, game)
    .replace(/Play Game - Crossy Road/g, `Play ${game} - Crossy Road`)

  // Write the file
  fs.writeFileSync(filePath, content)
  console.log(`Generated: ${filePath}`)
})

console.log("All game pages generated successfully!")
