/**
 * This module exports an array containing data for each celestial body in the solar system simulation.
 * The data includes properties such as name, size, orbit speed, distance from the sun, color, and rotation speed.
 * These properties are used to create and animate the planets and the sun within the simulation.
 */

export const planetsData = [
    {
        name: "Sun", // The name of the celestial body.
        size: 22.0, // The size of the body relative to other objects; not to scale with reality for visualization purposes.
        orbitSpeed: 0, // The orbital speed around the Sun; zero for the Sun itself as it does not orbit.
        distance: 0, // The distance from the Sun; zero for the Sun itself.
        color: 0xFFFF00, // The color of the celestial body in hexadecimal.
        rotationSpeed: 0.0003 // The speed at which the celestial body rotates around its own axis.
    },
    {
        name: "Mercury",
        size: 0.383,
        orbitSpeed: 0.047,
        distance: 57.9,
        color: 0xBBBBBB,
        rotationSpeed: 0.0001
    },
    {
        name: "Venus",
        size: 0.949,
        orbitSpeed: 0.035,
        distance: 108.2,
        color: 0xFFE4C4,
        rotationSpeed: 0.00002
    },
    {
        name: "Earth",
        size: 1.000, // Earth is used as a baseline for size comparison.
        orbitSpeed: 0.03,
        distance: 149.6,
        color: 0x214F93,
        rotationSpeed: 0.0003
    },
    {
        name: "Mars",
        size: 0.532,
        orbitSpeed: 0.024,
        distance: 227.9,
        color: 0xCD5C5C,
        rotationSpeed: 0.00024
    },
    {
        name: "Jupiter",
        size: 11.21, // Jupiter is the largest planet in the solar system.
        orbitSpeed: 0.013,
        distance: 778.3,
        color: 0xFFE4C4,
        rotationSpeed: 0.0007
    },
    {
        name: "Saturn",
        size: 9.45,
        orbitSpeed: 0.009,
        distance: 1427,
        color: 0xF4C542, // The color reflects Saturn's golden appearance.
        rotationSpeed: 0.0006
    },
    {
        name: "Uranus",
        size: 4.01,
        orbitSpeed: 0.006,
        distance: 2871,
        color: 0xAFDDE9,
        rotationSpeed: 0.0004
    },
    {
        name: "Neptune",
        size: 3.88,
        orbitSpeed: 0.005,
        distance: 4495,
        color: 0x5F9EA0,
        rotationSpeed: 0.0005
    }
];

/**
 * Note: The properties used here (size, orbitSpeed, distance, color, rotationSpeed) are simplified
 * for educational and visualization purposes. Real astronomical values are significantly different and
 * would require scaling adjustments for a realistic simulation.
 */
