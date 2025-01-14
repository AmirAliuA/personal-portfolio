---
date: 2024-08-23 17:06:00 +0530
title: "Snake Game"
slug: snake-game
tech: ["Java 22", "openjdk22", "JFrame", "JPanel"]
web: https://github.com/AmirAliuA/snake-game/releases/tag/1.0
ios: https://github.com/AmirAliuA/snake-game
icon: /images/work/index/snake-game/snake-logo.jpg
active: false
tagline: The classic Snake game written in Java
---

This is a classic Snake game implemented in Java using Swing for the graphical interface.

---

### Game Overview
- Objective: Control the snake to eat food and grow in length while avoiding collisions with itself and the game boundaries.
- Controls: Use the arrow keys to direct the snake's movement. The snake moves continuously in the direction you choose until you change direction.

### Key Components:
Game Board:
- The game board is a grid of tiles, each 25x25 pixels.
- The board size is adjustable; in this implementation, it's 600x600 pixels.

### Snake:
- The snake is represented by a series of Tile objects.
- The snake's head is the first tile, and the rest are body segments.
- As the snake moves, each body segment follows the previous one, creating the appearance of a moving snake.

### Food:
- Food is randomly placed on the grid.
- When the snake's head collides with the food, the snake grows by adding a new segment at the end of its body, and a new food tile is generated.

### Movement:
- The snake moves continuously in the current direction set by the arrow keys.
- The movement is handled by updating the position of the snake's head and shifting the body segments.

### Collision Detection:
- If the snake's head collides with any of its body segments, the game ends.
- The game also ends if the snake moves outside the board boundaries.

### Game Loop:
- The game uses a Timer to create a loop that updates the game state and repaints the screen every 100 milliseconds.

### Graphics:
- The snake, food, and grid are drawn using simple geometric shapes.
- The snake is drawn using 3D rectangles, and the food is represented similarly.

### Game Over:
- When the game ends, a "Game Over" message is displayed along with the score (the length of the snake).

### How It Works
- The Game class manages the game state, including the snake's position, food, and collision detection.
- The InputManagement class handles user input, changing the snake's direction based on arrow key presses.
- The Main class initializes and displays the game window.

This simple implementation captures the essence of the classic Snake game, focusing on core gameplay mechanics and providing a fun, interactive experience.

---
# Download
https://github.com/AmirAliuA/snake-game/releases/tag/1.0

---

# Game Demo
![Game Demo](/images/work/index/snake-game/snake-demo.png)