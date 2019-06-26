import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as THREE from 'three';
import Bounce from 'react-reveal/Bounce';
import Pointer from './includes/head_pointers.js';

class MainBlockContent extends React.Component {
  render() {
    return <div className="center_block" id="mainCenter">
      <Bounce><h1 id="myName">Ihor Kaleniuk</h1></Bounce>
      <h2 className="mainBlockInfoMini">WEB</h2><h2 className="mainBlockInfoMini">DEVELOPER.</h2><h2 className="mainBlockInfoMini">TECHNOLOGY ENTHUSIAST.</h2>
      <div className="socialsLineMini">
        <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.vk}><FontAwesomeIcon icon={['fab', 'vk']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.insta}><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.fb}><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.in}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.git}><FontAwesomeIcon icon={['fab', 'github']} /></a></div></Bounce>
      </div>
    </div>
  }
}

class MainDesign extends React.Component {
  render(){
    return <main>
			<div className="introduction-block">
				<div className="scroller">
					<div className="mouse" id="mouse">
						<div className="scroll-wheel"></div>
					</div>
					<svg role="presentation" className="icn" width="20" height="20"></svg>
				</div>
			</div>
			<div id="particle-container">
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
			</div>
		</main>
  }
}

class MainBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: false};
  }

  componentDidMount () {
    this.timeoutId = setTimeout(function () {
        this.setState({show: true});
    }.bind(this), 2000);

      let camera, drawStars, fillLight, mesh, renderer, scene, canvasMethod, removeCanvas;
      camera = mesh = scene = renderer = fillLight = void 0;
      removeCanvas = () => {
        try{
          if(document.getElementById('cloud-overlay').getElementsByTagName('canvas')[0] !== undefined){
            document.getElementById('cloud-overlay').getElementsByTagName('canvas')[0].remove()
          }
        }catch(e){

        }
      }

      canvasMethod = () => {
        removeCanvas();
        let animate, base, baseMat, e, geometryBase, highTerran, highTerranMat, light, material, terran, terranGeom, terranHighGeom;
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        geometryBase = new THREE.SphereGeometry(400, 50, 56);
        terranGeom = new THREE.SphereGeometry(398, 30, 30);
        terranHighGeom = new THREE.SphereGeometry(390, 20, 20);
        baseMat = new THREE.MeshLambertMaterial({
          color: 0x76acda,
          shading: THREE.FlatShading });

        material = new THREE.MeshLambertMaterial({
          color: 0xb8b658,
          shading: THREE.FlatShading });

        highTerranMat = new THREE.MeshLambertMaterial({
          color: 0xe3c97f,
          shading: THREE.FlatShading });



        geometryBase.vertices.forEach(function (v) {
          return v[["x", "y", "z"][~~(Math.random() * 3)]] += Math.random() * 10;
        });

        [terranHighGeom.vertices, terranGeom.vertices].forEach(function (g) {
          return g.forEach(function (v) {
            return v[["x", "y", "z"][~~(Math.random() * 3)]] += Math.random() * 40;
          });
        });
        base = new THREE.Mesh(geometryBase, baseMat);
        terran = new THREE.Mesh(terranGeom, material);
        highTerran = new THREE.Mesh(terranHighGeom, highTerranMat);
        scene.add(base);
        scene.background = new THREE.Color( '#1b1d1e' );
        base.add(terran);
        base.add(highTerran);
        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(1, 1, 1);
        scene.add(light);
        fillLight = new THREE.AmbientLight(0x2e1527);
        scene.add(fillLight);
        try {
          renderer = new THREE.WebGLRenderer();
        } catch (error) {
          e = error;
          renderer = new THREE.CanvasRenderer();
          alert("come back in chrome or firefox! or enable webgl");
        }

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.setAttribute('id', "planet");
        document.getElementById('cloud-overlay').appendChild(renderer.domElement);

        animate = function () {
          base.rotation.y += 0.00125;
          requestAnimationFrame(animate);
          return renderer.render(scene, camera);
        };
        return animate();
      }

      window.onload = () => {
        canvasMethod();
      };


      window.addEventListener("resize", canvasMethod);

  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    return <div className={this.state.show ? "block mainBlock loaded" : "block mainBlock"}  id="yakor_main">
      <div id="cloud-overlay">
        <Pointer text="Earth" />
      </div>
      <MainDesign />
      <MainBlockContent socials={this.props.socials}/>
    < /div>
  }
}

export default MainBlock;
