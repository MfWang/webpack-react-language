import React from 'react';
import '../sass/about.scss'
class AboutCareer extends React.Component {
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
                <div className="career">
                    <div className="hr">
                        <span>简历投至Hr信箱</span><br/>
                        <span>hr@bongmi.com</span>
                        <span>400-1068-321</span>
                    </div>
                    <table border="0">
                        <thead>
                            <tr><th></th><th>招聘职位</th><th colSpan="3"></th><th>发布时间</th><th></th></tr>
                        </thead>
                        <tbody>
                            <tr><td></td><td className="job-name">测试工程师</td><td colSpan="3"></td><td className="job-time">2016-03-09</td><td></td></tr>

                            <tr><td></td><td className="job-name">测试工程师</td><td colSpan="3"></td><td className="job-time">2016-03-09</td><td></td></tr>
                            <tr><td></td><td className="job-name">测试工程师</td><td colSpan="3"></td><td className="job-time">2016-03-09</td><td></td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="job-detail">
                    <a href="">招贤纳士</a>
                    <p className="job-name">测试工程师</p>
                    <p>15-30k 经验3-5年 本科及以上</p>
                    <p>职位描述：</p>
                    <p>1. 本科及以上学历，1年以上前端开发经验，具有扎实的计算机基础知识</p>
                    <p>2. 熟悉W3C标准及规范，熟悉HTML5、CSS3、XHTML、DIV、CSS、JavaScript等页面技术</p>
                    <p>3. 熟悉各类JS框架</p>
                    <p>任职条件</p>
                    <p>1. 本科及以上学历，1年以上前端开发经验，具有扎实的计算机基础知识</p>
                    <p>2. 熟悉W3C标准及规范，熟悉HTML5、CSS3、XHTML、DIV、CSS、JavaScript等页面技术</p>
                </div>
            </div>
        )
    }
}
//导出组件
export default AboutCareer;
