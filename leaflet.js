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


let Dashop, DashopMarker, bobstLibrary, bobstLibraryMarker, waverlyPlace, waverlyPlaceMarker;
Dashop = L.latLng(40.730833, -73.9975);
DashopkMarker = L.marker(washingtonSquarePark).bindPopup("This is Washington Square Park.").addTo(firstMap);
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).bindPopup("This is Bobst Library.").addTo(firstMap);
waverlyPlace = L.latLng(40.7344954, -74.0035869);
waverlyPlaceMarker = L.marker(waverlyPlace).bindPopup("I added another point, fools.").addTo(firstMap);


let circle;
circle = L.circle(Dashop, {radius: 100,
                                         color: "EFBB24",
                                         fillColor: "EFBB24",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(bobstLibrary,          {radius: 100,
                                          color: "EFBB24",
                                          fillColor: "EFBB24",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(waverlyPlace,          {radius: 100,
                                          color: "EFBB24",
                                          fillColor: "EFBB24",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
