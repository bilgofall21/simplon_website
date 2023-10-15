 
 // Création de la carte Leaflet
  var map = L.map('map').setView([0, 0], 2);

  
  // Ajout de la couche de tuiles OpenStreetMap à la carte
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Groupe de calques pour les marqueurs
  var markers = L.layerGroup().addTo(map);

  // Données des marqueurs pour chaque région
  var markersData = {
    "Monde": [[0, 0, "Marqueur "], [0, 1, "Marqueur 6"]],
    "Europe": [[48.8566, 2.3522, "Paris, France"]],
    "Amérique du Nord": [[40.7128, -74.0060, "New York, USA"]],
    "Asie": [[34.0522, -118.2437, "Los Angeles, USA"]]

  };

  // Fonction pour changer la carte et afficher les marqueurs
  function changeMap() {
    var selectedOption = document.getElementById('region').value;
    var [lat, lon, zoom, name] = selectedOption.split(',');

    // Définir la vue de la carte en fonction de la région sélectionnée
    map.setView([lat, lon], zoom);
    markers.clearLayers();
    
    if (markersData[name]) {
      // Ajouter les marqueurs correspondants à la carte
      markersData[name].forEach(function (markerInfo) {
        var [markerLat, markerLon, markerName] = markerInfo;
        L.marker([markerLat, markerLon]).addTo(markers).bindPopup(markerName).openPopup();
      });
    }
  }

  // Chargement initial de la carte
  changeMap();