
function returnHTML(NewsTitle,News,id){
  return `<div class="card">
  <div class="card-header" id="headingOne">
    <h5 class="mb-0">
      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne${id}" aria-expanded="true" aria-controls="collapseOne${id}">
            ${NewsTitle}
      </button>
    </h5>
  </div>
  <div id="collapseOne${id}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
    <div class="card-body">
    ${News}
    </div>
  </div>
 </div>`  
}

// let html=


function populate(resp){
  resp = JSON.parse(resp);
  newsDiv=document.getElementById("news");
  resp.articles.forEach(function(resp, i) {  
    // console.log(resp)  
    newsDiv.innerHTML += returnHTML(resp['title'],resp['description'],i);
    // newsDiv.innerHTML += returnHTML(resp["articles"][i]['title'],resp['articles'][i]['description'],i);     
  })
}
console.log("etf")
$('#fetchButton').click(function (){
    let xhrr=new XMLHttpRequest();
    url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-13&sortBy=publishedAt&apiKey=d112b7c47ef34f4bba02f35c5c783670"
    url="http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d112b7c47ef34f4bba02f35c5c783670"
    xhrr.open("GET",url,true)
    xhrr.onloadstart = ()=>document.getElementById("fetchNewsBtnLod").style.display = 'block'
    xhrr.onload=function (){
      document.getElementById("fetchNewsBtnLod").style.display = 'none'
        populate(this.responseText);
    }
    xhrr.send()
})