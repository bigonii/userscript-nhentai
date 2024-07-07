function includejQuery(callback) {
    if (window.jQuery)
        callback &&
            setTimeout(function () {
                callback(jQuery);
            }, 0);
    else {
        var script = document.createElement("script");
        (script.onload = function () {
            jQuery.noConflict(), callback && callback(jQuery);
        }),
            (script.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"),
            document.getElementsByTagName("head")[0].appendChild(script);
    }
}
function getEnglishHentai() {
    var isArtistPage, artistName = null, groupName = null;
    artistName =
        1 == ("Artist" == jQuery("div#content>h1>span.type").text())
            ? window.location.pathname.split("/artist/")[1].split("/")[0]
            : jQuery('div:contains("Artist")>span>a>span')
                .first()
                .text()
                .split("|")[0]
                .trim();

    groupName = jQuery('div:contains("Groups")>span>a>span')
        .first()
        .text()
        .split("|")[0]
        .trim();

    if (groupName == '' && window.location.pathname.split('/group/').length > 1) {
        groupName = window.location.pathname.split('/group/')[1].split('/')[0]
    }

    if (artistName != null && artistName != '') {
        var artistNameUriEncoded = encodeURI('"' + artistName + '"');
        window.location.href =
            "https://nhentai.net/search/?q=artist%3A" +
            artistNameUriEncoded +
            "+english&sort=popular";
    }
    console.log(groupName);
    if(groupName != null && groupName != '') {
        var groupNameUriEncoded = encodeURI('"' + groupName + '"');
        window.location.href =
            "https://nhentai.net/search/?q=group%3A" +
            groupNameUriEncoded +
            "+english&sort=popular";
    }
}
includejQuery(getEnglishHentai);
