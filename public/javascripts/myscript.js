"use strict";

function jsonFlickrFeed(json){
    $('#result').empty();
    for(var i=0;i<json.items.length;i++){
        var img=$('<img>').attr('src',json.items[i].media.m);
        $('#result').append(img);
    }
}

function query_image(tagvalue){
    $.ajax({
        url:"https://api.flickr.com/services/feeds/photos_public.gne",
        dataType:'jsonp',
        data:{
            format:'json',
            tags:tagvalue
        }
    });
    return false;
}