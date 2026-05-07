/* =========================================================
   CONFIGURATION
   ========================================================= */

/* Initial map center */
const mapCenter = [20, 0];

/* Initial zoom */
/*const initialZoom = 13;*/
const initialZoom = 11;

/* Show or hide controls */
/*const showZoomControls = true;*/
const showZoomControls = false;

/* Available map types:
   "osm"
   "cartoLight"
   "cartoDark"
   "esriWorldImagery"
*/
const mapType = "osm";
/*const mapType = "cartoLight";*/

/* =========================================================
   MAP INITIALIZATION
   ========================================================= */

const map = L.map('polarMap', {
  center: mapCenter,
  zoom: initialZoom,
  zoomControl: showZoomControls,
  worldCopyJump: true
});

/* =========================================================
   BASEMAPS
   ========================================================= */

const baseLayers = {

  osm: L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }
  ),

  cartoLight: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
      attribution: '&copy; OpenStreetMap & CARTO',
      maxZoom: 20
    }
  ),

  cartoDark: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    {
      attribution: '&copy; OpenStreetMap & CARTO',
      maxZoom: 20
    }
  ),

  esriWorldImagery: L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles &copy; Esri'
    }
  )
};

/* =========================================================
   ACTIVATE SELECTED MAP TYPE
   ========================================================= */

baseLayers[mapType].addTo(map);

/* =========================================================
   OPTIONAL LAYER SWITCHER
   ========================================================= */
/*
L.control.layers(
  {
    "OpenStreetMap": baseLayers.osm,
    "Carto Light": baseLayers.cartoLight,
    "Carto Dark": baseLayers.cartoDark,
    "Satellite": baseLayers.esriWorldImagery
  },
  null,
  {
    collapsed: false
  }
).addTo(map);
*/
setTimeout(() => {
  map.invalidateSize();
}, 300);

/* =========================================================
   OPTIONAL:
   LIMIT LATITUDE TO FULL POLE-TO-POLE VIEW
   ========================================================= */

map.setMaxBounds([
  [-90, -180],
  [90, 180]
]);
