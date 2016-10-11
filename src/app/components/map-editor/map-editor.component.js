import gMaps from 'libs/google-maps';

import template from './map-editor.html';
import styles from './map-editor.scss';

class controller {
  constructor() {
    this.styles = styles;
    this.overlays = [
      {lat:52.262132,lng:20.951243},
      {lat:52.254037,lng:20.977605},
      {lat:52.268996,lng:20.956870},
      {lat:52.265955,lng:20.976178},
      {lat:52.257373,lng:20.984583},
      {lat:52.247533,lng:20.979433},
      {lat:52.266987,lng:20.963733},
      {lat:52.257373,lng:20.984583},
      {lat:52.257569,lng:20.970143},
      {lat:52.262875,lng:20.987534},
      {lat:52.247780,lng:20.953587},
      {lat:52.264128,lng:20.957720},
      {lat:52.259689,lng:20.969504},
      {lat:52.262264,lng:20.979695},
      {lat:52.267115,lng:20.950133},
      {lat:52.264658,lng:20.980011},
      {lat:52.265622,lng:20.979701},
      {lat:52.265541,lng:20.952213},
      {lat:52.266842,lng:20.948964},
      {lat:52.265970,lng:20.952920},
      {lat:52.266842,lng:20.948964},
      {lat:52.267795,lng:20.975381},
      {lat:52.262320,lng:20.981410},
      {lat:52.261990,lng:20.988567},
      {lat:52.264542,lng:20.966744},
      {lat:52.264363,lng:20.977001},
      {lat:52.264576,lng:20.964493},
      {lat:52.267502,lng:20.954364}
    ].map(createMarker);
  }
}

function createMarker(position) {
  return new gMaps.Marker({
    position: position
  });
}

const component = {
  template,
  controller
};

export default component;
