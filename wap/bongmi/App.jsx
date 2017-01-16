import React from 'react';
import '../sass/app.scss'
import $ from 'jquery'
import zh from '../json/zh.json'
let app = zh.pages.femometer.app
class App extends React.Component {
    render() {
        return (
            <div className="contain">
                <div className="f1">
                    <h1>{app.title}</h1>
                    <div className="btn">
                        <button>iOS下载 <i className="bmui-icon-ios"></i></button>
                        <button>Andriod下载<i className="bmui-icon-android"></i></button>
                    </div>
                    <p className="desc">{app.code}</p>
                    <div className="code">
                        <img src="../img/app/ios-qrcode.png" alt=""/>
                        <img src="../img/app/android-qrcode.png" alt=""/>
                    </div>
                </div>
                {
                    app.content.map(function (value,key) {
                        if(key+2 == 3){
                            return (
                                <div className={`f${key+2}`}>
                                    <h2 className="title">{value.title}</h2>
                                    <p className="desc">{value.desc}</p>
                                    <div className="f3-icons">
                                        <span className="i1"></span>
                                        <span className="i2"></span>
                                        <span className="i3"></span>
                                        <span className="i4"></span>
                                        <span className="i5"></span>
                                        <span className="i6"></span>
                                        <span className="i7"></span>
                                        <span className="i8"></span>
                                        <span className="i9"></span>
                                        <span className="i10"></span>
                                    </div>
                                    <div className={`f${key+2}-img`}></div>
                                </div>
                            )
                        } else {
                            return (
                                <div className={`f${key+2}`}>
                                    <h2 className="title">{value.title}</h2>
                                    <p className="desc">{value.desc}</p>
                                    <div className={`f${key+2}-img`}></div>
                                </div>
                            )
                        }

                    })
                }
            </div>
        )
    }
}
//导出组件
export default App;
