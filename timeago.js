/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.4.3
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
function waktuKeKata(e,a){a=a||{postfixes:{"<":" yang lalu"},1e3:{singular:"beberapa detik",plural:"beberapa detik"},6e4:{singular:"sekitar semenit",plural:"# menit"},36e5:{singular:"sekitar sejam",plural:"# jam"},864e5:{singular:"sehari",plural:"# hari"},2592e6:{singular:"sebulan",plural:"# bulan"},3154e7:{singular:"setahun",plural:"# tahun"}};let t=[1e3,6e4,36e5,864e5,2592e6,3154e7],l=Date.parse(e.replace(/\-00:?00$/,""));if(!l||!Date.now)return"Tanggal tidak valid";let n=l-Date.now(),r=Math.abs(n),u=a.postfixes["<"],i=t[0];for(let s=1;s<t.length;s++)r>t[s]&&(i=t[s]);let g=Math.round(r/i);return a[i][g>1?"plural":"singular"].replace("#",g)+u}function prosesSemuaTagTime(){let e=document.getElementsByTagName("time");for(let a=0;a<e.length;a++){let t=e[a],l=t.getAttribute("datetime"),n=l||t.textContent,r=waktuKeKata(n);r&&(t.textContent=r)}}document.addEventListener("DOMContentLoaded",prosesSemuaTagTime);
