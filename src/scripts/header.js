import * as THREE from 'three';


(function () {
  var camera, drawStars, fillLight, mesh, renderer, scene;

  camera = mesh = scene = renderer = fillLight = void 0;

  drawStars = function () {
    var canvas, ctx, i, j, sizeRandom;
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    canvas.setAttribute('id', "stars");
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "#1b1d1e";
    for (i = j = 0; j <= 200; i = ++j) {
      ctx.beginPath();
      sizeRandom = Math.random() * 2;
      ctx.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, sizeRandom, 0, 2 * Math.PI, 0);
      ctx.fill();
    }
    return document.getElementById('cloud-overlay').appendChild(canvas);
  };

  window.onload = function () {
    var animate, base, baseMat, e, geometryBase, highTerran, highTerranMat, light, material, terran, terranGeom, terranHighGeom;
    drawStars();
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
    document.getElementById('cloud-overlay').appendChild(renderer.domElement);

    animate = function () {
      base.rotation.y += 0.00125;
      requestAnimationFrame(animate);
      return renderer.render(scene, camera);
    };
    return animate();
  };

}).call(this);



// export default webGLAnimation;
