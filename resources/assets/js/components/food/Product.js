import React, { Component } from "react";
import Pagination from "../../components/layouts/Pagination";

export default class Product extends Component {
    constructor(props){
        super(props);
    }

    recommended(like, dislike) {
        if (dislike === 0) {
            if (like >10) {
                return (
                    <div className="tag button" style={{backgroundColor: "#ea0000db", marginLeft:"10px"}}>Recommended</div>
                );
            }
        }
        else {
            if (parseInt(like)/parseInt(dislike) >= 2) {
                return (
                    <div className="tag button" style={{backgroundColor: "#ea0000db", marginLeft:"10px"}}>Recommended</div>
                );
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        const list = this.props.foods;
        console.log(list);
        const food_list = list.map((food)=> {
            const image = food.images;
            return (
                <div className="property-box-5" key={food.id}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href={"/foods/" + food.id} className="property-img">
                                    {this.recommended(food.like, food.dislike)}
                                    <div className="price-ratings-box">
                                    </div>
                                    <img src={food.images[0].link} alt="property-1" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href={"/foods/"+food.id} className="overlay-link" title="Like">
                                        <i className="material-icons" style={{marginTop: '4px'}}>thumb_up</i>
                                    </a>
                                    <a href={"/foods/"+food.id} className="overlay-link" title="Dislike">
                                        <i className="material-icons" style={{marginTop: '4px'}}>thumb_down</i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href={food.images[0].link} className="overlay-link">
                                            <i className="material-icons" style={{marginTop: '4px'}}>zoom_in</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">
                                <div className="row">
                                    <h1 className="title col s11" style={{textTransform: 'uppercase'}}>
                                        <a href={"/foods/"+food.id}>{food.name}</a>
                                    </h1>
                                    <div className="col s1" style={{position: 'absolute', right: '-350px'}}>
                                        <i className="material-icons favourite" style={{color: 'red', cursor: 'pointer'}} title="Favourite">favorite_border</i>
                                    </div>
                                </div>
                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>{food.user.address}
                                    </a>
                                </div>

                                <p>{food.description}</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="material-icons">thumb_up</i>{food.like}
                                    </li>
                                    <li>
                                        <i className="material-icons">thumb_down</i>{food.dislike}
                                    </li>
                                    <li>
                                        <i className="material-icons">favorite</i> 10
                                    </li>
                                </ul>
                                <br/>
                                <h5 style={{color: 'grey', boxAlign: 'right'}}><i className="material-icons" style={{marginTop: '4px'}}>attach_money</i>{food.price}VND</h5>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="col-lg-8 col-md-12" id="food-top">
                <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                    <div className="row clearfix">
                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                            <h4>
                                <span className="heading-icon">
                                    <i className="fa fa-caret-right icon-design"></i>
                                    <i className="fa fa-th-list"></i>
                                </span>
                                <span className="heading">List Food</span>
                            </h4>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7">
                            <div className="sorting-options clearfix">
                                <a href="properties-list-rightside.html" className="change-view-btn active-view-btn"><i className="fa fa-th-list"></i></a>
                                <a href="properties-grid-rightside.html" className="change-view-btn"><i className="fa fa-th-large"></i></a>
                            </div>
                            <div className="search-area">
                                <select className="selectpicker search-fields" name="location">
                                    <option>High to Low</option>
                                    <option>Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    {/*20 Result Found*/}
                </div>
                {food_list}

                <Pagination pagination={this.props.pagination} getDataPaging={this.props.getFoodsPaginate} href_to="#food-top"/>
            </div>
        );
    }
}
