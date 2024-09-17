//Function to determine if autofire is on when the link field is changedg
function checkGo(){
    if (document.getElementById("autofire").checked){embed(true);}
}

//ES6 Function to check if pressed enter or other
let checkEnter = event => (event.keyCode === 13) ? (embed()) : (checkGo());

//ES6 Function to focus on the link field
let focus_link = () => document.getElementById("link").focus();

//ES6 Function to set the Button to processing... and to disable
let setProcessing = () => {
    document.getElementById('btn-go').innerHTML = "Processing...";
    document.getElementById('btn-go').disabled = true;
}

//ES6 Function to set the Button back to defaults
let setGo = () => {
    document.getElementById('btn-go').innerHTML = "Go";
    document.getElementById('btn-go').disabled = false;
}

let clrLink = () => document.getElementById("link").value = "";

// Main Function to do the processing
function embed(check){
    if(!check){
        setProcessing();
    }
    var link = String(document.getElementById("link").value);
    var closeTab = document.getElementById("closeTab").checked;
    var reverse = document.getElementById("reverse").checked;
    
    // Check for predefenied values (Easter Eggs)
    if (link === "tinu"){
        window.open("https://tinu.tech");
        clrLink();
    }
    else if (link === "corona"){
        window.open("http://redirect.tinu.tech/corona");
        clrLink();
    }
    else if(link === "mobilecorona"){
        window.open("http://redirect.tinu.tech/mobilecorona");
        clrLink();
    }
    else{
        var valid = true;
        var video_id = link.split('v=');
        
        // Check if link is not a normal one
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
                    clrLink();
                    setGo();
                }
                valid = false;
            }
        }
        else{
            (video_id[1].length >= 11) ? valid = true : valid = false;
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
            
            //Prepare Redirect Links
            var redirect = "http://youtube-nocookie.com/embed/" + video_id;
            var inverse = "http://youtube.com/watch/?v=" + video_id;
            if (closeTab) {
                (reverse) ? (window.open(inverse)) : (window.open(redirect));
                clrLink();
                setGo();
                focus_link();
            }
            else{
                (reverse) ? (window.location.href = inverse) : (window.location.href = redirect);

            }
        }
    }
}
