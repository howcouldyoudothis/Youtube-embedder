function embed(){
    var link = String(window.document.forms[0].link.value);
    if (link == "corona"){
        window.open("http://redirect.tinu.tech/corona");
    }
    else if(link == "mobilecorona"){
        window.open("http://redirect.tinu.tech/mobilecorona");
    }
    else {
        var valid = true;
        var video_id = link.split('v=');

        if (String(link) == String(video_id[0])) {
            if (link.includes('youtu.be')){
                var video_id = link.split('youtu.be/');
            }
            else if (link.includes('embed')){
                var video_id = link.split('embed/');
            }
            else{
                window.alert("Please Enter a Valid Youtube URL!");
                window.document.forms[0].link.value = "";
                valid = false;
            }
        }

        video_id = video_id[1];
        if (valid) {
            try {
                var ampersandPosition = video_id.indexOf('&');
                if (ampersandPosition != -1) {
                    video_id = video_id.substring(0, ampersandPosition);
                }
            }
            catch {
            }

            var redirect = "http://youtube.com/embed/" + video_id;
            if (window.document.forms[0].closeTab.checked) {
                window.open(redirect);
                window.document.forms[0].link.value = "";
            }
            else{
                window.location.href = redirect;
            }
        }
    }
}