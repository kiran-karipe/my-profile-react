import React, { Component } from 'react';
import './Footer.css';
import { Button, Glyphicon, ButtonGroup } from 'react-bootstrap';
const HOME = 'HOME';

class Footer extends Component {
  render() {
    return (
      <div className="banner-text-footer">
        <hr/>
        <ul className="social">
        <ButtonGroup>
          <Button bsSize="large" onClick={() => this.props.onClickFooterItem(HOME)}>
            <Glyphicon glyph="home" />
          </Button>
        </ButtonGroup>
        <ButtonGroup >
          <Button bsSize="large" href="https://github.com/kiran-karipe">
            <Glyphicon glyph="home"/>
          </Button>
        </ButtonGroup>
        <ButtonGroup >
          <Button bsSize="large" href="https://www.linkedin.com/in/sai-kiran-karipe/">
            <Glyphicon glyph="globe" />
          </Button>
        </ButtonGroup>
        </ul>
        <p className="copyright">
          <Glyphicon glyph="copyright-mark" />
           <span> </span>Copyright2018
        </p>
      </div>
    )
  }
}

export default Footer;
