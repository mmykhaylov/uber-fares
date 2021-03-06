import React from 'react';
import MapGL from 'react-map-gl';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Marker from './Marker';
import markerA from '../../images/red_MarkerA.png';
import markerB from '../../images/red_MarkerB.png';

const Map = () => {
  const mapHeight = useBreakpointValue({ base: '450px', lg: '600px' });
  return (
    <Box position="relative">
      <MapGL
        initialViewState={{
          latitude: 40.73016,
          longitude: -74.00452,
          zoom: 12,
        }}
        mapboxAccessToken="pk.eyJ1IjoiamF5dGVlamVlNzgxIiwiYSI6ImNrejRwbXhlazAydHIzMXFuOWJjbGducDcifQ.N3JIjOyD55K1f7X4R93DHw"
        style={{
          zIndex: 0,
          width: '100vw',
          height: mapHeight,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
      >
        <Marker type="dropoff" marker={markerB} />
        <Marker type="pickup" marker={markerA} />
      </MapGL>
      <Box
        position="absolute"
        bgGradient="linear(to-b, rgba(255,255,255,0), gray.100 80%)"
        width="100vw"
        height="125px"
        bottom={0}
        left={0}
        userSelect="none"
      />
    </Box>
  );
};

export default Map;
