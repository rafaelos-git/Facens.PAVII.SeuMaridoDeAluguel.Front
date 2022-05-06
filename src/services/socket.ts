import socketio from 'socket.io-client'

const socket = socketio('http://192.168.0.113:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction: any){
  socket.on('new-dev', subscribeFunction)
}

function connect(latitude: any, longitude: any, skills: any){
  socket.io.opts.query = {
    latitude,
    longitude,
    skills
  }
  
  socket.connect();

}

function disconnect() {
  //@ts-ignore
  if (socket.connect){
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
}