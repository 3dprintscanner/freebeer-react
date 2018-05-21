import React, {Component} from 'react';
import fetch from "isomorphic-fetch";

const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
    onMarkerClick: () => (marker) => {
      console.log(marker);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 51.515, lng: -0.1 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          onClick={props.onMarkerClick}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class MainMap extends React.PureComponent {
  componentWillMount() {
    this.setState({eventData: []})
    this.setState({ markers: [] })
  }

  componentDidMount() {
    // const url = [
    //   // Length issue
    //   `https://gist.githubusercontent.com`,
    //   `/farrrr/dfda7dd7fccfec5474d3`,
    //   `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    // ].join("")

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ markers: data.photos });
    //   });
    // console.log(eventData);
    // this.setState({eventData: eventData})
    // console.log(this.state);
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.props.markers} />
    )
  }
}

export default MainMap;