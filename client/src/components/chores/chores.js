import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Col, Card, Icon, CardTitle, Row } from "react-materialize";

class Chores extends Component {
  render() {
    return (
      <Row>
        <Col m={6} s={12}>
          <Card
            actions={[
              <a key="1" href="#">
                This is a Link
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="https://i0.wp.com/www.org4life.com/wp-content/uploads/2016/10/Depositphotos_72499939_m-2015.jpg">
                Card Title
              </CardTitle>
            }
            revealIcon={<Icon>more_vert</Icon>}
          >
            Here is the standard card with an image thumbnail.
          </Card>
        </Col>
      </Row>
    );
  }
};

export default Chores;