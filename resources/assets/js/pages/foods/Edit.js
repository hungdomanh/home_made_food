import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Form from "../../components/food/Form";

export default class Edit extends Component {
    render() {
        return (
            <div>
                <Header title="Homemade - Edit food"/>
                <SubHeader title="Edit food"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
