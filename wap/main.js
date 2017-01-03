import React from 'react';
import ReactDom from 'react-dom';
/**
 * 最基本的例子
 */
import Component1 from './components/Dialog.jsx';
ReactDom.render(
    <Component1 />,
    document.getElementById('content')
);
/**
 * 头部导航
 * */
import Header from './components/HeaderNav.jsx';
ReactDom.render(
    <Header />,
    document.getElementById('header-nav')
);