/** 
 * Javascript file just for update-checker.html
*/
// https://legopitstop.github.io/Update_Checker/examples/update.json
// https://mcforge.readthedocs.io/en/latest/gettingstarted/autoupdate/
var updateCheckerVersion = '1.0.0'
/*
* https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https://legopitstop.github.io/Update_Checker/assets/file/update.json&mcversion=1.17&modversion=1.6.0&theme=orange_concrete
* updateJSONURL - The url to get the latest up-to-date JSON
* modversion - The current installed version to compare to.
* mcversion - The minecraft version to grab
* theme - Choose from one of the preset background images.
*/
/* Files */
const PREMIUM = '/Update_Checker/files/theme/json/premium.json'

$(document).ready(function () {
    var urlString = location.search;
    var url = parseURLParams(urlString)
    /* set status as FAILED */
    status('FAILED', null, 'json file is wrong.')
    /* Check premium urls */
    premiumURL(url)
    /* Theme */
    changeTheme('.theme', 'PRESET')
    if (url.theme != undefined) {
        changeTheme(url.theme[0], 'PRESETURL')
    }

    if (url != undefined) {
        var updateJSONURL = url.updateJSONURL[0]
        var mcversion = url.mcversion[0]
        var modversion = url.modversion[0]
    } else {
        /* if file is not there send FAILED status */
        status('FAILED')
        alert('Missing or invalid update json url')
        var updateJSONURL = ''
        var mcversion = ''
        var modversion = ''
    };
    packUpdateChecker(updateJSONURL, mcversion, modversion);
});

