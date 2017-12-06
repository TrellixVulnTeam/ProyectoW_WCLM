const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//POST PROCESSING DE LA IMG DE PERFIL PARA REDUCIR SU TAMAÑO 200X200 
exports.postProcessImg = functions.database.ref('/users/{userId}/picURL').onWrite((event)=>{
    event.data.ref.parent.child('function').set('entre!');
    let url = event.data.val();

    var request = require('request').defaults({encoding: null});

        request.get(url, ()=>{
            event.data.ref.parent.child('step').set('readyToSize');

            var sharp = require('sharp');
            sharp(imageBuffer).resize(200,200);
        });
})