const interstate_10 = [ {x:1212,y:280},
                        {x:1080,y:315},
                        {x:970,y:285},
                        {x:930,y:290},
                        {x:480,y:430},
                        {x:395,y:462},
                        {x:250,y:455},
                        {x:220,y:455},
                        {x:195,y:470},
                        {x:100,y:470},
                        {x:95,y:475},
                        {x:30,y:472},
                        {x:0,y:465}    ];

const interstate_49 = [ {x:290,y:0},
                        {x:370,y:70},
                        {x:405,y:135},
                        {x:400,y:215},
                        {x:385,y:230},
                        {x:380,y:280},
                        {x:400,y:320},
                        {x:420,y:415},
                        {x:425,y:455},
                        {x:435,y:500},
                        {x:480,y:570},
                        {x:480,y:600},
                        {x:500,y:650},
                        {x:580,y:710},
                        {x:585,y:710},
                        {x:625,y:730},
                        {x:650,y:750},
                        {x:760,y:810},
                        {x:760,y:820},
                        {x:775,y:835},
                        {x:780,y:850},
                        {x:820,y:880},
                        {x:835,y:875},
                        {x:840,y:875},
                        {x:890,y:920},
                        {x:940,y:930},
                        {x:950,y:940},
                        {x:990,y:930},
                        {x:1030,y:920},
                        {x:1060,y:925},
                        {x:1080,y:950},
                        {x:1130,y:950} ];

const coords = {
    "71463": [  65,  0],
    "70586": [ 235,  75],
    "71322": [ 395,  35],
    "70544": [ 700, 745],
    "70589": [ 410, 120],
    "70570": [ 380, 215],
    "70535": [ 145, 250],
    "70512": [ 505, 315],
    "70715": [ 515,  95],
    "70520": [ 420, 385],
    "70517": [ 570, 412],
    "70582": [ 635, 535],
    "70767": [ 955, 535],
    "70788": [1035, 575],
    "70390": [1165, 755],
    "70394": [1135, 905],
    "70380": [1135, 910],
    "70341": [1115, 640],
    "70560": [ 555, 710],
    "70592": [ 445, 590],
    "70577": [ 515, 195],
    "70518": [ 500, 555],
    "70563": [ 645, 645],
    "70513": [ 525, 750],
    "70528": [ 480, 760],
    "70533": [ 425, 750],
    "70538": [ 700, 835],
    "70510": [ 295, 770],
    "70548": [ 205, 925],
    "70555": [ 350, 595],
    "70588": [ 430, 530],
    "70503": [ 410, 515],
    "70501": [ 455, 465],
    "70506": [ 400, 495],
    "70507": [ 425, 430],
    "70584": [ 385, 335],
    "70750": [ 600, 250],
    "70571": [ 595, 205],
    "71353": [ 610, 120],
    "71358": [ 580,  85],
    "71322": [ 400,  35],
    "70583": [ 365, 445],
    "70529": [ 330, 495],
    "70578": [ 250, 450],
    "70516": [ 220, 350],
    "70525": [ 295, 330],
    "70515": [  35, 290],
    "70543": [  80, 390],
    "70526": [ 175, 500],
    "70559": [  75, 550],
    "70531": [  75, 480],
    "70542": [  60, 660],
    "70372": [1165, 865],
    "70339": [1040, 680],
    "70522": [ 690, 615],
    "O1":    [100, -100],
    "O2":    [1050, 275],
    "O3":    [1100, 275],
    "O4":    [1100, 315],
    "O5":    [1315, 800],
    "O6":    [-100, 594],
    "O7":    [-100, 263],
    "O8":    [1115, -100],
    "70342": [1000, 925],
    "70392": [ 945, 925],
    "70514": [ 775, 785],
    "70508": [ 435, 530],
    "70523": [ 797, 767],
    "70519": [ 530, 600],
    "70541": [ 410, 310],
    "70552": [ 680, 615],
    "70524": [ 215, 190],
    "70534": [ 115, 507],
    "70537": [  30, 448],
    "70554": [ 105, 110],
    "70556": [  30, 505],
    "70576": [ 145,   8],
    "70580": [ 142,  98],
    "70585": [ 225, -15],
    "71345": [ 460,  35],
    "71356": [ 460,  15],
    "71367": [ 255, -15],
}

const color_coords = {
    "71463": "red",
    "70586": "blue",
    "71322": "DarkSlateGray",
    "70544": "purple",
    "70589": "black",
    "70570": "Turquoise",
    "70535": "white",
    "70512": "white",
    "70715": "blue",
    "70520": "DarkSlateGray",
    "70517": "purple",
    "70582": "green",
    "70767": "Turquoise",
    "70788": "SaddleBrown",
    "70390": "red",
    "70394": "blue",
    "70380": "DarkSlateGray",
    "70341": "purple",
    "70560": "Turquoise",
    "70592": "SaddleBrown",
    "70577": "red",
    "70518": "blue",
    "70563": "DarkSlateGray",
    "70513": "purple",
    "70528": "green",
    "70533": "black",
    "70538": "white",
    "70510": "red",
    "70548": "blue",
    "70555": "DarkSlateGray",
    "70588": "purple",
    "70503": "green",
    "70501": "Turquoise",
    "70506": "SaddleBrown",
    "70507": "purple",
    "70584": "blue",
    "70750": "DarkSlateGray",
    "70571": "purple",
    "71353": "black",
    "71358": "Turquoise",
    "71322": "SaddleBrown",
    "70583": "red",
    "70529": "blue",
    "70578": "DarkSlateGray",
    "70516": "purple",
    "70525": "green",
    "70515": "blue",
    "70543": "red",
    "70526": "blue",
    "70559": "DarkSlateGray",
    "70531": "white",
    "70542": "#ff1493",
    "70372": "Turquoise",
    "70339": "SaddleBrown",
    "70522": "red",
    "other": "blue",
    "70342": "white",
    "70392": "purple",
    "70514": "green",
    "70508": "black",
    "70523": "black",
    "70519": "red",
    "70541": "red",
    "70552": "purple",
    "70524": "purple",
    "70534": "green",
    "70537": "black",
    "70554": "black",
    "70556": "red",
    "70576": "red",
    "70580": "DarkSlateGray",
    "70585": "purple",
    "71345": "blue",
    "71356": "Turquoise",
    "71367": "SaddleBrown",
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

        const width = 1212, height = 968;

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
            .velocityDecay(.9)
            .alphaTarget(1)
            .on('tick', ticked);

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);
                
            svg.append("image")
                .attr("xlink:href", "map4.png")

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