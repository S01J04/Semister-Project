
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom,props }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '60vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '  AIzaSyBZ8PcM-U70GguMpC3sPXqCOFlg-JObPTg' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={props.location[0]}
          lng={props.location[1]}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map