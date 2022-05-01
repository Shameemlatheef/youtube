



const search=async()=>{
    try{
  const query=document.getElementById("inp").value 
  const url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q='+query+' %202&key=AIzaSyAHA8hc8WIufydpgGHI8uGmOxzY0Lg9tpg'
 let res=await fetch(url);
 let data=await res.json();
 let datsa=data.items;

 console.log(datsa);
 appende(datsa)
  
    }
    catch(err){
console.log(err)
    }
}


const appende=(videos)=>{
    let con=document.getElementById("container");
    con.innerHTML=null;
    videos.forEach(({id:{videoId},snippet:{title}})=>{
        let div=document.createElement("div");
        
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        let tit=document.createElement("p");
        tit.innerText=title;
        div.append(iframe,tit);
        div.style.border="10px"
        let mam={
            title,
            videoId
        }
        

        con.append(div)
        con.onclick=()=>{
            cli(mam)
        }
    })
}
const cli=(x)=>{
    window.location.href="/video.html"
localStorage.setItem("item",JSON.stringify(x))
}