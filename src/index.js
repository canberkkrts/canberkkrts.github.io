import "./styles.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoieWlsYXZhbWFwIiwiYSI6ImNqMWd1c2ludDAwNHQzMnAwN3Y3OW9iazYifQ.QpHpRCKr5GyM7rWy6Tnh9Q";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  bearing: 0,
  center: [28.983458, 41.008351],
  zoom: 12,
  pitch: 0,
  maxZoom: 18
});
map.addControl(new mapboxgl.NavigationControl());

var bounds1 = [
  [28.946671728581805, 41.015074278254986],
  [28.998289970529868, 41.020073410606415]
];
map.on("load", function() {
  // Add Information about İstanbul

  map.loadImage("images/palace.png", function(error, image) {
    if (error) throw error;
    map.addImage("palace", image);
    map.addLayer({
      id: "palaces",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.974005, 41.015208]
              }
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.99708, 41.03842]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "palace",
        "icon-size": 0.15,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/cami.png", function(error, image) {
    if (error) throw error;
    map.addImage("mosque", image);
    map.addLayer({
      id: "mosques",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.976778, 41.005298]
              }
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.964196, 41.016275]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "mosque",
        "icon-size": 0.45,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/bazaar.png", function(error, image) {
    if (error) throw error;
    map.addImage("mall", image);
    map.addLayer({
      id: "malls",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.968055, 41.010771]
              }
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.970629, 41.016532]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "mall",
        "icon-size": 0.09,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/tour.png", function(error, image) {
    if (error) throw error;
    map.addImage("tour", image);
    map.addLayer({
      id: "tour",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [29.007402, 41.041132]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "tour",
        "icon-size": 0.1,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/peak.png", function(error, image) {
    if (error) throw error;
    map.addImage("peak", image);
    map.addLayer({
      id: "peak",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [29.068419, 41.027728]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "peak",
        "icon-size": 0.1,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/cistern.png", function(error, image) {
    if (error) throw error;
    map.addImage("cistern", image);
    map.addLayer({
      id: "cistern",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.977878, 41.008408]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "cistern",
        "icon-size": 0.1,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/hagiasophia.png", function(error, image) {
    if (error) throw error;
    map.addImage("hagiasophia", image);
    map.addLayer({
      id: "hagiasophia",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.979993, 41.008696]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "hagiasophia",
        "icon-size": 0.1,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/maiden.png", function(error, image) {
    if (error) throw error;
    map.addImage("maiden", image);
    map.addLayer({
      id: "maiden",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [29.004121, 41.02113]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "maiden",
        "icon-size": 0.1,
        "icon-allow-overlap": true
      }
    });
  });
  map.loadImage("images/galata.png", function(error, image) {
    if (error) throw error;
    map.addImage("galata", image);
    map.addLayer({
      id: "galata",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [28.974166, 41.025611]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "galata",
        "icon-size": 0.1,
        "icon-allow-overlap": true
      }
    });
  });
  // Add the line
  var route = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [28.977922181421945, 41.00840183770123],
            [28.97800035284172, 41.00845079643497],
            [28.97810448857217, 41.00836807470196],
            [28.978163766181183, 41.00831785129549],
            [28.978352794335024, 41.00816712800403],
            [28.978348176912505, 41.00817012705207],
            [28.97855119102985, 41.008062746432216],
            [28.978608049581226, 41.008137489830176],
            [28.97862060756256, 41.008154194710016],
            [28.97864758102662, 41.0081924499066],
            [28.97867439434708, 41.00823707047428],
            [28.9787303891934, 41.00832812498018],
            [28.978829184015012, 41.00848385084106],
            [28.978900578855246, 41.008549439535955],
            [28.979056823059977, 41.00869353323819],
            [28.979173611471992, 41.00877937527832],
            [28.97920778690377, 41.00880431483401],
            [28.979317017851372, 41.0088841485576],
            [28.97943991278362, 41.00883695584184],
            [28.979518947090014, 41.00880638626637]
          ]
        }
      }
    ]
  };
  var point = {
    id: "walk",
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: origin
        }
      }
    ]
  };
  var lineDistance = turf.lineDistance(route.features[0], "kilometers");

  var arc = [];
  var steps = 500;
  for (var i = 0; i < lineDistance; i += lineDistance / steps) {
    var segment = turf.along(route.features[0], i, "kilometers");
    arc.push(segment.geometry.coordinates);
  }
  route.features[0].geometry.coordinates = arc;
  var counter = 0;

  map.addSource("route", {
    type: "geojson",
    data: route
  });

  map.addSource("point", {
    type: "geojson",
    data: point
  });

  map.addLayer({
    id: "route",
    source: "route",
    type: "line",
    paint: {
      "line-width": 4,
      "line-color": "#7C84E7"
    }
  });

  map.addLayer({
    id: "point",
    source: "point",
    type: "circle",
    paint: {
      "circle-radius": 9,
      "circle-color": "#7C84E7",
      "circle-stroke-color": "#FFFFFF",
      "circle-stroke-width": 2.5
    }
  });

  function animate() {
    point.features[0].geometry.coordinates =
      route.features[0].geometry.coordinates[counter];
    point.features[0].properties.bearing = turf.bearing(
      turf.point(
        route.features[0].geometry.coordinates[
          counter >= steps ? counter - 1 : counter
        ]
      ),
      turf.point(
        route.features[0].geometry.coordinates[
          counter >= steps ? counter : counter + 1
        ]
      )
    );
    map.getSource("point").setData(point);

    if (counter < steps) {
      requestAnimationFrame(animate);
    }

    counter = counter + 1;
  }

  document.getElementById("replay").addEventListener("click", function() {
    point.features[0].geometry.coordinates = origin;
    map.getSource("point").setData(point);
    counter = 0;
    animate(counter);
  });
  animate(counter);

  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer(
    {
      id: "3d-buildings",
      source: "composite",
      "source-layer": "building",
      filter: ["==", "extrude", "true"],
      type: "fill-extrusion",
      minzoom: 15,
      paint: {
        "fill-extrusion-color": "#fff",
        "fill-extrusion-height": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "height"]
        ],
        "fill-extrusion-base": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "min_height"]
        ],
        "fill-extrusion-opacity": 0.6
      }
    },
    labelLayerId
  );

  map.loadImage("images/marker.png", function(error, image) {
    if (error) throw error;
    map.addImage("marker1", image);
    map.addLayer({
      id: "markers",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: [28.979518947090014, 41.00880638626637]
              }
            }
          ]
        }
      },
      layout: {
        "icon-image": "marker1",
        "icon-size": 0.085
      }
    });
  });
});