/**
 * Apply diffrent customizeation if the LINK is premium.
 * @param {string} url The current JSON url to compare to!
*/
function premiumURL(url) {
    $.getJSON(PREMIUM, function (array) {
        /* Is Premium */
        if (array.indexOf(url.updateJSONURL[0]) > -1) {
            console.log('premiumURL: true')
            /* Premium Features load*/
            $.getJSON(url.updateJSONURL, function (json) {
                var description = json['premium:description']
                var style = json['premium:style']
                if (json.premium_badge != false) {
                    document.querySelector('.premium-container').innerHTML = '<img onclick="premiumMenu(true)" class="premium-icon" onmouseover="this.src=\'/Update_Checker/files/theme/images/premium_hover.png\';" onmouseout="this.src=\'/Update_Checker/files/theme/images/premium.png\';" src="/Update_Checker/files/theme/images/premium.png"/>'
                }
                /* description */
                if (description != undefined) {
                    /* Title */
                    if (description.title != undefined) { document.querySelector('.pageTitle').innerHTML = description.title + ' | Update Checker' }
                    /* Favicon */
                    if (description.favicon != undefined) {
                        if (typeof description.favicon == 'object') {
                            var favicon = description.favicon
                            if (favicon.type == 'preset') {
                                changeFavicon(favicon.value, 'PRESETURL')
                            } else {
                                if (favicon.type == 'url') {
                                    changeFavicon(favicon.value, 'CUSTOM')
                                } else {
                                    if (favicon.type == 'base64') {
                                        changeFavicon(favicon.value, 'CUSTOM')
                                    } else {
                                        sendError('Invalid theme type, expected "preset", "url", or "base64" but got "' + favicon.type + '"')
                                    }
                                }
                            }
                        } else {
                            changeFavicon(description.favicon, 'PRESETURL')
                        }
                    }
                    /* Theme */
                    if (description.theme != undefined) {
                        if (typeof description.theme == 'object') {
                            var theme = description.theme
                            if (theme.type == 'preset') {
                                changeTheme(theme.value, 'PRESETURL')
                            } else {
                                if (theme.type == 'url') {
                                    changeTheme(theme.value, 'CUSTOM')
                                } else {
                                    if (theme.type == 'base64') {
                                        changeTheme(theme.value, 'CUSTOM')
                                    } else {
                                        if (theme.type == 'animated') {
                                            changeTheme(theme.value, 'CUSTOM')
                                            if (theme.animation.type == 'scroll') {
                                                var style = document.documentElement.style
                                                if (theme.animation.speed != undefined) { var Speed = theme.animation.speed } else { var Speed = '40' }
                                                if (theme.animation.resize == false) { style.setProperty('--background-size', 'unset') }
                                                if (theme.animation.repeat == false) { style.setProperty('--background-repeat', 'no-repeat') }
                                                style.setProperty('--background-animation', 'scroll ' + Speed + 's linear infinite')
                                                /* direction */
                                                var direction = theme.animation.direction
                                                if (direction != undefined) {
                                                    if (direction == 'left' || direction == '<') { style.setProperty('--background-directionFrom', '100% 0'); style.setProperty('--background-directionTo', '0 0') }
                                                    if (direction == 'up' || direction == '^') { style.setProperty('--background-directionFrom', '0 100%'); style.setProperty('--background-directionTo', '0 0') }
                                                    if (direction == 'down' || direction == 'v') { style.setProperty('--background-directionFrom', '0 0'); style.setProperty('--background-directionTo', '0 100%') }
                                                    if (direction == 'up-left' || direction == 'left-up') { style.setProperty('--background-directionFrom', '100% 100%'); style.setProperty('--background-directionTo', '0 0') }
                                                    if (direction == 'up-right' || direction == 'right-up') { style.setProperty('--background-directionFrom', '0 100%'); style.setProperty('--background-directionTo', '100% 0') }
                                                    if (direction == 'down-left' || direction == 'left-down') { style.setProperty('--background-directionFrom', '100% 0'); style.setProperty('--background-directionTo', '0 100%') }
                                                    if (direction == 'down-right' || direction == 'right-down') { style.setProperty('--background-directionFrom', '0 0'); style.setProperty('--background-directionTo', '100% 100%') }
                                                }
                                            } else {
                                                sendError('Invalid animation type, expected "scroll" but got "' + theme.animation.type + '"')
                                            }

                                        } else {
                                            sendError('Invalid theme type, expected "preset", "url", or "base64" but got "' + theme.type + '"')
                                        }
                                    }
                                }
                            }

                        } else {
                            changeTheme(description.theme, 'PRESETURL')
                        }
                    }
                }
                /* style */
                if (style != undefined) {
                    /* Base */
                    if (style.color != undefined) { document.documentElement.style.setProperty('--color', style.color) }
                    if (style.background_color != undefined) { document.documentElement.style.setProperty('--background-color', style.background_color) }
                    if (style.border_color != undefined) { document.documentElement.style.setProperty('--border-color', style.border_color) }
                    if (style.border_radius != undefined) { document.documentElement.style.setProperty('--border-radius', style.border_radius + 'px') }
                    /* Button */
                    if (style.button.color != undefined) { document.documentElement.style.setProperty('--button-color', style.button.color) }
                    if (style.button.background_color != undefined) { document.documentElement.style.setProperty('--button-background-color', style.button.background_color) }
                    if (style.button.border_radius != undefined) { document.documentElement.style.setProperty('--button-border-radius', style.button.border_radius + 'px') }
                    if (style.button.hoverEvent.hover_color != undefined) { document.documentElement.style.setProperty('--buttonHover-color', style.button.hoverEvent.hover_color) }
                    if (style.button.hoverEvent.color != undefined) { document.documentElement.style.setProperty('--buttonHover-color', style.button.hoverEvent.color) }
                    if (style.button.hoverEvent.background_color != undefined) { document.documentElement.style.setProperty('--buttonHover-background-color', style.button.hoverEvent.background_color) }
                    if (style.button.hoverEvent.border_radius != undefined) { document.documentElement.style.setProperty('--buttonHover-border-radius', style.button.hoverEvent.border_radius + 'px') }
                    /* Scrollbar */
                    if (style.scrollbar.slider.background_color != undefined) { document.documentElement.style.setProperty('--scroll-background-color', style.scrollbar.slider.background_color) }
                    if (style.scrollbar.slider.border_color != undefined) { document.documentElement.style.setProperty('--scroll-color', style.scrollbar.slider.border_color) }
                    if (style.scrollbar.slider.border_radius != undefined) { document.documentElement.style.setProperty('--scroll-border-radius', style.scrollbar.slider.border_radius + 'px') }
                    if (style.scrollbar.slider.hoverEvent.background_color != undefined) { document.documentElement.style.setProperty('--scrollHover-background-color', style.scrollbar.slider.hoverEvent.background_color) }
                    if (style.scrollbar.slider.hoverEvent.border_color != undefined) { document.documentElement.style.setProperty('--scrollHover-color', style.scrollbar.slider.hoverEvent.border_color) }
                    if (style.scrollbar.slider.hoverEvent.border_radius != undefined) { document.documentElement.style.setProperty('--scrollHover-border-radius', style.scrollbar.slider.hoverEvent.border_radius + 'px') }
                    if (style.scrollbar.track.background_color != undefined) { document.documentElement.style.setProperty('--scrollTrack-background-color', style.scrollbar.track.background_color) }
                    if (style.scrollbar.track.border_color != undefined) { document.documentElement.style.setProperty('--scrollTrack-color', style.scrollbar.track.border_color) }
                    if (style.scrollbar.track.border_radius != undefined) { document.documentElement.style.setProperty('--scrollTrack-border-radius', style.scrollbar.track.border_radius + 'px') }
                    if (style.scrollbar.track.hoverEvent.background_color != undefined) { document.documentElement.style.setProperty('--scrollTrackHover-background-color', style.scrollbar.track.hoverEvent.background_color) }
                    if (style.scrollbar.track.hoverEvent.border_color != undefined) { document.documentElement.style.setProperty('--scrollTrackHover-color', style.scrollbar.track.hoverEvent.border_color) }
                    if (style.scrollbar.track.hoverEvent.border_radius != undefined) { document.documentElement.style.setProperty('--scrollTrackHover-border-radius', style.scrollbar.track.hoverEvent.border_radius + 'px') }
                }
            })
        } else {
            /* Not premium */
            console.log('premiumURL: false')
            document.querySelector('.premium-container').innerHTML = '<img onclick="premiumMenu(false)" onmouseover="this.src=\'/Update_Checker/files/theme/images/regular_hover.png\';" onmouseout="this.src=\'/Update_Checker/files/theme/images/regular.png\';" class="premium-icon" src="/Update_Checker/files/theme/images/regular.png"/>'
            $.getJSON(url.updateJSONURL, function (json) {
                if (json['premium:description'] != undefined) {
                    console.log('To use this feature consider becoming a supporter!')
                }
                if (json['premium:style'] != undefined) {
                    console.log('To use this feature consider becoming a supporter!')
                }
            })
        }
    });
}

