// ==UserScript==
// @name         苏科大校园网自动登录脚本
// @namespace    https://github.com/XFiendd/aut0_Login/
// @version      0.1
// @description  苏科大校园网自动登录脚本
// @author       XFiend
// @match        http://10.160.63.9/*
// @icon         http://10.160.63.9:801/eportal/extern/123/ip/1/8bf05145a5be5aff993538a202421b07.jpg
// @grant        unsafeWindow
// @license MIT
// ==/UserScript==

var username = "XXXX";//学号
var password = "XXX";//密码
var port = -1;//0校园网，1中国移动，2中国电信，3中国联通
(function() {
    'use strict';
    var operator_list = ["@keda","@cmcc","@telecom","@unicom"];
    window.addEventListener('load', function(){
    $("select[name='ISP_select']").val(operator_list[port]);
    $("input[name='DDDDD']").val(username);
    $("input[name='upass']").val(password);
    $("input[name='0MKKey']").click();
    }, false);
})();
