import React from 'react';
import ReactDom from 'react-dom';
import './bongmi/layout'
import './sass/common.scss'
import { Router, Route, hashHistory, Link, IndexRoute, Redirect,browserHistory } from 'react-router';
import { createHistory, createHashHistory, useBasename } from 'history';
// 此处用于添加根路径
/*const history = useBasename(createHashHistory)({
    queryKey: '_key',
    basename: '/blog-app',
});*/
/**
 * 头部导航
 * */
import Header from './bongmi/HeaderNav.jsx';
import Footer from './bongmi/Footer.jsx';
ReactDom.render(
    <Header />,
    document.getElementById('header')
);
import Index from './bongmi/Index.jsx';
import Femometer from './bongmi/Femometer.jsx';
import App from './bongmi/App.jsx';
import About from './bongmi/About.jsx';
var routes = (
    <Router history={hashHistory}>
        <IndexRoute component={Index} />
        <Route path="/" component={Index}/>
        <Route path="femometer" component={Femometer}/>
        <Route path="app" component={App}/>
        <Route path="about" component={About}/>
    </Router>
)
ReactDom.render(
    (<Router history={hashHistory}>
        <Route path="/" component={Index}/>
        <Route path="femometer" component={Femometer}/>
        <Route path="app" component={App}/>
        <Route path="about" component={About}/>
    </Router>),
    document.getElementById('content')
);
ReactDom.render(
    <Footer />,
    document.getElementById('footer')
);

