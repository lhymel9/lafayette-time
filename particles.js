function go() {
    d3.csv('../lafayetteziplong.csv', function(data, idx) {
        return {
            start: data.livezip,
            end: data.workzip,
            population: data.population
        }
    }, function(data_arr) {
        const nodes = []
        let j = 0;
        for(let i = 0; i < data_arr.length/2; i++) {
            let pop = parseInt(data_arr[i].population),
                home = data_arr[i].start,
                work = data_arr[i].end;
                console.log()
                if (pop > 3500)
                    nodes.push({id: i, radius: 16, time:0, path: [home, work]})
                else if (pop > 1000)
                    nodes.push({id: i, radius: 10, time:0, path: [home, work]})
                else if (pop > 750)
                    nodes.push({id: i, radius: 6, time:0, path: [home, work]})
                else if (pop > 500)
                    nodes.push({id: i, radius: 5, time:0, path: [home, work]})
                else if (pop > 250)
                    nodes.push({id: i, radius: 4, time:0, path: [home, work]})
                else if (pop > 0)
                    nodes.push({id: i, radius: 2, time:0, path: [home, work]})
        }

        const lineFunction = d3.line()
            .x(function(d) {return d.x})
            .y(function(d) {return d.y})
            .curve(d3.curveLinear);

        const width = 1212, height = 968;

        const coords = {
            "71463": [  40,  25],
            "70586": [ 210,  90],
            "71322": [ 380,  50],
            "70544": [ 85,  130],
            "70589": [ 395, 135],
            "70570": [ 365, 230],
            "70535": [ 130, 265],
            "70512": [ 490, 330],
            "70715": [ 500, 110],
            "70520": [ 405, 400],
            "70517": [ 555, 427],
            "70582": [ 610, 550],
            "70767": [ 940, 550],
            "70788": [1020, 590],
            "70390": [1150, 770],
            "70394": [1120, 920],
            "70380": [1120, 925],
            "70341": [1100, 655],
            "70544": [ 685, 760],
            "70560": [ 540, 725],
            "70592": [ 430, 605],
            "70577": [ 500, 210],
            "70518": [ 485, 570],
            "70563": [ 630, 660],
            "70513": [ 510, 765],
            "70528": [ 465, 775],
            "70533": [ 410, 765],
            "70538": [ 685, 850],
            "70510": [ 280, 785],
            "70548": [ 190, 940],
            "70555": [ 335, 610],
            "70588": [ 415, 545],
            "70503": [ 395, 530],
            "70501": [ 440, 480],
            "70506": [ 375, 510],
            "70507": [ 410, 445],
            "70584": [ 370, 350],
            "70750": [ 585, 265],
            "70571": [ 580, 220],
            "71353": [ 595, 135],
            "71358": [ 565, 100],
            "71322": [ 385,  50],
            "70583": [ 350, 460],
            "70529": [ 315, 510],
            "70578": [ 235, 465],
            "70516": [ 210, 365],
            "70525": [ 280, 345],
            "70544": [  85, 130],
            "70515": [  20, 305],
            "70543": [  65, 405],
            "70526": [ 160, 515],
            "70559": [  60, 565],
            "70531": [  60, 495],
            "70542": [  45, 675],
            "70372": [1150, 880],
            "70339": [1025, 695],
            "70522": [ 675, 630],
            "other": [ -50, -50],
            "70342": [ 985, 940],
            "70392": [ 930, 940],
            "70514": [ 760, 800],
            "70508": [ 420, 545],
            "70523": [ 782, 782],
            "70519": [ 515, 615],
            "70541": [ 395, 325],
            "70552": [ 675, 630],
            "70524": [ 200, 205],
            "70534": [ 100, 522],
            "70537": [  15, 463],
            "70554": [  90, 135],
            "70556": [  15, 520],
            "70576": [ 130,  22],
            "70580": [ 127, 112],
            "70585": [ 210,   0],
            "71345": [ 445,  50],
            "71356": [ 445,  30],
            "71367": [ 240,   0],
        }

        const simulation = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(0))
        .force('x', d3.forceX().x(function(d) {
            console.log(coords[d.path[d.time]][0]);
            return coords[d.path[d.time]][0];
        }))
        .force('y', d3.forceY().y(function(d) {
            console.log(coords[d.path[d.time]][1])
            return coords[d.path[d.time]][1];
        }))
        .force('collision', d3.forceCollide().radius(function(d) {
            return d.radius+3;
        }))
        .velocityDecay(.7)
        .alphaTarget(1)
        .on('tick', ticked);

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
                .append("image")
                    .attr("xlink:href", "map3.png")

        g = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),

        node = g.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
                .selectAll(".node");

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
            nodes.forEach(function(n) {
                if (n.time == 1)
                    n.time = 0;
                else
                    n.time = 1;
            });
            node = node.data(nodes);

            node.exit()
                .remove();

            simulation.nodes(nodes);
        }

        d3.interval(function() {
            move();
        }, 6000, d3.now());

    });
}

window.onload = function() {

    go();
    
}
