const Application = {
    banner : function (content , isCloseable) {
        var bannerElement = $('<div />');
        bannerElement.addClass("aui-banner aui-banner-error");
        bannerElement.attr("role" , "banner");
        bannerElement.html(content);
        $('#header').prepend(bannerElement);
    }
};