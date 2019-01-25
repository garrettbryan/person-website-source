---
title: 'Building a "Micro" Furnace: Burner Hole Template Generator'
categories:
  - Uncategorized
date: 2012-07-23 10:55:27
tags:
cover: photo-21.jpg
---

<p>{% asset_img photo-21.jpg  700 400 'Micro furnace burner template' %}</p>

This is the follow up post to building a micro furnace, describing how to make the templates for the intersecting cylinders. I originally wrote wrote this in [Processing](http://processing.org/ "processing.org"). Here it is rewritten as a web app. Use [Gimp](http://www.gimp.org/ "Gimp"), Photoshop , or any image manipulation program that allows you to resize. The variables you need to define are the diameter of cylinder 1, 2 and the distance from the axis of cylinder 1 to the axis of cylinder 2. Copy the below code into your own Processing script, adjust the user defined variables, and run it; it will display your requested template. Perpendicular Offset Cylinders' Intersection Template Generator. Define the variables. Run the Processing Script. Resize the resulting image in photoshop. 

<form>
  <label for="units">Units</label>
  <select id="units" >
  <option value="cm">cm</option>
  <option value="inch">inch</option>
  <option value="fit">fit</option>
  </select>
  <label for="cylinder1">Cylinder 1 Diameter</label>
  <input type="number" name="number" id="cylinder1" value="4"><br>
  <label for="cylinder2">Cylinder 2 Diameter</label>
  <input type="number" name="number" id="cylinder2" value="2"><br>
  <label for="axis-offset">Axis Offset</label>
  <input type="number" name="number" id="axis-offset" value="1"><br>
  <label for="intervals">Intervals</label>
  <input type="number" name="number" id="intervals" value="200" min="20"><br>
  <button type="button" id="render">Render</button>
  <button type="button" id="clear">Clear</button>
  <button type="button" id="Print">Print</button>
</form>

{% raw %}
  <link id="custom-css" rel="stylesheet" type="text/css" href="intersecting-cylinders.css"></link>
  <div id="container1"> 
    <div id="canvas-frame">
      <canvas id="canvas"></canvas>
    </div> 
  </div>
{% endraw %}

<script src="intersecting-cylinders.js" defer></script>
