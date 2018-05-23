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


const mapContainerStyles = {
  "height": "300px",
  "padding-bottom": "10px"
}

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={mapContainerStyles} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
    onMarkerClick: (props) => (marker) => {
      console.log(marker);
      if(typeof(props.handleMarkerClick) == 'function'){
        props.handleMarkerClick(marker);
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 51.515, lng: -0.1 }}
    center={props.center != null ? props.center : { lat: 51.515, lng: -0.1 } }
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
          onClick={props.onMarkerClick.bind(null, marker)}
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
    console.log('Map Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
    console.log('map Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('map Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('map Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('map Component WILL UNMOUNT!')
 }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.props.markers} center={this.props.center} handleMarkerClick={this.props.handleMarkerClick}  />
    )
  }
}

export default MainMap;