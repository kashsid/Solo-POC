//import React from "react";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes

// plugin that creates slider
//import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Tooltip from "@material-ui/core/Tooltip";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import Cached from "@material-ui/icons/Cached";
// import Subject from "@material-ui/icons/Subject";
// import Check from "@material-ui/icons/Check";
// core components
//import Accordion from "components/Accordion/Accordion.jsx";
//import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
//import Grid from "@material-ui/core/Grid";

import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
//import Clearfix from "components/Clearfix/Clearfix.jsx";



import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";

const state = {
  selectedId: ""
};


class SectionProducts extends React.Component {

  
  constructor(props) {
    super(props);

    this.state = {
      checked: [1, 9, 27],
      priceRange: [101, 790]
    };
  }

  
  handleImageClick = id => () => {
    console.log("image clicked for id", id);
    this.setState({
     selectedId: id
    });
    this.props.dispatch({
      type: "FETCH_PRODUCT",
      payload: this.props.products.product_id
      
    });
    this.props.history.push("/products");

  };
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        

        <GridItem
          md={4}
          sm={4}
          
        >
          <Card plain product>
            <CardHeader image plain>
              
              <Link
                className={classes.link}
               
                to={"/product/" + this.props.products.product_id}
              >
                {/* <img src={suit1} alt=".." /> */}
                <img src={this.props.products.product_image} alt=".." />
              </Link>
            </CardHeader>

            <CardBody plain>
              <Link className={classes.link} to="/product">
                <h4 className={classes.cardTitle}>
                  {this.props.products.product_short_attr}
                </h4>
              </Link>
              <p className={classes.description}>
                {this.props.products.product_description}
              </p>
            </CardBody>
            <CardFooter plain className={classes.justifyContentBetween}>
              <div className={classes.priceContainer}>
                <span className={classes.price}>$
                  {this.props.products.product_price}
                </span>
              </div>
              <Tooltip
                id="tooltip-top"
                title="Saved to Wishlist"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  justIcon
                  simple
                  color="rose"
                  className={classes.pullRight}
                >
                  <Favorite />
                </Button>
              </Tooltip>
            </CardFooter>
          </Card>
        </GridItem>
        
      </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState
});
export default withStyles(styles)(
  connect(mapReduxStateToProps)(SectionProducts)
);
