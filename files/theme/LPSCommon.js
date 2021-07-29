$(document).ready(function () {
    isRequired()
});

/* When a required input is empty set the border color to red */
function isRequired() {
    $('input').blur(function () {
        $(':required').css('border-color', 'gray');
        $(':required').filter(function () {
            return $.trim(this.value) === '';
        }).css('border-color', 'red');
    });
}

/**
 * @param {integer} min If true it will show a confirmation menu.
 * @param {integer} max The element to clear.
 * @returns A random number between the min and max
 */
function rng(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}

/**
 * @param {boolean} confirm0 If true it will show a confirmation menu.
 * @param {string} element The element to clear.
 * @returns clears the output element.
 */
function clearElement(confirm0, element) {
    if (confirm0 == true) {
        var con = confirm("Are you sure you want to clear the command input?");
        if (con == true) {
            document.querySelector(element).innerHTML = '';
        };
    } else {
        document.querySelector(element).innerHTML = '';
    }
}

/**
 * @param {string} element The element to copy.
 * @returns Copies the value in element. Also returns a boolean
 */
function copyElement(element) {
    var target = document.querySelector(element);
    if (target.value != '') {
        target.select();
        document.execCommand("copy");
        return true;
    } else {
        return false;
    }

}

/**
 * @param {string} element The element to copy.
 * @returns Copies then removes the value in element. Also returns a boolean
 */
function cutElement(element) {
    var target = document.querySelector(element);
    if (target.value != '') {
        target.select();
        document.execCommand("cut");
        return true;
    } else {
        return false;
    }

}

/**
 * @param event The element to copy.
 * @returns Returns the type of keypress that was activated.
 */
function pressKey(event) {
    if (event.keyCode == 0) { return 'unknown' };
    if (event.keyCode == 3) { return 'break' };
    if (event.keyCode == 8) { return 'backspace' };
    if (event.keyCode == 9) { return 'tab' };
    if (event.keyCode == 12) { return 'clear' };
    if (event.keyCode == 13) { return 'enter' };
    if (event.keyCode == 16) { return 'shift' };
    if (event.keyCode == 17) { return 'control' };
    if (event.keyCode == 18) { return 'alt' };
    if (event.keyCode == 19) { return 'pause' };
    if (event.keyCode == 20) { return 'capsLock' };
    if (event.keyCode == 27) { return 'escape' };
    if (event.keyCode == 32) { return 'space' };
    if (event.keyCode == 33) { return 'pageUp' };
    if (event.keyCode == 34) { return 'pageDown' };
    if (event.keyCode == 35) { return 'end' };
    if (event.keyCode == 36) { return 'home' };
    if (event.keyCode == 37) { return 'arrowLeft' };
    if (event.keyCode == 38) { return 'arrowUp' };
    if (event.keyCode == 39) { return 'arrowRight' };
    if (event.keyCode == 40) { return 'arrowDown' };
    if (event.keyCode == 41) { return 'select' };
    if (event.keyCode == 42) { return 'print' };
    if (event.keyCode == 43) { return 'execute' };
    if (event.keyCode == 44) { return 'printScreen' };
    if (event.keyCode == 45) { return 'insert' };
    if (event.keyCode == 46) { return 'delete' };
    if (event.keyCode == 47) { return 'help' };
    if (event.keyCode == 48) { return '0' };
    if (event.keyCode == 49) { return '1' };
    if (event.keyCode == 50) { return '2' };
    if (event.keyCode == 51) { return '3' };
    if (event.keyCode == 52) { return '4' };
    if (event.keyCode == 53) { return '5' };
    if (event.keyCode == 54) { return '6' };
    if (event.keyCode == 55) { return '7' };
    if (event.keyCode == 56) { return '8' };
    if (event.keyCode == 57) { return '9' };
    if (event.keyCode == 96) { return '0' };
    if (event.keyCode == 97) { return '1' };
    if (event.keyCode == 98) { return '2' };
    if (event.keyCode == 99) { return '3' };
    if (event.keyCode == 100) { return '4' };
    if (event.keyCode == 101) { return '5' };
    if (event.keyCode == 102) { return '6' };
    if (event.keyCode == 103) { return '7' };
    if (event.keyCode == 104) { return '8' };
    if (event.keyCode == 105) { return '9' };
    if (event.keyCode == 106) { return 'multiply' };
    if (event.keyCode == 107) { return 'add' };
    if (event.keyCode == 109) { return 'subtract' };
    if (event.keyCode == 110) { return 'decimal' };
    if (event.keyCode == 111) { return 'devide' };
    if (event.keyCode == 112) { return 'f1' };
    if (event.keyCode == 113) { return 'f2' };
    if (event.keyCode == 114) { return 'f3' };
    if (event.keyCode == 115) { return 'f4' };
    if (event.keyCode == 116) { return 'f5' };
    if (event.keyCode == 117) { return 'f6' };
    if (event.keyCode == 118) { return 'f7' };
    if (event.keyCode == 119) { return 'f8' };
    if (event.keyCode == 120) { return 'f9' };
    if (event.keyCode == 121) { return 'f10' };
    if (event.keyCode == 122) { return 'f11' };
    if (event.keyCode == 123) { return 'f12' };
    if (event.keyCode == 124) { return 'f13' };
    if (event.keyCode == 125) { return 'f14' };
    if (event.keyCode == 126) { return 'f15' };
    if (event.keyCode == 127) { return 'f16' };
    if (event.keyCode == 128) { return 'f17' };
    if (event.keyCode == 129) { return 'f18' };
    if (event.keyCode == 130) { return 'f19' };
    if (event.keyCode == 131) { return 'f20' };
    if (event.keyCode == 132) { return 'f21' };
    if (event.keyCode == 133) { return 'f22' };
    if (event.keyCode == 134) { return 'f23' };
    if (event.keyCode == 135) { return 'f24' };
    if (event.keyCode == 136) { return 'f25' };
    if (event.keyCode == 137) { return 'f26' };
    if (event.keyCode == 138) { return 'f27' };
    if (event.keyCode == 139) { return 'f28' };
    if (event.keyCode == 140) { return 'f29' };
    if (event.keyCode == 141) { return 'f30' };
    if (event.keyCode == 142) { return 'f31' };
    if (event.keyCode == 143) { return 'f32' };
}