/**
 * Compares the current version from the version inside the JSON.
 * @example packUpdateChecker('https://example.com/data.json','1.17.1','1.0.0')
 * @param {string} file The JSON url to get the version data from.
 * @param {string} mcversion The installed Minecraft Version
 * @param {string} modversion The installed Minecraft Mod Version
 * @returns Returns the status
*/
function packUpdateChecker(file, mcversion, modversion) {
    $.getJSON(file, function (json) {
        /* Other */
        var versionRecommended = json.promos[mcversion + '-recommended']
        var versionLatest = json.promos[mcversion + '-latest']
        document.querySelector('.promos').innerHTML = '' // clear data
        console.log('Loaded JSON: \n' + JSON.stringify(json, null, 4))
        if (file != undefined) {
            /* apply data to page */
            if (json.promos != undefined) {
                console.log('data:')
                if (versionRecommended != undefined) {
                    $('.promos').append('<p title="Recommended version that is marked as stable." >recommended: <code>' + versionRecommended + '</code></p>')
                    console.log(' recommended: ' + versionRecommended)
                }
                if (versionLatest != undefined) {
                    $('.promos').append('<p title="Latest version that is marked as unstable." >latest: <code>' + versionLatest + '</code></p>')
                    console.log(' latest: ' + versionLatest)
                }
            }
            /* check versions */
            var homePage = json.homepage
            if (versionRecommended != undefined) {
                if (versionRecommended <= modversion) {
                    status('UP_TO_DATE', homePage)
                } else {
                    status('OUTDATED', homePage)
                }
            } else {
                status('FAILED', null, 'Could not find Minecraft version "' + versionRecommended + '" in JSON.')
            }
            /* Changelog builder */
            if (json[mcversion][versionRecommended] != undefined) {
                var changes = customEncoder(json[mcversion][versionRecommended], mcversion, modversion, versionRecommended, versionLatest, homePage, json)
                document.querySelector('.changelog-title').innerHTML = versionRecommended + ' Changelog:'
                $('.changelog').append(changes)
            };
        } else {
            status('FAILED')
        }
    });
}

