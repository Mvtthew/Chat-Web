// var get = async () => {
//     var response = await fetch(
//         'http://azurix.pl:8080/greeting',
//         {
//             method: 'GET',
//             mode: 'cors'
//         }
//     );
//     var myJson = await response.json(); //extract JSON from the http response
//     window.a = myJson;
//     draw(myJson);
// }
//
// function draw(myJson) {
//     document.querySelector("#api-res").innerText = myJson["id"]+" "+myJson["content"];
// }
//
// get();

// Scroll to the bottom of messages
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        $('.messages').scrollTop($('.messages')[0].scrollHeight);
    }
};