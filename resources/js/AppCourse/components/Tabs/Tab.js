import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: { activeTab, label },
        } = this;

        let className = "cursor-pointer text-2xl font-bold pb-2 pr-2";

        if (activeTab === label) {
            className += " border-b-2 border-red-600 text-red-500";
        }

        return (
            //   <li className={className} onClick={onClick}>
            //     {label}
            //   </li>
            <h4 className={className} onClick={onClick}>{label}</h4>
        );
    }
}

export default Tab;
