https://www.instagram.com/<jualan_akun_ff_amanah01>

If you do a GET request, you'll get the plain HTML and you can search an html tag that looks like 
<link rel="canonical" href="https://www.instagram.com/<jualan_akun_ff_amanah01>/" /><meta content="359 Followers, 
903 Following, 32 Posts - See Instagram photos and videos from <username>)" name="description" />


//javascript

var url = "https://www.instagram.com/jualan_akun_ff_amanah01";
request.get(url, function(err, response, body){
    if(response.body.indexOf(("meta property=\"og:description\" content=\"")) != -1){
        console.log("followers:", response.body.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0])
    }
 });