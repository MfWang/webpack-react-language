import React from 'react';
import '../sass/femometer.scss'
import zh from '../json/zh.json'
let femometer = zh.pages.femometer.index
class Femometer extends React.Component {
    render() {
        return (
            <div className="femometer">
                <div className="f1">
                    <h2 className="title">{femometer.f1.title}</h2>
                    <p className="desc">{femometer.f1.desc}</p>
                    <div className="btns">
                        <a href=""><i className="bmui-icon-start"></i>观看介绍视频</a>
                        <a href="#/app"><i className="bmui-icon-appstore"></i>下载手机应用</a>
                    </div>
                </div>
                <div className="f2">
                    <h2 className="title">{femometer.f2.title}</h2>
                    <p className="desc">{femometer.f2.desc}</p>
                    <div className="icon-list">
                        <div className="icon-list1">{femometer.f2.btn1}</div>
                        <div className="icon-list2">{femometer.f2.btn2}</div>
                        <div className="icon-list3">{femometer.f2.btn3}</div>
                    </div>
                </div>
                <div className="f3">
                    <div className="f3-bg"></div>
                    <h2 className="title">{femometer.f3.title}</h2>
                    <p className="desc">{femometer.f3.desc}</p>
                    <div className="icon-list">
                        {
                            femometer.f3.btn.map(function (value,key) {
                                return (
                                    <div className={`icon-list${key+1}`}>
                                        <p className="desc">{value.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="f4">
                    <h2 className="title">{femometer.f4.title}</h2>
                    <p className="desc">{femometer.f4.desc}</p>
                    <img src="../img/femometer/f4-b.png"></img>
                </div>
                <div className="f5">
                    <h2 className="title">{femometer.f5.title}</h2>
                    <h2 className="title2">{femometer.f5.title2}</h2>
                    <p className="desc">{femometer.f5.desc}</p>
                </div>
                <div className="f6">
                    <h2 className="title">{femometer.f6.title}</h2>
                    <p className="desc">{femometer.f6.desc}</p>
                    <div className="colors">
                        <span className="white">{femometer.f6.color.white}</span>
                        <span className="blue">{femometer.f6.color.blue}</span>
                        <span className="pink">{femometer.f6.color.pink}</span>
                        <span className="purple">{femometer.f6.color.purple}</span>
                        <span className="gold">{femometer.f6.color.gold}</span>
                    </div>
                </div>
                <div className="f7">
                    <h2 className="title">{femometer.f7.title}</h2>
                    <p className="desc">{femometer.f7.desc}</p>
                    {
                        femometer.f7.step.map(function (value,key) {
                            return (
                                <div className={`step${key+1}`}>
                                    <h3>{value.title}</h3>
                                    <p className="desc">{value.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="f8">
                    <h2 className="title">{femometer.f8.title}</h2>
                    <p className="desc">{femometer.f8.desc}</p>
                </div>
            </div>
        )
    }
}
//导出组件
export default Femometer;