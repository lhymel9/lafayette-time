const coords = {
    //Pointe Coupee Parish
    "70753": [ 345,  80],
    "70715": [ 370, 220],
    "70747": [ 440, 220],
    "70759": [ 455, 290],
    "70732": [ 445, 320],
    "70760": [ 550, 280],
    "70783": [ 595, 320],
    "70749": [ 590, 355],
    "70736": [ 648, 347],
    "70773": [ 635, 370],
    "70752": [ 600, 390],
    "70762": [ 535, 382],
    "70755": [ 515, 365],
    "70729": [ 577, 422],
    "70756": [ 435, 425],

    //West Feliciana Parish
    "70775": [ 630, 175],
    "70787": [ 545,  50],
    "70782": [ 473,  88],
    "70712": [ 467,  48],

    //East Feliciana Parish
    "70761": [ 825,  50],
    "70748": [ 740, 150],
    "70730": [ 825, 195],
    "70789": [ 855, 110],
    "70722": [ 950, 175],
    "70777": [ 865, 265],

    //St. Helena Parish
    "70441": [1080, 140],
    "70444": [1160,  95],
    "70422": [1150, 252],
    "70453": [1030, 285],

    //Livingston Parish
    "70443": [1171, 363],
    "70711": [1177, 425],
    "70744": [1124, 439],
    "70754": [1076, 537],
    "70462": [1152, 616],
    "70449": [1121, 691],
    "70733": [1016, 612],
    "70466": [1217, 404],
    "70403": [1200, 493],
    "70726": [ 954, 508],
    "70706": [ 956, 356],

    //East Baton Rouge
    "70739": [ 898, 426],
    "70770": [ 887, 335],
    "70791": [ 833, 315],
    "70714": [ 792, 381],
    "70811": [ 797, 428],
    "70818": [ 853, 419],
    "70807": [ 735, 417],
    "70805": [ 756, 463],
    "70812": [ 802, 446],
    "70814": [ 825, 474],
    "70819": [ 879, 478],
    "70815": [ 854, 487],
    "70806": [ 792, 499],
    "70802": [ 753, 503],
    "70808": [ 783, 536],
    "70820": [ 754, 555],
    "70810": [ 821, 586],
    "70817": [ 895, 552],
    "70809": [ 830, 540],
    "70809": [ 827, 553],
    "70801": [ 746, 440],

    //West Baton Rouge Parish
    "70767": [ 678, 487],
    "70729": [ 647, 374],
    "70719": [ 670, 558],
    "70710": [ 677, 593],

    //Iberville Parish
    "70764": [ 674, 634],
    "70780": [ 749, 625],
    "70776": [ 810, 627],
    "70788": [ 749, 745],
    "70721": [ 790, 704],
    "70740": [ 603, 573],
    "70772": [ 555, 505],
    "70757": [ 527, 535],

    //Ascension Parish
    "70346": [ 852, 776],
    "70734": [ 872, 695],
    "70737": [ 935, 692],
    "70769": [ 910, 606],
    "70725": [ 903, 766],
    "70778": [ 985, 745],
    "70774": [1014, 674],
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
                .attr("xlink:href", "capital-region.png")
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