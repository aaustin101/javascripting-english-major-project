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
dashop = L.latLng(40.730833, -73.9975);
dashopMarker = L.marker(dashop).bindPopup("This is Dashop.").addTo(firstMap);
midtownComics = L.latLng(40.729444, -73.997222);
midtownComicsMarker = L.marker(midtownComics).bindPopup("This is Bobst Library.").addTo(firstMap);
toyTokyo = L.latLng(40.73449, -74.00358);
toyTokyoMarker = L.marker(toyTokyo).bindPopup("I added another point, fools.").addTo(firstMap);
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