/**
 * Sets the pack status to the class 'status'
 * @example
 * status('PENDING','https://example.com','Something went wrong!')
 * @param {string} status The status of the Update Checker.
 * @param {string} [href] The link for the button
 * @param {string} [reason] Message to send in console
 * @returns Display the status to class 'status' 
*/
function status(status, href, reason) {
    /* Holds all the options for each status */
    var options = {
        'UP_TO_DATE': {
            'color': 'lime',
            'help': 'The current version is equal to or newer than the latest stable version.',
            'icon': '🟢'
        },
        'BETA': {
            'color': 'yellow',
            'help': 'This version is marked as unstable.',
            'icon': '🟡',
            'button': true,
            'changelog': true
        },
        'PENDING': {
            'color': 'orange',
            'help': 'The status requested has not finished yet, so you should try again in a little bit.',
            'icon': '🟠'
        },
        'null': {
            'color': 'red',
            'icon': '🔴',
            'help': 'Something isnt working right.'
        },
        'FAILED': {
            'color': 'red',
            'icon': '🔴',
            'help': 'The version checker could not connect to the URL provided.'
        },
        'OUTDATED': {
            'color': 'red',
            'icon': '🔴',
            'help': 'There is a new stable version.',
            'button': true,
            'changelog': true
        },
        'BETA_OUTDATED': {
            'color': 'red',
            'icon': '🔴',
            'help': 'There is a new unstable version.',
            'button': true,
            'changelog': true
        }
    }
    if (options[status] == undefined) {
        console.error('no match')
    } else {
        var Help = options[status].help
        var Color = options[status].color
        var Icon = options[status].icon
        /* Button */
        if (options[status].button == true) {
            var outputButton = '<a title="Download the latest version of the pack." href="' + href + '" target="_blank" class="download button"><b>Download</b></a>'
        } else {
            var outputButton = ''
        }
        /* Changelog */
        if (options[status].changelog == true) {
            showElement('.changelog-container')
        } else {
            hideElement('.changelog-container')
        }
    }
    /* Output */
    var Builder = '<strong title="' + Help + '" style="color:' + Color + ';">' + status + ' ' + Icon + '</strong>' + outputButton
    document.querySelector('.status').innerHTML = Builder
    console.log('status: ' + status)
    if (reason != undefined) { console.log(' reason: ' + reason) }
}

/**
 * Adds the background image
 * @example
 * ??
 * @param {string} input The URL for the custom image. or the element to grab the preset background
 * @param {string} type The type to use, will deterimin if input is a selector or a url
*/
function changeTheme(input, type) {
    /* change theme */
    function backgroundImageBuilder(url) {
        document.querySelector('body').style.backgroundImage = "url('" + url + "')"
    }
    /* preset image */
    if (type == 'PRESET') {
        var Theme = document.querySelector(input).value || 'deepslate'
        backgroundImageBuilder('/Update_Checker/files/theme/options_background/' + Theme + '.png')
    }
    if (type == 'PRESETURL') {
        backgroundImageBuilder('/Update_Checker/files/theme/options_background/' + input + '.png')
        hideElement('.background-changer');
    }
    if (type == 'CUSTOM') {
        backgroundImageBuilder('' + input + '')
        hideElement('.background-changer');
    }
}

/**
 * Changes the favicon
 * @example
 * ??
 * @param {string} input The URL for the custom image. or the element to grab the preset background
 * @param {string} type The type to use, will deterimin if input is a selector or a url
*/
function changeFavicon(input, type) {
    /* change theme */
    function faviconBuilder(url) {
        document.querySelector('.favicon').href = url
    }
    /* preset image */
    if (type == 'PRESETURL') {
        faviconBuilder('/Update_Checker/files/theme/options_background/' + input + '.png')
    }
    if (type == 'CUSTOM') {
        faviconBuilder(input)
    }
}

