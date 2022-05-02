$(".burger-block").click(dropDown);
let count = 0;
function dropDown(){
    if(count%2==0){
        $("#drop-down").css({
            display:"block",
            width:"50%",
            height:"fit-content",
        })
    }
    else {
        $("#drop-down").css({
            display:"none"
        })
    }
    count++;
}
let selector = document.getElementById("select");
let nftText = document.getElementById("tag");
selector.addEventListener("change",function(){
    switch(true){
        case this.value === "nft1":
            $(".nft").css({
                'background-image':'url("nfts/nft1.jfif")'
            })
            nftText.innerHTML = "Ukrainian warrior";
            break;
            case this.value === "nft2":
                $(".nft").css({
                    'background-image':'url("nfts/nft2.jpg")'
                })
                nftText.innerHTML = "Now I will show you...";
            break;
            case this.value === "nft3":
                $(".nft").css({
                    'background-image':'url("nfts/nft3.jpg")'
                })
                nftText.innerHTML = "Four clowns together";
            break;
            case this.value === "nft4":
                $(".nft").css({
                    'background-image':'url("nfts/nft4.jpg")'
                })
                nftText.innerHTML = "Pleasure";
            break;
            case this.value === "nft5":
                $(".nft").css({
                    'background-image':'url("nfts/nft5.png")'
                })
                nftText.innerHTML = "Just Ptn";
            break;
    }
});
