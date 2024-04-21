/**
 * Configures the user interface controls for the solar system simulation.
 * This includes setting up event listeners for the rotation speed slider, the orbit speed slider,
 * and the planet selection dropdown.
 *
 * parameter controls - The OrbitControls instance used for camera control in the scene.
 * parameter camera - The Three.js camera used in the scene, allowing adjustments based on selected planet.
 * parameter planets - An array of planet objects in the scene, each with userData containing its properties.
 */
export function setupUI(controls, camera, planets) {
    // Retrieves UI elements based on their ID.
    const rotationSpeedSlider = document.getElementById('rotationSpeed');
    const orbitSpeedSlider = document.getElementById('orbitSpeed');
    const planetSelect = document.getElementById('planetSelect');

    // Adds an event listener to the rotation speed slider to update the rotation speed of all planets.
    rotationSpeedSlider.addEventListener('input', function () {
        planets.forEach(planet => {
            // Updates the rotation speed of each planet based on the slider's value.
            planet.userData.rotationSpeed = parseFloat(rotationSpeedSlider.value);
        });
    });

    // Adds an event listener to the orbit speed slider to update the orbit speed of all planets.
    orbitSpeedSlider.addEventListener('input', function () {
        planets.forEach(planet => {
            // Updates the orbit speed of each planet based on the slider's value.
            planet.userData.orbitSpeed = parseFloat(orbitSpeedSlider.value);
        });
    });

    // Adds an event listener to the planet selection dropdown to focus the camera on the selected planet.
    planetSelect.addEventListener('change', function () {
        // Finds the planet object that matches the selected value in the dropdown.
        const selectedPlanet = planets.find(planet => planet.userData.name === planetSelect.value);
        if (selectedPlanet) {
            // Updates the camera and controls to focus on the selected planet.
            controls.target.copy(selectedPlanet.position); // Sets the camera's target to the selected planet's position.
            camera.position.set(selectedPlanet.position.x + 10, selectedPlanet.position.y + 10, selectedPlanet.position.z + 10); // Positions the camera to frame the selected planet.
            controls.update(); // Applies the changes to the controls.
        }
    });
}
