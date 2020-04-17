function embed(){
    var link = String(window.document.forms[0].link.value);
    if (link == "corona"){
        window.open("http://redirect.tinu.tech/corona");
    }
    else if(link == "mobilecorona"){
        window.open("http://redirect.tinu.tech/mobilecorona");
    }
    else{
    var video_id = link.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }

    var redirect = "http://youtube.com/embed/" + video_id;
    window.open(redirect);
    window.close();
    }
}