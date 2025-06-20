!function(){let e=document.querySelectorAll('.post-body img[loading="lazy"]');0!=e.length&&e[0].setAttribute("loading","eager")}();
        !function(){var t=document.querySelector(".post-body #landing-page");const e=document.getElementById("sticky-container");if(t)e.style.display="none";else if(e.style.display="block",globalSettings.toc){t=globalSettings.tocHeading;let e=document.getElementById("ToC");if(headings=document.querySelectorAll(".post-body h2, .post-body h3"),!(headings.length<=1)){e.classList.add("toc-show"),tocList=document.createElement("ul");const n=new IntersectionObserver(e=>{e.forEach(e=>{var t=e.target.getAttribute("id");0<e.intersectionRatio?document.querySelector(`#ToC li a[href="#${t}"]`).parentElement.classList.add("active"):document.querySelector(`#ToC li a[href="#${t}"]`).parentElement.classList.remove("active")})});Array.from(headings).forEach(function(e,t){
            var i=e.innerText,
                t=t+1+"-"+i.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");
            e.id=t;
            tocListItem=document.createElement("li");
            tocEntry=document.createElement("a");
            tocEntry.setAttribute("href","#"+t);
            tocEntry.innerText=e.innerText;

            // --- BAGIAN YANG DIEDIT ---
            if (e.tagName.toLowerCase() === 'h3') {
                tocListItem.classList.add('toc-h3'); // Menambahkan kelas 'toc-h3' jika elemen adalah H3
            }
            // --- AKHIR BAGIAN YANG DIEDIT ---

            tocListItem.appendChild(tocEntry);
            tocList.appendChild(tocListItem);
            n.observe(e);
        }),e.appendChild(tocList);{let e=document.getElementById("ToC-title"),t=e.nextElementSibling,i=t.clientHeight;globalSettings.tocDefaultHide?(e.classList.add("hide"),t.classList.add("hide"),t.style.height="0px"):t.style.height=i+"px",e.addEventListener("click",function(){e.classList.toggle("hide"),t.classList.toggle("hide"),"hide"===t.className?t.style.height="0px":t.style.height=i+"px"}),window.addEventListener("resize",function(){"hide"!==t.className&&(t.style.height="auto",i=t.clientHeight,t.style.height=i+"px")})}}}}();
        !function(){var e=document.querySelector(".content-single .post-body");const t=document.querySelector(".reading-time-wrap");if(globalSettings.estimatedReadingTime&&t){const n=e.innerText;e=n.trim().split(/\s+/).length,e=Math.ceil(e/225);t.querySelector(".reading-time").innerText=e,t.classList.add("show")}}();
