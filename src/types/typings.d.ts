declare module "*.json" {
  const value: any;
  export default value;
}

declare module 'mapbox' {
  export default class MapboxClient {
    constructor(token: string);
    geocodeForward(address: string, options?: any, callback?: Function): Promise<any>;
  }
}

declare module 'deck.gl';
/*declare module 'DashboardMapLayers' {
  const IncidentLayer: any;
  export default IncidentLayer;
}*/