/**
 * converts a string to HTML format using Markdown all inline.
 * @example
 * // returns • any text here • stars turn into bullets • <br> turns into <br>
 * customEncoder('* any text here * stars turn into bullets * \n turns into <br>')
 * @param {string} text The text to interprit (includes markdown)
 * @returns Returns the HTML formatted text
*/
function customEncoder(text, mcversion, modversion, versionRecommended, versionLatest, homePage, updateJSONURL) {
    // <br> | </br> => \n
    // - + * => '\n• '
    // {{MCVERSION}} => Returns the Minecraft version from the URL
    // {{MODVERSION}} => Returns the Mod version from the URL
    // {{RECOMMENDEDVERSION}} => Returns the recommended mod version from the JSON
    // {{LATESTVERSION}} => Returns the latest mod version from the JSON
    // {{HOMEPAGE}} => Returns the home page URL from the JSON
    // {{URLDATA}} => Returns the data in the URL
    // {{UPDATEJSONURL}} => Returns the JSON that it is getting all the info from
    // {{UPDATEJSONURL: pretty-print}} => Returns the JSON that it is getting all the info from but in pretty-print
    // {{UPDATECHECKERVERSION}} => Returns the current verison of the update checker
    return emoji(text).replace(/(<br>|<\/br>)/g, '\n').replace(/([\-|\+|\*](\s))/g, '\n• ').replace(/({{MCVERSION}})/g, mcversion).replace(/({{MODVERSION}})/g, modversion).replace(/({{RECOMMENDEDVERSION}})/g, versionRecommended).replace(/({{LATESTVERSION}})/g, versionLatest).replace(/(\s{{HOMEPAGE}}\s)/g, homePage).replace(/({{URLDATA}})/g, location.search).replace(/({{UPDATEJSONURL}})/g, JSON.stringify(updateJSONURL)).replace(/({{UPDATEJSONURL: pretty-print}}|{{UPDATEJSONURL:pretty-print}})/g, JSON.stringify(updateJSONURL, null, 4)).replace(/({{UPDATECHECKERVERSION}})/g, updateCheckerVersion).replace(/<.+?>/g, '').replace(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g, '$1').replace(/\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g, '$1')
}

function changelogWindow() {
    var content = { // the title for the window
        "theme": "dark",
        "width": "600px",
        "title": {
            "text": document.querySelector('.changelog-title').innerHTML,
            "bold": true,
            "header": 1, // 1-6
            "align": "center"
        },
        "body": [
            {
                "text": " ",
                "codeblock": {
                    "extension": "text/plain-text",
                    "width": "100%",
                    "height": "20%",
                    "readonly": true,
                    "code": {
                        "type": "selector",
                        "value": ".changelog"
                    }
                }
            }
        ]
    }
    ModalWindow('test', 'json', content)
}

function premiumMenu(member) {
    if (member == true) {
        var content = { // the title for the window
            "theme": "dark",
            "width": "500px",
            "title": {
                "text": "Premium Member URL",
                "header": 1,
                "align": "center"
            },
            "body": [
                {
                    "text": "This is a premium url. Premium url's allow you to customize the look and feel of your pack update page. Customizing your update page will make it better fit your pack and make it stand out from the rest!"
                }
            ]
        }
        ModalWindow('premiumMenu', 'json', content)

    } else {
        if (member == false) {
            var content = { // the title for the window
                "theme": "dark",
                "width": "500px",
                "title": {
                    "text": "Become a Premium URL Member",
                    "header": 1,
                    "align": "center"
                },
                "body": [
                    {
                        "text": "What are the benifits of a Premium URL Member?",
                        "header": 4
                    },
                    {
                        "text": "- Customize the title of the page."
                    },
                    {
                        "text": "- Customize the favorate icon."
                    },
                    {
                        "text": "- Use a custom image for the background."
                    },
                    {
                        "text": "- Create an animated background."
                    },
                    {
                        "text": "- Customize the text color, background color, border color, and border radius for the main menu, button, and scrollbar."
                    },
                    {
                        "text": "How to become a Member?",
                        "header": 4
                    },
                    {
                        "text": "- Become a {Unknown} tier Patreon: https://www.patreon.com/Legopitstop"
                    },
                    {
                        "text": "- Make sure to message Legopitstop with the JSON url."
                    },
                    {
                        "text": "- After the payment has gone through at the end of the month your URL will be added to the premium url list. You can now use premium url features!"
                    }

                ]
            }
            ModalWindow('premiumMenu', 'json', content)
        } else {
            sendError('expected a boolean statement but got "' + member + '"')
        }
    }
}