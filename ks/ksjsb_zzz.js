/*
快手极速版-周周赚十五万金币
环境变量添加 ksjsb_zzz 设置指定助力码
抓包教程地址：http://cxgc.top/archives/ksjsb
欢迎填我邀请码：791642607
交流群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#快手极速版-周周赚十五万金币
2 0 0,10,16,22 * * * https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js, tag=快手极速版-周周赚十五万金币, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "2 0 0,10,16,22 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js,tag=快手极速版-周周赚十五万金币
===================================Surge================================
快手极速版-周周赚十五万金币 = type=cron,cronexp="2 0 0,10,16,22 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js
====================================小火箭=============================
快手极速版-周周赚十五万金币 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zzz.js, cronexpr="2 0 0,10,16,22 * * *", timeout=3600, enable=true
 */
const $ = new Env('快手极速版-周周赚十五万金币');
const jdCookieNode = $.isNode() ? require('./ksCookie.js') : '';
let ksjsb_zzz = $.isNode() ? (process.env.ksjsb_zzz ? process.env.ksjsb_zzz : "") : ($.getdata('ksjsb_zzz') ? $.getdata('ksjsb_zzz') : "")
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxddc7c=["","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x64\x77\x78\x78\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x6A\x64\x5F\x6A\x6F\x62\x2F\x6B\x73\x6A\x73\x62\x2E\x6A\x73\x6F\x6E","\x70\x61\x72\x73\x65","\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x64","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u5FEB\u624B\u8D26\u53F7\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x0A\u76F4\u63A5\u4F7F\u7528\u6293\u5305\u5DE5\u5177\u6293\u5305","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x6D\x73\x67","\u5FEB\u624B\u6293\u53D6\x63\x6B\u6559\u7A0B\uFF1A\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\u4E0D\u5077\x63\x6B\uFF0C\u53EA\u62FF\u7B2C\u4E00\u4E2A\u53F7\u52A9\u529B\x2C\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u53F7\uFF0C\u5C31\u4E0D\u62FF\u4E86","\u672A\u8BFB\u53D6\u5230\u52A9\u529B\u7801\uFF0C\u5C06\u81EA\u52A8\u52A9\u529B\u7B2C\u4E00\u4E2A\u8D26\u53F7","\u73AF\u5883\u53D8\u91CF\u6DFB\u52A0\x20\x6B\x73\x6A\x73\x62\x5F\x7A\x7A\x7A\x20\u8BBE\u7F6E\u6307\u5B9A\u52A9\u529B\u7801","\x6C\x65\x6E\x67\x74\x68","\x0A\u5F02\u5E38\u9519\u8BEF\x2C\u8BF7\u7A0D\u5019\u91CD\u8BD5\x0A","\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x6E\x66\x6F","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x2F\x64\x65\x74\x61\x69\x6C\x3F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x4D\x65\x74\x61\x49\x64\x3D\x32","\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2A\x2F\x2A","\x63\x6F\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x6E\x65\x62\x75\x6C\x61","\x73\x61\x6D\x65\x2D\x6F\x72\x69\x67\x69\x6E","\x63\x6F\x72\x73","\x65\x6D\x70\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6E\x65\x62\x75\x6C\x61\x2F\x64\x61\x69\x6C\x79\x2D\x63\x61\x73\x68\x2F\x68\x6F\x6D\x65\x3F\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x43\x41\x53\x48\x5F\x50\x41\x47\x45\x5F\x54\x41\x53\x4B","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37","\x47\x45\x54","\x7A\x6C\x6D","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u5FEB\u624B\u8D26\u53F7","\u3011\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x3B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x3B\x20\x6B\x70\x66\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x50\x48\x4F\x4E\x45\x3B\x20\x64\x69\x64\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x39\x31\x35\x64\x30\x34\x64\x33\x65\x30\x38\x62\x35\x31\x62\x65\x3B\x20\x63\x3D\x58\x49\x41\x4F\x4D\x49\x3B\x20\x76\x65\x72\x3D\x31\x30\x2E\x32\x3B\x20\x61\x70\x70\x76\x65\x72\x3D\x31\x30\x2E\x32\x2E\x34\x31\x2E\x33\x30\x37\x35\x3B\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x3D\x7A\x68\x2D\x63\x6E\x3B\x20","\x63\x6F\x75\x6E\x74\x72\x79\x43\x6F\x64\x65\x3D\x43\x4E\x3B\x20\x73\x79\x73\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x31\x31\x3B\x20\x6D\x6F\x64\x3D\x58\x69\x61\x6F\x6D\x69\x25\x32\x38\x4D\x32\x31\x30\x32\x4B\x31\x41\x43\x25\x32\x39\x3B\x20\x6E\x65\x74\x3D\x57\x49\x46\x49\x3B\x20\x64\x65\x76\x69\x63\x65\x4E\x61\x6D\x65\x3D\x58\x69\x61\x6F\x6D\x69\x25\x32\x38\x4D\x32\x31\x30\x32\x4B\x31\x41\x43\x25\x32\x39\x3B\x20\x69\x73\x70\x3D\x43\x55\x43\x43\x3B\x20\x75\x64\x3D\x32\x36\x37\x39\x35\x31\x36\x38\x37\x38\x3B\x20\x64\x69\x64\x5F\x74\x61\x67\x3D\x32\x3B\x20","\x65\x67\x69\x64\x3D\x44\x46\x50\x44\x44\x33\x30\x46\x41\x41\x42\x32\x30\x43\x45\x37\x43\x45\x30\x44\x34\x37\x44\x38\x35\x32\x31\x43\x41\x41\x37\x36\x33\x43\x36\x37\x41\x31\x43\x35\x36\x38\x35\x31\x41\x36\x32\x44\x42\x34\x35\x34\x30\x37\x35\x39\x30\x42\x44\x43\x37\x39\x34\x43\x3B\x20\x74\x68\x65\x72\x6D\x61\x6C\x3D\x31\x30\x30\x30\x30\x3B\x20\x6B\x63\x76\x3D\x31\x34\x35\x35\x3B\x20\x61\x70\x70\x3D\x30\x3B\x20\x62\x6F\x74\x74\x6F\x6D\x5F\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E\x3D\x74\x72\x75\x65\x3B\x20\x6F\x44\x69\x64\x3D\x54\x45\x53\x54\x5F\x41\x4E\x44\x52\x4F\x49\x44\x5F\x34\x39\x37\x61\x36\x34\x33\x61\x31\x62\x32\x36\x30\x37\x61\x32\x3B\x20","\x61\x6E\x64\x72\x6F\x69\x64\x5F\x6F\x73\x3D\x30\x3B\x20\x62\x6F\x61\x72\x64\x50\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x6C\x61\x68\x61\x69\x6E\x61\x3B\x20\x61\x6E\x64\x72\x6F\x69\x64\x41\x70\x69\x4C\x65\x76\x65\x6C\x3D\x33\x30\x3B\x20\x6E\x65\x77\x4F\x63\x3D\x58\x49\x41\x4F\x4D\x49\x3B\x20\x73\x6C\x68\x3D\x30\x3B\x20\x63\x6F\x75\x6E\x74\x72\x79\x5F\x63\x6F\x64\x65\x3D\x63\x6E\x3B\x20\x6E\x62\x68\x3D\x35\x36\x3B\x20\x68\x6F\x74\x66\x69\x78\x5F\x76\x65\x72\x3D\x3B\x20\x64\x69\x64\x5F\x67\x74\x3D\x31\x36\x34\x39\x35\x37\x33\x39\x35\x34\x30\x31\x39\x3B\x20\x6D\x61\x78\x5F\x6D\x65\x6D\x6F\x72\x79\x3D\x32\x35\x36\x3B\x20\x6F\x63\x3D\x58\x49\x41\x4F\x4D\x49\x3B\x20","\x73\x68\x3D\x33\x32\x30\x30\x3B\x20\x61\x70\x70\x5F\x73\x74\x61\x74\x75\x73\x3D\x33\x3B\x20\x64\x64\x70\x69\x3D\x35\x36\x30\x3B\x20\x64\x65\x76\x69\x63\x65\x42\x69\x74\x3D\x30\x3B\x20\x62\x72\x6F\x77\x73\x65\x54\x79\x70\x65\x3D\x33\x3B\x20\x70\x6F\x77\x65\x72\x5F\x6D\x6F\x64\x65\x3D\x30\x3B\x20\x73\x6F\x63\x4E\x61\x6D\x65\x3D\x51\x75\x61\x6C\x63\x6F\x6D\x6D\x2B\x53\x6E\x61\x70\x64\x72\x61\x67\x6F\x6E\x2B\x38\x33\x35\x30\x3B\x20\x69\x73\x5F\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3D\x30\x3B\x20\x73\x77\x3D\x31\x34\x34\x30\x3B\x20\x66\x74\x74\x3D\x4B\x2D\x54\x2D\x54\x3B\x20\x61\x70\x70\x74\x79\x70\x65\x3D\x32\x32\x3B\x20\x61\x62\x69\x3D\x61\x72\x6D\x36\x34\x3B\x20","\x75\x73\x65\x72\x52\x65\x63\x6F\x42\x69\x74\x3D\x30\x3B\x20\x64\x65\x76\x69\x63\x65\x5F\x61\x62\x69\x3D\x61\x72\x6D\x36\x34\x3B\x20\x74\x6F\x74\x61\x6C\x4D\x65\x6D\x6F\x72\x79\x3D\x37\x32\x36\x36\x3B\x20\x67\x72\x61\x6E\x74\x5F\x62\x72\x6F\x77\x73\x65\x5F\x74\x79\x70\x65\x3D\x41\x55\x54\x48\x4F\x52\x49\x5A\x45\x44\x3B\x20\x69\x75\x69\x64\x3D\x3B\x20\x72\x64\x69\x64\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x36\x37\x30\x30\x36\x39\x66\x30\x64\x65\x34\x32\x62\x61\x30\x63\x3B\x20\x73\x62\x68\x3D\x31\x33\x37\x3B\x20\x64\x61\x72\x6B\x4D\x6F\x64\x65\x3D\x66\x61\x6C\x73\x65\x3B\x20","\x63\x6C\x69\x65\x6E\x74\x5F\x6B\x65\x79\x3D\x32\x61\x63\x32\x61\x37\x36\x64\x3B\x20","\x6B\x65\x79\x63\x6F\x6E\x66\x69\x67\x5F\x73\x74\x61\x74\x65\x3D\x32\x3B\x20\x73\x69\x64\x3D\x34\x31\x31\x36\x36\x33\x35\x32\x2D\x39\x65\x33\x35\x2D\x34\x38\x61\x30\x2D\x62\x36\x36\x38\x2D\x35\x31\x37\x39\x66\x37\x39\x61\x31\x65\x33\x66\x3B\x20\x63\x6F\x6C\x64\x5F\x6C\x61\x75\x6E\x63\x68\x5F\x74\x69\x6D\x65\x5F\x6D\x73\x3D\x31\x36\x34\x39\x35\x38\x31\x36\x34\x39\x30\x39\x35\x3B\x20","\x5F\x5F\x4E\x53\x57\x4A\x3D\x55\x4D\x59\x31\x6A\x37\x4A\x38\x5A\x35\x72\x67\x78\x38\x55\x6C\x4B\x32\x54\x30\x25\x32\x42\x6E\x53\x39\x54\x4F\x34\x34\x25\x32\x46\x57\x54\x41\x6B\x6C\x70\x58\x56\x6E\x71\x66\x6A\x53\x72\x53\x46\x72\x54\x54\x31\x70\x49\x25\x32\x46\x49\x59\x51\x78\x36\x25\x32\x42\x4E\x73\x37\x33\x39\x41\x41\x41\x41\x41\x41\x51\x25\x33\x44\x25\x33\x44\x3B","\u53BB\u52A9\u529B\x20\x2D\x3E\x20","\u52A9\u529B\u7ED3\u679C\x3A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x2F\x66\x72\x69\x65\x6E\x64\x41\x73\x73\x69\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6E\x65\x62\x75\x6C\x61\x2F\x64\x61\x69\x6C\x79\x2D\x69\x6E\x76\x69\x74\x65\x3F\x66\x69\x64\x3D\x32\x36\x37\x39\x35\x31\x36\x38\x37\x38\x26\x63\x63\x3D\x70\x61\x6E\x65\x6C\x50\x6F\x73\x74\x65\x72\x26\x73\x68\x61\x72\x65\x4D\x6F\x64\x65\x3D\x41\x50\x50\x26\x66\x6F\x6C\x6C\x6F\x77\x52\x65\x66\x65\x72\x3D\x31\x35\x31\x26\x6F\x72\x69\x67\x69\x6E\x53\x68\x61\x72\x65\x49\x64\x3D\x31\x36\x38\x37\x38\x31\x31\x30\x35\x36\x39\x35\x34\x30\x26\x73\x68\x61\x72\x65\x4D\x65\x74\x68\x6F\x64\x3D\x50\x49\x43\x54\x55\x52\x45\x26\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x26\x73\x75\x62\x42\x69\x7A\x3D\x57\x45\x45\x4B\x26\x73\x68\x61\x72\x65\x49\x64\x3D\x31\x36\x38\x37\x38\x31\x31\x30\x35\x36\x39\x35\x34\x30\x26\x73\x68\x61\x72\x65\x4F\x62\x6A\x65\x63\x74\x49\x64\x3D","\x26\x73\x68\x61\x72\x65\x55\x72\x6C\x4F\x70\x65\x6E\x65\x64\x3D\x30\x26\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D\x31\x36\x34\x39\x35\x38\x35\x36\x38\x36\x33\x32\x36\x26\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x52\x45\x54\x55\x52\x4E\x5F\x50\x4F\x50\x55\x50\x26\x6C\x6F\x67\x69\x6E\x5F\x65\x78\x74\x72\x61\x3D\x45\x4E\x4C\x49\x56\x45\x4E\x5F\x50\x4F\x50\x55\x4C\x41\x52\x49\x54\x59\x5F\x44\x49\x41\x4C\x4F\x47","\x7B\x22\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x64\x22\x3A","\x7D","\x50\x4F\x53\x54","\u5FEB\u624B\u8D26\u53F7\x3A","\x63\x72\x65\x61\x74\x65\x4E\x69\x63\x6B\x4E\x61\x6D\x65","\u52A9\u529B\u7801\x3A","\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A","\u7B2C\u4E00\u4E2A\u8D26\u53F7\u672A\u83B7\u53D6\u5230\u52A9\u529B\u7801\x2C\u8BF7\u68C0\u67E5\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x20\u53C2\u6570\u683C\u5F0F\uFF0C\u4E3A\u9632\u6B62\u540E\u9762\u8D26\u53F7\u52A9\u529B\u5230\u6211\uFF0C\u7ED3\u675F\u8FD0\u884C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxddc7c[0x0],message;const fetch=require(__Oxddc7c[0x1]);let assistanceId=__Oxddc7c[0x0];if($[__Oxddc7c[0x2]]()){Object[__Oxddc7c[0x5]](jdCookieNode)[__Oxddc7c[0x4]]((_0xb916x6)=>{cookiesArr[__Oxddc7c[0x3]](jdCookieNode[_0xb916x6])});if(process[__Oxddc7c[0x7]][__Oxddc7c[0x6]]&& process[__Oxddc7c[0x7]][__Oxddc7c[0x6]]=== __Oxddc7c[0x8]){console[__Oxddc7c[0x9]]= ()=>{}}}else {cookiesArr= [$[__Oxddc7c[0xc]](__Oxddc7c[0xb]),$[__Oxddc7c[0xc]](__Oxddc7c[0xd]),...jsonParse($[__Oxddc7c[0xc]](__Oxddc7c[0x10])|| __Oxddc7c[0x11])[__Oxddc7c[0xf]]((_0xb916x6)=>{return _0xb916x6[__Oxddc7c[0xe]]})][__Oxddc7c[0xa]]((_0xb916x6)=>{return !!_0xb916x6})};let github=true;function gettext(){return {url:`${__Oxddc7c[0x12]}`,timeout:10000}}async function getHub(){return  new Promise((_0xb916xa)=>{setTimeout(()=>{$[__Oxddc7c[0x16]](gettext(),(_0xb916xb,_0xb916xc,_0xb916xd)=>{try{if(_0xb916xd){_0xb916xd= JSON[__Oxddc7c[0x13]](_0xb916xd);assistanceId= _0xb916xd[__Oxddc7c[0x14]]}}catch(e){github= false;$[__Oxddc7c[0x15]](e,_0xb916xc)}finally{_0xb916xa(_0xb916xd)}})})})}!(async ()=>{if(!cookiesArr[0x0]){$[__Oxddc7c[0x20]]($[__Oxddc7c[0x1a]],__Oxddc7c[0x1e],__Oxddc7c[0x1f],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxddc7c[0x1f]});return};console[__Oxddc7c[0x9]](__Oxddc7c[0x21]);console[__Oxddc7c[0x9]](__Oxddc7c[0x22]);if(ksjsb_zzz== __Oxddc7c[0x0]){console[__Oxddc7c[0x9]](__Oxddc7c[0x23]);console[__Oxddc7c[0x9]](__Oxddc7c[0x24]);console[__Oxddc7c[0x9]](__Oxddc7c[0x0])};if(cookiesArr[__Oxddc7c[0x25]]> 1){ await getHub();if(!github){console[__Oxddc7c[0x9]](__Oxddc7c[0x26]);return}}else {if(ksjsb_zzz!= __Oxddc7c[0x0]){assistanceId= ksjsb_zzz}else { await fetch(__Oxddc7c[0x2a],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxddc7c[0x2b],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxddc7c[0x2c],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxddc7c[0x2]]()?(process[__Oxddc7c[0x7]][__Oxddc7c[0x2d]]?process[__Oxddc7c[0x7]][__Oxddc7c[0x2d]]:(require(__Oxddc7c[0x2f])[__Oxddc7c[0x2e]])):($[__Oxddc7c[0xc]](__Oxddc7c[0x30])?$[__Oxddc7c[0xc]](__Oxddc7c[0x30]):__Oxddc7c[0x31]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxddc7c[0x32],"\x41\x63\x63\x65\x70\x74":__Oxddc7c[0x33],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxddc7c[0x34],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxddc7c[0x35],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxddc7c[0x36],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxddc7c[0x37],"\x52\x65\x66\x65\x72\x65\x72":__Oxddc7c[0x38],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxddc7c[0x39],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxddc7c[0x3a],"\x43\x6F\x6F\x6B\x69\x65":cookiesArr[0x0]},"\x6D\x65\x74\x68\x6F\x64":__Oxddc7c[0x3b]})[__Oxddc7c[0x28]]((_0xb916x10)=>{return _0xb916x10[__Oxddc7c[0x29]]()})[__Oxddc7c[0x28]]((_0xb916xf)=>{if(_0xb916xf[__Oxddc7c[0x27]]&& _0xb916xf[__Oxddc7c[0x27]][__Oxddc7c[0x14]]){assistanceId= _0xb916xf[__Oxddc7c[0x27]][__Oxddc7c[0x14]]}})}};$[__Oxddc7c[0x3c]]= __Oxddc7c[0x0];for(let _0xb916x11=0;_0xb916x11< cookiesArr[__Oxddc7c[0x25]];_0xb916x11++){if(cookiesArr[_0xb916x11]){$[__Oxddc7c[0x3d]]= _0xb916x11+ 1;$[__Oxddc7c[0x3e]]= true;$[__Oxddc7c[0x3f]]= __Oxddc7c[0x0];message= __Oxddc7c[0x0];console[__Oxddc7c[0x9]](`${__Oxddc7c[0x40]}${$[__Oxddc7c[0x3d]]}${__Oxddc7c[0x41]}`);let _0xb916x12=cookiesArr[_0xb916x11];if(__Oxddc7c[0x42]!= _0xb916x12[__Oxddc7c[0x43]](_0xb916x12[__Oxddc7c[0x25]]- 1,_0xb916x12[__Oxddc7c[0x25]])){_0xb916x12= _0xb916x12+ __Oxddc7c[0x42]};let _0xb916x13=__Oxddc7c[0x44]+ __Oxddc7c[0x45]+ __Oxddc7c[0x46]+ __Oxddc7c[0x47]+ __Oxddc7c[0x48]+ __Oxddc7c[0x49]+ __Oxddc7c[0x4a]+ __Oxddc7c[0x4b]+ __Oxddc7c[0x4c]+ _0xb916x12;try{console[__Oxddc7c[0x9]](__Oxddc7c[0x4d]+ assistanceId); await fetch(__Oxddc7c[0x4f],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxddc7c[0x2b],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxddc7c[0x2c],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68":35,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxddc7c[0x2]]()?(process[__Oxddc7c[0x7]][__Oxddc7c[0x2d]]?process[__Oxddc7c[0x7]][__Oxddc7c[0x2d]]:(require(__Oxddc7c[0x2f])[__Oxddc7c[0x2e]])):($[__Oxddc7c[0xc]](__Oxddc7c[0x30])?$[__Oxddc7c[0xc]](__Oxddc7c[0x30]):__Oxddc7c[0x31]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxddc7c[0x32],"\x41\x63\x63\x65\x70\x74":__Oxddc7c[0x33],"\x4F\x72\x69\x67\x69\x6E":__Oxddc7c[0x50],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxddc7c[0x34],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxddc7c[0x35],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxddc7c[0x36],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxddc7c[0x37],"\x52\x65\x66\x65\x72\x65\x72":__Oxddc7c[0x51]+ assistanceId+ __Oxddc7c[0x52],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxddc7c[0x39],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxddc7c[0x3a],"\x43\x6F\x6F\x6B\x69\x65":_0xb916x13},"\x62\x6F\x64\x79":__Oxddc7c[0x53]+ assistanceId+ __Oxddc7c[0x54],"\x6D\x65\x74\x68\x6F\x64":__Oxddc7c[0x55]})[__Oxddc7c[0x28]]((_0xb916x10)=>{return _0xb916x10[__Oxddc7c[0x29]]()})[__Oxddc7c[0x28]]((_0xb916xf)=>{console[__Oxddc7c[0x9]](__Oxddc7c[0x4e]+ _0xb916xf[__Oxddc7c[0x20]]);console[__Oxddc7c[0x9]]()}); await fetch(__Oxddc7c[0x2a],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxddc7c[0x2b],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxddc7c[0x2c],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxddc7c[0x2]]()?(process[__Oxddc7c[0x7]][__Oxddc7c[0x2d]]?process[__Oxddc7c[0x7]][__Oxddc7c[0x2d]]:(require(__Oxddc7c[0x2f])[__Oxddc7c[0x2e]])):($[__Oxddc7c[0xc]](__Oxddc7c[0x30])?$[__Oxddc7c[0xc]](__Oxddc7c[0x30]):__Oxddc7c[0x31]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxddc7c[0x32],"\x41\x63\x63\x65\x70\x74":__Oxddc7c[0x33],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxddc7c[0x34],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxddc7c[0x35],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxddc7c[0x36],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxddc7c[0x37],"\x52\x65\x66\x65\x72\x65\x72":__Oxddc7c[0x38],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxddc7c[0x39],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxddc7c[0x3a],"\x43\x6F\x6F\x6B\x69\x65":_0xb916x13},"\x6D\x65\x74\x68\x6F\x64":__Oxddc7c[0x3b]})[__Oxddc7c[0x28]]((_0xb916x10)=>{return _0xb916x10[__Oxddc7c[0x29]]()})[__Oxddc7c[0x28]]((_0xb916xf)=>{console[__Oxddc7c[0x9]](__Oxddc7c[0x56]+ _0xb916xf[__Oxddc7c[0x27]][__Oxddc7c[0x57]]);console[__Oxddc7c[0x9]](__Oxddc7c[0x58]+ _0xb916xf[__Oxddc7c[0x27]][__Oxddc7c[0x14]]);if(ksjsb_zzz!= __Oxddc7c[0x0]){$[__Oxddc7c[0x3c]]= ksjsb_zzz;assistanceId= ksjsb_zzz};if(ksjsb_zzz== __Oxddc7c[0x0]&& $[__Oxddc7c[0x3d]]== 1&& _0xb916xf[__Oxddc7c[0x27]]&& _0xb916xf[__Oxddc7c[0x27]][__Oxddc7c[0x14]]){$[__Oxddc7c[0x3c]]= _0xb916xf[__Oxddc7c[0x27]][__Oxddc7c[0x14]];assistanceId= $[__Oxddc7c[0x3c]];console[__Oxddc7c[0x9]](__Oxddc7c[0x59]+ $[__Oxddc7c[0x3c]])}})}catch(e){};if($[__Oxddc7c[0x3c]]== __Oxddc7c[0x0]){console[__Oxddc7c[0x9]](__Oxddc7c[0x5a]);break}}}})()[__Oxddc7c[0x1d]]((_0xb916xe)=>{$[__Oxddc7c[0x9]](__Oxddc7c[0x0],`${__Oxddc7c[0x19]}${$[__Oxddc7c[0x1a]]}${__Oxddc7c[0x1b]}${_0xb916xe}${__Oxddc7c[0x1c]}`,__Oxddc7c[0x0])})[__Oxddc7c[0x18]](()=>{$[__Oxddc7c[0x17]]()});(function(_0xb916x14,_0xb916x15,_0xb916x16,_0xb916x17,_0xb916x18,_0xb916x19){_0xb916x19= __Oxddc7c[0x5b];_0xb916x17= function(_0xb916x1a){if( typeof alert!== _0xb916x19){alert(_0xb916x1a)};if( typeof console!== _0xb916x19){console[__Oxddc7c[0x9]](_0xb916x1a)}};_0xb916x16= function(_0xb916x1b,_0xb916x14){return _0xb916x1b+ _0xb916x14};_0xb916x18= _0xb916x16(__Oxddc7c[0x5c],_0xb916x16(_0xb916x16(__Oxddc7c[0x5d],__Oxddc7c[0x5e]),__Oxddc7c[0x5f]));try{_0xb916x14= __encode;if(!( typeof _0xb916x14!== _0xb916x19&& _0xb916x14=== _0xb916x16(__Oxddc7c[0x60],__Oxddc7c[0x61]))){_0xb916x17(_0xb916x18)}}catch(e){_0xb916x17(_0xb916x18)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
