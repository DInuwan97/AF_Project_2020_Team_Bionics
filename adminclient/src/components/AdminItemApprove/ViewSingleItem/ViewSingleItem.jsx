import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../Layout/Spinner";
export default class ViewSingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    this.setState({ isLoading: true });
    axios.get(`/api/items/${id}`).then((res) => {
      const items = res.data;
      this.setState({ items, isLoading: false });
    });
  }

  render() {
    const {
      id,
      itemImage,
      company,
      itemName,
      price,
      size,
      addedBy,
      description,
    } = this.state.items;
    return (
      <section class="content">
        <div class="card card-solid">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-sm-6">
               
                <div class="col-12" style ={style.image}>
                  <img
                    src={
                      this.state.isLoading
                        ? `${require("../../Layout/spinner.gif")}`
                        : itemImage
                    }
                    class="product-image"
                    alt="Product Image"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <h4 class="my-3">Company : <small>{company}</small></h4>
                <h4>Item Name : <small>{itemName}</small></h4>
                <br />
                <h4>Added By : <small>{addedBy}</small></h4>
                <hr />
                <h4>Available Colors</h4>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-default text-center active">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option1"
                      autocomplete="off"
                      checked=""
                    />
                    Green
                    <br />
                    <i class="fas fa-circle fa-2x text-green"></i>
                  </label>
                  <label class="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option2"
                      autocomplete="off"
                    />
                    Blue
                    <br />
                    <i class="fas fa-circle fa-2x text-blue"></i>
                  </label>
                  <label class="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option3"
                      autocomplete="off"
                    />
                    Purple
                    <br />
                    <i class="fas fa-circle fa-2x text-purple"></i>
                  </label>
                  <label class="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option4"
                      autocomplete="off"
                    />
                    Red
                    <br />
                    <i class="fas fa-circle fa-2x text-red"></i>
                  </label>
                  <label class="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option5"
                      autocomplete="off"
                    />
                    Orange
                    <br />
                    <i class="fas fa-circle fa-2x text-orange"></i>
                  </label>
                </div>

                <h4 class="mt-3">
                  Size
                </h4>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option1"
                      autocomplete="off"
                    />
                    <span class="text-xl" style = {style.size}>{size}</span>
                  </label>
                </div>

                <div class="bg-gray py-2 px-3 mt-4">
                  <h4 class="mb-0">Rs.{price}</h4>
                </div>

                <div class="mt-4">
                  <div class="btn btn-primary btn-lg btn-flat">
                    <i class="fas fa-check-circle fa-lg mr-2"></i>
                    Approve Item
                  </div>

                  <div class="btn btn-default btn-lg btn-flat">
                    <i class="fas fa-trash-alt fa-lg mr-2"></i>
                    Decline Item
                  </div>
                </div>

                <div class="mt-4 product-share">
                  <a href="#" class="text-gray">
                    <i class="fab fa-facebook-square fa-2x"></i>
                  </a>
                  <a href="#" class="text-gray">
                    <i class="fab fa-twitter-square fa-2x"></i>
                  </a>
                  <a href="#" class="text-gray">
                    <i class="fas fa-envelope-square fa-2x"></i>
                  </a>
                  <a href="#" class="text-gray">
                    <i class="fas fa-rss-square fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <nav class="w-100">
                <div class="nav nav-tabs" id="product-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="product-desc-tab"
                    data-toggle="tab"
                    href="#product-desc"
                    role="tab"
                    aria-controls="product-desc"
                    aria-selected="true"
                  >
                    Description
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="product-comments-tab"
                    data-toggle="tab"
                    href="#product-comments"
                    role="tab"
                    aria-controls="product-comments"
                    aria-selected="false"
                  >
                    Comments
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="product-rating-tab"
                    data-toggle="tab"
                    href="#product-rating"
                    role="tab"
                    aria-controls="product-rating"
                    aria-selected="false"
                  >
                    Rating
                  </a>
                </div>
              </nav>
              <div class="tab-content p-3" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="product-desc"
                  role="tabpanel"
                  aria-labelledby="product-desc-tab"
                >
                  {" "}
                  {description}{" "}
                </div>
                <div
                  class="tab-pane fade"
                  id="product-comments"
                  role="tabpanel"
                  aria-labelledby="product-comments-tab"
                >
                  {" "}
                  Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum
                  risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et
                  finibus sem, ut commodo lectus. Cras eget neque dignissim,
                  placerat orci interdum, venenatis odio. Nulla turpis elit,
                  consequat eu eros ac, consectetur fringilla urna. Duis gravida
                  ex pulvinar mauris ornare, eget porttitor enim vulputate.
                  Mauris hendrerit, massa nec aliquam cursus, ex elit euismod
                  lorem, vehicula rhoncus nisl dui sit amet eros. Nulla turpis
                  lorem, dignissim a sapien eget, ultrices venenatis dolor.
                  Curabitur vel turpis at magna elementum hendrerit vel id dui.
                  Curabitur a ex ullamcorper, ornare velit vel, tincidunt ipsum.{" "}
                </div>
                <div
                  class="tab-pane fade"
                  id="product-rating"
                  role="tabpanel"
                  aria-labelledby="product-rating-tab"
                >
                  {" "}
                  Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac
                  habitasse platea dictumst. Aenean elementum leo augue, id
                  fermentum risus efficitur vel. Nulla iaculis malesuada
                  scelerisque. Praesent vel ipsum felis. Ut molestie, purus
                  aliquam placerat sollicitudin, mi ligula euismod neque, non
                  bibendum nibh neque et erat. Etiam dignissim aliquam ligula,
                  aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia
                  lacinia. Morbi ac molestie lectus, vitae hendrerit nisl.
                  Nullam metus odio, malesuada in vehicula at, consectetur nec
                  justo. Quisque suscipit odio velit, at accumsan urna
                  vestibulum a. Proin dictum, urna ut varius consectetur, sapien
                  justo porta lectus, at mollis nisi orci et nulla. Donec
                  pellentesque tortor vel nisl commodo ullamcorper. Donec varius
                  massa at semper posuere. Integer finibus orci vitae vehicula
                  placerat.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const style = {
  image : {
    width :'80%',
    height : '80%',
    paddingLeft :"40px",
    paddingTop : "35px"
  },
  price : {
    
  },
  size : {
    textSize : '10px'
  }
}