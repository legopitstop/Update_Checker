# Update Checker
This project is being worked on, check back to know when everything is all ready to go!

- The main page can be found [update-checker.html](https://legopitstop.github.io/Update_Checker/update-checker.html)
- The generator page can be found [update-checker-generator.html](https://legopitstop.github.io/Update_Checker/update-checker-generator.html)

## Packs that use this!
well.. It seems no packs use this yet...

## JSON
### Schema
#### Inside JSON
#### Visual Studio Code
1. Open vsc settings (`Ctrl` + `,`)
2. Open the settings JSON (icon on the top right)
3. Paste the below JSON inside the settings JSON.
```json
{
    "json.schemas": [
        {
            "name": "Pack Update JSON",
            "description": "A schema for https://legopitstop.github.io/Update_Checker/update-checker.html",
            "fileMatch": [
                "*update.json"
            ],
            "url": "",
        }
    ]
}
```

### Syntax
Soon!
### Example
[Live example](https://legopitstop.github.io/Update_Checker/update-checker.html?updateJSONURL=https%3A%2F%2Flegopitstop.github.io%2FUpdate_Checker%2Fexamples%2Fupdate.json&mcversion=1.17&modversion=1.7.0)
```json
{
    "message":"Coming soon!"
}
```
