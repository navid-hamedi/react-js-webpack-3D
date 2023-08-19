import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../assets/models/source/model.gltf';
import 'three/examples/jsm/controls/OrbitControls'; // Optional for camera controls
import '../styles/ModelViewer.scss';

const ModelViewer = () => {
  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    scene.background = new THREE.Color(0xeeeeee);

    const light = new THREE.PointLight( 0xffffff, 1, 100000 );
    light.position.set( 50, 50, 50 );
    light.castShadow = true;
    scene.add( light );

    camera.position.z = 1;

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

