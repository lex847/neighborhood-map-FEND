import React, { Component } from 'react'


class MapContainer extends Component {
    state = {
        gkey: 'AIzaSyBl2AofdiKYqxJE6ktBJJSDUTlvHgo9OrQ',
      }
    
    componentWillMount(){
        this.loadGoogleMap();
    }
    componentDidMount(){
     //   this.populateMarkers(this.props.places);
    }
    

    initMap() { //https://developers.google.com/maps/documentation/javascript/tutorial 11.20.18
        let map = new window.google.maps.Map(document.getElementById('map'), { //https://stackoverflow.com/questions/49530089/using-google-map-api-inside-a-react-component 11.20.18
          center: {lat: 40.8250585, lng: -73.9476404},
          zoom: 14
        });
        window.map = map; 
    }
    
    loadGoogleMap(){ //injects  the google map scripts into the index.html by inserting before first 'script'
        let googleScriptElement = this.createGoogleMap();
        let htmlPageScripts = document.getElementsByTagName('script');
        let script = htmlPageScripts[0];
    
        script.parentNode.insertBefore(googleScriptElement, script);
        window.initMap = this.initMap;

        this.setState({
            mapLoaded: true
        })
    }
    
    createGoogleMap(){
        let mapScript = document.createElement("script");
        mapScript.type = "text/javascript";
        mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.state.gkey}&callback=initMap`;
        mapScript.async = true;
        mapScript.defer = true;
    
        return mapScript;
    }

    populateMarkers(places){
        let markers = [];

        if(window.google && this.state.mapLoaded) {
            let infowindow = new window.google.maps.InfoWindow({ //https://developers.google.com/maps/documentation/javascript/infowindows 11.21.18
            });

            for(let place of places){
                let marker = new window.google.maps.Marker({ //https://developers.google.com/maps/documentation/javascript/markers 11.20.18
                    position: {
                        lat: place.location.lat, 
                        lng: place.location.lng 
                    },
                    map: window.map,
                    title: place.name,
                    id: place.id
                    });
                marker.addListener('click', function() {
                    infowindow.open(window.map, marker);
                    infowindow.setContent(` <div class='infowindow-content'>
                                        <h4>${place.name}</h4>
                                        <p>${place.location.formattedAddress[0] ? place.location.formattedAddress[0] : ''}</p>
                                        <p>${place.location.formattedAddress[1] ? place.location.formattedAddress[1] : ''}</p>
                                        <p>powered by FourSquare</p>
                                        </div>`)
                });
                markers.push(marker);
            }
            window.markers = markers;
            window.infoWindow = infowindow;
        }
    }

    render() {
    let places = this.props.places;

    this.populateMarkers(places);
                            
        return (
            <div className="map-container" id='map' role='application'>
            </div>
        )
    }
}

export default MapContainer