/** 
 * Javascript file just for update-checker-generator.html
*/

const BASEURL = 'https://legopitstop.github.io/Update_Checker/update-checker-generator.html'

$(document).ready(function () {
    /* Take uploaded file and convert to Base64 */
    generateURL()
});

//document.getElementById('uploadImage').addEventListener("change", readFile);
// var upload = document.getElementById('uploadImage')

function generateURL() {
    var jsonurl = document.querySelector('.updateJSONURL').value
    var mcversion = document.querySelector('.mcversion').value
    var modversion = document.querySelector('.modversion').value
    var theme = document.querySelector('.theme').value
    if (jsonurl != '') {
        var JSONURL = jsonurl
    } else {
        var JSONURL = 'https://example.com/datapack.json'
    };
    if (mcversion != '') {
        var McVersion = mcversion
    } else {
        var McVersion = '1.17'
    };
    if (modversion != '') {
        var ModVersion = modversion
    } else {
        var ModVersion = '1.0.0'
    };
    /* Optional background */
    enableElement('.theme')
    /* theme */
    if (theme != 'unset') {
        var Theme = '&theme=' + encodeURIComponent(theme)
    } else {
        var Theme = ''
    }
    var output = BASEURL + '?updateJSONURL=' + encodeURIComponent(JSONURL) + '&mcversion=' + encodeURIComponent(McVersion) + '&modversion=' + encodeURIComponent(ModVersion) + Theme
    document.querySelector('.output').value = output.replace(/\s/g, '%20');
}

function convertToBase64(selector) {
    var upload = document.querySelector(selector)
    if (upload.files && upload.files[0]) {
        var FR = new FileReader();
        FR.addEventListener("load", function (e) {
            var output = document.querySelector(".output")
            output.value = output.value + encodeURIComponent(e.target.result);
            console.log('base64: ' + e.target.result)
        });
        FR.readAsDataURL(upload.files[0]);
    }
}