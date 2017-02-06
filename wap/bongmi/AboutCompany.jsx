import React from 'react';
import '../sass/about.scss'
class AboutCompany extends React.Component {
    render() {
        return (
            <div className="contain">
                <div className="about-menu">
                    <div className="scroll">
                        <ul className="about-menu-ul">
                            <li className="active"><a href="">公司简介</a></li>
                            <li><a href="">招贤纳士</a></li>
                            <li><a href="">发展历程</a></li>
                            <li><a href="">联系我们</a></li>
                            <li><a href="">常见问题</a></li>
                            <li><a href="">隐私策略</a></li>
                            <li><a href="">使用条款</a></li>
                            <li><a href="">意见反馈</a></li>
                        </ul>
                    </div>
                </div>
                <div className="company">
                    <img src="https://img.bongmi.cn/assets/images/9f2c9da.png" alt=""/>
                    <p>杭州棒糖网络科技有限公司是一家致力于用智能硬件+移动互联网+大数据模式，采集人体健康大数据，为人体制定个性化健康解决方案的新兴创业公司。公司创始团队成员均来自于浙江大学，都曾就职于国内外知名企业，在相关领域有丰富的经验。我们奉行精英团队文化，坚持精益求精理念，推祟结果导向价值观，努力打造真正为用户创造价值的精品。我们坚信人因梦想而伟大，热忱欢迎每一个有梦想、爱学习的实力派加入我们团队，跟我们一起做一件能够改变世界的Big Thing！</p>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutCompany;
