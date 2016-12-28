import React from 'react';
import ReactDom from 'react-dom';


/**
 * 最基本的例子
 */
/*import Component1 from './components/Dialog.jsx';
ReactDom.render(
    <Component1 />,
    document.getElementById('content')
);*/


/**FormattedDate
 * params:时间戳
 * return:4/5/2016
 * */
/*import Component from './components/Component.jsx';
import {IntlProvider} from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import {addLocaleData} from 'react-intl';
addLocaleData([...en,...zh]);
var intlData = {
    "locales": "en",
    "messages": {
        "photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
    }
};
ReactDom.render(
    <IntlProvider locale={intlData.locales} >
        <Component  {...intlData}/>
    </IntlProvider>,
    document.getElementById('content')
);*/

/**引用自己的多语言配置文件
 * */
import Component from './components/Language.jsx';
import {IntlProvider} from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import {addLocaleData} from 'react-intl';
import zh_CN from './components/zh_CN';
import en_US from './components/en_US';
addLocaleData([...en,...zh]);
var intlData = {
    "locales": "en",
    /*"messages":this.locales == 'en' ? {en_US} : {zh_CN},*/
    "test":"test"
};
ReactDom.render(
    <IntlProvider locale={intlData.locales} {...intlData}>
        <Component  {...intlData}/>
    </IntlProvider>,
    document.getElementById('content')
);