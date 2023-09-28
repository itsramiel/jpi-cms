import type { Schema, Attribute } from '@strapi/strapi';

export interface CoordinatesCoordinates extends Schema.Component {
  collectionName: 'components_coordinates_coordinates';
  info: {
    displayName: 'coordinates';
    icon: 'pinMap';
  };
  attributes: {
    latitude: Attribute.Float & Attribute.Required;
    longitude: Attribute.Float & Attribute.Required;
  };
}

export interface NearbyPoiNearbyPoi extends Schema.Component {
  collectionName: 'components_nearby_poi_nearby_pois';
  info: {
    displayName: 'nearbyPOI';
    icon: 'layer';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    distance: Attribute.Decimal & Attribute.Required;
    unit: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'coordinates.coordinates': CoordinatesCoordinates;
      'nearby-poi.nearby-poi': NearbyPoiNearbyPoi;
    }
  }
}
