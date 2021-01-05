//Core
window.navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
        video.play();
    };
})
.catch( () => {
    console.log('You have give browser the permission to run Webcam and mic ;( ');
});