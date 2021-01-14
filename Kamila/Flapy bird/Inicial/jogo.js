console.log('[KamTec] Flappy Bird')

const sprites = new Image()
sprites.src = './sprites.png'

const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')

// Background
const background = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.drawImage(
      sprites,
      background.spriteX, background.spriteY,
      background.largura, background.altura,
      background.x, background.y,
      background.largura, background.altura,
    );

    contexto.drawImage(
      sprites,
      background.spriteX, background.spriteY,
      background.largura, background.altura,
      (background.x + background.largura), background.y,
      background.largura, background.altura,
    );

    
  }
}

//Chão
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.fillStyle = '#70c5ce',
    contexto.fillRect(0, 0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura,
    )

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x + chao.largura), chao.y,
      chao.largura, chao.altura,
    )
  }
}

//Flappy Bird
const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  velocidade: 0,
  gravidade: 0.25,
  atualiza() {
    flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade,
    flappyBird.y = flappyBird.y + flappyBird.velocidade
  },
  desenha(){
    contexto.drawImage(
      sprites, //Image
      flappyBird.spriteX, flappyBird.spriteY, //Sprite X e Sprite Y
      flappyBird.largura, flappyBird.altura, //Tamanho de recorte na Sprite
      flappyBird.x, flappyBird.y, //Como vamos desenhar no canvas
      flappyBird.largura, flappyBird.altura //Tamanho dentro do canvas
    )
  }
}

function loop() {
  flappyBird.atualiza()
  background.desenha(loop)
  chao.desenha(loop)
  flappyBird.desenha(loop)

  

  requestAnimationFrame(loop)
}

loop()