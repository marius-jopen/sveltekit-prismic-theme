# NavigationDesktopSimple

Displays a simple navigation bar which is fixed on top

<br>

![preview](preview.png)

<br>

Can receive information via :
- Parent component

<br>

Array structure which needs to be inserted

````
let exampleData = [
    {
        "title": [
            {
                "type": "heading1",
                "text": "Home",
                "spans": []
            }
        ],
        "uid": [
            {
                "type": "heading1",
                "text": "",
                "spans": []
            }
        ],
        "target": false
    },
    {
        "title": [
            {
                "type": "heading1",
                "text": "Projects",
                "spans": []
            }
        ],
        "uid": [
            {
                "type": "heading1",
                "text": "projects",
                "spans": []
            }
        ],
        "target": false
    },
    {
        "title": [
            {
                "type": "heading1",
                "text": "All Slices",
                "spans": []
            }
        ],
        "uid": [
            {
                "type": "heading1",
                "text": "all-slices",
                "spans": []
            }
        ],
        "target": false
    }
]

let exampleData = [
    {
        "type": "heading1",
        "text": "MJ Theme",
        "spans": []
    }
]
````