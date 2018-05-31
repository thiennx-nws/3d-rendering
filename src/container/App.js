import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
// import React3 from 'react-three-renderer';
import * as THREE from 'three'
import OrbitControls from '../util/OrbitControls.js';
let scene, camera, renderer, controls;
const WIDTH = window.innerWidth/2;
const HEIGHT = window.innerHeight/2;
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
    scene = new  THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( WIDTH, HEIGHT);
    scene.background = new THREE.Color( 0x242a34 );
    document.getElementById('3d-rendering').appendChild( renderer.domElement );
    this.addCamera();
    this.addMaterial();
  }

  addMaterial(){
    let material = new THREE.MeshBasicMaterial();
    let mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 200, 200, 200 ), material );
    debugger
    scene.add( mesh );
  }

  addCamera() {
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0,6,0);
    controls = new OrbitControls(camera, renderer.domElement);
    scene.add(camera);
  }

  animate() {
    // requestAnimationFrame("animate");
    debugger
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
