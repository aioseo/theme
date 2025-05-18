const giturl = /^https?:\/\/github\.com\/(.+?)\/(.+?)\/(?!releases\/)(?:(?:blob|raw|blame)\/)?(.+?)\/(.+)/i,
        rawgit = /^https?:\/\/raw\.github(?:usercontent)?\.com\/(.+?)\/(.+?)\/(.+?)\/(.+)/i;
    (function(doc) {
        doc.getElementsByClassName("gitlink")[0].focus();

        var a = () => {
            let t = doc.getElementsByClassName("gitlink")[0].value;
            let y = t.match(giturl),
                l = t.match(rawgit);

            var n = (e, i) => {
                doc.getElementsByClassName("gitlink")[0].classList.remove("invalid");
                let n = `https://api.github.com/repos/${i[1]}/${i[2]}/commits/${i[3]}`;
                fetch(n)
                    .then(r => r.json())
                    .then(i => {
                        let n = i.sha,
                            c = t.replace(e, `https://cdn.jsdelivr.net/gh/$1/$2@${n}/$4`),
                            d = t.replace(e, `https://cdn.jsdelivr.net/gh/$1/$2/$4`),
                            k = t.replace(e, `https://cdn.jsdelivr.net/gh/$1/$2@${n.substring(0,7)}/$4`),
                            q = t.split("/").pop();
                        doc.getElementById("o").value = c;
                        doc.getElementById("m").value = d;
                        doc.getElementById("r").value = k;
                        if (q.indexOf(".js") != -1) {
                            doc.getElementById("n").value = `<script src="${c}" type="text/javascript"><\/script>`;
                            doc.getElementById("p").value = `<script src="${d}" type="text/javascript"><\/script>`;
                            doc.getElementById("t").value = `<script src="${k}" type="text/javascript"><\/script>`;
                        };
                        if (q.indexOf(".css") != -1) {
                            doc.getElementById("n").value = `<link href="${c}" rel="stylesheet" type="text/css"/>`;
                            doc.getElementById("p").value = `<link href="${d}" rel="stylesheet" type="text/css"/>`;
                            doc.getElementById("t").value = `<link href="${k}" rel="stylesheet" type="text/css"/>`;
                        };
                        if (q.indexOf(".png") != -1 || q.indexOf(".jpg") != -1 || q.indexOf(".gif") != -1 || q.indexOf(".svg") != -1 || q.indexOf(".jpeg") != -1) {
                            doc.getElementById("n").value = `<img src="${c}">`;
                            doc.getElementById("p").value = `<img src="${d}">`;
                            doc.getElementById("t").value = `<img src="${k}">`;
                        };
                    })
                    .catch(e => console.error(e))
            }
            giturl.test(t) ? n(giturl, y) : rawgit.test(t) ? n(rawgit, l) : doc.getElementsByClassName("gitlink")[0].classList.add("invalid")
        }

        var b = id => {
            doc.getElementById(id).value.length > 0 ? (doc.getElementById(id).select(), doc.execCommand("copy")) : alert("Nothing to copy !")
        }

        var c = id => {
            doc.getElementById(id).value.length > 0 ? window.open(doc.getElementById(id).value) : (alert("Nothing to test !"))
        }
        doc.getElementById("x").addEventListener("click", () => {
            doc.getElementById("g").focus();
            let a = doc.querySelectorAll("#g,#o,#m,#n,#p,#t,#r");
            for (let i = 0; i < a.length; i++) {
                a[i].value = "";
            };
        })
        doc.getElementById("c1").addEventListener("click", () => {
            b("o");
        })
        doc.getElementById("c2").addEventListener("click", () => {
            b("r");
        })
        doc.getElementById("c3").addEventListener("click", () => {
            b("m");
        })
        doc.getElementById("c4").addEventListener("click", () => {
            b("n");
        })
        doc.getElementById("c5").addEventListener("click", () => {
            b("t");
        })
        doc.getElementById("c6").addEventListener("click", () => {
            b("p");
        })
        doc.getElementById("t1").addEventListener("click", () => {
            c("o");
        })
        doc.getElementById("t2").addEventListener("click", () => {
            c("r");
        })
        doc.getElementById("t3").addEventListener("click", () => {
            c("m");
        })
        doc.getElementById("g").addEventListener("input", a)
    })(document);
