import React from 'react';
import '../sass/about.scss'
class AboutFeedback extends React.Component {
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
                <div className="feedback">
                    <form action="" className="bmui-form feedback_form" id="feedback_form">
                        <p>在使用过程中，您是否遇到问题？或者有什么建议？请告诉我们，以下内容均为必须填写</p>
                        <div className="bmui-form-group">
                            <textarea className="bmui-form-field" name="desc" placeholder="在这里描述您遇到的问题"></textarea>
                        </div>
                        <div className="bmui-form-group">
                            <input type="text" name="contact" className="bmui-form-field" placeholder="请输入您的联系方式" />
                        </div>
                        <div className="bmui-form-group clearfix" id="form_group_captcha">
                            <input className="bmui-form-field authcode" placeholder="验证码" type="text" name="captcha" />
                                <a href="javascript:void(0);" className="captcha" id="change_captcha">
                                    <img src="#" className="captcha__img" />
                                        <span className="captcha__text">看不清，换一个</span>
                                </a>
                        </div>
                        <div className="bmui-form-group">
                            <input type="submit" value="提交" className="bmui-btn bmui-btn-primary bmui-btn-block bmui-radius" />
                        </div>
                        <p className="hint">提交建议或问题被采纳后，我们会通过所留方式与您联系</p>
                    </form>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutFeedback;
