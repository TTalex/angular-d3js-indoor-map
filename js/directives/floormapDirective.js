app.directive('floormap', function() {
    return {
        restrict: 'E',
        scope: {
          data: '=',
          width: '=',
          height: '='
        },
        link: function (scope, element, attrs) {
            // Initalize height and width of our working space
            var width = scope.width;
            var height = scope.height;
            // Append main svg element under <floormap>
            var svg = d3.select(element[0]).append("svg")
                .attr("width", width)
                .attr("height", height)
            
            // Append the background image
            svg.append("svg:image")
               .attr('width', width)
               .attr('height', height)
               .attr("xlink:href","images/floorplan.jpg")

            // Create a line object, not data bound to it yet
            var line = d3.svg.line()
                .interpolate("cardinal")
            
            // transition & tween Dash are used to animate the path
            function transition(path) {
              path.transition()
                  .duration(7500)
                  .attrTween("stroke-dasharray", tweenDash)
                  .each("end", function() { d3.select(this).call(transition); });
            }
            function tweenDash() {
              var l = this.getTotalLength(),
                  i = d3.interpolateString("0," + l, l + "," + l);
              return function(t) { return i(t); };
            }
            // We watch changes on the data value
            scope.$watch('data', function (newVal, oldVal) {
                // Skip when newVal is not set
                if (!newVal){
                    return
                }
                // Bind newVal data to our svg object
                svg.datum(newVal);
                // Append a dashed path following our line object
                svg.append("path")
                    .style("stroke", "#666")
                    .style("stroke-dasharray", "4,4")
                    .attr("d", line);
                // Append a path following our line object, this is the animated one
                svg.append("path")
                    .attr("d", line)
                    .call(transition);
                
                // Append dots at each data points
                svg.selectAll(".dot")
                    .data(newVal)
                  .enter().append("circle")
                    .attr("class", "dot")
                    .attr("cx", line.x())
                    .attr("cy", line.y())
                    .attr("r", 5);
            });
        }
    };
});