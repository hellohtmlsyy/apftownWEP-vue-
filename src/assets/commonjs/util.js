import Axios from 'axios'

//获取cookie、
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//设置cookie,增加到vue实例方便全局调用
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//删除cookie
export function delCookie(cname) {
    setCookie(cname, '', '-1');
}

//判断是否登录是否报名
//export

//分享
export function wxShare(getUrl, url, title, imgUrl, desc, golink) {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    var title = title;
    var imgUrl = imgUrl;
    var desc = desc;
    var golink = golink;
    if (isWeixin) {
        Axios.get(getUrl, {
                params: {
                    url: encodeURI(url),
                }
            })
            .then(res => {
                if (res.data.success) {
                    var obj = res.data.data;
                    wx.config({
                        signature: obj.signature,
                        appId: obj.appId,
                        url: obj.url,
                        nonceStr: obj.nonceStr,
                        timestamp: obj.timestamp,
                        jsApiTicket: obj.jsApiTicket,
                        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
                    });
                    wx.ready(function() {
                        wx.onMenuShareTimeline({
                            title: title,
                            link: golink,
                            imgUrl: imgUrl,
                            success: function() {
                                // 用户确认分享后执行的回调函数
                                alert('分享到朋友圈成功');
                            },
                            cancel: function() {
                                // 用户取消分享后执行的回调函数
                                alert('你没有分享到朋友圈');
                            }
                        });
                        wx.onMenuShareAppMessage({
                            title: title,
                            desc: desc,
                            link: golink,
                            imgUrl: imgUrl,
                            trigger: function(res) {
                                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                            },
                            success: function(data1) {
								console.log('成功',data1)
                                alert('分享给朋友成功');
                            },
                            cancel: function(data2) {
								console.log('取消：',data2)
                                alert('你没有分享给朋友');
                            },
                            fail: function(res) {
                                alert(JSON.stringify(res));
                            }
                        });
                    });
                    wx.error(function(res) {});
                } else {
                    alert(res.data.errMsg)
                }
            })
            .catch(err => { console.log(err) })
    }
}
