const coords = {
    //Washington Parish
    "70450": [ 606,  37],
    "70438": [ 672,  90],
    "70426": [ 771,  48],
    "70427": [ 750, 138],

    //St. Tammany Parish
    "70431": [ 738, 212],
    "70435": [ 679, 236],
    "70437": [ 639, 192],
    "70433": [ 670, 270],
    "70420": [ 753, 264],
    "70452": [ 812, 289],
    "70461": [ 858, 385],
    "70458": [ 811, 383],
    "70460": [ 790, 348],
    "70445": [ 752, 322],
    "70448": [ 713, 322],
    "70471": [ 694, 310],
    "70447": [ 640, 289],

    //Tangipahoa Parish
    "70444": [ 540,  50],
    "70465": [ 504,  65],
    "70436": [ 499,  95],
    "70456": [ 500, 113],
    "70422": [ 585, 120],
    "70442": [ 577, 159],
    "70443": [ 510, 195],
    "70446": [ 565, 188],
    "70401": [ 521, 234],
    "70455": [ 576, 239],
    "70403": [ 512, 265],
    "70454": [ 570, 314],
    "70421": [ 544, 354],
    "70451": [ 520, 231],

    //Orleans Parish
    "70129": [ 779, 465],
    "70128": [ 745, 481],
    "70127": [ 736, 490],
    "70126": [ 721, 496],
    "70122": [ 688, 502],
    "70119": [ 687, 518],
    "70124": [ 672, 501],
    "70118": [ 668, 530],
    "70125": [ 673, 530],
    "70115": [ 678, 543],
    "70113": [ 690, 534],
    "70130": [ 693, 538],
    "70112": [ 696, 524],
    "70116": [ 700, 520],
    "70117": [ 713, 514],
    "70114": [ 712, 533],
    "70131": [ 721, 540],

    //St. Bernard Parish
    "70032": [ 731, 516],
    "70043": [ 743, 525],
    "70075": [ 764, 540],
    "70092": [ 772, 560],
    "70085": [ 832, 576],

    //Plaquemines Parish
    "70037": [ 725, 574],
    "70040": [ 745, 582],
    "70083": [ 782, 705],
    "70082": [ 806, 707],
    "70041": [ 893, 792],
    "70091": [ 932, 822],

    //Jefferson Parish
    "70002": [ 654, 499],
    "70005": [ 663, 500],
    "70001": [ 653, 512],
    "70121": [ 653, 524],
    "70123": [ 637, 534],
    "70003": [ 633, 508],
    "70006": [ 644, 498],
    "70065": [ 612, 490],
    "70062": [ 605, 511],
    "70094": [ 640, 557],
    "70072": [ 671, 593],
    "70058": [ 698, 571],
    "70053": [ 705, 540],
    "70056": [ 715, 550],
    "70067": [ 675, 630],
    "70036": [ 656, 650],

    //St. Charles Parish
    "70070": [ 593, 570],
    "70087": [ 593, 513],
    "70047": [ 568, 508],
    "70079": [ 543, 500],
    "70057": [ 512, 509],
    "70080": [ 528, 572],
    "70039": [ 558, 562],
    "70030": [ 548, 598],
    "70070": [ 587, 602],

    //St. John the Baptist Parish
    "70068": [ 511, 434],
    "70084": [ 473, 465],
    "70051": [ 440, 461],
    "70049": [ 452, 504],

    //St. James Parish
    "70090": [ 411, 523],
    "70052": [ 427, 472],
    "70071": [ 424, 481],
    "70763": [ 399, 480],
    "70723": [ 367, 472],
    "70086": [ 346, 491],
}

function go() {
    d3.csv('./by1000.csv', function(data, idx) {
        return {
            start: data.livezip,
            end: data.workzip,
            population: data.population
        }
    }, function(data_arr) {
        const nodes = []
        let otherCount = 1;
        for(let i = 0; i < data_arr.length; i++) {
            let pop = parseInt(data_arr[i].population),
                home = data_arr[i].start,
                work = data_arr[i].end;

                if (pop > 399)
                    if (work == "other") {
                        let newWork = "O1";
                        if (otherCount > 50)
                            newWork = "O1";
                        else if (otherCount > 45)
                            newWork = "O2";
                        else if (otherCount > 35)
                            newWork = "O3";
                        else if (otherCount > 30)
                            newWork = "O4";
                        else if (otherCount > 25)
                            newWork = "O5";
                        else if (otherCount > 10)
                            newWork = "O6";
                        else if (otherCount > 5)
                            newWork = "O7"
                        else if (otherCount > 0)
                            newWork = "O8";

                        nodes.push({id: i, radius:4, time: 0, path: [home, newWork]});
                        otherCount++;
                    }
                    else
                        nodes.push({id: i, radius: 4, time:0, path: [home, work]});
        }

        const lineFunction = d3.line()
            .x(function(d) {
                return d.x
            })
            .y(function(d) {
                return d.y
            })
            .curve(d3.curveLinear);

        const width = 1258, height = 823;

        const simulation = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(0))
            .force('x', d3.forceX().x(function(d) {
                return coords[d.path[d.time]][0];
            }))
            .force('y', d3.forceY().y(function(d) {
                return coords[d.path[d.time]][1];
            }))
            .force('collision', d3.forceCollide().radius(function(d) {
                return d.radius+5;
            }))
            .velocityDecay(.7)
            .alphaTarget(1)
            .on('tick', ticked);

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);
                
            svg.append("image")
                .attr("xlink:href", "southeast-region.png")
            /*
            svg.append("image")
                .attr("xlink:href", "I-10.png")
                .attr("x", "870")
                .attr("y", "310")
                .attr("width", "50")
                .attr("heigh", "70")

            svg.append("image")
                .attr("xlink:href", "I-49.png")
                .attr("x", "320")
                .attr("y", "70")
                .attr("width", "50")
                .attr("heigh", "70")
            
        var int_10 = svg.append("path")
                    .attr("d", lineFunction(interstate_10))
                    .attr("stroke-width", 10)
                    .attr("stroke", "orange")
                    .attr("opacity", 0.8)
                    .attr("fill","none")
                        
            int_49 = svg.append("path")
                    .attr("d", lineFunction(interstate_49))
                    .attr("stroke-width", 10)
                    .attr("stroke", "orange")
                    .attr("opacity", 0.8)
                    .attr("fill","none");
            */
            g = svg.append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),

            node = g.append("g")
                .attr("stroke", "#fff")
                .attr("stroke-width", 1.5)
                    .selectAll(".node");

        function ticked() {
            let circles = d3.select('svg')
                .selectAll('circle')
                .data(nodes)
                .style("fill", "#0f0f0f")
                .style("stroke-width", 2)
                .style("stroke", "black")

            circles.enter()
                .append('circle')
                .attr('r', function(d) {
                    return d.radius;
                })
                .merge(circles)
                .attr('cx', function(d) {
                    return d.x;
                })
                .attr('cy', function(d) {
                    return d.y;
                });

            circles
                .exit()
                .remove();
        }

        function move() {
            nodes.forEach(function(n) {
                if (n.time == 1)
                    n.time = 0;
                else
                    n.time = 1;
            });
            node = node.data(nodes)

            node.exit()
                .remove();

            simulation.nodes(nodes);
        }

        d3.interval(function() {
            move();
        }, 9000, d3.now());

    });
}

window.onload = function() {

    go();
    
}