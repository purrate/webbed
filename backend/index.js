require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Space Destination Data
const destinations = [
  {
    id: "mars-olympus",
    planet: "Mars",
    destination: "Olympus Mons Base",
    description:
      "Experience breathtaking views from the tallest volcano in the solar system.",
    image: "https://example.com/images/mars-olympus.jpg",
    distance_from_earth_km: 225000000,
    travel_time_days: 180,
    transport_mode: "Starliner X",
    departure_points: ["Earth Spaceport", "Lunar Gateway Station"],
    accommodation: {
      hotels: [
        {
          name: "Red Horizon Dome",
          room_types: ["Standard Pod", "Luxury Dome", "Zero-G Suite"],
          amenities: ["Martian-grown food", "Artificial Gravity Rooms"],
        },
      ],
    },
    experiences: [
      "Mars Rover Expedition",
      "Lava Tube Exploration",
      "Martian Sunrise View",
    ],
    cost: {
      base_price_million_usd: 5,
      package_options: {
        solo: 5,
        family: 18,
        corporate: 50,
      },
      add_ons: {
        zero_g_training: 1,
        spacewalk: 2,
      },
    },
    safety_training: {
      pre_flight_training_days: 30,
      health_check_required: true,
      emergency_protocols: ["Oxygen Failure Drill", "Solar Flare Shielding"],
    },
  },
  {
    id: "titan-sky-resort",
    planet: "Titan",
    destination: "Titan Sky Resort",
    description:
      "Stay in a floating luxury resort above Titan's methane lakes.",
    image: "https://example.com/images/titan-sky.jpg",
    distance_from_earth_km: 1400000000,
    travel_time_days: 2400,
    transport_mode: "Quantum Drive Shuttle",
    departure_points: ["Earth Spaceport", "Mars Transit Hub"],
    accommodation: {
      hotels: [
        {
          name: "Titan Sky Resort",
          room_types: ["Cloudview Suite", "Zero-G Bubble"],
          amenities: ["Floating Skylounge", "Underwater Dome Dining"],
        },
      ],
    },
    experiences: [
      "Subsurface Ocean Exploration",
      "Methane Lake Kayaking",
      "Saturn Ring Viewing",
    ],
    cost: {
      base_price_million_usd: 10,
      package_options: {
        solo: 10,
        family: 35,
        corporate: 80,
      },
      add_ons: {
        spacewalk: 3,
        custom_excursions: 5,
      },
    },
    safety_training: {
      pre_flight_training_days: 45,
      health_check_required: true,
      emergency_protocols: ["Extreme Cold Survival", "Pressure Suit Training"],
    },
  },
];

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Space Travel API!");
});

// Get all destinations
app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});

// Get destination by ID
app.get("/api/destinations/:id", (req, res) => {
  const destination = destinations.find((d) => d.id === req.params.id);
  if (!destination) {
    return res.status(404).json({ error: "Destination not found" });
  }
  res.json(destination);
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
