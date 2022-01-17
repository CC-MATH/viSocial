var misdatos = ["D1-","D2-","D3-"];

d3.select("body")
    .selectAll("p")
    .data(misdatos)
    .enter()
    .append("p")
    .text(function(d,i){
        return d + i;
    })