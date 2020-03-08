---
title: OSMF Tilting Mechanism Statics
url: 546.html
id: 546
categories:
  - OSMF
tags:
---

To complete the static analysis of the  tilting mechanism, I needed to figure out the full furnace mass. The propane tank and Ikea flower pot were weighed on a scale. The refractory densities were found [here](http://bryantrefractory.com/uploads/products/6_9.pdf). More complete MSDS can be found [here](http://www.hwr.com/default). My total furnace mass using the heaviest refractory and alloy was well within the [limits of the 1.5 ton harbor freight scissor jack](http://outlyingoutlier.com/2014/04/28/osmf-tilting-mechanism/).

item

volume of item(cm^3)

density (g/cm^3)

mass of item(kg)

force (kg*m/s^2) (N)

propane tank

7.8

76.44

molten metal Al

8000

2.67112

21.36896

209.415808

molten metal Cu

8000

8.95448

71.63584

702.031232

crucible

2

19.6

refractory (kast-o-lite)

32630.9181

1.425647645

46.5201915454661

455.897877145568

refractory(HPV)

32630.9181

1.762036415

57.49686596

563.4692864

mass (kg)

force mxg (N)

Total mass of furnace with Al

88.66582596

Total force Al

868.9250944

Total mass of furnace with Cu

138.932706

Total force Cu

1361.540518

My heaviest computed value was 140 kg; almost 3 times less than the most critical value at six inches. Below is analysis of both melting and pouring positions: The red arrow indicates the downward force of the furnace onto the scissor jack, and the red triangle indicates the geometry of the scissor jack placement.  I'm assuming that frictionless pins connect the ends, and that the loads are only applied at the joints. \[caption id="attachment_552" align="aligncenter" width="620"\][![Scissor Jack Archetecture Melting Position](http://outlyingoutlier.files.wordpress.com/2014/05/scissor-jack-archetecture-melting1.png?w=620)](http://outlyingoutlier.files.wordpress.com/2014/05/scissor-jack-archetecture-melting1.png) Scissor Jack Archetecture Melting Position\[/caption\] The first step is to create a free body diagram for the entire truss and find the forces acting on it. $latex F_{cy}$ is the force from the furnace on the truss system and all the angles are in degrees. Given: $latex F_{cy} = 1362N, \\theta = 21.2, \\phi = 41.6, \\omega = 21.2, \\psi = 45, \\beta = 45, \\alpha = 41.6,$ $latex \\overline{ab} = 212.8mm, \\overline{ac} = 231.9mm, \\overline{bc} = 80.3mm$ Sum of the moments about b is zero: $latex \\sum M\_b = 0$ $latex \\overline{bc}\\cos\\theta\\times F\_{cy} - \\overline{ab}\\cos\\phi\\times F_{ay} = 0$ $latex F_{ay} = \\frac{\\overline{bc}\\cos\\theta}{\\overline{ab}\\cos\\phi}\\times F_{cy}$ plug in values: $latex F_{ay} = 1838.7N$ Sum of the forces along the x axis on the truss system is zero: $latex \\sum F\_x = 0$ Sum of the forces along the y axis on the truss system is zero: $latex \\sum F\_y = 0$ $latex F_{ay} - F_{by} - F_{cy} = 0$ $latex F_{by} = F_{ay} - F_{cy}$ $latex F_{by} = 1838.7 - 1362$ $latex F_{by} = 476.7N$ Now the forces acting on point c (because of two unknown forces along the trusses we need a system of two equations): Sum of the forces along the x axis acting on point c equal zero (static analysis): $latex \\sum F\_x = 0$ $latex 0 - F\_{bc}\\cos\\omega + F_{ac}\\cos\\psi = 0$ $latex F_{ac} = F_{bc} \\times \\frac{\\cos\\omega}{\\cos\\psi}$ Sum of the forces along the y axis acting on point c equal zero (static analysis):: $latex \\sum F\_y = 0$ $latex -F\_{cy} + F_{ac}\\sin\\psi + F_{bc}\\sin\\omega = 0$ Substituting $latex F_{bc} \\times \\frac{\\cos\\omega}{\\cos\\psi}$ for $latex F_{ac}$ and solving for $latex F_{bc}$: $latex F_{bc} = \\frac{1}{\\frac{\\cos\\omega\\sin\\psi}{\\cos\\psi}+\\sin\\omega} \\times F_{cy}$ plug and chug: $latex F_{bc} = 1051.46N$ $latex F_{ac} = 1385.15N$ Now by analyzing the forces on point b, I can completely know the forces acting on each member of the truss system: Sum of the forces along the x axis acting on point b equals zero (static analysis): $latex \\sum F\_x = 0$ $latex 0 - F\_{ac}\\cos\\beta + F_{ab}\\cos\\alpha = 0$ $latex F_{ab} = F_{ac}\\frac{\\cos\\beta}{\\cos\\alpha}$ plug and chug: $latex F_{ab} = 1308.88N$ And now to check our work, The sum of the forces in the y direction acting on point b should equal 0. $latex \\sum F\_y = 0$ $latex F\_{by} - F_{ac}\\sin\\beta - F_{ab}\\sin\\alpha = 0 ?$ $latex -0.006659 \\approx 0$ My computed value is close to zero, this difference is due to rounding errors. For the furnace pouring position, I'm just showing the truss geometry and the calculated values. \[caption id="attachment_548" align="aligncenter" width="620"\][![scissor jack archetecture pouring position](http://outlyingoutlier.files.wordpress.com/2014/05/scissor-jack-archetecture-pouring.png?w=620)](http://outlyingoutlier.files.wordpress.com/2014/05/scissor-jack-archetecture-pouring.png) scissor jack archetecture pouring position\[/caption\] $latex F_{ac} = 875.77N$ $latex F_{bc} = 540.71N$ $latex F_{ab} = 232.49N$ When I compared the values from the melting to pouring positions, I noticed that more torque is applied to the truss system in the melting position, which leads higher force values, as opposed to the pouring position and less torque being applied to the truss system, therefore smaller force values.