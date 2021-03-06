import React from "react";
import { connect } from "react-redux";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// import Remove from "@material-ui/icons/Remove";
// import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";

// import product1 from "assets/img/product1.jpg";
// import product2 from "assets/img/product2.jpg";
// import product3 from "assets/img/product3.jpg";

class ShoppingCartPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  removeProduct = (id,price) => {
    console.log("yeah in remove prod", id,price);
    const action = {
      type: "REMOVE_CART",
      payload: { id: id, price: price }
    };
    this.props.dispatch(action);
    
      this.props.history.push("/shopping-cart");
   
  };
  handleNext = () => {
    this.props.history.push("/checkout");
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header
          brand="Leather Stitchers"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
        />

        <Parallax
          image={require("assets/img/examples/bg2.jpg")}
          filter="dark"
          small
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h2 className={classes.title}>Shopping Cart</h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Card plain>
              <CardBody plain>
                <h3 className={classes.cardTitle}>Shopping Cart</h3>
                {this.props.cart.map(row => (
                  <Table
                    key={row.id}
                    

                    tableData={[
                      [
                        <div className={classes.imgContainer}>
                          <img
                            src={row.product_image}
                            alt="..."
                            className={classes.img}
                          />
                        </div>,

                        <span>
                          <a
                            href="#jacket"
                            className={classes.tdNameAnchor}
                          />
                          <br />

                          {row.product_short_attr}
                          <small className={classes.tdNameSmall} />
                        </span>,

                        <span>
                          <small className={classes.tdNameSmall} />{" "}
                          {row.sizeSelect}
                        </span>,
                        <span>
                          <small className={classes.tdNumberSmall} />$
                          {row.product_price}
                        </span>,
                        <span>
                          1{` `}
                          
                        </span>,
                        <span>
                          <small className={classes.tdNumberSmall}>$</small>{" "}
                          {row.product_price}
                        </span>,
                        <Tooltip
                          id="close1"
                          title="Remove item"
                          placement="left"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button
                            link
                            className={classes.actionButton}
                            onClick={() =>
                              this.removeProduct(row.product_id,row.product_price)
                            }
                          >
                            <Close />
                          </Button>
                        </Tooltip>
                      ]

                    
                    ]}
                    tableShopping
                    customHeadCellClasses={[
                      classes.textCenter,
                      classes.description,
                      classes.description,
                      classes.textRight,
                      classes.textRight,
                      classes.textRight
                    ]}
                    customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                    customCellClasses={[
                      classes.tdName,
                      classes.customFont,
                      classes.customFont,
                      classes.tdNumber,
                      classes.tdNumber +
                        " " +
                        classes.tdNumberAndButtonGroup,
                      classes.tdNumber + " " + classes.textCenter
                    ]}
                    customClassesForCells={[1, 2, 3, 4, 5, 6]}
                  />
                ))}
                <div align="right">
                  <span>
                    <large className={classes.tdNumberLarge}>
                      Total Amount: ${this.props.updateTotal}
                    </large>
                  </span>
                </div>
                <div align="right">
                  <Button color="info" round onClick={this.handleNext}>
                    Complete Purchase <KeyboardArrowRight />
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.thefilmjackets.com/"
                      className={classes.block}
                    >
                      Leather Stitchers
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.thefilmjackets.com//collections/biker-collection"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.thefilmjackets.com">Kash</a> for a full
                stack project.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default withStyles(shoppingCartStyle)(
  connect(mapReduxStateToProps)(ShoppingCartPage)
);

//export default withStyles(shoppingCartStyle)(ShoppingCartPage);
