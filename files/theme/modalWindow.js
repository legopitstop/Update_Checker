$(document).ready(function () {
    console.log('loaded modalWindow.js')
});

/**
 * Creates a new window to add diffrent functions! Make sure to have the default modal CSS added.
 * @example
 * // Will create a modal window (with id test)
 * var contents = {theme: 'dark', title: {text:'Window Title'}, body: [{text: 'Sone text...'}]}
 * modalWindow('example-modal', 'json', contents)
 * @param {string} modalID The id of the modal
 * @param {string} type The type of input to read, only supports JSON
 * @param {string} input The JSON data to create the window
*/
function modalWindow(modalID, type, input) {
    if (input.width != undefined) { var Width = 'width: ' + input.width + ';' } else { var Width = '' }
    if (input.height != undefined) { var Height = 'height: ' + input.height + ';' } else { var Height = '' }
    var base = '<div class="modal-content" style="' + Width + Height + '"><span class="close material-icons">close</span><header id="' + modalID + '-header" class="modalHeader"></header><br><article id="' + modalID + '-body" class="modalBody"></article><footer id="' + modalID + '-footer" class="modalFooter"></footer></div>'
    var comment = document.createComment(' Code injected by modalWindow.js ');
    document.body.appendChild(comment);

    var createModal = document.createElement("div");
    createModal.id = modalID + '-container'
    createModal.classList.add('modal')
    createModal.innerHTML = base;
    document.body.appendChild(createModal);

    // build
    if (type == 'json') {
        var header = $('#' + modalID + '-header')
        var body = $('#' + modalID + '-body')
        var footer = $('#' + modalID + '-footer')
        // Create Contents
        if (input.theme == 'dark') {
            document.querySelector('.modal-content').classList.add('dark')
        } else {
            document.querySelector('.modal-content').classList.add('light')
        }
        if (input.header) {
            header.append(styleBuilder(input.header, input.header.text))
        };
        if (input.body) {
            input.body.forEach(
                input => {
                    if (input.text) {
                        body.append(styleBuilder(input, input.text))
                    }
                    if (input.icon) {
                        body.append('<div class="material-icons">' + styleBuilder(input, input.icon) + '</div>')
                    }
                    if (input.translate) {
                        // .replace(/(^%s)/g, '<span id="replace' + i + '"></span>')
                        var output = input.translate.replace(/(%%)([1-9])/g, '<span id="replace$2"></span>')
                        if (output.includes('%s')) { sendError('Replacement "%s" has not been added yet! please use "%%[1-9]" instead.') }
                        body.append(styleBuilder(input, output))
                        for (let i = 1; i < input.with.length + 1; i++) {
                            var id = 'replace' + i
                            document.getElementById(id).innerHTML = input.with[i - 1]
                        }
                    }
                }
            )
        };
        if (input.footer) {
            footer.append('<br>' + styleBuilder(input.footer, input.footer.text))
        }
    } else {
        sendError('Unknown type for function ModalWindow()')
    }
    function styleBuilder(json, text) {
        var Content = text.replace(/\n/g, '<br>')
        var Color = ''
        var Font = ''
        var Bold = ''
        var Italic = ''
        var Underline = ''
        var Strikethrough = ''
        /* Common */
        if (json.color != undefined) { var Color = ' color:' + json.color + ';' } else { var Color = '' };
        if (json.background_color != undefined) { var BackgroundColor = ' background-color:' + json.background_color + ';' } else { var BackgroundColor = '' };
        if (json.font != undefined) { var Font = ' font-family:' + json.font + ';' } else { var Font = '' };
        if (json.bold != undefined) { if (json.bold == true) { var Bold = ' font-weight: bold;' } else { var Bold = '' } } else { var Bold = '' };
        if (json.italic != undefined) { if (json.italic == true) { var Italic = ' font-style: italic;' } else { var Italic = '' } } else { var Italic = '' };
        if (json.underlined != undefined) { if (json.underlined == true) { var Underline = 'underline ' } else { var Underline = '' } } else { var Underline = '' };
        if (json.strikethrough != undefined) { if (json.strikethrough == true) { var Strikethrough = 'line-through ' } else { var Strikethrough = '' } } else { var Strikethrough = '' };
        if (json.cursor != undefined) { var Cursor = ' cursor:' + json.cursor + ';' } else { var Cursor = '' };

        if (json.align != undefined) { var Align = 'text-align:' + json.align + ';' } else { var Align = '' };
        if (json.header != undefined) { if (json.header <= 6) { var element = 'h' + json.header } else { var element = 'p'; sendError('max level for header is 6, but got ' + json.header) } } else { var element = 'p' };
        var decor = ' text-decoration:' + Underline + Strikethrough + ';'
        var style = BackgroundColor + Color + Bold + Italic + Font + Align + decor + Cursor + ' display: inline;'

        /* event_listener */
        var event = json.event_listener
        if (event != undefined) { // blur|change|click|contextmenu|drag|dblclick|focus|mousedown|mouseenter|mouseleave|mouseover|mouseout|mouseup|resize|scroll
            if (event.action == 'open_url') {
                var event_listener = ' on' + event.type + '="window.open(\'' + event.value + '\')"'

            } else if (event.action == 'copy_to_clipboard') {
                var event_listener = ' on' + event.type + '="copyElement(\'' + event.value + '\')"'

            } else if (event.action == 'run_function') {
                var event_listener = ' on' + event.type + '="' + event.value + '"'

            } else {
                sendError('Unknown action type, expected "open_url", "copy_to_clipboard" or "run_function" but got "' + event.action + '"')
            }
        } else {
            var event_listener = ''
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
        /* embed */
        if (json.embed != undefined) {
            console.log(json.embed)
            var Content = json.embed
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
            if (json.codeblock.copy_button == true) {
                var CopyButton = '<button style="display: none" class="material-icons modal-copy-codeblock" id="' + ID + '-button" onclick="copyElementId(\'' + ID + '\'); this.style.display = \'none\'" onmouseenter="this.style.display = \'block\'">content_copy</button>'
            } else {
                var CopyButton = ''
            }
            if (json.codeblock.extension == 'text/json') {
                /* contents use the JSON inside 'values'*/
                if (codeFile.type == 'contents') {
                    if (codeFile.pretty_print == true) {
                        var code = JSON.stringify(codeFile.value, null, 4)
                    } else {
                        var code = JSON.stringify(codeFile.value)
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
            var input = '<br><div class="modal-codeblock-container" style="' + Width + Height + '"><textarea class="modal-codeblock" onmouseenter="document.getElementById(\'' + ID + '-button\').style.display = \'block\'" onmouseleave="document.getElementById(\'' + ID + '-button\').style.display = \'none\'" id="' + ID + '" onchange="updateText(' + ID + ')"' + event_listener + ' style="width:100%; height:100%;" ' + Readonly + '>' + code + '</textarea>' + CopyButton + '</div>'
        }
        /* Return */
        if (json.style != undefined) {
            if (json.style == 'button') {
                return '<button class="modal-button"' + event_listener + ' style="' + style + '">' + Content + '</button>'

            } else if (json.style == 'code') {
                return '<code' + event_listener + ' style="' + style + '">' + Content + '</code>'

            } else {
                sendError('Unknown action type, expected "button" or "code" but got "' + json.style + '"')
            }
        } else if (json.codeblock != undefined) {
            return '<label for="' + ID + '" ' + title + ' style="' + style + '">' + Content + ' </label>' + input

        } else if (json.input != undefined) {
            return '<label for="' + UUID + '" ' + event_listener + title + ' style="' + style + '">' + Content + ' </label>' + input

        } else {
            return '<' + element + ' ' + event_listener + title + ' style="' + style + '">' + Content + '</' + element + '>'
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

/**
 * Closes/removes the modal window
 * @example
 * // Will close the class 'modal'
 * closeModal()
*/
function closeModal() {
    /* Remove Modal */
    var removeElement = document.querySelector('.modal');
    removeElement.remove();
}