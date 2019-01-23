---
title: 'Building a "Micro" Furnace: Burner Hole Template Generator'
url: 136.html
id: 136
categories:
  - Uncategorized
date: 2012-07-23 10:55:27
tags:
cover: photo-21.jpg
---
<p>{% asset_img photo-21.jpg  700 400 'Micro furnace burner template' %}</p>

This is the follow up post to building a micro furnace, describing how to make the templates for the intersecting cylinders. I originally wrote wrote this in [Processing](http://processing.org/ "processing.org"). Here it is ported to javascript. Use [Gimp](http://www.gimp.org/ "Gimp"), Photoshop , or any image manipulation program that allows you to resize. The variables you need to define are the diameter of cylinder 1, 2 and the distance from the axis of cylinder 1 to the axis of cylinder 2. Copy the below code into your own Processing script, adjust the user defined variables, and run it; it will display your requested template. Perpendicular Offset Cylinders' Intersection Template Generator. Define the variables. Run the Processing Script. Resize the resulting image in photoshop. 

<label for="cylinder1">Cylinder 1 Diameter</label>
<input type="number" name="number" id="cylinder1" value="1"><br>

<label for="cylinder2">Cylinder 2 Diameter</label>
<input type="number" name="number" id="cylinder2" value="2"><br>

<label for="axis-offset">Axis Offset</label>
<input type="number" name="number" id="axis-offset" value="2"><br>