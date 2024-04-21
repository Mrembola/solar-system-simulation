/**
 * Handles the resizing of the browser window to ensure the Three.js scene is correctly displayed.
 * This function should be called whenever a window resize event is detected.
 *
 * parameter camera - camera used in the scene.
 * parameter renderer - The renderer used to display the scene.
 */

export function onWindowResize(camera, renderer) {
    // Update the camera to match the new window dimensions
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // Adjust the renderer size to fill the browser window
    renderer.setSize(window.innerWidth, window.innerHeight);
}
