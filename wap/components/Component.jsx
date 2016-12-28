import React from 'react';
import * as ReactIntl from 'react-intl';
/**FormattedDate
 * params:时间戳
 * return:4/5/2016
 * */
var IntlMixin     = ReactIntl.IntlMixin;
var FormattedDate = ReactIntl.FormattedDate;
var ComponentDate = React.createClass({
    /*mixins: [IntlMixin],*/
    render: function () {
        return (
            <p>
                <FormattedDate
                    value={new Date()}
                    day="numeric"
                    month="long"
                    year="numeric" />
            </p>
        );
    }
});
var ComponentDateShort = React.createClass({
    render: function () {
        return (
            <p>
                <FormattedDate value={new Date()} />
            </p>
        );
    }
});

/**FormattedTime
 * params:时间戳
 * return: 下午4:28 4:29 PM
 * */
var FormattedTime = ReactIntl.FormattedTime;
var ComponentTime = React.createClass({
    render: function () {
        return (
            <FormattedTime value={new Date()} />
        );
    }
});

/**FormattedRelative
 * params:时间戳
 * return: 昨天 1分钟前 1天前 20分钟后 ...
 * */
var FormattedRelative = ReactIntl.FormattedRelative;
var ComponentRelative = React.createClass({
    render: function () {
        var postDate    = Date.now() - (1000 * 60 * 60 * 24);
        var commentDate = Date.now() - (1000 * 60 * 60 * 2);
        var meetingDate = Date.now() + (1000 * 60 * 51);

        return (
            <ul>
                <li><FormattedRelative value={postDate} /></li>
                <li><FormattedRelative value={commentDate} /></li>
                <li><FormattedRelative value={meetingDate} /></li>
            </ul>
        );
    }
});

/**FormattedNumber
 * params:
 * return:
 * */
var FormattedNumber = ReactIntl.FormattedNumber;
var ComponentNumber = React.createClass({
    render: function () {
        return (
            <ul>
                <li><FormattedNumber value={4200} /></li>
                <li><FormattedNumber value={0.9} style="percent" /></li>
                <li>
                    <FormattedNumber
                        value={99.95}
                        style="currency"
                        currency="USD" />
                </li>
            </ul>
        );
    }
});

/**FormattedPlural
 * params:
 * return:
 * */
var FormattedPlural = ReactIntl.FormattedPlural;
var ComponentPlural = React.createClass({
    render: function () {
        return (
            <FormattedPlural
                value={1000}
                zero="no message"
                one="one message"
                two="two messages"
                few="few messages"
                many="many messages"
                other="other messages"
            />
        );
    }
});

/**FormattedMessage
 * params:
 * return:
 * */
const App = {
    greeting:'Hello Howard!',
}
var FormattedMessage = ReactIntl.FormattedMessage;
var ComponentMessage = React.createClass({
    render: function () {
        return (
            <FormattedMessage
                id="App.greeting"
                description="doc has App.greeting"
                defaultMessage="doc hasn't App.greeting"
            />
        );
    }
});

//导出组件
export default ComponentMessage;
