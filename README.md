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

The canvas element can also take width and height properties inside the element tag
```html
<canvas id="canvas" width="150" height="150"></canvas>
```
This will start us off with a 150x150px canvas. **Note**: if you do not specify a height/width, the canvas will default to 300px wide by 150px high.

You could style the canvas using CSS, however images inside of the canvas will render to the aspect ratio set by the canvas element *not* the CSS. (You may get distored images). The size of the canvas can also be set using javascript!

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

Anything placed inside of the `<canvas>` element will act as our alternate in case the brower doesn't support canvas.

```html
<canvas id="canvas">
    This will show if the browser doesn't support canvas
</canvas>
```

### The rendering context
The `<canvas>` element creates a fixed-size surface for us to draw on. In order to create or manipulate content on the canvas, we need to access the canvas rendering context. There are different types of rendering (2D, 3D), but we will focus on 2D rendering in this lesson. 

In order to access the 2D rendering context, we need to first grab the canvas DOM element in our `script.js` file.
```js
    const canvas = document.querySelector('#canvas');
```
Now that we have access to the DOM node, we can access built in methods of the `<canvas>` element. We want to grab the rendering context and set it to a variable (ctx is used by convention). We will pass in `2d` as the only parameter to ensure we grab the 2d rendering context.
```js
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
```

### Things are looking very square
Lets now create our first image on the canvas! We will start by creating a simple square. We need to tell canvas two things in order to do this properly.
    1. Tell canvas what type of shape, how big it should be, and *where* to render it.
    2. What color the shape should be.

Lets tackle the first part! In order to create a square, we need to tell the `ctx` to `fillRect(x, y, width, height)`. This is used to a rectangular shape. The `fillRect()` takes in 4 arguements:
    1. x: The x-axis coordinate of the rectangle's starting point (a value of 0 would start the square at the left side of the canvas)
    2. y: The y-axis coordinate of the rectangle's starting point (a value of 0 would start the square at the top of the canvas)
    3. width: The width of the rectangle
    4. height: The height of the rectangle
   
This is how we can make our first square start all the way to the top left and be 50px x 50px
```js
    ctx.fillRect(0, 0, 50, 50);
```

Now we just need to set the square's color! To affect the styles of a canvas drawing, we can use `fillStyle`!
```js
    ctx.fillRect(0, 0, 50, 50);
    ctx.fillStyle = 'rgb(200, 0, 0)`;
```

Check out your `index.html`! It should look something like this.
![square rendered on canvas]()

Now lets create a second square of the same size that overlaps the first one! We can create a square with a style of `rgba(0, 0, 200, 0.5)` and place it 20px away from the top, and 20px away from the left.

<details>
    <summary>Solution</summary>
    
```js
    ctx.fillRect(20, 20, 50, 50);
    ctx.fillStyle = `rgba(0, 0, 200, 0.5)`;
```
</details>
