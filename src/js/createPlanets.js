/**
 * Module responsible for creating and adding planetary objects to scene.
 */

// Import the core Three.js library to access 3D graphics functionalities.
import * as THREE from 'three';

// Import the predefined data for each planet, including size, color, and motion parameters.
import { planetsData } from './planetsData';
import earth from '../assets/jupiter.jpg'
import mars from '../assets/mars.jpg'
import Mercury from '../assets/mercury.jpg'
import Neptune from '../assets/neptune.jpg'
import Saturn from '../assets/saturn.jpg'
import Sun from '../assets/sun.jpg'
import Uranus from '../assets/uranus.jpg'
import Venus from '../assets/venus.jpg'

// Initialize an empty array to store the planet meshes for easy access and manipulation elsewhere in the project.
export const planets = [];

/**
 * Creates planetary objects based on the planetsData configuration and adds them to the provided scene.
 * Each planet is represented as a sphere mesh with a customized appearance and attached data properties.
 *
 * parameter scene - The Three.js scene to which the planets will be added. This is where
 *        the visual representation of the solar system is constructed and displayed.
 */
export function createPlanets(scene) {
    // Iterate over each entry in the planetsData array to create corresponding Three.js meshes.
    planetsData.forEach(data => {
        const loader = new THREE.TextureLoader();
        // Load the texture for the planet
        debugger
        const texture =  loader.load(`../assets/${data.name.toLowerCase()}.jpg`);

        // Create a sphere geometry for the planet based on its size. The higher the segment count, the smoother the sphere.
        const geometry = new THREE.SphereGeometry(data.size, 32, 32);

        // Use MeshStandardMaterial to support both textures and lighting
        const material = new THREE.MeshStandardMaterial({ map: texture });

        // Combine the geometry and material to create a mesh representing the planet.
        const planet = new THREE.Mesh(geometry, material);

        // Attach custom data from planetsData to the mesh for easy access during updates.
        planet.userData = { ...data };

        // Add the newly created planet mesh to the scene for rendering.
        scene.add(planet);

        // Also add the planet mesh to the global planets array for future reference and manipulation.
        planets.push(planet);
    });
}
