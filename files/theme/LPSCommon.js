
$(document).ready(function () {
    /* Run functions */
    isRequired();
    convertURL(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'th', 'td']);
    codeblock('textarea.codeblock');
    markdown('.markdown')
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
 * @param {Number} min If true it will show a confirmation menu.
 * @param {Number} max The element to clear.
 * @returns A random number between the min and max
 */
function rng(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}
/**
 * @param {Number} min If true it will show a confirmation menu.
 * @param {Number} max The element to clear.
 * @returns A random number between the min and max
 */
function randomNumber(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}

/**
 * @returns A random number (id) that is imbetween 100000 - 999999
 */
function randomId() {
    var min = 100000
    var max = 999999
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
 * @returns Copies the value in element. Also returns a boolean
 */
function copyElementId(element) {
    var target = document.getElementById(element);
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
 * @param event The element to check.
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
 * Sends an error via console and alert message.
 * @param {string} errorMessage The element to show
*/
function sendError(errorMessage) {
    console.error('Error: ' + errorMessage)
    alert('Error: ' + errorMessage)
    return 'Error: ' + errorMessage
}

/**
 * Add properties to codeblock.
 * @example
 * // Will add a copy button
 * <textarea class="codeblock"></textarea>
 * @param {String} [selector] The jquery selector to use. default: `textarea.codeblock`
 * @param {String} [icon] The Google Material icon to use. default: `content_paste`
*/
function codeblock(selector, icon) {
    if (!selector) { var selector = 'textarea.codeblock' }
    if (!icon) { var icon = 'content_paste' }
    if ($(selector).length > 0) {
        const BLOCK = document.querySelector(selector);
        /* Add custom ID if it has none */
        if (!BLOCK.id) { var ID = uuid(); BLOCK.id = ID } else { var ID = BLOCK.id }
        $("textarea.codeblock").wrap('<div class="codeblock-container" style="position: relative;"></div>')
        $(".codeblock-container").append('<button style="position: absolute; top: 10px; right: 6px; display: none;" onmouseenter="this.style.display = \'block\'" onclick="copyElementId(\'' + ID + '\'); this.style.display = \'none\'" class="codeblock-copy-button material-icons">' + icon + '</button>')
        const CONTAINER = document.querySelector('.codeblock-container');
        /* Copy the height and with of block to container */
        if (BLOCK.style.width == '') {
            CONTAINER.style.width = '40%'
        } else {
            CONTAINER.style.width = BLOCK.style.width
        }

        if (BLOCK.style.height == '') {
            CONTAINER.style.height = '200px'
        } else {
            CONTAINER.style.height = BLOCK.style.height
        }
        BLOCK.style.width = '100%'
        BLOCK.style.height = '100%'
        BLOCK.rows = '0'
        BLOCK.cols = '0'
        /* Apply properties to block */
        BLOCK.readOnly = true;
        BLOCK.onmouseenter = function () { document.querySelector('.codeblock-copy-button').style.display = 'block' }
        BLOCK.onmouseleave = function () { document.querySelector('.codeblock-copy-button').style.display = 'none' }
        BLOCK.style.resize = 'none';

    }
}

/**
 * @returns UUIDv4
 */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 
 * @param {String} elementId The element id to focus on.
 * @param {Boolean} [preventScroll] When true it will not scroll to the element
 */
function focusId(elementId, preventScroll) {
    if (preventScroll == true) {
        document.getElementById(elementId).focus({ preventScroll: true });
    } else {
        document.getElementById(elementId).focus({ preventScroll: false });
    }
}
/**
 * 
 * @param {*} selectors The jquery selector element to focus on.
 * @param {Boolean} [preventScroll] When true it will not scroll to the element
 */
function focusSelector(selectors, preventScroll) {
    if (preventScroll == true) {
        document.querySelector(selectors).focus({ preventScroll: true });
    } else {
        document.querySelector(selectors).focus({ preventScroll: false });
    }
}

/**
 * 
 * @param {String} elementId The element id to select.
 */
function selectId(elementId) {
    document.getElementById(elementId).select();
}
/**
 * 
 * @param {*} selectors The jquery selector element to select
 */
function selectSelector(elementId) {
    document.querySelector(elementId).select();
}

/**
 * 
 * @param {String} elementId The element id to scroll to.
 * @param {Boolean} [smooth] When true it will not jump to the element
 */
function scrollToId(elementId, smooth) {
    if (smooth == true) {
        document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
    } else {
        document.getElementById(elementId).scrollIntoView({ behavior: "auto" });
    }
}
/**
 * 
 * @param {*} selectors The jquery selector element id to scroll to.
 * @param {Boolean} [smooth] When true it will not jump to the element
 */
function scrollToSelector(selectors, smooth) {
    if (smooth == true) {
        document.querySelector(selectors).scrollIntoView({ behavior: "smooth" });
    } else {
        document.querySelector(selectors).scrollIntoView({ behavior: "auto" });
    }
}

/**
 * Automaticlly places the URL in <a> making it a working URL
 * @param {Array} selectorList An array list of all allowed selectors.
 */
function convertURL(selectorList) {
    if (!selectorList) { var selectorList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'th', 'td'] }
    for (let i = 0; i < selectorList.length; i++) {
        if ($(selectorList[i]).length > 0) {
            document.querySelector(selectorList[i]).innerHTML = document.querySelector(selectorList[i]).innerHTML.trim().replace(/((https?|ftp):\/\/(?:www\.|(?!www))[^\s.]+\.\S{2,}|www\.\S+\.\S{2,})/g, '<!-- Autogenerated --><a href="$1" title="$1" target="_blank">$1</a>')
        }

    }
}

/**
 * Converts markdown formatted text to HTML
 * @example
 * // returns <h1>header</h1><p><strong>Hello</strong> World!</p>
 * <div class="markdown"># header\n**Hello** world!</div>
 * markdown('.markdown')
 * @param {String} selector The selector to conver to HTML using markdown format.
 */
function markdown(selector) {
    if ($(selector).length > 0) {
        document.querySelector(selector).innerHTML = marked.parse(document.querySelector(selector).innerHTML.replace(/\\n/g, '\n'))
    }
}