import React from 'react';
import '../sass/index.scss'
class Index extends React.Component {
    render() {
        return (
            <div className="contain">
                <div className="banner">
                    <img src="../img/index/prod.jpg" alt=""/>
                </div>
                <a href="#/femometer" className="femometer">
                    <h3 className="title">棒米基础体温计</h3>
                    <p className="desc">给女人最好的礼物</p>
                </a>
                <a href="#/wiki" className="wiki">
                    <h3 className="title">棒米学堂</h3>
                    <p className="desc">了解更多实用知识</p>
                </a>
                <a href="#/mall" className="mall">
                    <h3 className="title">棒米商城</h3>
                    <p className="desc">更多商品，琳琅满目</p>
                </a>
            </div>
        )
    }
}
//导出组件
export default Index;
