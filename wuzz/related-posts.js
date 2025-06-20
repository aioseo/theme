// Fungsi pembantu untuk menghitung "time ago"
function getTimeAgo(dateString) {
    const postDate = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - postDate) / 1000);

    let interval = seconds / 31536000; // Tahun
    if (interval > 1) {
        return Math.floor(interval) + " tahun yang lalu";
    }
    interval = seconds / 2592000; // Bulan
    if (interval > 1) {
        return Math.floor(interval) + " bulan yang lalu";
    }
    interval = seconds / 86400; // Hari
    if (interval > 1) {
        return Math.floor(interval) + " hari yang lalu";
    }
    interval = seconds / 3600; // Jam
    if (interval > 1) {
        return Math.floor(interval) + " jam yang lalu";
    }
    interval = seconds / 60; // Menit
    if (interval > 1) {
        return Math.floor(interval) + " menit yang lalu";
    }
    return "beberapa detik yang lalu";
}
        // related post js from www.dte.web.id modified by sugeng.id
        let relatedPosts,relatedPostsRandomized;function ajaxRelatedPosts(){let r=globalSettings.relatedPosts,m=globalSettings.relatedPostsThumb,f=globalSettings.relatedPostsTotal;if(r){let t=document.getElementById("ms-related-post"),l=relatedPostConfig.postUrl,a=relatedPostConfig.homePageUrl.replace(/\/$/,""),o=relatedPostConfig.relatedTitleText,e=relatedPostConfig.postLabels,s,c,g=(c="in"==relatedPostConfig.blogLanguage?["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],function(e){let t,a,l=e.length;if(0===l)return!1;for(;--l;)t=Math.floor(Math.random()*(l+1)),a=e[l],e[l]=e[t],e[t]=a;return e});s="object"==typeof e&&0<e.length?"/-/"+g(e)[0]:"",s=s.replace("&amp;","&"),r=function(e){let s=g(e.feed.entry),r='<div class="related-title"><h2 class="ms-title">'+o+"</h2></div>";for(let a=0;a<s.length;a++)for(let e=0,t=s[a].link.length;e<t;e++)s[a].link[e].href==l&&s.splice(a,1);if(0==s.length)return t.innerHTML="",void console.log("No Related Posts");m?r+='<ul class="ms-related-hasthumb">':r+='<ul class="ms-related-nothumb">';for(let o=0;o<f&&o<s.length;o++){var n,d=s[o];let a,e,t;var i=d.title.$t,u=d.author[0].name?d.author[0].name.$t:"Anonymous";let l=d.updated.$t;l=l.split("T")[0].split("-"),l=l[2]+" "+c[+l[1]-1]+", "+l[0],e="media$thumbnail"in d?(e=d.media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/s72-(c|.*?-c)/,"w420-h280-lo-c-rw"),(h=e).includes("img.youtube.com")?h.replace("default.jpg","hqdefault.jpg"):h):"content"in d?(h=/<img +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(d.content.$t))&&h[3]?h[3]:relatedPostConfig.noThumb:relatedPostConfig.noThumb;for(let e=0,t=d.link.length;e<t;e++)a="alternate"==d.link[e].rel?d.link[e].href:"#";t=m?'<div class="related-thumb-outer"><a href="'+a+'"><img alt="'+i+'" class="related-thumb lazyload" src="'+relatedPostConfig.imgBlank+'" data-src="'+e+'" width="420" height="280"></a></div>':"",n='<div class="related-title-outer">',n=(n+='<a class="related-post-title" href="'+a+'">'+i+"</a>")+('<div class="post-meta-bottom"><span class="author-by">By</span> <span class="author-name">'+u+'</span><span class="post-meta-separator"> &#8226; </span><span>'+getTimeAgo(d.updated.$t)+"</span></div>")+"</div>",r+="<li>"+t+n+"</li>"}var h;t.innerHTML=r+="</ul>"},fetch(a+"/feeds/posts/summary"+s+"?alt=json&orderby=updated&max-results=0").then(e=>{if(!e.ok)throw new Error("Please enable Blog Feed");return e.json()}).then(e=>{e=e.feed.openSearch$totalResults.$t-(f+1),e=1<e?1+Math.floor(Math.random()*e):1,e=a+"/feeds/posts/default"+s+"?alt=json&orderby=updated&start-index="+e+"&max-results="+(f+1);return fetch(e)}).then(e=>e.json()).then(e=>{r(e),Defer.dom("img.lazyload",0,"loaded",null,{rootMargin:"1px"})}).catch(e=>{console.log(e)})}}Defer(ajaxRelatedPosts,0,!1);
        let bacaJuga,bacaJugaRandomized;!function(){if(globalSettings.bacaJuga){var t=globalSettings.lokasiBacaJuga/100;let r=document.createElement("div"),e=document.querySelector(".post-body");function a(e,t){t?t.parentNode.insertBefore(e,t.nextSibling):console.log("missing p or br tag")}function o(e){e&&"BR"==e.tagName&&(e.style.display="none")}var n=e.querySelectorAll("p:not(table p, ul p, ol p, blockquote p, pre p, .notification-box p, .accordion-content p), br:not(table br, ul br, ol br, blockquote br, pre br, .notification-box br, .accordion-content br)"),n=n[2*Math.floor(n.length*t/2)],t=e.querySelector("#related");r.setAttribute("class","baca-juga"),r.innerHTML="<strong>"+relatedPostConfig.bacaJugaTitle+':</strong> <span class="bacajuga-loading">loading</span>';t?(a(r,t),o(t)):(a(r,n),o(n)),Defer(function(){let l=relatedPostConfig.postUrl,t=relatedPostConfig.homePageUrl.replace(/\/$/,""),e=relatedPostConfig.postLabels,a;a="object"==typeof e&&0<e.length?"/-/"+function(e){let t,a,o=e.length;if(0===o)return!1;for(;--o;)t=Math.floor(Math.random()*(o+1)),a=e[o],e[o]=e[t],e[t]=a;return e}(e)[0]:"",a=a.replace("&amp;","&"),bacaJuga=function(e){let t=r.querySelector(".bacajuga-loading"),o=e.feed.entry;for(let a=0;a<o.length;a++)for(let e=0,t=o[a].link.length;e<t;e++)o[a].link[e].href==l&&o.splice(a,1);if(0!=o.length){var n=o[0],e=n.title.$t;let a;for(let e=0,t=n.link.length;e<t;e++)a="alternate"==n.link[e].rel?n.link[e].href:"#";e='<a href="'+a+'">'+e+"</a>",t.innerHTML=e,t.className=""}else r.style.display="none"},fetch(t+"/feeds/posts/summary"+a+"?alt=json&orderby=updated&max-results=0").then(e=>{if(!e.ok)throw document.querySelector(".post-body .baca-juga").style.display="none",new Error("Please enable Blog Feed");return e.json()}).then(e=>{e=e.feed.openSearch$totalResults.$t-1,e=1<e?1+Math.floor(Math.random()*e):1,e=t+"/feeds/posts/default"+a+"?alt=json&orderby=updated&start-index="+e+"&max-results=2";return fetch(e)}).then(e=>e.json()).then(e=>{bacaJuga(e)}).catch(e=>{console.log(e)})},0,!1)}}();
