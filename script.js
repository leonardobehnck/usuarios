let usuarios = []

function criarUsuario() {
  let usuarioNome = document.getElementById('usuarioNome').value
  let usuarioCor = document.getElementById('usuarioCor').value
  let u = { usuarioNome: usuarioNome, usuarioCor: usuarioCor }

  usuarios.push(u)
  apagar()
  exibeUsuarios()
}

function exibeUsuarios() {
  document.getElementById('usuariosAtivos').innerHTML = ""
  for (let i = 0; i < usuarios.length; i++) {
    document.getElementById('usuariosAtivos').innerHTML += `<span id="usuarioCor" style="color:${usuarios[i].usuarioCor};"><button id="remover" onclick="removeUsuario(${i});"> - </button> ${usuarios[i].usuarioNome}</span>`
  }
  listaUsuarios()
}

function listaUsuarios() {
  document.getElementById('listaUsuarios').innerHTML = ""
  for (let i = 0; i < usuarios.length; i++) {
    document.getElementById('listaUsuarios').innerHTML += `<option style="color:${usuarios[i].usuarioCor};">${usuarios[i].usuarioNome}</option>`
  }
}

function exibeMensagemNaTela() {
  let nomeDoUsuarioAtivo = document.getElementById('listaUsuarios').value
  let mensagemUsuario = document.getElementById('mensagemUsuario').value
  for (let i = 0; i < usuarios.length; i++) {
    if (nomeDoUsuarioAtivo == usuarios[i].usuarioNome) {
      let usuarioNome = usuarios[i].usuarioNome
      let usuarioCor = usuarios[i].usuarioCor

      document.getElementById('mensagemNaTela').innerHTML = `
      <h2>Mensagem recebida!</h2><p id="mensagemEnviada" style="color:${usuarioCor};">${mensagemUsuario}</p><p id="enviadoPor">Enviado por: <strong>${usuarioNome}</strong></p>`
    }
  }
}

function removeUsuario(i) {
  usuarios.splice(i, 1)
  listaUsuarios()
  exibeUsuarios()
}

function apagar() {
  document.getElementById('usuarioNome').value = ""
  document.getElementById('usuarioCor').value = ""
}