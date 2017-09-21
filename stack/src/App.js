import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({  img_src }) => <div><img src={img_src} className="YOUR-CLASS-NAME" style={{}} /></div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  componentDidMount() {
    this.setState({
      markers: [{ lat: 29.7, lng: 95.3, img_src: 'https://openclipart.org/image/2400px/svg_to_png/169839/map-pin.png' }]
    });
  }

  render() {
  return (
    <GoogleMapReact
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      style={{ height: '300px' }}
    >

      {this.state.markers.map((marker, i) => {
              return (
                <AnyReactComponent
                  lat={marker.lat}
                  lng={marker.lng}
                  img_src={marker.img_src}
                />

              );
            })}

    </GoogleMapReact>

  );
 }
}

export default App;