/**
 * Grabs data from the URL and converts it to JSON
 * @example
 * // returns {"text":["This is text"]}
 * parseURLParams('https://example.com?text=This%20is%20text')
 * @param {string} url The url to parse to JSON.
 * @returns Returns the status
*/
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;
    if (query === url || query === "") return;
    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);
        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

/**
 * @param event The function to interprit the return statement
 * @returns will make the return statement a console log
 */
function returnConsole(event) {
    var con = event
    console.log(con)
}

/**
 * @param value The value that needs to be imbetween min and max.
 * @param {integer} min The minium allowed value. (inclusive)
 * @param {integer} max The maxium allowed value. (inclusive)
 * @returns returns a boolean if it is excepted. will also send error via console.
 */
function MinMaxValue(value, min, max) {
    if (value >= max + 1) {
        console.error('Value must be less than ' + max)
        return false;
    } else {
        if (value <= min - 1) {
            console.error('Value must be more than ' + min)
            return false;
        } else {
            return true;
        }
    }

}

/**
 * @param element The element to apply this error class to.
 * @param {add|remove} action Add or remove the class
 * @returns adds the class to the element.
 */
function errorClass(element, action) {
    if (action == 'add') {
        document.querySelector(element).classList.add('error')
    } else {
        if (action == 'remove') {
            document.querySelector(element).classList.remove('error')
        } else {
            console.error('missing "action"')
            return null;
        }
    }
}

/**
 * Disables the input
 * @example
 * // will disable the input with the class 'test'
 * disableElement('.test')
 * @param {string} selector The element to disable
*/
function disableElement(selector) {
    document.querySelector(selector).disabled = true;
}

/**
 * Enables the input
 * @example
 * // will enable the input with the class 'test'
 * enableElement('.test')
 * @param {string} selector The element to disable
*/
function enableElement(selector) {
    document.querySelector(selector).disabled = false;
}

/**
 * Will grab the value from the selector
 * @example
 * // Returns the URL value from class 'test'
 * openURL('.test')
 * @param {string} selector The element to disable
*/
function openURL(selector) {
    var url = document.querySelector(selector).value
    window.open(url)
}

/**
 * Will hide the element.
 * @example
 * // Will hide the element with the class 'test'
 * hideElement('.test')
 * @param {string} selector The element to hide
*/
function hideElement(selector) {
    document.querySelector(selector).style.display = 'none'
}

