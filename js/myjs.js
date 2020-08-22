function switch_mode(type){
    var new_class = 'dark';
    $('.btn.dark').show();
    $('.btn.light').show();

    if (type == 'dark'){
        new_class = 'light';
        $('.btn.dark').hide();
    } else {
        $('.btn.light').hide();
    }


    $('.text-' + type).addClass("text-" + new_class);
    $('.text-' + new_class).removeClass("text-" + type);

    $('.body-' + new_class).addClass("body-" + type);
    $('.body-' + type).removeClass("body-" + new_class);

    $('.services-' + new_class).addClass("services-" + type);
    $('.services-' + type).removeClass("services-" + new_class);

    $('.hire-' + new_class).addClass("hire-" + type);
    $('.hire-' + type).removeClass("hire-" + new_class);
}