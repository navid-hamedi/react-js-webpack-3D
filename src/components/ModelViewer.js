import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../assets/models/source/model.gltf';
import 'three/examples/jsm/controls/OrbitControls'; // Optional for camera controls
import '../styles/ModelViewer.scss'; // Optional styles

const ModelViewer = () => {
  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    scene.background = new THREE.Color(0xff00ff);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    
    camera.position.z = 5;

    /* CUBE */ /* 
    scene.add( cube );
    function animate() {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
	    cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    }
    animate();
    */

    /* GLTDLOADER */ /* */
    const loader = new GLTFLoader();
    loader.load( model, function ( gltf ) {

      scene.add( gltf.scene );
      function animate() {
        requestAnimationFrame( animate );
        scene.rotation.x += 0.01;
	      scene.rotation.y += 0.01;
        renderer.render( scene, camera );
      }

      animate();
    
    }, undefined, function ( error ) {

      console.error( error );

    } );
    
  }, []);

  return <div id="model-container"></div>;
};

export default ModelViewer;

