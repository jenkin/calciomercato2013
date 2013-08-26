enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Calcio Mercato Estate 2013 - Tutti i trasferimenti della Serie A"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true, components: [
                {kind: "d3.Chord", fileNodes: "assets/cities.csv", fileMatrix: "assets/matrix.json", ontap: "tapped"}
            ]}
		]},
		{kind: "onyx.Toolbar", content: "By Alessio 'jenkin' Cimarelli (@jenkin27) with Enyo Framework and D3 javascript library"}
	],
    tapped: function(inS,inE) {
        console.log(inS);
        console.log(inE);
    }
});
