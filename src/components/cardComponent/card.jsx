import React, {Component}from "react";
import CardHeader from "./cardHeader/cardHeader";
import CardBody from "./cardBody/cardBody";

class Card extends Component {
    render() {
        return (
            <article className ="card">
                <CardHeader />

                <div className ="card_body">
                    <div className ="card_title">{this.props.name}</div>

                    <CardBody
                        name ={this.props.name}
                        type ={this.props.type}
                        address ={this.props.address}
                        website ={this.props.website}
                        latitude ={this.props.latitude}
                        longitude ={this.props.longitude}
                    />
                </div>
            </article>
        );
    }
}

export default Card;