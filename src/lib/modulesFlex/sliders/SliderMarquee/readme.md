# SliderMarquee

Marquee which uses the Splide slider libary

<br>

![preview](preview.png)

<br>

Can receive information via :
- Parent component
- Slice Function

<br>

Receives text and also the direction "ltr" or "rtl"

<br>

Array structure which needs to be inserted

````
let exampleData = {
    "direction": "ltr",
    "text": [
        {
            "type": "heading1",
            "text": "This is a repeating cool text.",
            "spans": []
        }
    ]
}
````