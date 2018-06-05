import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
// import React3 from 'react-three-renderer';
import * as THREE from 'three'
import OrbitControls from '../util/OrbitControls.js';

let scene, camera, renderer, controls, mesh, line;
let loader = new THREE.ObjectLoader();
let textureLoader = new THREE.TextureLoader();
const WIDTH = window.innerWidth/ 1.4;
const HEIGHT = window.innerHeight/ 1.4;

class App extends Component {
  constructor(props){
    super(props);
    this.init = this.init.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    this.init();
    this.animate();
  }
  
  init() {
    scene = new  THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( WIDTH, HEIGHT);
    scene.background = new THREE.Color(0x754E46);
    document.getElementById('3d-rendering').appendChild( renderer.domElement );
    this.addCamera();
    this.addLight();
    this.addMaterial();
  }

  animate(){
    renderer.render(scene, camera);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  addMaterial(){
    loader.load( 'models/gun/test.json', function( geometry ) {
      let gun_masterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load( 'models/gun/sung2.jpg'),
        // shininess: 25
        specular: 0x111111,
        // map: textureLoader.load( 'models/leeper/Map-COL.jpg' ),
        // specularMap: textureLoader.load( 'models/leeper/Map-SPEC.jpg' ),
        // normalMap: textureLoader.load( 'models/leeper/Infinite-Level_02_Tangent_SmoothUV.jpg' ),
        shininess: 25
      });
      let coin_masterial = new THREE.MeshPhongMaterial({
        specular: 0x111111,
        map: textureLoader.load( 'models/gun/coin.jpg'),
        shininess: 25
        // specular: 0x111111,
        // map: textureLoader.load( 'models/leeper/Map-COL.jpg' ),
        // specularMap: textureLoader.load( 'models/leeper/Map-SPEC.jpg' ),
        // normalMap: textureLoader.load( 'models/leeper/Infinite-Level_02_Tangent_SmoothUV.jpg' ),
        // shininess: 25
      });
      geometry.getObjectByName('Coin').material = coin_masterial;
      geometry.getObjectByName('Gun').material = gun_masterial;
      geometry.getObjectByName('Coin').scale.set(1, 1, 1);
      geometry.getObjectByName('Gun').scale.set(1, 1, 1);
      scene.add(geometry);
      // let material = new THREE.MeshPhongMaterial( {
      //   specular: 0x111111,
      //   map: textureLoader.load( 'models/leeper/Map-COL.jpg' ),
      //   specularMap: textureLoader.load( 'models/leeper/Map-SPEC.jpg' ),
      //   normalMap: textureLoader.load( 'models/leeper/Infinite-Level_02_Tangent_SmoothUV.jpg' ),
      //   shininess: 25
      // } );
      // mesh = new THREE.Mesh( geometry, material );
      // mesh.scale.set( 10, 10, 10 );
      // let object = new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.75, transparent: true } )
      // let children = new THREE.Mesh(geometry, object);
      // scene.add(children)
    });
  }

  addCamera() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50
    camera.target = new THREE.Vector3();
    controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 50;
    controls.maxDistance = 200;
    controls.update();
    scene.add(camera);
  }

  addLight() {
    scene.add( new THREE.AmbientLight( 0x443333 ) );
    var light = new THREE.DirectionalLight( 0xffddcc, 1 );
    light.position.set( 1, 0.75, 0.5 );
    scene.add( light );

    var light = new THREE.DirectionalLight( 0xccccff, 1 );
    light.position.set( -1, 0.75, -0.5 );
    scene.add( light );
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