map.on("mousemove", function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ["markers"] });

  map.getCanvas().style.cursor = features.length ? "pointer" : "";
  if (!features.length) {
    popup.remove();
    return;
  }
});
// Deneme

var chapters = {
  start: {
    camera: {
      bearing: 0,
      center: [28.983458, 41.008351],
      zoom: 12.0,
      pitch: 0
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  istanbul: {
    camera: {
      bearing: 0,
      center: [28.967820918580628, 41.00597742636282],
      zoom: 9,
      speed: 0.8,
      pitch: 60
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location1: {
    camera: {
      bearing: 0,
      center: [28.977922181421945, 41.00840183770123],
      zoom: 15,
      speed: 1,
      pitch: 43
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "visible");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location2: {
    camera: {
      bearing: 45,
      center: [28.977922181421945, 41.00840183770123],
      zoom: 18.6,
      speed: 1.6,
      pitch: 45
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "visible");
      map.setLayoutProperty("hagiasophia", "visibility", "visible");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "visible");
      map.setLayoutProperty("point", "visibility", "visible");
      map.setLayoutProperty("markers", "visibility", "visible");
      map.setLayoutProperty("3d-buildings", "visibility", "visible");
    }
  },
  location3: {
    camera: {
      center: [28.974166, 41.025611],
      zoom: 15,
      pitch: 45
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "visible");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location4: {
    maxBounds: bounds1,
    camera: {
      bearing: 30,
      center: [28.964196, 41.016275],
      zoom: 15.0,
      pitch: 40,
      minZoom: 11
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "visible");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location5: {
    camera: {
      center: [29.004121, 41.02113],
      zoom: 14,
      pitch: 45,
      speed: 0.6
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "visible");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location6: {
    camera: {
      center: [28.968055, 41.010771],
      zoom: 17,
      pitch: 45,
      speed: 0.6
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "visible");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location7: {
    camera: {
      center: [28.99708, 41.03842],
      zoom: 14,
      pitch: 45,
      bearing: -30
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "visible");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location8: {
    camera: {
      center: [29.007402, 41.041132],
      zoom: 14,
      pitch: 45,
      speed: 0.6,
      bearing: -30
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "visible");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location9: {
    camera: {
      center: [28.970629, 41.016532],
      zoom: 17,
      pitch: 45,
      bearing: 15,
      spped: 0.6
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "visible");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location10: {
    camera: {
      center: [28.974005, 41.015208],
      zoom: 15,
      pitch: 45
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "visible");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location11: {
    camera: {
      center: [29.068419, 41.027728],
      zoom: 12,
      pitch: 45
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "none");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "visible");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  },
  location12: {
    camera: {
      center: [28.976886519638583, 41.00525862434043],
      zoom: 15,
      pitch: 45
    },
    mapFunc: function() {
      map.setLayoutProperty("palaces", "visibility", "none");
      map.setLayoutProperty("mosques", "visibility", "visible");
      map.setLayoutProperty("malls", "visibility", "none");
      map.setLayoutProperty("tour", "visibility", "none");
      map.setLayoutProperty("peak", "visibility", "none");
      map.setLayoutProperty("cistern", "visibility", "none");
      map.setLayoutProperty("hagiasophia", "visibility", "none");
      map.setLayoutProperty("maiden", "visibility", "none");
      map.setLayoutProperty("galata", "visibility", "none");
      map.setLayoutProperty("route", "visibility", "none");
      map.setLayoutProperty("point", "visibility", "none");
      map.setLayoutProperty("markers", "visibility", "none");
      map.setLayoutProperty("3d-buildings", "visibility", "none");
    }
  }
};
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};
var activeChapterName = "welcome";
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;
  if (chapters[chapterName].camera) {
    map.flyTo(chapters[chapterName].camera);
  }
  chapters[chapterName].mapFunc();
  document.getElementById(chapterName).setAttribute("class", "active");
  document.getElementById(activeChapterName).setAttribute("class", "");
  activeChapterName = chapterName;
}
function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}
var expanded = true;

window.setInterval(function() {
  //If the circle is expanded, reduce the size and opacity
  //If the circle is not expanded, increase the size and opacity
  var size = expanded ? 10 : 20;
  var opacity = expanded ? 0 : 0.25;
  expanded = !expanded;
}, 500);
