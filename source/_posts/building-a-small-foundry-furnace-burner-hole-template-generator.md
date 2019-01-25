---
title: 'Building a Small Furnace: Burner Hole Template Generator'
categories:
  - DIY Metal Founding
date: 2012-07-23 10:55:27
tags:
cover: photo-21.jpg
---

{% pullquote [class] %}
This is the follow up post to building a small furnace, describing how to make the templates for cutting the burner port. 
{% endpullquote %}
<p>{% asset_img photo-21.jpg  700 400 'Small furnace burner template' %}</p>

#### Projecting a Circle onto a Cylindrical Surface
Here is the script I used to create the template to cut the burner hole in the furnace container. The variables you need to define are the diameter of cylinder 1 and diameter of cylinder 2 and the distance from the axis of cylinder 1 to the axis of cylinder 2. The generated image will have the proper proportions. Use a Photoshop like program to scale the image to actual size. Print the template image, transfer the template onto the furnace body (I taped it), and proceed to cut it out (I used a small pneumatic saw). The extended lines help align the template to the furnace body.

<p>{% asset_img intersecting_cylinders4.jpg  700 400 'Micro furnace ramming the lining' %}</p>
<p>{% asset_img photo-3.jpg  700 400 'Micro furnace burner port detail' %}</p>


#### Possible improvements:
  * Templates that fully wrap around cylinder 1
  * Cylinders that intersect at angles other than right angles
  * Intersections of other primitive solids
  * Create images programatically rather than relying on the canvas
  * Generated images should be ready to print
  * Export SVG (or a vector type file)
  * Export tool path gcode
_____
#### Cylinders Intersection Template Generator
{% raw %}
  <link id="custom-css" rel="stylesheet" type="text/css" href="../css/intersecting-cylinders.css"></link>

  <form>
    <label for="cylinder1">Cylinder 1 Diameter</label>
    <input type="number" name="number" id="cylinder1" value="4"><br>
    <label for="cylinder2">Cylinder 2 Diameter</label>
    <input type="number" name="number" id="cylinder2" value="2"><br>
    <label for="axis-offset">Axis Offset</label>
    <input type="number" name="number" id="axis-offset" value="1"><br>
    <label for="units">Units</label>
    <select id="units" >
      <option value="cm">cm</option>
      <option value="inch">inch</option>
      <option value="fit">fit</option>
    </select><br>
    <label for="intervals">Intervals</label>
    <input type="number" name="number" id="intervals" value="200" min="20"><br>
    <button type="button" id="render">Render</button>
    <button type="button" id="clear">Clear</button>
    <button type="button" id="print">Create Image</button>
  </form>
  <div id="container1"> 
    <div id="canvas-frame">
      <canvas id="canvas"></canvas>
    </div> 
  </div>
  <script src="../js/intersecting-cylinders.js" defer></script>

{% endraw %}

