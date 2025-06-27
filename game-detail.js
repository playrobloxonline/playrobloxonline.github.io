document.addEventListener("DOMContentLoaded", () => {
  // Function to generate a slug from a game name
  const generateSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  // Game categories
  const gameCategories = {
    puzzle: ["Truck Loader Unblocked", "Bloxorz Unblocked", "Odd Bot Out Unblocked", "Bubble Shooter Unblocked"],
    match: [],
    action: [
      "Earn To Die Unblocked",
      "Battle Wheels Unblocked",
      "Masked Forces Unblocked",
      "Raft Wars Unblocked",
      "Mad Day Unblocked",
      "Skibidi Shooter Unblocked",
      "1v1 Lol Unblocked",
      "Funny Shooter 2 Unblocked",
      "Stick Merge Unblocked",
    ],
    adventure: ["Super Mario Bros Unblocked"],
    strategy: ["Master Chess Unblocked"],
    simulation: ["BitLife Unblocked", "Monkey Mart Unblocked"],
    racing: [
      "Traffic Rider Unblocked",
      "Traffic Rush Unblocked",
      "Jelly Truck Unblocked",
      "Highway Traffic Unblocked",
      "Moto X3M Unblocked",
      "Drift Hunters Unblocked",
      "Hills Of Stell",
    ],
    sports: ["Basket Bros Unblocked", "Retro Bowl Unblocked"],
    arcade: [
      "Flip Bros Unblocked",
      "Temple Run 2 Unblocked",
      "Tunnel Rush Unblocked",
      "Dreadhead Parkour Unblocked",
      "Geometry Dash Unblocked",
      "Flappy Bird Unblocked",
      "Stickman Hook Unblocked",
      "Poor Bunny Unblocked",
      "Jumping Shell Unblocked",
      "OvO Unblocked",
      "Subway Surfers Unblocked",
      "Roblox Online", // Changed from Hole.io
    ],
    casual: [
      "Tag Unblocked",
      "Among Us Unblocked",
      "8 Ball Pool Unblocked",
      "Red Ball 4 Unblocked",
      "Level Devil Unblocked",
    ],
  }

  // Game images mapping (using placeholder images with queries)
  const gameImages = {
    "Traffic Rider Unblocked": "../images/traffic-rider.png",
    "Flip Bros Unblocked": "../images/flip-bros.png",
    "Super Mario Bros Unblocked": "../images/super-mario-bros.png",
    "Temple Run 2 Unblocked": "../images/temple-run-2.png",
    "Traffic Rush Unblocked": "../images/traffic-rush.png",
    "Earn To Die Unblocked": "../images/earn-to-die.png",
    "Jelly Truck Unblocked": "../images/jelly-truck.png",
    "Highway Traffic Unblocked": "../images/highway-traffic.png",
    "Battle Wheels Unblocked": "../images/battle-wheels.png",
    "Masked Forces Unblocked": "../images/masked-forces.png",
    "Truck Loader Unblocked": "../images/placeholder.svg?height=120&width=200&query=truck+loader+unblocked+game",
    "Raft Wars Unblocked": "../images/Raft Wars Unblocked.png",
    "Mad Day Unblocked": "../images/mad-day.png",
    "Skibidi Shooter Unblocked": "../images/Skibidi Shooter Unblocked.png",
    "Tunnel Rush Unblocked": "../images/Tunnel Rush Unblocked.png",
    "Tag Unblocked": "../images/Tag Unblocked.png",
    "Bubble Shooter Unblocked": "../images/Bubble Shooter Unblocked.png",
    "Basket Bros Unblocked": "../images/basket-bros.png",
    "Dreadhead Parkour Unblocked": "../images/Dreadhead Parkour Unblocked.png",
    "BitLife Unblocked": "../images/BitLife Unblocked.png",
    "Bloxorz Unblocked": "../images/Bloxorz Unblocked.png",
    "1v1 Lol Unblocked": "../images/1v1 Lol Unblocked.png",
    "Geometry Dash Unblocked": "../images/Geometry Dash Unblocked.png",
    "Among Us Unblocked": "../images/Among Us Unblocked.png",
    "Funny Shooter 2 Unblocked": "../images/Funny Shooter 2 Unblocked.png",
    "Level Devil Unblocked": "../images/Level Devil Unblocked.png",
    "Moto X3M Unblocked": "../images/Moto X3M Unblocked.png",
    "Hills Of Stell": "../images/hills-of-steel.png",
    "Retro Bowl Unblocked": "../images/Retro Bowl Unblocked.png",
    "8 Ball Pool Unblocked": "../images/8-ball-pool.png",
    "Master Chess Unblocked": "../images/Master Chess Unblocked.png",
    "Odd Bot Out Unblocked": "../images/Odd Bot Out Unblocked.png",
    "Drift Hunters Unblocked": "../images/drift-hunters.png",
    "Flappy Bird Unblocked": "../images/flappy-bird.png",
    "Stick Merge Unblocked": "../images/stick-merge.png",
    "Stickman Hook Unblocked": "../images/stickman-hook.png",
    "Subway Surfers Unblocked": "../images/subway-surfers.png",
    "Poor Bunny Unblocked": "../images/poor-bunny.png",
    "Jumping Shell Unblocked": "../images/jumping-shell.png",
    "Red Ball 4 Unblocked": "../images/red-ball-4.png",
    "Monkey Mart Unblocked": "../images/monkey-mart.png",
    "OvO Unblocked": "../images/ovo.png",
    "Roblox Online": "../images/roblox-online.png", // Changed from Hole.io
  }

  // Game URLs mapping (using a generic placeholder URL)
  const gameURLs = {
    "Traffic Rider Unblocked": "https://iframe.unblocked-76-games.org/traffic-rider-main",
    "Flip Bros Unblocked": "https://iframe.unblocked-76-games.org/flip-bros-main",
    "Super Mario Bros Unblocked": "https://iframe.unblocked-76-games.org/super-mario-bros-main",
    "Temple Run 2 Unblocked": "https://iframe.unblocked-76-games.org/temple-run-2-main",
    "Traffic Rush Unblocked": "https://iframe.unblocked-76-games.org/traffic-rush-main",
    "Earn To Die Unblocked": "https://iframe.unblocked-76-games.org/earn-to-die-main",
    "Jelly Truck Unblocked": "https://iframe.unblocked-76-games.org/jelly-truck-main",
    "Highway Traffic Unblocked": "https://iframe.unblocked-76-games.org/highway-traffic-main",
    "Battle Wheels Unblocked": "https://iframe.unblocked-76-games.org/battle-wheels-main",
    "Masked Forces Unblocked": "https://iframe.unblocked-76-games.org/masked-forces-main",
    "Truck Loader Unblocked": "https://iframe.unblocked-76-games.org/truck-loader-main",
    "Raft Wars Unblocked": "https://iframe.unblocked-76-games.org/raft-wars-main",
    "Mad Day Unblocked": "https://iframe.unblocked-76-games.org/mad-day-main",
    "Skibidi Shooter Unblocked": "https://iframe.unblocked-76-games.org/skibidi-shooter-main",
    "Tunnel Rush Unblocked": "https://iframe.unblocked-76-games.org/tunnel-rush-main",
    "Tag Unblocked": "https://iframe.unblocked-76-games.org/tag-main",
    "Bubble Shooter Unblocked": "https://iframe.unblocked-76-games.org/bubble-shooter-main",
    "Basket Bros Unblocked": "https://iframe.unblocked-76-games.org/basket-bros-main",
    "Dreadhead Parkour Unblocked": "https://iframe.unblocked-76-games.org/dreadhead-parkour-main",
    "BitLife Unblocked": "https://iframe.unblocked-76-games.org/bitlife-main",
    "Bloxorz Unblocked": "https://iframe.unblocked-76-games.org/bloxorz-main",
    "1v1 Lol Unblocked": "https://iframe.unblocked-76-games.org/1v1-lol-main",
    "Geometry Dash Unblocked": "https://iframe.unblocked-76-games.org/geometry-dash-main",
    "Among Us Unblocked": "https://iframe.unblocked-76-games.org/among-us-main",
    "Funny Shooter 2 Unblocked": "https://iframe.unblocked-76-games.org/funny-shooter-2-main",
    "Level Devil Unblocked": "https://iframe.unblocked-76-games.org/level-devil-main",
    "Moto X3M Unblocked": "https://iframe.unblocked-76-games.org/moto-x3m-main",
    "Hills Of Stell": "https://iframe.unblocked-76-games.org/hills-of-steel-main", // Updated URL
    "Retro Bowl Unblocked": "https://iframe.unblocked-76-games.org/retro-bowl-main",
    "8 Ball Pool Unblocked": "https://iframe.unblocked-76-games.org/8-ball-pool-main",
    "Master Chess Unblocked": "https://iframe.unblocked-76-games.org/master-chess-main",
    "Odd Bot Out Unblocked": "https://iframe.unblocked-76-games.org/odd-bot-out-main",
    "Drift Hunters Unblocked": "https://iframe.unblocked-76-games.org/drift-hunters-main",
    "Flappy Bird Unblocked": "https://flappybirdgame.github.io/file/", // Specific URL
    "Stick Merge Unblocked": "https://iframe.unblocked-76-games.org/stick-merge-main",
    "Stickman Hook Unblocked": "https://iframe.unblocked-76-games.org/stickman-hook-main",
    "Subway Surfers Unblocked": "https://iframe.unblocked-76-games.org/subway-surfers-main",
    "Poor Bunny Unblocked": "https://iframe.unblocked-76-games.org/poor-bunny-main",
    "Jumping Shell Unblocked": "https://iframe.unblocked-76-games.org/jumping-shell-main",
    "Red Ball 4 Unblocked": "https://iframe.unblocked-76-games.org/red-ball-4-main",
    "Monkey Mart Unblocked": "https://iframe.unblocked-76-games.org/monkey-mart-main",
    "OvO Unblocked": "https://unblocked-ovo.github.io/game/", // Specific URL
    "Roblox Online": "https://play.wgplayground.com/ifr/roblox-online", // Placeholder URL
  }

  // Function to shuffle array (Fisher-Yates algorithm)
  function shuffleArray(array) {
    const newArray = [...array] // Create a copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Function to get all games from all categories
  function getAllGames() {
    let allGames = []
    for (const category in gameCategories) {
      allGames = allGames.concat(gameCategories[category])
    }
    return allGames
  }

  // Get current game from URL
  const gamePath = window.location.pathname
  const gameSlug = gamePath.split("/").pop().replace(".html", "")

  // Function to convert slug to game name
  function slugToGameName(slug) {
    // First, try to find an exact match in our game images object
    for (const game in gameImages) {
      const gameSlug = game.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      if (gameSlug === slug) {
        return game
      }
    }

    // If no exact match, try to make a best guess by converting the slug to a title
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Get the game name from the slug
  const gameName = slugToGameName(gameSlug)

  // Set game title
  const gameTitle = document.getElementById("game-title")
  if (gameTitle) {
    gameTitle.textContent = gameName
    document.title = `Play ${gameName} - Roblox Online` // Updated branding
  }

  // Also update the footer title
  const gameTitleFooter = document.getElementById("game-title-footer")
  if (gameTitleFooter) {
    gameTitleFooter.textContent = gameName
  }

  // Function to create a hot game card
  function createHotGameCard(game) {
    const gameCard = document.createElement("div")
    gameCard.classList.add("hot-game-card")
    gameCard.setAttribute("data-game", game)

    const hasImage = gameImages[game] !== undefined
    let gameUrl = `${generateSlug(game)}.html` // Default URL

    // Redirect Roblox Online to the homepage
    if (game === "Roblox Online") {
      gameUrl = "../index.html" // Use relative path for game detail pages
    }

    gameCard.innerHTML = `
  <div class="hot-game-image">
    ${hasImage ? `<img src="${gameImages[game]}" alt="${game}">` : ""}
    <div class="hot-game-overlay">
      <i class="fas fa-play-circle"></i>
    </div>
  </div>
  <p>${game}</p>
`

    gameCard.addEventListener("click", () => {
      window.location.href = gameUrl
    })

    return gameCard
  }

  // Function to create a regular game card
  function createGameCard(game) {
    const gameCard = document.createElement("div")
    gameCard.classList.add("game-card")

    let gameUrl = `${generateSlug(game)}.html` // Default URL

    // Redirect Roblox Online to the homepage
    if (game === "Roblox Online") {
      gameUrl = "../index.html" // Use relative path for game detail pages
    }

    // Check if we have an image for this game
    const hasImage = gameImages[game] !== undefined

    gameCard.innerHTML = `
  <div class="card-image">
    ${hasImage ? `<img src="${gameImages[game]}" alt="${game}">` : ""}
    <div class="play-overlay">
      <i class="fas fa-play-circle"></i>
    </div>
  </div>
  <p>${game}</p>
`

    gameCard.addEventListener("click", () => {
      window.location.href = gameUrl
    })

    return gameCard
  }

  // Load hot games
  function loadHotGames() {
    console.log("Loading hot games...")
    const hotGamesGrid = document.getElementById("detail-hot-games-grid")
    if (!hotGamesGrid) {
      console.error("Hot games grid not found")
      return
    }

    // Clear existing games
    hotGamesGrid.innerHTML = ""

    // Get all games and shuffle them
    const allGames = getAllGames()

    // Remove current game from the list
    const filteredGames = allGames.filter((game) => game.toLowerCase().replace(/[^a-z0-9]+/g, "-") !== gameSlug)

    // Shuffle and select games
    const shuffledGames = shuffleArray(filteredGames)
    const selectedGames = shuffledGames.slice(0, 8)

    console.log(`Selected ${selectedGames.length} hot games`)

    // Add games to the grid
    selectedGames.forEach((game) => {
      const gameCard = createHotGameCard(game)
      hotGamesGrid.appendChild(gameCard)
    })
  }

  // Load related games
  function loadRelatedGames() {
    console.log("Loading related games...")
    const relatedGamesGrid = document.querySelector(".related-games-grid")
    if (!relatedGamesGrid) {
      console.error("Related games grid not found")
      return
    }

    // Clear existing games
    relatedGamesGrid.innerHTML = ""

    // Get all games
    const allGames = getAllGames()

    // Remove current game from the list
    const filteredGames = allGames.filter((game) => game.toLowerCase().replace(/[^a-z0-9]+/g, "-") !== gameSlug)

    // Shuffle and select games
    const shuffledGames = shuffleArray(filteredGames)
    const selectedGames = shuffledGames.slice(0, 12)

    console.log(`Selected ${selectedGames.length} related games`)

    // Add games to the grid
    selectedGames.forEach((game) => {
      const gameCard = createGameCard(game)
      relatedGamesGrid.appendChild(gameCard)
    })
  }

  // Load both hot games and related games
  loadHotGames()
  loadRelatedGames()

  // Play Now button functionality
  const playNowBtn = document.getElementById("play-now-btn")
  const gameOverlay = document.getElementById("game-overlay")
  const gameFrame = document.getElementById("game-frame")

  if (playNowBtn && gameOverlay && gameFrame) {
    playNowBtn.addEventListener("click", () => {
      // Create and load the iframe with the specific game URL
      const gameURL = gameURLs[gameName] || "https://play.wgplayground.com/ifr/placeholder" // Default URL if specific one not found
      const gameIframe = document.createElement("iframe")
      gameIframe.src = gameURL
      gameIframe.width = "100%"
      gameIframe.height = "100%"
      gameIframe.frameBorder = "0"
      gameIframe.allowFullscreen = true
      gameIframe.style.border = "none"

      // Add the iframe to the game frame
      gameFrame.appendChild(gameIframe)

      // Hide the overlay with animation
      gameOverlay.style.opacity = "0"
      setTimeout(() => {
        gameOverlay.style.display = "none"
      }, 500)

      // Add error handling for iframe
      gameIframe.onerror = () => {
        gameFrame.innerHTML = `
      <div class="game-error">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>Game Unavailable</h2>
        <p>Sorry, this game is currently unavailable. Please try again later or choose another game.</p>
        <a href="../index.html" class="back-btn">Back to Games</a>
      </div>
    `
      }

      // Add a message if the iframe fails to load or shows "no longer available"
      gameIframe.onload = () => {
        // We can't directly check iframe content due to same-origin policy
        // So we'll add a fallback button just in case
        const fallbackContainer = document.createElement("div")
        fallbackContainer.className = "fallback-container"
        fallbackContainer.innerHTML = `
      <div class="fallback-message">
        <p>If the game doesn't load properly, you can:</p>
        <a href="${gameURL}" target="_blank" class="fallback-btn">
          <i class="fas fa-external-link-alt"></i> Open in New Tab
        </a>
        <a href="../index.html" class="fallback-btn">
          <i class="fas fa-th-large"></i> Browse Other Games
        </a>
      </div>
    `

        // Add the fallback container after the game wrapper
        const gameWrapper = document.querySelector(".game-wrapper")
        if (gameWrapper) {
          gameWrapper.parentNode.insertBefore(fallbackContainer, gameWrapper.nextSibling)
        }
      }
    })
  } else {
    // For games without URLs, hide the overlay
    const gameOverlay = document.getElementById("game-overlay")
    if (gameOverlay) {
      gameOverlay.style.display = "none"
    }

    // Show a message
    const gameFrame = document.getElementById("game-frame")
    if (gameFrame) {
      gameFrame.innerHTML = `
<div class="game-placeholder">
  <i class="fas fa-gamepad"></i>
  <h2>Game Not Available</h2>
  <p>This game is currently not available for direct play.</p>
  <a href="../index.html" class="back-btn">Browse Other Games</a>
</div>
`
    }
  }

  // Fullscreen functionality
  const fullscreenBtn = document.querySelector(".fullscreen-btn")
  const gameContentWrapper = document.querySelector(".game-content")

  if (fullscreenBtn && gameContentWrapper) {
    fullscreenBtn.addEventListener("click", function () {
      if (!document.fullscreenElement) {
        if (gameContentWrapper.requestFullscreen) {
          gameContentWrapper.requestFullscreen()
        } else if (gameContentWrapper.mozRequestFullScreen) {
          /* Firefox */
          gameContentWrapper.mozRequestFullScreen()
        } else if (gameContentWrapper.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          gameContentWrapper.webkitRequestFullscreen()
        } else if (gameContentWrapper.msRequestFullscreen) {
          /* IE/Edge */
          gameContentWrapper.msRequestFullscreen()
        }
        this.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen'
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          /* Firefox */
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          /* Chrome, Safari & Opera */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE/Edge */
          document.msExitFullscreen()
        }
        this.innerHTML = '<i class="fas fa-expand"></i> Fullscreen'
      }
    })
  }

  // Like button functionality
  const likeBtn = document.querySelector(".like-btn")
  if (likeBtn) {
    likeBtn.addEventListener("click", function () {
      const icon = this.querySelector("i")
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        icon.style.color = "#ff6b6b"
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        icon.style.color = ""
      }
    })
  }

  // Share button functionality
  const shareBtn = document.querySelector(".share-btn")
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      if (navigator.share) {
        navigator
          .share({
            title: document.title,
            url: window.location.href,
          })
          .catch(console.error)
      } else {
        alert(`Share this game: ${window.location.href}`)
      }
    })
  }

  // Update the game preview image if we have one for this game
  const previewImage = document.querySelector(".preview-image")
  if (previewImage && gameName && gameImages[gameName]) {
    previewImage.src = gameImages[gameName]
    previewImage.alt = `${gameName} Preview`
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector("nav")

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", function () {
      nav.classList.toggle("active")

      // Change icon based on menu state
      const icon = this.querySelector("i")
      if (icon) {
        if (nav.classList.contains("active")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      }
    })
  }

  console.log("Game detail script loaded successfully")
})
