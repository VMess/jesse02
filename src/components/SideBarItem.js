import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    link: {
        textDecoration: 'none',
    }
};

class SideBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        const { classes } = this.props;
        console.log(this.props);

        return (
            <NavLink 
                activeClassName="active"
                exact={this.props.isExact}
                to={this.props.linkTo}
                className={classes.link}
            >
                <MenuItem>{this.props.primaryText}</MenuItem>
            </NavLink>
        )
    }
}

SideBarItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBarItem);
