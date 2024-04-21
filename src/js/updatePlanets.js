/**
 * Manages the update cycle for planetary objects in the solar system simulation. This function
 * is responsible for both the axial rotation of the planets around their own axis and their orbital
 * movement around the Sun. It calculates the new positions and orientations of each planet based
 * on predefined speeds and elapsed time since the start of the simulation.
 *
 * @parameter planets - An array of planets. Each planet
 *        has data attached to it that contains properties like rotationSpeed and orbitSpeed.
 */
export function updatePlanets(planets) {
    // Calculate the elapsed time in seconds since the simulation started.
    const timeSinceStart = (Date.now() - simulationStart) / 1000;

    // Iterate over each planet to update its position and rotation.
    planets.forEach(planet => {
        const data = planet.userData;

        // Axial Rotation:
        // If the planet has a defined rotation speed, increment its rotation around its own axis.
        // The rotation is applied to the y-axis to simulate spinning on a vertical axis.
        if (data.rotationSpeed) {
            planet.rotation.y += data.rotationSpeed; // Increment y rotation based on the planet's rotation speed.
        }

        // Orbital Movement:
        // If the planet has a defined orbit speed and distance from the Sun, calculate its new position
        // in orbit. The position is determined using trigonometric functions to simulate circular orbits.
        if (data.orbitSpeed && data.distance) {
            // The angle of orbit is calculated based on the orbit speed and the elapsed time.
            const angle = timeSinceStart * data.orbitSpeed;

            // Calculate the planet's new position using its distance from the Sun and the calculated angle.
            planet.position.x = Math.cos(angle) * data.distance;
            planet.position.z = Math.sin(angle) * data.distance;
        }
    });
}

// Marks the timestamp when the simulation started. This is used to calculate the elapsed time for motion updates.
const simulationStart = Date.now();
