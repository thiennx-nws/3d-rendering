import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
// import React3 from 'react-three-renderer';
import * as THREE from 'three'
import OrbitControls from '../util/OrbitControls.js';

let scene, camera, renderer, controls, mesh;
let loader = new THREE.JSONLoader();
let textureLoader = new THREE.TextureLoader();
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
    scene.background = new THREE.Color(0x754E46);
    document.getElementById('3d-rendering').appendChild( renderer.domElement );
    this.addCamera();
    this.addMaterial();
  }

  addMaterial(){
    loader.load( '/models/leeper/LeePerrySmith.json', function( geometry ) {
      let material = new THREE.MeshPhongMaterial( {
        specular: 0x111111,
        map: textureLoader.load( 'models/leeper/Map-COL.jpg' ),
        specularMap: textureLoader.load( 'models/leeper/Map-SPEC.jpg' ),
        normalMap: textureLoader.load( 'models/leeper/Infinite-Level_02_Tangent_SmoothUV.jpg' ),
        shininess: 25
      } );
      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );
      mesh.scale.set( 10, 10, 10 );
    } );
  }

  addCamera() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0,6,0);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    scene.add(camera);
  }

  animate() {
    renderer.render(scene, camera);
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
