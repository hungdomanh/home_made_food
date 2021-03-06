import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class DealItemMedium extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.isUserDealed = this.isUserDealed.bind(this);
    }
    isUserDealed(deal, transaction) {
        if (deal.user.id == transaction.requirer_id || deal.user.id == transaction.cooker_id) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        let auth = this.props.auth;
        let deal = this.props.deal;
        let transaction = this.props.transaction;
        return (
            <div className="row comment">
                <div className="col-md-1">
                    <img src={deal.user.avatar} className="rounded-circle" alt="avatar-2" width="100%"/>
                </div>
                <div className="col-md-8">
                    <div className="comment-meta">
                        <div className="comment-meta-author">
                            <Link className="color-red-black" to={"/users/"+deal.user.id}>{deal.user.name}</Link>
                        </div>
                        <div className="comment-meta-date">
                            <span>{deal.updated_at}</span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    {/* <span><Link className="color-red-black" to={"/users/"+deal.user.id}>{deal.user.name}</Link></span> <br/> */}
                    <div><b><i className="fa fa-map-marker custom"></i></b> <span className="text-muted font-size-13">{deal.user.address} <br/> </span></div>
                    <p className="overflow-hidden max-height-70 text-overflow-ellipsis font-size-16px">{deal.comment}</p>
                </div>
                <div className="col-md-3">
                    { transaction.status=="dealing" && <div>Waiting Accept</div>}
                    { transaction.status!="dealing" && this.isUserDealed(deal, transaction) && <div className="text-success">Dealed</div> }
                    { transaction.status!="dealing" && !this.isUserDealed(deal, transaction) && <div className="text-muted">Refused</div> }
                </div>
            </div>
        );
    }
}