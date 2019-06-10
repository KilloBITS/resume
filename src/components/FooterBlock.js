import React from 'react';
import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [49.8418, 24.0313]
const map = (
  <Map center={position} zoom={6} id="map">
    <TileLayer
      url="https://stamen-tiles-c.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"

    />
    <Marker position={position}>
      <Popup>Position</Popup>
    </Marker>
  </Map>
)

class FooterBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  toTopThisScroll(){
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="block footer">
      {map}
      <div className="mobileTotopBtnOther">
        <div className="toTopClicker">
          <div className="topClickerBtn" onClick={this.toTopThisScroll.bind(this)}><FontAwesomeIcon icon={['fas', 'arrow-up']} /></div>
        </div>
      </div>
    </div>
  }
}

export default FooterBlock;
