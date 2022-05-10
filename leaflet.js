let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);

let dashop, dashopMarker, midtownComics, midtownComicsMarker, toyTokyo, toyTokyoMarker;
dashop = L.latLng(40.7157897829261, -73.98838604482653);
dashopMarker = L.marker(dashop).bindPopup("This is Dashop.").addTo(firstMap);
midtownComics = L.latLng(40.75485521728513, -73.98838604482653);
midtownComicsMarker = L.marker(midtownComics).bindPopup("This is Midtown Comics.").addTo(firstMap);
toyTokyo = L.latLng(40.72710231477772, -73.98901659424567);
toyTokyoMarker = L.marker(toyTokyo).bindPopup("This is Toy Tokyo").addTo(firstMap);
let circle;
circle = L.circle(dashop, {radius: 100,
                                         color: "#ffccff",
                                         fillColor: "#ffccff",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(midtownComics,          {radius: 100,
                                          color: "#ffccff",
                                          fillColor: "#ffccff",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(toyTokyo,          {radius: 100,
                                          color: "#d33682",
                                          fillColor: "#d33682",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);


