import React, {Component} from 'react';
//如果浏览器没有自带intl，则需要在使用npm安装intl之后添加如下代码
import intl from 'intl';
//引入locale配置文件，具体路径根据实际情况填写
import zh_CN from './zh_CN';
import en_US from './en_US';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en'
import {addLocaleData} from 'react-intl';
addLocaleData([...en,...zh]);
const App = {
    greeting:'Hello Howard!',
}
export default App;