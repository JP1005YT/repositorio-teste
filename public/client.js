let peerConnection;
let localStream;

async function startCall() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        localStream = stream;
        document.getElementById('remoteAudio').srcObject = stream;

        const configuration = {
            iceServers: [
                { urls: 'stun:stun.stunprotocol.org' }
            ]
        };

        peerConnection = new RTCPeerConnection(configuration);
        peerConnection.addTrack(stream.getAudioTracks()[0], stream);

        peerConnection.ontrack = function(event) {
            document.getElementById('remoteAudio').srcObject = event.streams[0];
        };

        console.log('Call started');
    } catch (error) {
        console.error('Error starting call:', error);
    }
}

function endCall() {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }

    console.log('Call ended');
}
