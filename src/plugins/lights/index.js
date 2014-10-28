function lights(name, deps) {
  console.log('This is where plugin code would execute in the node process.');

  deps.io.sockets.on('connection', function (socket) {
    socket.on('lights.set_external_lights_power', function (value) {
      deps.rov.send('ligte(' + value*100 + ')');
      console.log('ligte(' + value*100 + ')');
    });
  }
}
module.exports = lights;
