# Update Checker
What does the update checker do? The update checker will check to see if the current mod you have installed is up to date or is out of date using the JSON file provided in the URL. If you have any questions join my discord server [Official Legopitstop Discord](https://legopitstop.weebly.com/discord.html) and chat via the `#🟢│update-checker` channel.
- The main page can be found [update-checker.html](https://legopitstop.github.io/Update_Checker/update-checker.html) (viewing the page without a updateJSONURL does make things funky, see the [Example Pages](#Example_Pages) instead. )
- The generator page can be found [update-checker-generator.html](https://legopitstop.github.io/Update_Checker/update-checker-generator.html)

## Example Pages
- Premium URL - Example of a premium url that has status of OUTDATED and UP_TO_DATE.
    - [OUTDATED](https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https%3A%2F%2Flegopitstop.github.io%2FUpdate_Checker%2Fexamples%2Fupdate.json&mcversion=1.17&modversion=1.6.0)
    - [UP_TO_DATE](https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https%3A%2F%2Flegopitstop.github.io%2FUpdate_Checker%2Fexamples%2Fupdate.json&mcversion=1.17&modversion=1.7.0)
- Normal URL - Example of a non-premium url that has status of OUTDATED and UP_TO_DATE.
    - [OUTDATED](https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https%3A%2F%2Flegopitstop.github.io%2FUpdate_Checker%2Fexamples%2Fupdate2.json&mcversion=1.17&modversion=1.6.0)
    - [UP_TO_DATE](https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https%3A%2F%2Flegopitstop.github.io%2FUpdate_Checker%2Fexamples%2Fupdate2.json&mcversion=1.17&modversion=1.7.0)
## Table of Contents
- [Example Pages](#example-pages)
- [Supported Packs](#aupported-packs)
- [JSON](#json)
    - [Schema](#schema)
        - [Inside JSON](#inside-json)
        - [Visual Studio Code](#visual-studio-code)
    - [Syntax](#syntax)
    - [Example](#example)
- [Premium Members](#premium-members)
    - [Additional Syntax](#additional-syntax)
- [Background Options](#background-options)
- [Changelog Format](#changelog-format)

## Supported Packs
well.. It seems no packs use this yet...

[Back to top](#)

## JSON
### Schema
#### Inside JSON
- Inside any JSON file you can add the below tag to add the schema to help you make your update JSON.
```json
{
    "$schema": "https://legopitstop.github.io/Update_Checker/schema.json"
}
```
#### Visual Studio Code
1. Open vsc settings (`Ctrl` + `,`)
2. Open the settings JSON (![](/Update_Checker/files/theme/images/open_settings_json_vsc.png) icon on the top right)
3. Paste the below JSON inside the settings JSON.
```json
{
    "json.schemas": [
        {
            "name": "Pack Update JSON",
            "description": "A schema for https://legopitstop.github.io/Update_Checker/update-checker.html",
            "fileMatch": [
                "update.json"
            ],
            "url": "https://legopitstop.github.io/Update_Checker/schema.json",
        }
    ]
}
```
4. Now save the file (`Ctrl` + `S`)
5. Done! If you renamed a JSON file to `update.json` it should use the schema!

[Back to top](#)
### Syntax
```
homepage: String - The url to bring the use when the version is outdated.
promos: Object
    <mcversion>: <modversion> - mcversion must end in `-recommended` ex: "1.13-recommended":"1.3.5-pre1"
<mcversion>: Object
    <modversion>: String - The changelog for the modversion. This includes custom formatting. #Changelog-Format
```

[Back to top](#)

### Example
below you can find the example JSON file. View the [Live example](https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https%3A%2F%2Flegopitstop.github.io%2FUpdate_Checker%2Fexamples%2Fupdate.json&mcversion=1.17&modversion=1.7.0)
```jsonc
{
    "__comment": "This is a premium URL, premium features will be optionally loaded.",
    "$schema": "https://github.com/legopitstop/Update_Checker/blob/main/schema.json", // Use the JSON Schema

    "homepage": "https://example.com", // The homepage if the pack is out of date.
    "premium:description": { // Since this is a premium URL we can use premium features. Premium features will usually have the namespace "premium". Premium features are always optional.
        "title": "Example",
        "favicon": "deepslate_tiles",
        "theme": "deepslate_tiles"
    },
    "1.17": { // All changelogs for mc version 1.17
        "1.7.0": "This is the changelog that is from the JSON! * It provides some custom in-line formatting! \nLike the following: * bullets that use '*', '-', and '-' * replacement texts for example '{{HOMEPAGE}}' will return the homepage inside the JSON!",
        "1.6.0": "* 1.17.1-1.6.0"
    },
    "1.16": { // All changelogs for mc version 1.16
        "1.5.0": "* 1.16.5-1.5.0",
        "1.4.0": "* 1.16.5-1.4.0"
    },
    "promos": {
        "1.17-recommended": "1.7.0", // The recomended mod version for mc 1.17
		"1.17-latest": "1.7.0", // Note that right now (v1.0.0) of Update Checker does not use '-latest' but may be used in the future, for now just use '-recomended'
        "1.16-recommended": "1.5.0",
		"1.16-latest": "1.5.0"
    }
}
```

[Back to top](#)

## Premium Members
### Additional Syntax
```
premium_badge: Boolean (true)
premium:description:
    title:
    theme: Enum #Preset-Backgrounds
    theme: Object
        type: Enum [url, preset, base64, animated] The type to use for the background. when `animated` use `animation` instead of `value`
        value: String
        animation:
            type: Enum [scroll] The type of animation to use. Only excepts `scroll`
            speed: Integer (40) The speed of the scrolling. In seconds
            direction: Enum [^,v,<,>,up,down,left,right,up-left,up-right,down-left,down-right]
            repeat: Boolean (true) When true it will repeat the texture to fill the page.
            resize: Boolean (true) When true it will resize the image to 256px squared.
    favicon: Enum #Preset-Backgrounds
    favicon: Object
        type: Enum [url, preset, base64]
        value: String

premium:style: Object
    color: String (#ffffff) - Any CSS3 color
    background_color: String (#000000) - Any CSS3 color
    border_color: String (#000000) - Any CSS3 color
    border_radius: Integer (20) - The radius of the border.
    button:
        color: String (#ffffff) - Any CSS3 color
        background_color: String (#777777) - Any CSS3 color
        border_radius: Integer (10) - The radius of the border.
        hoverEvent:
            color: String (#ffffff) - Any CSS3 color
            background_color: String (#555555) - Any CSS3 color
            border_radius: Integer (10) - The radius of the border.

    scrollbar: Object
        slider:
            background_color: String (#777777) - Any CSS3 color
            border_radius: Integer (10) - The radius of the border.
            hoverEvent:
                background_color: String (#555555) - Any CSS3 color
                border_radius: Integer (10) - The radius of the border.
        track:
            background_color: String (#777777) - Any CSS3 color
            border_radius: Integer (10) - The radius of the border.
            hoverEvent:
                background_color: String (#555555) - Any CSS3 color
                border_radius: Integer (10) - The radius of the border.
```

[Back to top](#)

## Background Options
`Name` is the name of the background that is used in the dropdown theme. `ID` is the name of the background in the URL, or preset JSON theme.
| Name                | ID                    |
| - | - |
| Deepslate           | `deepslate` (default) |
| Polished Deepslate  | `polished_deepslate`  |
| Deepslate Tiles     | `deepslate_tiles`     |
| Dirt                | `dirt`                |
| Stone               | `stone`               |
| Smooth Stone        | `smooth_stone`        |
| Granite             | `granite`             |
| Polished Granite    | `polished_granite`    |
| Diorite             | `diorite`             |
| Polished Diorite    | `polished_diorite`    |
| Andesite            | `andesite`            |
| Polished Andesite   | `polished_andesite`   |
| Cobblestone         | `cobblestone`         |
| Tuff                | `tuff`                |
| Calcite             | `calcite`             |
| Snow                | `snow`                |
| Prismarine          | `prismarine`          |
| Prismarine Bricks   | `prismarine_bricks`   |
| Dark Prismarine     | `dark_prismarine`     |
| Tube Coral Block    | `tube_coral_block`    |
| Brain Coral Block   | `brain_coral_block`   |
| Bubble Coral Block  | `bubble_coral_block`  |
| Fire Coral Block    | `fire_coral_block`    |
| Horn Coral Block    | `horn_coral_block`    |
| Netherrack          | `netherrack`          |
| Basalt              | `basalt`              |
| Smooth Basalt       | `smooth_basalt`       |
| Polished Basalt     | `polished_basalt`     |
| Blackstone          | `blackstone`          |
| Polished Blackstone | `polished_blackstone` |
| Lava                | `lava`                |
| End Stone           | `end_stone`           |
| Bedrock             | `bedrock`             |
| Oak Planks          | `oak_planks`          |
| Spruce Planks       | `spruce_planks`       |
| Birch Planks        | `birch_planks`        |
| Jungle Planks       | `jungle_planks`       |
| Acacia Planks       | `acacia_planks`       |
| Dark Oak Planks     | `dark_oak_planks`     |
| Crimson Planks      | `crimson_planks`      |
| Warped Planks       | `warped_planks`       |
| Coral Block         | `coal_block`          |
| Iron Block          | `iron_block`          |
| Copper Block        | `copper_block`        |
| Exposed Copper      | `exposed_copper`      |
| Weathered Copper    | `weathered_copper`    |
| Oxidized Copper     | `oxidized_copper`     |
| Redstone Block      | `redstone_block`      |
| Lapis Block         | `lapis_block`         |
| Gold Block          | `gold_block`          |
| Diamond Block       | `diamond_block`       |
| Emerald Block       | `emerald_block`       |
| Amethyst Block      | `amethyst_block`      |
| Quartz Block        | `quartz_block`        |
| Netherite Block     | `netherite_block`     |
| Ancient Debris      | `ancient_debris`      |
| Slime Block         | `slime_block`         |
| Honey Block         | `honey_block`         |
| Honeycomb Block     | `honeycomb_block`     |
| White Concrete      | `white_concrete`      |
| Orange Concrete     | `orange_concrete`     |
| Magenta Concrete    | `magenta_concrete`    |
| Light Blue Concrete | `light_blue_concrete` |
| Yellow Concrete     | `yellow_concrete`     |
| Lime Concrete       | `lime_concrete`       |
| Pink Concrete       | `pink_concrete`       |
| Gray Concrete       | `gray_concrete`       |
| Light Gray Concrete | `light_gray_concrete` |
| Cyan Concrete       | `cyan_concrete`       |
| Purple Concrete     | `purple_concrete`     |
| Blue Concrete       | `blue_concrete`       |
| Brown Concrete      | `brown_concrete`      |
| Green Concrete      | `green_concrete`      |
| Red Concrete        | `red_concrete`        |
| Black Concrete      | `black_concrete`      |
| Missing             | `missing`             |
| None                | `none`                |

[Back to top](#)

## Changelog Format
Changelogs inside the JSON have some special formatting like [Markdown](https://en.wikipedia.org/wiki/Markdown). Changelogs also support a select few GitHub emojis [view list](emojis.md)

| Character(s) | replaced with |
| - | - |
| `<br>` or `</br>` | `\n` |
| `- `, `+ ` or `* ` (with 1 space after) | `\n• `(with 1 space after) |
| `{{MCVERSION}}` | Returns the Minecraft version from the URL |
| `{{MODVERSION}}` | Returns the Mod version from the URL |
| `{{RECOMMENDEDVERSION}}` | Returns the recommended mod version from the JSON |
| `{{LATESTVERSION}}` | Returns the latest mod version from the JSON |
| `{{HOMEPAGE}}` | Returns the home page URL from the JSON |
| `{{URLDATA}}` | Returns the data in the URL |
| `{{UPDATEJSONURL}}` | Returns the JSON that it is getting all the info from |
| `{{UPDATEJSONURL: pretty-print}}` | Returns the JSON that it is getting all the info from but in pretty-print |
| `{{UPDATECHECKERVERSION}}` | Returns the current verison of the update checker |
| HTML Tags | Gets removed |
| Markdown image | Gets replaced with the image url |
| Markdown Url | Gets replaced with the url |

[Back to top](#)