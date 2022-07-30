import React, {Component} from "react";
import {Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";

const GOOGLE_API_KEY ='AIzaSyAK3lBGPVdDwHeIJeOugcVjqYmH5ynj6y4';

class GoogleMapsPage extends Component {
    render() {
        const {longitude} = this.props.location.state;
        const {latitude} = this.props.location.state;

        const mapStyles= { width: "100%", height: "100%"};

        return (
            <div>
                <Header />
                <header className= "back_to_main_block">
                    <NavLink className= "back_to_main_text" to= "/">
                        Click to go back to the Home Screen.
                    </NavLink>
                </header>

                {longitude == null && latitude == null && (
                    <header className ="map_error_block">
                        <div className ="error_text">
                            the map info pulled from the OpenBreweryApi does no exist for this brewery.
                        </div>
                    </header>
                )}

                <Map
                    google= {this.props.google}
                    zoom= {11}
                    style= {mapStyles}
                    initialCenter= {{lat: latitude, lng: longitude}}
                >
                    <Marker position= {{lat: latitude, lng: longitude}} />
                </Map>
            </div>
        );
        
    }
}

export default GoogleApiWrapper({
    apikey: GOOGLE_API_KEY
})(GoogleMapsPage);