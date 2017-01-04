import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()

export class MarkerService extends Init {
  constructor() {
    super();
    console.log('Markers Service Initialized....');
    this.load();
  }

  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker) {
    // Fetch the markers that are alrady in localstorage
    var markers = JSON.parse(localStorage.getItem('markers'));
    // Push the new Marker to array
    markers.push(newMarker);
    // Set markers again
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(marker, newLat, newLng) {
    // Fetch the markers that are already in localstorage
    var markers = JSON.parse(localStorage.getItem('markers'));

    for (let i = 0; i < markers.length; i++) {
      if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }
    }
    // Set markers again
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  removeMarker(marker) {
    // Fetch the markers that are already in localstorage
    var markers = JSON.parse(localStorage.getItem('markers'));

    for (let i = 0; i < markers.length; i++) {
      if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
        markers.splice(i, 1);
      }
    }
    // Set markers again
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
