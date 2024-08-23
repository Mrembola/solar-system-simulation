/**
 * This is the main entry point for the Solar System Simulation project using Three.js.
 * It sets up the rendering environment, including the scene, camera, and controls,
 * and initiates the creation of planetary objects. It also handles the animation loop
 * and responds to window resize events to ensure the simulation scales correctly.
 */

// Imports the core Three.js library for 3D rendering.
import * as THREE from 'three';

// Imports the main CSS for styling the simulation's controls and ensuring proper visibility against the background.
import '../styles/main.css';

// Imports OrbitControls for enabling user interaction with the scene through mouse movements.
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Imports functions from other modules that handle specific tasks within the simulation.
import { createPlanets, planets } from './createPlanets'; // For creating and storing planetary objects.
import { updatePlanets } from './updatePlanets'; // For updating planet positions and rotations.
import { setupUI } from './uiControls'; // For setting up user interface controls.
import { onWindowResize } from './resizeEvent'; // For handling browser window resize events.

// Initializes the main 3D scene.
export const scene = new THREE.Scene();

// Initializes the perspective camera with a wide field of view, essential for a realistic 3D effect.
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 100); // Positions the camera to encompass the entire solar system model.

// Checks for and removes any existing canvas elements before initializing a new WebGLRenderer.
// This ensures that multiple canvases are not created on hot module reloads during development.
const existingCanvas = document.querySelector('canvas');
if (existingCanvas) {
    existingCanvas.remove();
}

// Initializes the WebGL renderer with anti-aliasing for smoother edges.
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight); // Sets the size of the renderer to fill the window.
document.body.appendChild(renderer.domElement); // Appends the renderer's canvas to the document body.

// Initializes OrbitControls, allowing the user to interact with the 3D scene using the mouse.
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 5; // Sets the minimum zoom distance to prevent the camera from getting too close.
controls.maxDistance = 500; // Sets the maximum zoom distance to prevent the camera from zooming too far out.

// Add lighting
// 1. Add a DirectionalLight to simulate sunlight
const sunLight = new THREE.DirectionalLight(0xffffff, 1); // White light with intensity 1
sunLight.position.set(100, 100, 100); // Position the light to simulate the sun's position
scene.add(sunLight);

//  add shadows for more realism
sunLight.castShadow = true;
renderer.shadowMap.enabled = true;

// 2. Add AmbientLight to soften shadows and illuminate dark areas
const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light with half intensity
scene.add(ambientLight);

// Calls the function to create planets and add them to the scene.
createPlanets(scene);

// Sets up the user interface controls for interaction with the simulation.
setupUI(controls, camera, planets);

/**
 * Defines the main animation loop for the simulation.
 * This loop is called on every frame update and is responsible for
 * rendering the scene and updating object positions.
 */
function animate() {
    requestAnimationFrame(animate); // Requests the next frame for continuous loop.
    updatePlanets(planets); // Updates the planets based on their defined motions.
    controls.update(); // Updates the camera controls based on user interaction.
    renderer.render(scene, camera); // Renders the updated scene.
}

// Starts the animation loop.
animate();

// Adds an event listener to handle window resizing, ensuring the simulation adjusts to fit the window.
window.addEventListener('resize', () => onWindowResize(camera, renderer));
