import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import 'three/examples/jsm/controls/OrbitControls';
import '../styles/ModelViewer.scss';

const ModelViewer = () => {
    useEffect(() => {
      // Three.js code here
    }, []);
  
    return <div id="model-container"></div>;
  };
  
  export default ModelViewer;