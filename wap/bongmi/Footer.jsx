import React from 'react';
import style from '../sass/footer.scss'
import $ from 'jquery'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: false,
            product:false,
            contact: false,
            focus:false,
            option:false,
            lang:'zh'
        };
    }
    setVal(){
        this.setState({about: false, product: false, contact: false, focus: false});
    }
    footerSubNav(index){
        this.setVal()
        switch(index) {
            case 1:this.setState({about: !this.state.about});break;
            case 2:this.setState({product: !this.state.product});break;
            case 3:this.setState({contact: !this.state.contact});break;
            case 4:this.setState({focus: !this.state.focus});break;
        }
    }
    langChange(lang){
        this.setState({option: false,lang: lang});
    }
    langShow(){
        this.setState({option: !this.state.option});
    }
    render() {
        return (
            <div className="footer-bar">
                <div className={this.state.about == true ? 'footer-nav--active' : 'footer-nav'} onClick={this.footerSubNav.bind(this,1)}>
                    <p className="nav-name">关于<i className="bmui-icon-arrowdown"></i></p>
                    <ul className="footer-side-nav">
                        <li className="footer-sidenav-li"><a href="">关于我们</a></li>
                        <li className="footer-sidenav-li"><a href="">公司简介</a></li>
                    </ul>
                </div>
                <div className={this.state.product == true ? 'footer-nav--active' : 'footer-nav'}>
                    <p className="nav-name" onClick={this.footerSubNav.bind(this,2)}>产品<i className="bmui-icon-arrowdown"></i></p>
                    <ul className="footer-side-nav">
                        <li className="footer-sidenav-li"><a href="">基础体温计</a></li>
                        <li className="footer-sidenav-li"><a href="">耳温枪</a></li>
                    </ul>
                </div>
                <div className={this.state.contact == true ? 'footer-nav--active' : 'footer-nav'}>
                    <p className="nav-name" onClick={this.footerSubNav.bind(this,3)}>联系<i className="bmui-icon-arrowdown"></i></p>
                    <ul className="footer-side-nav">
                        <li className="footer-sidenav-li"><a href="">新浪微博</a></li>
                        <li className="footer-sidenav-li"><a href="">Facebook</a></li>
                    </ul>
                </div>
                <div className={this.state.focus == true ? 'footer-nav--active' : 'footer-nav'}>
                    <p className="nav-name" onClick={this.footerSubNav.bind(this,4)}>关注<i className="bmui-icon-arrowdown"></i></p>
                    <ul className="footer-side-nav">
                        <li className="footer-sidenav-li"><a href="">微信</a></li>
                        <li className="footer-sidenav-li"><a href="">微博</a></li>
                    </ul>
                </div>

                <div className="contact">
                    <h3><i className="bmui-icon-phone"></i>400-1-68-321</h3>
                    <p>周一至周五 9:30-18:00(仅收市话费)</p>
                </div>
                <div className="copyright">
                    <p className={style.text}>Copyright@2014-2016 杭州棒糖网络科技有限公司 All Rights Reserved.</p>
                    <p><span>浙 B2-20160866</span><span><a className="active" href="">隐私策略</a></span><span><a className="active"
                        href="">使用条款</a></span></p>
                    <div className="lang-change">
                        <ul className={this.state.option == true ? 'show':'hide'}>
                            <li className={this.state.lang == 'en' ? 'flag-en selected' : 'flag-en'} data-lang="en" onClick={this.langChange.bind(this,'en')}></li>
                            <li className={this.state.lang == 'zh' ? 'flag-zh selected' : 'flag-zh'} data-lang="zh" onClick={this.langChange.bind(this,'zh')}></li>
                        </ul>
                        <div className={`lang-show flag-${this.state.lang}`} onClick={this.langShow.bind(this)}><i className={this.state.option == true ? 'bmui-icon-arrowdown':'bmui-icon-arrowup'}></i></div>
                    </div>
                </div>
            </div>
        )
    }
}
//导出组件
export default Footer;
