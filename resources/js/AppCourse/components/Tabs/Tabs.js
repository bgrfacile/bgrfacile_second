import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import { Link } from "react-router-dom";

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab },
        } = this;

        return (
            <div className="min-h-full flex flex-col">
                <div className="flex flex-wrap justify-between items-end mb-2">
                    <div className="flex">
                        {children.map((child) => {
                            const { label } = child.props;
                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Link to="/profile/my-exos/create" className="flex items-center px-2 py-1 bg-rose-500 text-gray-100 hover:bg-rose-800 border rounded-md">
                                <svg width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z"></path><path fill="currentColor" d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"></path></svg>
                                <span className="w-full ml-2">nouveau exercice</span>
                            </Link>
                            {/* <Link to="/profile/my-exos/create" className="flex items-center px-2 py-1 bg-green-500 text-gray-100 hover:bg-green-800 border rounded-md">
                                <svg width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z"></path><path fill="currentColor" d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"></path></svg>
                                <span className="w-full ml-2">une solutions</span>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
