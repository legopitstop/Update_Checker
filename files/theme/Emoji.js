
/**
 * converts :smile: to 😄
 * @param {string} text The text to interprit
 * @result Returns the text with the emoji formatted text
*/
function emoji2(text) {
    var file = './assets/emoji.json'
    $.getJSON(file, function (emoji) {
        var obj = emoji.default
        $.each(emoji.default, function (val) {
            console.log(val + ' : ' + obj[val]) // regex : emoji
        });
        return text.replace(/\:smile\:)/g, ':)')
    })
}

/**
 * converts `:smile:` to `😄`
 * @example
 * // returns Hello 😄 World
 * emoji('Hello :smile: World')
 * @param {string} text The status of the Update Checker.
 * @returns Display the status to class 'status' 
*/
function emoji(text) {
    return textEmojis(text)
    .replace(/(:grinning:)/g,'😀')
    .replace(/(:smiley:)/g,'😃')
    .replace(/(:smile:)/g,'😄')
    .replace(/(:grin:)/g,'😁')
    .replace(/(:laughing:)/g,'😆')
    .replace(/(:sweat_smile:)/g,'😅')
    .replace(/(:rofl:)/g,'🤣')
    .replace(/(:joy:)/g,'😂')
    .replace(/(:slightly_smiling_face:)/g,'🙂')
    .replace(/(:upside_down_face:)/g,'🙃')
    .replace(/(:wink:)/g,'😉')
    .replace(/(:blush:)/g,'😊')
    .replace(/(:innocent:)/g,'😇')
    .replace(/(:heart_eyes:)/g,'😍')
    .replace(/(:star_struck:)/g,'🤩')
    .replace(/(:kissing_heart:)/g,'😘')
    .replace(/(:kissing:)/g,'😗')
    .replace(/(:relaxed:)/g,'☺️')
    .replace(/(:kissing_closed_eyes:)/g,'😚')
    .replace(/(:kissing_smiling_eyes:)/g,'😙')
    .replace(/(:yum:)/g,'😋')
    .replace(/(:stuck_out_tongue:)/g,'😛')
    .replace(/(:stuck_out_tongue_winking_eye:)/g,'😜')
    .replace(/(:zany_face:)/g,'🤪')
    .replace(/(:stuck_out_tongue_closed_eyes:)/g,'😝')
    .replace(/(:money_mouth_face:)/g,'🤑')
    .replace(/(:shushing_face:)/g,'🤫')
    .replace(/(:zipper_mouth_face:)/g,'🤐')
    .replace(/(:neutral_face:)/g,'😐')
    .replace(/(:expressionless:)/g,'😑')
    .replace(/(:no_mouth:)/g,'😶')
    .replace(/(:smirk:)/g,'😏')
    .replace(/(:unamused:)/g,'😒')
    .replace(/(:roll_eyes:)/g,'🙄')
    .replace(/(:grimacing:)/g,'😬')
    .replace(/(:lying_face:)/g,'🤥')
    .replace(/(:relieved:)/g,'😌')
    .replace(/(:pensive:)/g,'😔')
    .replace(/(:sleepy:)/g,'😪')
    .replace(/(:drooling_face:)/g,'🤤')
    .replace(/(:sleeping:)/g,'😴')
    .replace(/(:mask:)/g,'😷')
    .replace(/(:face_with_thermometer:)/g,'🤒')
    .replace(/(:face_with_head_bandage:)/g,'🤕')
    .replace(/(:nauseated_face:)/g,'🤢')
    .replace(/(:sneezing_face:)/g,'🤧')
    .replace(/(:hot_face:)/g,'🥵')
    .replace(/(:cold_face:)/g,'🥶')
    .replace(/(:woozy_face:)/g,'🥴')
    .replace(/(:dizzy_face:)/g,'😵')
    .replace(/(:exploding_head:)/g,'🤯')
    .replace(/(:cowboy_hat_face:)/g,'🤠')
    .replace(/(:partying_face:)/g,'🥳')
    .replace(/(:sunglasses:)/g,'😎')
    .replace(/(:nerd_face:)/g,'🤓')
    .replace(/(:confused:)/g,'😕')
    .replace(/(:worried:)/g,'😟')
    .replace(/(:slightly_frowning_face:)/g,'🙁')
    .replace(/(:frowning_face:)/g,'☹️')
    .replace(/(:open_mouth:)/g,'😮')
    .replace(/(:hushed:)/g,'😯')
    .replace(/(:astonished:)/g,'😲')
    .replace(/(:flushed:)/g,'😳')
    .replace(/(:pleading_face:)/g,'🥺')
    .replace(/(:frowning:)/g,'😦')
    .replace(/(:anguished:)/g,'😧')
    .replace(/(:fearful:)/g,'😨')
    .replace(/(:cold_sweat:)/g,'😰')
    .replace(/(:disappointed_relieved:)/g,'😥')
    .replace(/(:cry:)/g,'😢')
    .replace(/(:sob:)/g,'😭')
    .replace(/(:scream:)/g,'😱')
    .replace(/(:confounded:)/g,'😖')
    .replace(/(:persevere:)/g,'😣')
    .replace(/(:disappointed:)/g,'😞')
    .replace(/(:sweat:)/g,'😓')
    .replace(/(:weary:)/g,'😩')
    .replace(/(:tired_face:)/g,'😫')
    .replace(/(:yawning_face:)/g,'🥱')
    .replace(/(:triumph:)/g,'😤')
    .replace(/(:rage:)/g,'😡')
    .replace(/(:angry:)/g,'😠')
    .replace(/(:cursing_face:)/g,'🤬')
    .replace(/(:smiling_imp:)/g,'😈')
    .replace(/(:imp:)/g,'👿')
    .replace(/(:skull:)/g,'💀')
    .replace(/(:skull_and_crossbones:)/g,'☠️')
    .replace(/(:poop:)/g,'💩')
    .replace(/(:clown_face:)/g,'🤡')
    .replace(/(:japanese_ogre:)/g,'👹')
    .replace(/(:japanese_goblin:)/g,'👺')
    .replace(/(:ghost:)/g,'👻')
    .replace(/(:alien:)/g,'👽')
    .replace(/(:space_invader:)/g,'👾')
    .replace(/(:robot:)/g,'🤖')
    .replace(/(:smiley_cat:)/g,'😺')
    .replace(/(:smile_cat:)/g,'😸')
    .replace(/(:joy_cat:)/g,'😹')
    .replace(/(:heart_eyes_cat:)/g,'😻')
    .replace(/(:smirk_cat:)/g,'😼')
    .replace(/(:kissing_cat:)/g,'😽')
    .replace(/(:scream_cat:)/g,'🙀')
    .replace(/(:crying_cat_face:)/g,'😿')
    .replace(/(:pouting_cat:)/g,'😾')
    .replace(/(:kiss:)/g,'💋')
}

