/**
 * Created by wangmengfei on 17-1-3.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Language from '../components/Language.jsx';
import {IntlProvider} from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import {addLocaleData} from 'react-intl';
import zh_CN from '../components/zh_CN';
import en_US from '../components/en_US';
addLocaleData([...en,...zh]);
var intlData = {
    "locales": "en",
    /*"messages":this.locales == 'en' ? {en_US} : {zh_CN},*/
    "test":"test"
};
ReactDom.render(
    <IntlProvider locale={intlData.locales} {...intlData}>
        <Language  {...intlData}/>
    </IntlProvider>,
    document.getElementById('content')
);

/**FormattedDate
 * params:时间戳
 * return:4/5/2016
 * */
import Component from '../components/Component.jsx';
ReactDom.render(
    <IntlProvider locale={intlData.locales} >
        <Component  {...intlData}/>
    </IntlProvider>,
    document.getElementById('content')
);

/**
 * 头部导航
 * */
import Header from '../components/HeaderNav.jsx';
ReactDom.render(
    <Header />,
    document.getElementById('header-nav')
);