/**
 * Will shiw the hidden element.
 * @example
 * // Will show the element with the class 'test'
 * showElement('.test')
 * @param {string} selector The element to show
*/
function showElement(selector) {
    document.querySelector(selector).style.display = 'block'
}

/**
 * Creates a new window to add diffrent functions!
 * @example
 * // Will show the element with the class 'test'
 * showElement('.test')
 * @param {string} selector The element to show
*/
// https://www.w3schools.com/howto/howto_css_modals.asp
function ModalWindow(modalID, type, input) {
    if (input.width != undefined) { var Width = 'width: ' + input.width + ';' } else {var Width = ''}
    if (input.height != undefined) { var Height = 'height: ' + input.height + ';' } else {var Height = ''}
    var base = '<div id="' + modalID + '-container" class="modal"><div class="modal-content" style="' + Width + Height + '"><span class="close">&times;</span><div id="' + modalID + '"></div></div></div>'
    var createModal = document.createElement("div");
    createModal.innerHTML = base;
    document.body.appendChild(createModal);

    // build
    if (type == 'json') {
        var file = $('#' + modalID)
        // Create Contents
        if (input.theme == 'dark') {
            document.querySelector('.modal-content').classList.add('dark')
        } else {
            document.querySelector('.modal-content').classList.add('light')
        }
        if (input.title) {
            file.append(styleBuilder(input.title, input.title.text))
        };
        if (input.body) {
            input.body.forEach(
                input => {
                    if (input.text) {
                        file.append(styleBuilder(input, input.text))
                    }
                    if (input.translate) {
                        // .replace(/(^%s)/g, '<span id="replace' + i + '"></span>')
                        var output = input.translate.replace(/(%%)([1-9])/g, '<span id="replace$2"></span>')
                        if (output.includes('%s')) { sendError('Replacement "%s" has not been added yet! please use "%%[1-9]" instead.') }
                        file.append(styleBuilder(input, output))
                        for (let i = 1; i < input.with.length + 1; i++) {
                            var id = 'replace' + i
                            document.getElementById(id).innerHTML = input.with[i - 1]
                        }
                    }
                }
            )
        }
    } else {
        sendError('Unknown type for function ModalWindow()')
    }
    function styleBuilder(json, text) {
        var Color = ''
        var Font = ''
        var Bold = ''
        var Italic = ''
        var Underline = ''
        var Strikethrough = ''
        /* Common */
        if (json.color != undefined) { var Color = ' color:' + json.color + ';' } else { var Color = '' };
        if (json.font != undefined) { var Font = ' font-family:' + json.font + ';' } else { var Font = '' };
        if (json.bold != undefined) { if (json.bold == true) { var Bold = ' font-weight: bold;' } else { var Bold = '' } } else { var Bold = '' };
        if (json.italic != undefined) { if (json.italic == true) { var Italic = ' font-style: italic;' } else { var Italic = '' } } else { var Italic = '' };
        if (json.underlined != undefined) { if (json.underlined == true) { var Underline = 'underline ' } else { var Underline = '' } } else { var Underline = '' };
        if (json.strikethrough != undefined) { if (json.strikethrough == true) { var Strikethrough = 'line-through ' } else { var Strikethrough = '' } } else { var Strikethrough = '' };

        if (json.align != undefined) { var Align = 'text-align:' + json.align + ';' } else { var Align = '' };
        if (json.header != undefined) { if (json.header <= 6) { var element = 'h' + json.header } else { var element = 'p'; sendError('max level for header is 6, but got ' + json.header) } } else { var element = 'p' };
        var decor = ' text-decoration:' + Underline + Strikethrough + ';'
        var style = Color + Bold + Italic + Font + Align + decor

        /* clickEvent */
        if (json.clickEvent != undefined) {
            if (json.clickEvent.action == 'open_url') {
                console.log(json.clickEvent.value)
                //var click = ' onclick="window.open(' + json.clickEvent.value + ')"'
                var click = ''
            } else {
                if (json.clickEvent.action == 'copy_to_clipboard') {
                    console.log(json.clickEvent.value)
                    var click = ' copyElement(' + json.clickEvent.value + ')"'
                } else {
                    sendError('Unknown action type, expected "open_url" or "copy_to_clipboard" but got "' + json.clickEvent.action + '"')
                }
            }
            var click = ''
        }
        /* hoverEvent */
        if (json.hoverEvent != undefined) {
            if (json.hoverEvent.action == 'show_text') {
                var title = ' title="' + json.hoverEvent.contents.text + '" '
            } else {
                var title = ''
            }
        } else {
            var title = ''
        }
        /* input */
        if (json.input != undefined) {
            /* UUID */
            if (json.input.id == undefined) { var UUID = rng(1111, 9999) } else { var UUID = json.input.id };
            if (json.input.type != undefined) { var Type = json.input.type } else { var Type = 'text' }
            if (json.input.examples != undefined) {
                var List = ' list="' + UUID + '-list"'
                json.input.examples.forEach(json => {
                    /* create datalist */
                    var createModal = document.createElement("datalist");
                    createModal.id = UUID + '-list'
                    document.body.appendChild(createModal);

                    console.log(document.getElementById(UUID + '-list'))
                    $('#' + UUID + '-list').append('<option value="' + json + '">' + json + '</option>')
                })
            } else {
                var List = ''
            }
            var input = '<input class="modal-input' + List + ' id="' + UUID + '" type="' + Type + '"/>'
        }
        /* Code block */
        if (json.codeblock != undefined) {
            /* ID */
            var codeFile = json.codeblock.code
            if (json.codeblock.id == undefined) { var ID = rng(1111, 9999) } else { var ID = json.codeblock.id };
            if (json.codeblock.width != undefined) { var Width = ' width:' + json.codeblock.width + ';' } else { var Width = '' };
            if (json.codeblock.height != undefined) { var Height = ' height:' + json.codeblock.height + ';' } else { var Height = '' };
            if (json.codeblock.readonly == true) { var Readonly = 'readonly' } else { var Readonly = '' };
            if (json.codeblock.extension == 'text/json') {
                /* contents use the JSON inside 'values'*/
                if (codeFile.type == 'contents') {
                    if (codeFile.pretty_print == true) {
                        var code = JSON.stringify(code.value, null, 4)
                    } else {
                        var code = JSON.stringify(code.value)
                    }
                }
                /* referance to URL */
                if (codeFile.type == 'ref') {
                    var code = ''
                    $.getJSON(codeFile.value, function (value) {
                        if (codeFile.pretty_print == true) {
                            $('#' + ID).append(JSON.stringify(value, null, 4))
                        } else {
                            $('#' + ID).append(JSON.stringify(value))
                        }
                    })
                }
                /* Grabs the contents from a diffrent element */
                if (codeFile.type == 'selector') {
                    if (codeFile.pretty_print == true) {
                        var code = JSON.stringify(document.querySelector(codeFile.value).innerHTML, null, 4)
                    } else {
                        var code = JSON.stringify(document.querySelector(codeFile.value).innerHTML)
                    }
                }
            } else {
                /* contents use the JSON inside 'values'*/
                if (codeFile.type == 'contents') {
                    var code = codeFile.value
                }
                /* Grabs the contents from a diffrent element */
                if (codeFile.type == 'selector') {
                    var code = document.querySelector(codeFile.value).innerHTML
                }
            }
            var input = '<br><textarea class="modal-codeblock" id="' + ID + '" style="' + Width + Height + '" ' + Readonly + '>' + code + '</textarea>'
        }
        /* Button */
        if (json.style == 'button') {
            return '<button class="modal-button"' + click + ' style="' + style + '">' + text + '</button>'
        } else {
            if (json.input != undefined) {
                return '<label for="' + UUID + '" ' + click + title + 'style="' + style + '">' + text + ' </label>' + input
            } else {
                if (json.codeblock != undefined) {
                    return '<label for="' + ID + '" ' + click + title + 'style="' + style + '">' + text + ' </label>' + input
                } else {
                    return '<' + element + ' ' + click + title + 'style="' + style + '">' + text + '</' + element + '>'
                }
            }
        }
    }


    var modal = document.querySelector('#' + modalID + '-container')
    document.querySelector('#' + modalID + '-container').style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        //modal.style.display = "none";
        closeModal()
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            //modal.style.display = "none";
            closeModal()
        }
    }
}

function closeModal() {
    var removeElement = document.querySelector('.modal');
    removeElement.remove();
}

/**
 * Sends an error via console and alert message.
 * @param {string} errorMessage The element to show
*/
function sendError(errorMessage) {
    console.error('Error: ' + errorMessage)
    alert('Error: ' + errorMessage)
    return 'Error: ' + errorMessage
}