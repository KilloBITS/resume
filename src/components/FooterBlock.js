import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [49.8418, 24.0313]
const map = (
  <Map center={position} zoom={13} id="map">
    <TileLayer
      url="http://maps.google.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i375060738!3m9!2spl!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0"

    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
)


class FooterBlock extends React.Component {
  render() {
    return <div className="block footer">
    {map}
    </div>
  }
}

export default FooterBlock;
