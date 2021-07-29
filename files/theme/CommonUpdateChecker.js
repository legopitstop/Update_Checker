
/** 
 * Javascript file for both update-checker-generator.html and update-checker.html
*/

/* Files */
const BACKGROUND = './files/theme/json/options_background.json'
const VERSIONS = './files/theme/json/minecraft_versions.json'

$(document).ready(function () {
    backgroundThemeList();
    minecraftVersionList();
});

function backgroundThemeList() {
    $.getJSON(BACKGROUND, function (file) {
        $.each(file, function (i, option) {
            $('.theme-options').append('<option value="' + option.file + '">' + option.name + '</option>')
        })
    });
}

function minecraftVersionList() {
    $.getJSON(VERSIONS, function (file) {
        $.each(file, function (i, option) {
            $('.mcversions').append('<option value="' + option + '">' + option + '</option>')
        })
    });
}