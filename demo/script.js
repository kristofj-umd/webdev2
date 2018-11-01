// script.js

///////////////////////////////////////////////////////////////////////////////
//
// This the Javascript file we'll use to make our leaflet map
// Based on Maptime Boston leaflet tutorial:
// https://maptimeboston.github.io/leaflet-intro/
// Author: Kris Johnson
// Date: 23 Oct 2018
//
///////////////////////////////////////////////////////////////////////////////

// initialize the map
// We pass the div with id "map" to the L.map function
var map = L.map('map')
    // set initial map view to Boston with zoom level 13
    .setView([39.47, -95.41], 4);

// load a tile layer
// loading the base layer of map tiles using a URL template
// this template ({z}/{x}/{y}) allows leaflet to locate tiles with the
// correct zoom, x, and y coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
    // use the .addTo method to add the tile layer to the map.
    .addTo(map);

// Examine basemap tiles in console

// Explore leaflet providers
// http://leaflet-extras.github.io/leaflet-providers/preview/

// Load CSV locally
// ref: https://stackoverflow.com/questions/40726168/how-to-load-data-from-csv-to-use-it-in-a-leaflet-heatmap

// Load CSV using plugin
// ref: https://github.com/mapbox/leaflet-omnivore

// Add some style
