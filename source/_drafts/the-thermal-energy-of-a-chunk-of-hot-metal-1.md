---
title: The Thermal Energy of a Chunk of HOT Metal
url: 413.html
id: 413
categories:
  - Uncategorized
tags:
---

From previous blog posts, 8000cm3 is the max volume for the crucible. I plan on casting aluminum, copper, and iron alloys. Each of these have different properties but the formula for calculating the thermal energy is the same. Please be aware that these values are approximations, alloys of these metals can have very different properties. I'm using these values to get the furnace melting capabilities in the ball park. Properties of Metals

Metal

Density $latex \\rho$ $latex (\\frac{g}{cm^3})$

Mean Specific Heat of Solid $latex c_s$ $latex (\\frac{kJ}{kg*K})$

Heat of Fusion $latex \\Delta H_{fus}$ $latex (\\frac{kJ}{kg})$

Mean Specific Heat of Liquid $latex c_l$ $latex (\\frac{kJ}{kg*K})$

Melting Point $latex (K)$

Average Pouring Temperature $latex (K)$

Thermal Energy Content at pouring temperature $latex U_{total}$ $latex (\\frac{kJ}{kg})$

Al

2.67112

1.038128

393.094

1.08836

930

1022

1149

Cu

8.95448

0.435344

211.666

0.464646

1356

1477

728

Fe

7.863888

0.69069

207.014

0.6279

1803.15

1873.15

1290

At this point, I will only consider the metal as my system. I don't care what causes the temp to rise, that will come later, just that it does; however, I want to know how much energy is put into the system. We know that the temperature will rise from [SATP](http://en.wikipedia.org/wiki/Standard_temperature_and_pressure "Standard Ambient Temperature and Pressure") 298K to the pouring temperature which is dependent on the alloy. I'll be using aluminum for the calculations. I'm using the equations for internal energy change for an incompressible substance. u1 is the energy transferred from SATP to the melting point. $latex u\_1=mc\_{s} \\Delta T$ u2 is the energy transferred to completely melt the solid alloy. $latex u\_2=m \\Delta H\_{fus}$ u3 is the energy transferred from the liquidus to the pour temperature. $latex u\_3=mc\_{l} \\Delta T$ So we want to calculate the total energy change for a 1kg aluminum chunk. $latex \\sum u\_n = u\_1 + u\_2 + u\_3$ Substituting values, we get: $latex U_{Al} = 1\*1.038\*(930 - 298) + 1\*393 + 1\*1.088(1022-930)$ Then: $latex U_{Al} = 1149 \\frac{kJ}{kg}$ Every kilogram of aluminum will need 1149kJ of energy to melt. The max volume of our crucible is from a previous post 7262cm3. $latex U_{pour} = V_{crucible} * \\rho \*U_{Al} $ $latex U_{pour} = 7262 \* 0.00267112 * 1149$ $latex U_{pour} = 22287 kJ$ I want to cast metal every thirty minutes. $latex P_{pour} = 22287/.5$ $latex P_{pour} = 44574 \\frac{kJ}{hr}$ or $latex P_{pour} = 742 \\frac{kJ}{min}$ or $latex P_{pour} = 12 \\frac{kJ}{s}$ Therefore, energy needs to transfer at a rate of $latex 44574 \\frac{kJ}{hr}$ into the metal. This calculation assumes that we have perfect energy transfer. This does not happen. Next post I will bounce some ideas around about the furnace efficiency.