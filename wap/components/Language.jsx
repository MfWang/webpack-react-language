import React from 'react';
import * as ReactIntl from 'react-intl';

/**引用自己的多语言配置文件
 * */
//import 的时候，如果不使用相对路径或者绝对路径，node默认会去node_modules/文件夹下去找
//所以不要写成 import zh_CN from 'zh_CN';
import * as constantsZh from './zh_CN';
import * as constantsEn from './en_US';
var ComponentLanguage = React.createClass({
    render: function () {
        return (
            <p>lang:{this.props.locales}...{constantsEn.params.hello}</p>
        );
    }
});

//导出组件
export default ComponentLanguage;