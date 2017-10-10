window.onload = function() {

    const lineFunction = d3.line()
            .x(function(d) {return d.x})
            .y(function(d) {return d.y})
            .curve(d3.curveLinear);

    const z07_data = [ {"x": 330, "y":   0},
                       {"x": 810, "y":   0},
                       {"x": 810, "y":  55},
                       {"x": 340, "y": 255},
                       {"x": 300, "y": 100},
                       {"x": 330, "y":   0}, ];

    const z01_data = [ {"x": 425, "y": 220},
                       {"x": 442, "y": 262},
                       {"x": 442, "y": 342},
                       {"x": 482, "y": 410},
                       {"x": 600, "y": 510},
                       {"x": 670, "y": 460},
                       {"x": 810, "y": 460},
                       {"x": 810, "y":  55}, ];

    const z08_data = [ {"x": 750, "y": 460},
                       {"x": 750, "y": 755},
                       {"x": 565, "y": 905},
                       {"x": 275, "y": 905},
                       {"x": 255, "y": 825},
                       {"x": 600, "y": 510},
                       {"x": 670, "y": 460},
                       {"x": 750, "y": 460}, ];
    
    const z03_data = [ {"x": 275, "y": 905},
                       {"x": 255, "y": 825},
                       {"x": 600, "y": 510},
                       {"x": 520, "y": 445},
                       {"x": 430, "y": 505},
                       {"x": 315, "y": 545},
                       {"x": 135, "y": 805},
                       {"x":  65, "y": 905}, ];

    const z06_data = [ {"x": 425, "y": 220},
                       {"x": 442, "y": 262},
                       {"x": 442, "y": 342},
                       {"x": 520, "y": 445},
                       {"x": 430, "y": 505},
                       {"x": 315, "y": 545},
                       {"x": 135, "y": 805},
                       {"x":  65, "y": 905},
                       {"x":   0, "y": 750},
                       {"x":   0, "y": 500},
                       {"x": 230, "y": 345},
                       {"x": 330, "y": 345},
                       {"x": 340, "y": 255},
                       {"x": 425, "y": 220}, ];

    const z83_data = [ {"x": 340, "y": 255},
                       {"x": 330, "y": 345},
                       {"x": 230, "y": 345},
                       {"x": 210, "y": 230},
                       {"x": 340, "y": 255}, ];


    const width = 1000, height = 1000;
    const nodes = [{id: 0, radius:3, category: 1}, {id: 1, radius:3, category: 2}, 
                   {id: 2, radius:3, category: 0}, {id: 3, radius:3, category: 3}, 
                   {id: 4, radius:3, category: 4}, {id: 5, radius:3, category: 5}];

    xCenter = [ 535, 630, 280, 260, 355, 550, -50 ]; // 70507, 70501, 70583, 70506, 70503, 70508
    yCenter = [ 90, 285, 300, 480, 620, 720, -50 ];

    const simulation = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(1))
        .force('x', d3.forceX().x(function(d) {
            return xCenter[d.category];
        }))
        .force('y', d3.forceY().y(function(d) {
            return yCenter[d.category];
        }))
        .force('collision', d3.forceCollide().radius(function(d) {
            return d.radius;
        }))
        .alphaTarget(1)
        .on('tick', ticked);

    var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
                .append("image")
                    .attr("xlink:href", "map.png")

        g = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),

        node = g.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
                .selectAll(".node");

    d3.select("body").select("svg").append("path")
        .attr("d", lineFunction(z07_data))
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .style("fill", "red")
        .style("opacity", 0.10);
    
    d3.select("body").select("svg").append("path")
        .attr("d", lineFunction(z01_data))
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .style("fill", "green")
        .style("opacity", 0.10);

    d3.select("body").select("svg").append("path")
        .attr("d", lineFunction(z08_data))
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .style("fill", "orange")
        .style("opacity", 0.10);

    d3.select("body").select("svg").append("path")
        .attr("d", lineFunction(z03_data))
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .style("fill", "grey")
        .style("opacity", 0.10);
    
    d3.select("body").select("svg").append("path")
        .attr("d", lineFunction(z06_data))
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .style("fill", "blue")
        .style("opacity", 0.10);

    d3.select("body").select("svg").append("path")
        .attr("d", lineFunction(z83_data))
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .style("fill", "yellow")
        .style("opacity", 0.10);
    
    function ticked() {
        let circles = d3.select('svg')
            .selectAll('circle')
            .data(nodes);
        
        circles.enter()
            .append('circle')
            .attr('r', function(d) {
                return d.radius;
            })
            .merge(circles)
            .attr('cx', function(d) {
                return d.x
            })
            .attr('cy', function(d) {
                return d.y
            });
        
        circles.exit().remove();
    }

    function move() {
        nodes.forEach(function(node, idx) {
            if (node.category == 5)
                node.category = 0;
            else
                node.category++;
        });

        node = node.data(nodes);

        node.exit()
            .remove();

        simulation.nodes(nodes);
    }

    d3.interval(function() {
        move();
    }, 1000, d3.now());
    
}