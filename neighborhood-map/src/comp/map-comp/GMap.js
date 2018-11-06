import React, { Component } from 'react';


export class GMapContainer extends Component {

    render() {
        const style = {

        }
        console.log(this.props)
        return (
            /*<div id="map" className="g-map">
                   <Map
                        google= { this.props.google }
                        zoom= { 14 } 
                        style={ style }
                        initialCenter={ {
                            lat: 40.8250585,
                            lng: -73.9476404
                          } }>
                        {this.props.places.map(function(place){
                            console.log(place);
                            return (
                                    <Marker
                                    key={ place.id }
                                    name={ place.name }
                                    position={{lat: place.lat, lng: place.lon}}
                                    //onClick= { this.onMarkerClick }
                                    />
                            )
                        })}
                    </Map>
            </div>*/
            <div>Map Template</div>
        );
    }
}

export default GMapContainer