function textEmojis(text) {
    return text.replace(/(:-\[|:\[)/g,'embarrased')
    .replace(/(:-D|:D)/g,'😀')
    .replace(/(:-P|:P)/g,'😛')
    .replace(/(:'-\(|:'\()/g,'😢')
    .replace(/(>:-O|>:O)/g,'shouting')
    .replace(/(>:-D|>:D)/g,'evil')
    .replace(/(>:-\(|>:\()/g,'😠')
    .replace(/(>:-\)|>:\))/g,'mischievous')
    .replace(/(;-D)|;D/g,'grinning wink')
    .replace(/(:-]|:])/g,'blushing')
    .replace(/(:-!|:!)/g,'oops')
    .replace(/(:-\\|:\\)/g,'undecided')
    .replace(/(:->|:>)/g,'😏')
    .replace(/(X-\(|:X\()/g,'grimmace')
    .replace(/(:-o|:o)/g,'😲')
    .replace(/(:-\?|:\?)/g,'😕')
    .replace(/(;-P|;P)/g,'😜')
    .replace(/(:-X|:X)/g,'🤐')
    .replace(/(;-\)|;\))/g,'😉')
    .replace(/(:-\*|:\*)/g,'😗')
    .replace(/(O:-\)|O:\))/g,'😇')
    .replace(/(:-\$|:\$)/g,'🤑')
    .replace(/(:-\)|:\))/g,'🙂')
    .replace(/(>:-\||>:\|)/g,'not amused')
    .replace(/(>:-P|>:P)/g,'angry tongue')
    .replace(/(:-\(|:\()/g,'🙁')
    .replace(/(B-\)|B\))/g,'😎')
    .replace(/(:-\||:\|)/g,'😐')
    .replace(/(\|-\)|\|\))/g,'😴')
}

function minecraftEmojis(text) {
    return text.replace(/(:mc:|:dirt:)/g,'<img src="./assets/options_background/dirt.png" width="16px" height="16px" title=":dirt:" alt="missing"></img>')
}