function checkGo(){
    if (document.getElementById("autofire").checked){embed(true);}
}

let checkEnter = event => (event.keyCode === 13) ? (embed()) : (checkGo());

let focus_link = () => document.getElementById("link").focus();

let setProcessing = () => {
    document.getElementById('btn-go').innerHTML = "Processing...";
    document.getElementById('btn-go').disabled = true;
}

let setGo = () => {
    document.getElementById('btn-go').innerHTML = "Go";
    document.getElementById('btn-go').disabled = false;
}

function embed(check){
    if(!check){setProcessing()}
    var link = String(document.getElementById("link").value);
    var closeTab = document.getElementById("closeTab").checked;
    var reverse = document.getElementById("reverse").checked;

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
                if (!check){
                    window.alert("Please Enter a Valid Youtube URL!");
                    document.getElementById("link").value = "";
                    setGo();
                }
                valid = false;

            }
        }
        else{
            (video_id[1].length !== 11) ? valid = false : valid = true;
        }

        video_id = video_id[1];
        if (valid) {
            setProcessing();
            try {
                var ampersandPosition = video_id.indexOf('&');
                if (ampersandPosition !== -1) {
                    video_id = video_id.substring(0, ampersandPosition);
                }
            }
            catch {}

            var redirect = "http://youtube.com/embed/" + video_id;
            var inverse = "http://youtube.com/watch/?v=" + video_id;
            if (closeTab) {
                (reverse) ? (window.open(inverse)) : (window.open(redirect));
                document.getElementById("link").value = "";
                setGo();
                focus_link();
            }
            else{
                (reverse) ? (window.location.href = inverse) : (window.location.href = redirect);

            }
        }
    }
}
