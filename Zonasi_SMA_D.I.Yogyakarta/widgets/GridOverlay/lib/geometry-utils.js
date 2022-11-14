// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["./constants","esri/geometry/webMercatorUtils","esri/geometry/Polyline","esri/geometry/Polygon"],function(b,g,k,l){return{toGeographic:function(a){return a.spatialReference.isWebMercator()?g.webMercatorToGeographic(a):a},toWebMercator:function(a){return a.spatialReference.isWebMercator()?a:g.geographicToWebMercator(a)},_latitudeToWebMercatorY:function(a){return b.GEOGRAPHIC_360/2*(b.HALF_PI-2*Math.atan(Math.exp(-1*a/b.WGS84_EQUATORIAL_RADIUS)))/Math.PI},_longitudeToWebMercatorX:function(a){var c=
b.GEOGRAPHIC_360,d=b.GEOGRAPHIC_360/2,e=b.WGS84_EQUATORIAL_RADIUS;return a/e*d/Math.PI-Math.floor((a/e*d/Math.PI+d)/c)*c},pointToGeographic:function(a){for(var c=a.x,d=a.y,e=(a=a.spatialReference.isWebMercator())?b.WEST_WEBMERCATOR_LIMIT:b.WEST_GEOGRAPHIC_LIMIT,m=a?b.EAST_WEBMERCATOR_LIMIT:b.EAST_GEOGRAPHIC_LIMIT,h=a?b.WEBMERCATOR_360:b.GEOGRAPHIC_360,f=0;c<=e;)c+=h,--f;for(;c>m;)c-=h,f+=1;a&&(c=this._longitudeToWebMercatorX(c),d=this._latitudeToWebMercatorY(d));return{x:c,y:d,offsetX:f}},extentToPolygon:function(a){return new l({rings:[[[a.xmin,
a.ymin],[a.xmax,a.ymin],[a.xmax,a.ymax],[a.xmin,a.ymax],[a.xmin,a.ymin]]],spatialReference:a.spatialReference})},polygonToPolyline:function(a){return new k({paths:a.rings,spatialReference:{wkid:a.spatialReference.wkid}})}}});