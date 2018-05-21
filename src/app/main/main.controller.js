(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,MqttClient) {

    var ip = "broker.hivemq.com";
    var port = "8000";
    // var port = "1883";
    var id = "test";

    MqttClient.init(ip, port, id);
    MqttClient.connect({onSuccess: successCallback});

    function successCallback() {
      MqttClient.subscribe('CoreElectronics/test');
      var message = new Paho.MQTT.Message("Hello davy");
      message.destinationName = "CoreElectronics/test";
      MqttClient.send(message);
    }

  }
})();
