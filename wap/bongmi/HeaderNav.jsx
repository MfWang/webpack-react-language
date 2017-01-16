import React from 'react';
import '../sass/header.scss'
import { Link } from 'react-router';
var topMenuLink = [
    {
        "name":"首页",
        "link":"/"
    },
    {
        "name":"基础体温计",
        "link":"/femometer"
    },
    {
        "name":"手机应用",
        "link":"/app"
    },
    {
        "name":"耳温计",
        "link":""
    },
    {
        "name":"知识库",
        "link":""
    },
    {
        "name":"关于我们",
        "link":""
    }
]
var accountSideBar = [
    {
        "name":"我的帐号",
        "link":"",
        "icon":"bmui-icon-account account-sidebar-icon"
    },
    {
        "name":"我的地址",
        "link":"",
        "icon":"bmui-icon-address account-sidebar-icon"
    },
    {
        "name":"我的订单",
        "link":"",
        "icon":"bmui-icon-account account-sidebar-icon"
    },
    {
        "name":"退出",
        "link":"",
        "icon":"bmui-icon-logout account-sidebar-icon"
    }
]

class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            account:false
        };
    }
    headerNav(){
        this.setState({menu: !this.state.menu, account: false});
    }
    accountNav(){
        this.setState({menu: false, account: !this.state.account});
    }
    render() {
        return (
            <div>
                <div>
                    <ul className="top">
                        <li className="menu-icon"><i className="bmui-icon-question top-icon" onClick={this.headerNav.bind(this)}></i></li>
                        <li className="logo-icon"><i className="bmui-icon-warning top-icon active"></i></li>
                        <li className="account-icon">
                            <i className="bmui-icon-shopping top-icon"></i>
                            <i className="bmui-icon-account top-icon" onClick={this.accountNav.bind(this)}></i>
                        </li>
                    </ul>
                </div>
                <div className={this.state.menu === true ? "menu--active" : "menu"}>
                    <ul>
                        {
                            topMenuLink.map(function (value) {
                                return (
                                    <li className="account-sideBar-li">
                                        <a href={`#${value.link}`}>{value.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={this.state.account === true ? "account--active" : "account"}>
                    <ul>
                        {
                            accountSideBar.map(function (value) {
                                return (
                                    <li className="account-sideBar-li">
                                        <a href={value.link}><i className={value.icon}></i>{value.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
//导出组件
export default HeaderNav;