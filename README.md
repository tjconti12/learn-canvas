# learn-canvas

## What is canvas?
`<canvas>` is an html element that can be used to draw graphics on your website! With canvas, you can draw shapes, animations, or even photos!

The `<canvas>` element is a container for the graphics that you draw using javascript. Think of it as a clear canvas and which a painter paints on!
![Blank Canvas](https://joshhmiller.com/wp-content/uploads/2019/08/blank-canvas-trap.jpeg)

Canvas supports several methods for drawing graphics, such as paths, boxes, circles, text, and images.

Here is an example of our empty canvas on the screen! (A black border was added to make the canvas visible)
```html
<canvas id="canvas" style="border:2px solid black"></canvas>
```
![Blank Canvas on screen]()

## How to use Canvas
### HTML Tag
First we need to add a canvas html element to our `index.html`.
```html
<canvas id="canvas" style="border:2px solid black"></canvas>
```
We can add this anywhere to our `body`. Lets add it right after our `<h1>` tag!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn Canvas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Learn Canvas!</h1>
    <canvas id="canvas" style="border:2px solid black"></canvas>
    <script src="./script.js"></script>
</body>
</html>
```
### The rendering context
The `<canvas>` element creates a fixed-size surface for us to draw on. In order to create or manipulate content on the canvas, we need to access the canvas rendering context. There are different types of rendering (2D, 3D), but we will focus on 2D rendering in this lesson. 

In order to access the 2D rendering context, we need to first grab the canvas DOM element in our `script.js` file.
```js
  const
```
