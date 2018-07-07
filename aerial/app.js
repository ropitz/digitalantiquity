var SVFUrl = 'https://ropitz.github.io/digitalantiquity/data/svf.png',
    SVFBounds = [[56.3116379384,-6.42765745012],[56.3152782233,-6.42185919763]];

var APUrl = 'https://ropitz.github.io/digitalantiquity/data/AP.png',
    APBounds = [[56.3116379384,-6.42765745012],[56.3152782233,-6.42185919763]];
	

var SVF = L.imageOverlay(SVFUrl, SVFBounds);

var AP = L.imageOverlay(APUrl, APBounds);

var baseMaps = {"AP":AP,"SVF":SVF}

var map = L.map('map', {layers: [AP,SVF],
            zoomControl:true, maxZoom:28, minZoom:1,
        }).fitBounds([[56.311251023,-6.42821854016],[56.3156651381,-6.42129866793]]);


// Initialise the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems
  }
});

map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
  var type = e.layerType
  var layer = e.layer;

  // Do whatever else you need to. (save to db, add to map etc)

  drawnItems.addLayer(layer);
});

var controlLayers = L.control.layers(baseMaps).addTo(map);
