import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRbdKmyFU_X9r-UVmsapYMcKDJQJmQpAg&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    // Create A Map
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 29.6513835, lng: -82.3257752 },
      zoom: 10,
    });

    // Create An InfoWindow
    var infowindow = new window.google.maps.InfoWindow();

    // Display Dynamic Markers
    this.props.mapData.map((myVenue) => {
      var contentString = `${myVenue.label}`;

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.pos.lat,
          lng: myVenue.pos.lng,
        },
        map: map,
        title: myVenue.label,
      });

      // Click on A Marker!
      marker.addListener("click", function () {
        // Change the content
        infowindow.setContent(contentString);

        // Open An InfoWindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return <div id="map"></div>;
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
