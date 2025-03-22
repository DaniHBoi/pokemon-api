const express = require("express");
const app = express();
const PORT = 8000;

const pokemon = {
  charizard: {
    type: "fire/flying",
    attacks: ["Flamethrower", "Dragon Claw", "Fire Spin", "Blast Burn"],
    "base stats": {
      HP: 78,
      Attack: 84,
      Defense: 78,
      Speed: 100,
    },
    height: "1.7m (5'07)",
    weight: "90.5 kg (199.5 lbs)",
  },
  pikachu: {
    type: "electric",
    attacks: ["Static", "Lightning Rod"],
    "base stats": {
      HP: 35,
      Attack: 55,
      Defense: 40,
      Speed: 90,
    },
    height: "0.4m (1'04)",
    weight: "6.0 kg (13.2 lbs)",
  },
  lucario: {
    type: "fighting/steel",
    attacks: ["Steadfast", "Innder Focus", "Justified"],
    "base stats": {
      HP: 70,
      Attack: 110,
      Defense: 70,
      Speed: 90,
    },
    height: "1.2m (3'11)",
    weight: "54.0 kg (119.0 lbs)",
  },
  bulbasaur: {
    type: "grass,poison",
    attacks: ["Overgrow", "Chlorophyll"],
    "base stats": {
      HP: 45,
      Attack: 49,
      Defense: 49,
      Speed: 45,
    },
    height: "0.7m (2'04)",
    weight: "6.9 kg (15.2 lbs)",
  },
  unknown: "no pokemon by that name",
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(pokemon);
});

app.get("/api/:name", (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  if (pokemon[pokemonName]) {
    res.json(pokemon[pokemonName]);
  } else {
    res.json(pokemon["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on ${PORT}. BETTER GO CATCH IT!!!`);
});
