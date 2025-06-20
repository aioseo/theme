!function(){
        // Variabel-variabel yang disingkat dari kode asli
        const encodedUrl = encodeURI(blogPostUrl);
        const encodedImage = encodeURI(blogPostImage);
        let encodedTitle = encodeURIComponent(blogPostTitle);
        encodedTitle = encodedTitle.replace(/'/g,"%27");

        // Dapatkan elemen kontainer berbagi
        const shareContainer = document.getElementById("share-container");
        const shareButtonsWrapper = document.getElementById("share-btns");

        // Ambil pengaturan tombol berbagi dari globalSettings (yang diasumsikan sama dengan themeSettings)
        const shareButtonsConfig = globalSettings.shareButtons; // Ini akan mengambil array dari themeSettings.shareButtons

        // Pastikan ada tombol untuk ditampilkan
        if (shareButtonsConfig && shareButtonsConfig.length > 0) {
            shareContainer.classList.add("show");

            shareButtonsConfig.forEach(function(buttonType) {
                let button = document.createElement("button");
                let icon = document.createElement("i"); // Untuk ikon
                // let textSpan = document.createElement("span"); // Jika ingin ada teks di samping ikon

                button.setAttribute("aria-label", buttonType);
                button.setAttribute("class", buttonType); // Gunakan tipe tombol sebagai kelas CSS
                button.setAttribute("title", buttonType.charAt(0).toUpperCase() + buttonType.slice(1).replace(/-/g, ' ')); // Judul tooltip (misal: "facebook" jadi "Facebook")
                button.setAttribute("rel", "nofollow noreferrer");

                // Atur kelas ikon berdasarkan tipe tombol
                // Asumsi: kamu punya kelas CSS seperti .icon-facebook, .icon-twitter, .icon-copy
                icon.setAttribute("class", "icon-" + buttonType);
                
                button.appendChild(icon);
                // Jika ingin ada teks:
                // textSpan.textContent = buttonType.charAt(0).toUpperCase() + buttonType.slice(1).replace(/-/g, ' ');
                // button.appendChild(textSpan);

                // Logika onclick berdasarkan tipe tombol
                if ("facebook" === buttonType) {
                    button.setAttribute("onclick", "window.open('https://www.facebook.com/sharer.php?u=" + encodedUrl + "', '_blank', 'width=600,height=600')");
                } else if ("twitter" === buttonType) {
                    button.setAttribute("onclick", "window.open('https://twitter.com/intent/tweet?text=" + encodedTitle + "&url=" + encodedUrl + "', '_blank', 'width=600,height=600')");
                } else if ("whatsapp" === buttonType) {
                    button.setAttribute("onclick", "window.open('https://api.whatsapp.com/send?phone=&text=" + encodedTitle + "%20%2D%20" + encodedUrl + "', '_blank', 'width=600,height=600')");
                } else if ("telegram" === buttonType) {
                    button.setAttribute("onclick", "window.open('https://t.me/share/url?url=" + encodedUrl + "&text=" + encodedTitle + "', '_blank', 'width=600,height=600')");
                } else if ("pinterest" === buttonType) {
                    button.setAttribute("onclick", "window.open('https://pinterest.com/pin/create/button/?url=" + encodedUrl + "&media=" + encodedImage + "&description=" + encodedTitle + "', '_blank', 'width=600,height=600')");
                } else if ("email" === buttonType) {
                    button.setAttribute("onclick", "window.open('mailto:?subject=" + encodedTitle + "&body=" + encodedTitle + " - " + encodedUrl + "', '_blank', 'width=600,height=600')");
                } else if ("copy" === buttonType) { // Logika khusus untuk tombol "Salin Tautan"
                    button.setAttribute("title", "Salin Tautan"); // Overwrite title jika perlu
                    button.setAttribute("aria-label", "Salin Tautan"); // Overwrite aria-label jika perlu
                    button.onclick = function() {
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            navigator.clipboard.writeText(blogPostUrl)
                                .then(() => {
                                    alert("URL tautan berhasil disalin!");
                                })
                                .catch(err => {
                                    console.error('Gagal menyalin URL: ', err);
                                    alert("Gagal menyalin URL. Silakan coba lagi.");
                                });
                        } else {
                            // Fallback untuk browser lama
                            const tempInput = document.createElement('input');
                            tempInput.value = blogPostUrl;
                            document.body.appendChild(tempInput);
                            tempInput.select();
                            document.execCommand('copy');
                            document.body.removeChild(tempInput);
                            alert("URL tautan berhasil disalin! (Fallback)");
                        }
                    };
                }
                
                shareButtonsWrapper.appendChild(button);
            });
        }
    }();
