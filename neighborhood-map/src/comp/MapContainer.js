import React, { Component } from 'react'


class MapContainer extends Component {
    state = {
        gkey: 'AIzaSyBl2AofdiKYqxJE6ktBJJSDUTlvHgo9OrQ',
      }
    
    componentDidMount(){
        this.loadGoogleMap();
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
    }
    
    createGoogleMap(){
        let mapScript = document.createElement("script");
        mapScript.type = "text/javascript";
        mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.state.gkey}&callback=initMap`;
        mapScript.async = true;
        mapScript.defer = true;
    
        return mapScript;
    }

    render() {
        let places = this.props.places,
            markers = [];

        if(window.google) {
            for(let i = 0; i < places.length; i += 1){
                let marker = new window.google.maps.Marker({ //https://developers.google.com/maps/documentation/javascript/markers 11.20.18
                    position: {
                        lat: places[i].location.lat, 
                        lng: places[i].location.lng 
                    },
                    map: window.map,
                    title: places[i].name
                    });
                    markers.push(marker);
                }
            }
            console.log(markers);
    
        return (
            <div className="map-container" id='map' role='application'>
            </div>
        )
    }
}

export default MapContainer