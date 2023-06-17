import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';

const CustomMap = ({ trip }) => {
  const { 'start station location': startLocation, 'end station location': endLocation } = trip;

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <MapContainer style={{ width: '100%', height: '100%' }} center={[startLocation.coordinates[1], startLocation.coordinates[0]]} zoom={15}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[startLocation.coordinates[1], startLocation.coordinates[0]]}>
          <Tooltip permanent direction="right">
            Start: {startLocation.name}
          </Tooltip>
        </Marker>
        <Marker position={[endLocation.coordinates[1], endLocation.coordinates[0]]}>
          <Tooltip permanent direction="right">
            End: {endLocation.name}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMap;