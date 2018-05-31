import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import OrbitControls from '../util/OrbitControls'

let scene, camera, renderer, controls;
class App extends Component {
  constructor(props){
    super(props);
    this.init = this.init.bind(this)
    this.animate = this.animate.bind(this)
  }
  componentDidMount() {
    this.init()
    this.animate()
  }
  init() {
    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;
    scene = new  THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    document.getElementById('3d-rendering').appendChild( renderer.domElement );
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20000);
    camera.position.set(0,6,0);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    scene.add(camera);
  }

  animate() {
    // requestAnimationFrame("animate");
    renderer.render(scene, camera);
    controls.update();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id='3d-rendering'>
        </div>
      </div>
    );
  }
}

export default App;
