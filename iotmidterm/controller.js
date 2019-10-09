var client;

var btnPublish = $("#publish-btn")

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")


function TurnOn() {
    console.log("turn on")
    var d = new Date();
    client.publish("jessamae/device/status", "Turn On:" + d);
    var status = "The Device Is Currently Turned On"
    document.getElementById("message").innerHTML = status.toString();
    document.getElementById("btn-off").disabled = false;
    document.getElementById("btn-on").disabled = true;
}

function TurnOff() {
    var d = new Date();
    client.publish("jessamae/device/status", "Turn Off:" + d);
    var status = "The Device Is Currently Turned Off"
    document.getElementById("message").innerHTML = status.toString();
    document.getElementById("btn-on").disabled = false;
    document.getElementById("btn-off").disabled = true;
}