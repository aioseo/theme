!function(){let t=document.querySelector(".blog-pager-older-link");if(t){let e=t.getAttribute("href");var r=e.indexOf("max-results=");e=e.slice(0,r),e+="max-results=6",t.setAttribute("href",e)}}();
/*! Simple AJAX infinite scroll by dte.web.id */
!function(){var b,j;globalSettings.loadMoreButton&&(b=window,j=document,b.InfiniteScroll=function(n){function l(t,e){return(e=e||j).querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return"function"==typeof t}function g(t,e){if(o(r[t]))for(var n in r[t])r[t][n](e)}function i(){return e.innerHTML=d.text.loading,H=!0,u?(p.classList.add(d.state.loading),g("loading",[d]),void t(u,function(t,e){p.className=v+" "+d.state.load,(c=j.createElement("div")).innerHTML=t;var n=l("title",c),o=l(d.target.post,c),r=l(d.target.anchors+" "+d.target.anchor,c),a=l(d.target.post,f),n=n&&n[0]?n[0].innerHTML:"";if(o.length&&a.length){a=a[a.length-1];j.title=n,a.insertAdjacentHTML("afterend",'<span class="fi" id="#fi:'+E+'"></span>'),c=j.createElement("div");for(var i=0,s=o.length;i<s;++i)c.appendChild(o[i]);a.insertAdjacentHTML("afterend",c.innerHTML),h(),u=!!r.length&&r[0].href,H=!1,E++,g("load",[d,t,e])}},function(t,e){p.classList.add(d.state.error),H=!1,h(1),g("error",[d,t,e])})):(p.classList.add(d.state.loaded),e.innerHTML=d.text.loaded,g("loaded",[d]))}function h(t){e.innerHTML="",T&&(c.innerHTML=d.text[t?"error":"load"],(t=c.firstChild).onclick=function(){return 2===d.type&&(T=!1),i(),!1},e.appendChild(t))}var s,d={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:(t="infinite-scroll-state-")+"load",loading:t+"loading",loaded:t+"loaded",error:t+"error"}},r={load:[],loading:[],loaded:[],error:[]},c=((d=function t(e,n){for(var o in e=e||{},n)e[o]="object"==typeof n[o]?t(e[o],n[o]):n[o];return e}(d,n||{})).on=function(t,e,n){return o(t)?o(e)?void(o(n)?r[t][n]=e:r[t].push(e)):r[t]:r},d.off=function(t,e){o(e)?delete r[t][e]:r[t]=[]},null),t=function(t,e,n){var o;b.XMLHttpRequest&&((o=new XMLHttpRequest).onreadystatechange=function(){4===o.readyState&&(200===o.status?e&&a(e)&&e(o.responseText,o):n&&a(n)&&n(o.responseText,o))},o.open("GET",t),o.send())},T=1!==d.type,H=!1,f=l(d.target.posts)[0],e=l(d.target.anchors)[0],u=l(d.target.anchor,e),L=j.body,p=j.documentElement,v=p.className||"",M=f.offsetTop+f.offsetHeight,m=b.innerHeight,y=0,x=null,E=1;return u.length&&(u=u[0].href,f.insertAdjacentHTML("afterbegin",'<span class="fi" id="#fi:0"></span>'),c=j.createElement("div"),h(),(s=function(){M=f.offsetTop+f.offsetHeight,m=b.innerHeight,y=L.scrollTop||p.scrollTop,H||y+m<M||i()})(),0!==d.type&&b.addEventListener("scroll",function(){T||(x&&b.clearTimeout(x),x=b.setTimeout(s,500))},!1)),d})}();

if(typeof InfiniteScroll !== 'undefined') {
let autoLoadMore = globalSettings.autoLoadMore ? 1 : 0;
var infinite_scroll = new InfiniteScroll({
type: autoLoadMore,
target: {
posts: ".content",
post: ".post-container",
anchors: ".blog-pager",
anchor: ".blog-pager-older-link"
},
text: {
load: "<a class='js-load' href='javascript:;'>Load More</a>",
loading: "<div class='js-loading'><div class='loader'></div></div>",
loaded: "<div class='js-loaded'>No More Posts</div>",
error: "<a class='js-error' href='javascript:;'>Error.</a>"
}
});
}
if (typeof infinite_scroll !== 'undefined') {
infinite_scroll.on('load', function() {
    Defer.dom("img.lazyload", 0, "loaded");

    const elemenWaktuBaru = document.querySelectorAll('.content .post-container time');
    for (let i = 0; i < elemenWaktuBaru.length; i++) {
    const elemenSaatIni = elemenWaktuBaru[i];
    const tanggalAtribut = elemenSaatIni.getAttribute("datetime");
    const tanggalMentah = tanggalAtribut || elemenSaatIni.textContent;
    
    const teksWaktuLalu = waktuKeKata(tanggalMentah);
    if (teksWaktuLalu) {
             elemenSaatIni.textContent = teksWaktuLalu;
         }
     }
    prosesSemuaTagTime();
});
}
