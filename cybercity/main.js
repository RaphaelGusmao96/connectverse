import * as THREE from 'three';
import { GLTFLoader } from '/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();


// carrega a skybox
const urls = [
  'public/background/left.png',
  'public/background/right.png',
  'public/background/up.png',
  'public/background/down.png',
  'public/background/front.png',
  'public/background/back.png'
];

const texture = new THREE.CubeTextureLoader().load(urls);
scene.background = texture;



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

// carregando o predio 1

loader.load('public/cyberpunk_skyscraper/scene.gltf', function ( gltf ) {

    gltf.scene.scale.set(0.5, 0.55, 0.5); // ajusta a escala do modelo
    gltf.scene.position.set(-3.1, -0.3, 3.4); // ajusta a posição do modelo
    scene.add( gltf.scene );


    // ajusta as propriedades de material do modelo
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 0.1; // torna o material mais reflexivo
        child.material.roughness = 0.1; 
        
      }
    });

}, undefined, function ( error ) {

    console.error( error );

} );

// carrega o segundo prédio
const loader2 = new GLTFLoader();
loader2.load('public/lowpoly_lowres_buildings/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.4, 0.65, 0.4); // ajusta a escala do modelo
  gltf.scene.position.set(-3.2, -0.2, -1.9); // ajusta a posição do modelo
  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.1; // torna o material mais reflexivo
      child.material.roughness = 0.1; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o terceiro prédio
const loader3 = new GLTFLoader();
loader3.load('public/hosnian_prime_skyscraper__star_wars/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.6, 0.8, 0.6); // ajusta a escala do modelo
  gltf.scene.position.set(-1.5, -0.2, 3.2); // ajusta a posição do modelo
  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.1; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o pqinel de arte
const loader4 = new GLTFLoader();
loader4.load('public/street_art_wall_-_camden_-_london/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.1, 0.2, 0.1); // ajusta a escala do modelo
  gltf.scene.position.set(3, -0.2, -4.9); // ajusta a posição do modelo
  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.1; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega a estaçao punk
const loader5 = new GLTFLoader();
loader5.load('public/cyberpunk_station/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.19, 0.5, 0.26); // ajusta a escala do modelo
  gltf.scene.position.set(-3.45, -0.28, -2.8); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus
    gltf.scene.rotateY(Math.PI / 2);
  
  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.9; // torna o material mais reflexivo
      child.material.roughness = 0.1; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o predio 4
const loader6 = new GLTFLoader();
loader6.load('public/cyberpunk_skyscraper (1)/scene.gltf', function (gltf) {
  gltf.scene.scale.set(1.3, 0.75, 0.9); // ajusta a escala do modelo
  gltf.scene.position.set(2, -0.6, 3.2); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus
    gltf.scene.rotateY(Math.PI / 1);
  
  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.2; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// cria um objeto para representar o carro 1
const carObject1 = new THREE.Object3D();

// carrega o carro1
const loader7 = new GLTFLoader();
loader7.load('public/hover_car/scene.gltf', function (gltf) {
  const carModel1 = gltf.scene.clone(); // cria uma cópia do modelo do carro
  carModel1.scale.set(0.03, 0.03, 0.03); // ajusta a escala do modelo do carro
  carModel1.position.set(2, 0, 0); // define a posição inicial do carro

  // muda a posição do carro para 90% horizontalmente
  carModel1.rotation.y = Math.PI * 0.5;
  carModel1.position.x = -2.55;
  
  carObject1.add(carModel1); // adiciona o modelo do carro ao objeto do carro

  // ajusta as propriedades de material do modelo
  carModel1.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.6; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// define a função de animação do carro 1
function animateCar1() {
  // faz o carro se mover para a frente
  carObject1.position.z -= 0.04;

  // verifica se o carro atingiu o final do chão
  if (carObject1.position.z < -4.5) {
    // reinicia a posição do carro
    carObject1.position.z = 4.5;
  }
}

// adiciona o objeto do carro 1 na cena
scene.add(carObject1);

// cria um objeto para representar o carro
const carObject = new THREE.Object3D();

// carrega o modelo do carro voador
const loader8 = new GLTFLoader();
loader8.load('public/cyberpunk_car/scene.gltf', function (gltf) {
  const carModel = gltf.scene.clone(); // cria uma cópia do modelo do carro
  carModel.scale.set(0.4, 0.5, 0.6); // ajusta a escala do modelo do carro
  carModel.position.set(3.5, 2.3, -0.8); // define a posição inicial do carro
  
  carObject.add(carModel); // adiciona o modelo do carro ao objeto do carro

  // ajusta as propriedades de material do modelo
  carModel.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.6; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// define a função de animação do carro
function animateCar() {
  // faz o carro se mover para a frente
  carObject.position.x -= 0.04;

  // verifica se o carro atingiu o final do chão
  if (carObject.position.x < -8.45) {
    // reinicia a posição do carro
    carObject.position.x = 8.45;
  }
}

// adiciona o objeto do carro na cena
scene.add(carObject);

// carrega o carro3
const loader9 = new GLTFLoader();
loader9.load('public/beetle_toy_car/scene.gltf', function (gltf) {
  gltf.scene.scale.set(3, 4, 5); // ajusta a escala do modelo
  gltf.scene.position.set(2.5, 0.3, -2.6); // ajusta a posição do modelo
  
  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.6; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo bar
const loader10 = new GLTFLoader();
loader10.load('public/cyberpunk_city/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.1, 0.15, 0.16); // ajusta a escala do modelo
  gltf.scene.position.set(-0.8, -0.2, -3.4); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    gltf.scene.rotation.y = Math.PI/2;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.8; // torna o material mais reflexivo
      child.material.roughness = 0.5; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo caçamba
const loader11 = new GLTFLoader();
loader11.load('public/dumpster_cyberpunk_game_assets/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.2, 0.3, 0.3); // ajusta a escala do modelo
  gltf.scene.position.set(-0.55, -0.2, -3.4); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    //gltf.scene.rotation.y = Math.PI/2;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.6; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo caçamba2
const loader12 = new GLTFLoader();
loader12.load('public/dumpster_cyberpunk_game_assets2/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.2, 0.3, 0.3); // ajusta a escala do modelo
  gltf.scene.position.set(-0.1, -0.2, -3.4); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    //gltf.scene.rotation.y = Math.PI/2;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5; // torna o material mais reflexivo
      child.material.roughness = 0.6; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo lojinha
const loader13 = new GLTFLoader();
loader13.load('public/cyberpunk_voxel_building/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.01, 0.01, 0.01); // ajusta a escala do modelo
  gltf.scene.position.set(3.4, -0.283, -2); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    //gltf.scene.rotation.y = Math.PI/2;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1.5; // torna o material mais reflexivo
      child.material.roughness = 0.6; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// cria um objeto para representar o carro
const hpObject = new THREE.Object3D();

// carrega o modelo helicoptero
const loader15 = new GLTFLoader();
loader15.load('public/bell206_helicopter/scene.gltf', function (gltf) {
  const hpModel = gltf.scene.clone(); // cria uma cópia do modelo do helicoptero
  hpModel.scale.set(0.5, 0.5, 0.4); // ajusta a escala do modelo
  hpModel.position.set(-2.4, 5.8, 2); // ajusta a posição do modelo


  hpObject.add(hpModel); // adiciona o modelo do carro ao objeto do carro
  
  // ajusta as propriedades de material do modelo
  hpModel.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1; // torna o material mais reflexivo
      child.material.roughness = 0.2; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// define a função de animação do helicoptero
function animateHp() {
  // faz o carro se mover para a frente
  hpObject.position.x -= 0.02;

  // verifica se o helicoptero atingiu o final do chão
  if (hpObject.position.x < -4) {
    // reinicia a posição do carro
    hpObject.position.x = 4;
  }
}

// adiciona o objeto do helicoptero na cena
scene.add(hpObject);


// carrega o modelo praça
const loader16 = new GLTFLoader();
loader16.load('public/virtual_stage_cyberpunk/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.038, 0.07, 0.035); // ajusta a escala do modelo
  gltf.scene.position.set(-2.3, 1.2, 1.4); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    gltf.scene.rotation.y = Math.PI/1;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.2; // torna o material mais reflexivo
      child.material.roughness = 0.4; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo outdor
const loader14 = new GLTFLoader();
loader14.load('public/bmg_-_outdoor/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.005, 0.007, 0.005); // ajusta a escala do modelo
  gltf.scene.position.set(6, -0.2, 1.5); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    gltf.scene.rotation.y = Math.PI/2;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.1; // torna o material mais reflexivo
      child.material.roughness = 0.1; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo outdor2
const loader17 = new GLTFLoader();
loader17.load('public/outdoor/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.045, 0.05, 0.04); // ajusta a escala do modelo
  gltf.scene.position.set(3.5, -1.4, -2.25); // ajusta a posição do modelo
  
    // rotaciona o modelo em 90 graus em torno do eixo y
    gltf.scene.rotation.y = Math.PI/1;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = -0.5; // torna o material mais reflexivo
      child.material.roughness = -0.5; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});

// carrega o modelo moto1
const loader18 = new GLTFLoader();
loader18.load('public/xyz_homework_detailing_brennan_apollo/scene.gltf', function (gltf) {
  gltf.scene.scale.set(0.015, 0.015, 0.015); // ajusta a escala do modelo
  gltf.scene.position.set(3.05, -0.1, -2.5); // ajusta a posição do modelo
  
  // rotaciona o modelo em 90 graus em torno do eixo y
  gltf.scene.rotation.y = Math.PI/2;

  scene.add(gltf.scene);

  // ajusta as propriedades de material do modelo
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.3; // torna o material mais reflexivo
      child.material.roughness = 0.5; // torna o material menos áspero
    }
  });
}, undefined, function (error) {
  console.error(error);
});


camera.position.set(0, 2, 8.5); // ajustar a posição da câmera para que o chão seja visível

const ambientLight = new THREE.AmbientLight(0x404040, 2); // aumenta a intensidade para 0.5
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 4.5);
light.position.set(0, 1, 0);
light.target.position.set(0, 0, 0);
light.castShadow = true;
light.shadow.camera.top = 10;
light.shadow.camera.bottom = -10;
light.shadow.camera.left = -10;
light.shadow.camera.right = 10;
scene.add(light);


// Criar uma luz
const luz5 = new THREE.PointLight(0xADD8E6, 0.1, 20);
luz5.position.set(3.5, -1.3, 2);
scene.add(luz5);

// Criar uma luz rosa
const luz6 = new THREE.PointLight(0xFFC0CB, 0.2, 30);
luz6.position.set(-3.1, -0.3, -10);
scene.add(luz6);



// Criar uma luz
const luz2 = new THREE.PointLight(0xc4c4c4, 1, 100);
luz2.position.set(500, 100, 0);
scene.add(luz2);

// Criar uma luz
const luz3 = new THREE.PointLight(0xc4c4c4, 1, 100);
luz3.position.set(0, 100, -500);
scene.add(luz3);

// Criar uma luz
const luz4 = new THREE.PointLight(0xc4c4c4, 1, 100);
luz4.position.set(-500, 300, 0);
scene.add(luz4);

// cria uma luz rosa
//const pinkLight = new THREE.PointLight(0xff00ff, 0.2, 100);
//pinkLight.position.set(0, 20, 2);
//scene.add(pinkLight);


// Criar o chão
const groundGeometry = new THREE.PlaneGeometry(8, 8, 25, 25);
const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load('public/asfalto.jpg');
const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);

ground.position.y = -0.25; // metade da altura do plano é 0.5, e multiplicamos por -0.5 para mover o plano para cima
ground.rotateX(-Math.PI / 2); // girar o chão em torno do eixo x em -90 graus
ground.scale.set(1, 1, 1); // aumentar a escala do chão
scene.add(ground);

function animate() {
	requestAnimationFrame( animate );

  // atualiza a animação do carro
  animateCar();
  // atualiza a animação do segundo carro
  animateCar1();

  animateHp();

  scene.position.set(0, -2.2, 0);
    //scene.rotation.y += 0.003;
  controls.update(); // isso vai atualizar a posição e o zoom da câmera com base na interação do usuário
	renderer.render( scene, camera );
}

animate();