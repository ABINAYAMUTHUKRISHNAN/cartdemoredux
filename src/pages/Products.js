import React, { Component } from "react";
import MainNavigation from "../components/MainNavigation";
import "./Products.css";
import { Layout, Row, Card, Divider, Col, Button, Icon } from "antd";
import { connect } from "react-redux";
import { addProductToCart } from "../store/actions";

const { Meta } = Card;
class ProductsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />

        <main className="products">
          <ul>
            {this.props.products.map(product => (
              <li key={product.id}>
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={this.props.addProductToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
              //   <Col xs={12} lg={6} span={6} className="column">
              //     <Card
              //       key={product.id}
              //       style={{ width: "100%" }}
              //       cover={<img src={product.pic} />}
              //     >
              //       <Meta title={product.title} description={product.price} />
              //       <br />
              //       <Button
              //         // onClick={this.handleClick}
              //         onClick={context.addProductToCart.bind(this, product)}
              //         style={{ width: "100%" }}
              //       >
              //         Add to Cart
              //       </Button>
              //     </Card>
              //   </Col>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
