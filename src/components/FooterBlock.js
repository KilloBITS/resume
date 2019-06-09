import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [49.8418, 24.0313]
const map = (
  <Map center={position} zoom={6} id="map">
    <TileLayer
      url="https://stamen-tiles-c.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"

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
