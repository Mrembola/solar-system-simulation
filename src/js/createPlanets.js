/**
 * Module responsible for creating and adding planetary objects to scene.
 */

// Import the core Three.js library to access 3D graphics functionalities.
import * as THREE from 'three';

// Import the predefined data for each planet, including size, color, and motion parameters.
import { planetsData } from './planetsData';

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
        // Create a sphere geometry for the planet based on its size. The higher the segment count, the smoother the sphere.
        const geometry = new THREE.SphereGeometry(data.size, 32, 32);

        // Create a material for the planet's surface appearance using its specified color.
        const material = new THREE.MeshBasicMaterial({ color: data.color });

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
