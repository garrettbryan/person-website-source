(function() {

  var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
          canvas.width = $('#canvas-frame').width();
          canvas.height = $('#canvas-frame').height();
          drawStuff(); 
  }

  function drawStuff() {

    $('#render').click(getIntersection);
    $('#clear').click(clear);

      // do your drawing stuff here
    var Intersection = function(c1dtemp, c2dtemp, id, intervals, units){
      this.c1 = new Cylinder(parseFloat(c1dtemp, 10)); //c1 is the larger of the two cylinders
      this.c2 = new Cylinder(parseFloat(c2dtemp, 10));
      this.id = parseFloat(id, 10);
      this.a = this.id - this.c2.r();
      this.b = this.id + this.c2.r();
      this.intervals = [...Array(parseInt(intervals, 10)).keys()];
      this.height = document.getElementById('canvas').offsetHeight;
      this.units = units;
      
      this.CylinderMapping = this.intervals.map((i) => {
        return this.projectPointOnToCylinder(i);
      });
      this.CylinderMapping.push(this.projectPointOnToCylinder(this.intervals.length))
    

      this.PlaneMapping = this.intervals.map((i) => {
        return this.projectPointOnToPlane(i);
      });
      this.PlaneMapping.push(this.projectPointOnToPlane(this.intervals.length))
    
      this.arclengthmax = Math.max.apply(Math, this.CylinderMapping.map(function(o) {
        return Number.isNaN(o.x) ? -Infinity : o.x; 
      }));
      this.arclengthmin = Math.min.apply(Math, this.CylinderMapping.map(function(o) {
        return Number.isNaN(o.x) ? Infinity : o.x; 
      }, this));
       
      switch (this.units) {
        case 'cm':
        this.scale = document.getElementById('canvas').offsetWidth/ 27.94;
        break;
        case 'inch':
        this.scale = document.getElementById('canvas').offsetWidth/ 11;
        break;
        case 'fit':
        this.scale = (document.getElementById('canvas').offsetWidth / (this.arclengthmax-this.arclengthmin));
        break;
      }
    
      this.maxY = this.scale * Math.max.apply(Math, this.CylinderMapping.map(function(o) {
        return Number.isNaN(o.y) ? -Infinity : o.y; 
      }, this));

    }
    
    Intersection.prototype.render = function (canvas) {
      var that = this;
    
      ctx.beginPath();
      ctx.strokeStyle = 'blue';
      ctx.moveTo(this.CylinderMapping[0].x,-this.CylinderMapping[0].y);
      this.CylinderMapping.forEach(function(point) {
        point.translateToCanvas(that).scaleToCanvas(that);
        ctx.lineTo(point.x,point.y);
      });
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(this.CylinderMapping[0].x,-this.CylinderMapping[0].y);
      this.CylinderMapping.forEach(function(point) {
        ctx.lineTo(point.x,-point.y);
      });
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, this.maxY);
      ctx.lineTo(this.CylinderMapping[this.CylinderMapping.length-1].x,this.maxY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -this.maxY);
      ctx.lineTo(this.CylinderMapping[this.CylinderMapping.length-1].x,-this.maxY);
      ctx.stroke();

      console.log(this);
    }
    
    Intersection.prototype.projectPointOnToCylinder = function(interval) {
      var x = this.c1.r() * ( Math.asin((this.a + interval * (( this.c2.d ) / this.intervals.length )) / this.c1.r() ));
      var y = Math.sqrt( Math.pow(this.c2.r(),2) - Math.pow(this.a + interval * ( this.c2.d / this.intervals.length ) - (( this.a + this.b ) / 2 ), 2)) || 0;
      return new Point(x, y);
    }
    
    Intersection.prototype.projectPointOnToPlane = function(interval) {
      var x = interval * (this.c2.d / this.intervals.length);
      var y = Math.sqrt(Math.pow(this.c2.r(),2) - Math.pow(this.a + interval * ( this.c2.d / this.intervals.length ) - (( this.a + this.b ) / 2 ), 2));
      return new Point(x, y);
    }
    
    var Point = function(x,y) {
      this.x = x;
      this.y = y;
    }
    
    Point.prototype.scaleToCanvas = function (intersection) {
      this.x = this.x * intersection.scale;
      this.y = this.y * intersection.scale;
      //console.log(this, intersection);
      return this;
    }
    
    Point.prototype.translateToCanvas = function (intersection) {
      this.x = this.x - intersection.arclengthmin;
      this.y = this.y;
      return this;
    }
    
    var Cylinder = function(diameter) {
      this.d = diameter;
    }
    
    Cylinder.prototype.r = function() {
      return this.d/2;
    }

    function getIntersection(e) {
      ctx.save();
      ctx.translate(0, canvas.offsetHeight/2);
      var c1 = $('#cylinder1').val();
      var c2 = $('#cylinder2').val();
      var id = $('#axis-offset').val();
      var intervals = $('#intervals').val();
      var units = $('#units').val();
      var intersection = new Intersection(c1, c2, id, intervals, units);
    
      intersection.render(canvas);
      ctx.restore();
    }
    
    function clear(e) {
      ctx.clearRect(0, -canvas.offsetHeight/2, canvas.offsetWidth, canvas.offsetHeight*2);
    }
  }

  resizeCanvas();

})();