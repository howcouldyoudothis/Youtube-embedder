$("#link").keyup(function(event) {
    if (event.keyCode === 13) {
        embed();
    }
});

$("#closeTab").keyup(function(event) {
    if (event.keyCode === 13) {
        embed();
    }
});

let focus_link = () => document.getElementById("link").focus();

function embed(){
    document.getElementById('btn-go').innerHTML = "Processing...";
    document.getElementById('btn-go').disabled = true;
    var link = String(document.getElementById("link").value);
    if (link === "corona"){
        window.open("http://redirect.tinu.tech/corona");
    }
    else if(link === "mobilecorona"){
        window.open("http://redirect.tinu.tech/mobilecorona");
    }
    else {
        var valid = true;
        var video_id = link.split('v=');

        if (link === video_id[0]) {
            if (link.includes('youtu.be')){
                video_id = link.split('youtu.be/');
            }
            else if (link.includes('embed')){
                video_id = link.split('embed/');
            }
            else{
                window.alert("Please Enter a Valid Youtube URL!");
                document.getElementById("link").value = "";
                document.getElementById('btn-go').innerHTML = "Go";
                document.getElementById('btn-go').disabled = false;
                valid = false;
            }
        }

        video_id = video_id[1];
        if (valid) {
            try {
                var ampersandPosition = video_id.indexOf('&');
                if (ampersandPosition !== -1) {
                    video_id = video_id.substring(0, ampersandPosition);
                }
            }
            catch {
            }

            var redirect = "http://youtube.com/embed/" + video_id;
            if (document.getElementById("closeTab").checked) {
                window.open(redirect);
                document.getElementById("link").value = "";
                document.getElementById('btn-go').innerHTML = "Go";
                document.getElementById('btn-go').disabled = false;
                document.getElementById("link").focus();
            }
            else{
                window.location.href = redirect;
            }
        }
    }
}
