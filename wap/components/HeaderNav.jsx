import React from 'react';
import '../sass/header-nav.scss'
import '../less/header-nav.less'

var headerNavLink = [
    {
        "name":"基本例子",
        "link":"./index.html"
    },
    {
        "name":"多语言(国际版)",
        "link":"./language.html"
    },
    {
        "name":"参数调用",
        "link":"./params.html"
    }
]
class HeaderNav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                {
                    headerNavLink.map(function (value) {
                        return (
                            <a href={value.link}>{value.name} </a>
                        )
                    })
                }
            </div>
        )
    }
}
//导出组件
export default HeaderNav;