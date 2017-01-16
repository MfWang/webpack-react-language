import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery'
/**
 * 头部导航
 * */
import Header from './bongmi/HeaderNav.jsx';
ReactDom.render(
    <Header />,
    document.getElementById('header-nav')
);
import LikeButton from './components/LikeButton.jsx';
ReactDom.render(
    <LikeButton title={'params'} name="world"/>,
    document.getElementById('LikeButton')
);
import Ajax from './components/Ajax.jsx';
ReactDom.render(
    <Ajax source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('ajax')
);
import Promise from './components/Promise.jsx';
ReactDom.render(
    <Promise promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,
    document.getElementById('promise')
);

/**
 * 最基本的例子
 */
import Component1 from './components/Dialog.jsx';
ReactDom.render(
    <Component1 />,
    document.getElementById('content')
);
import Main from './components/Main.jsx';
var data = 'Hello World'
ReactDom.render(
    <Main name="W、MF" title={data}>
        <span>字节点span1</span>
        <span>字节点span2</span>
    </Main>,
    document.getElementById('main')
);
import Form from './components/Form.jsx';
ReactDom.render(
    <Form name="W、MF">
    </Form>,
    document.getElementById('form')
);
