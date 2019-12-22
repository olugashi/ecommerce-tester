import React from "react";
import "./Item.scss";
import { Image, List, Rating } from "semantic-ui-react";

const Item = () => (
  <div>
    <div class="product-grid6">
      <div class="product-image6">
        <Image
          src="https://semantic-ui.com/images/wireframe/image.png"
          size="medium"
          as="a"
          href="#"
        />
        <span class="product-new-label">New</span>
      </div>
      <div class="product-content">
        <h3 class="ui header">
          Text 1
          <div href="#" class="sub header">
            Text 2
          </div>
        </h3>
        <Rating icon="star" defaultRating={5} maxRating={5} />
        <br />
        <br />
        <div class="price">
          $11.00
          <span>$14.00</span>
        </div>
      </div>
      <List className="social" horizontal>
        <List.Item>
          <List.Icon circular name="eye" size="large" />
        </List.Item>
        <List.Item>
          <List.Icon circular name="heart" size="large" />
        </List.Item>
        <List.Item>
          <List.Icon circular name="cart arrow down" size="large" />
        </List.Item>
      </List>
    </div>
  </div>
);

export default Item;
