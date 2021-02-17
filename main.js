var pagecounter = 1;
var mydata = document.getElementById('mydata');
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','../JSON/myData'+pagecounter+'.json');
    ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    }
    ourRequest.send();
    pagecounter++;
    if (pagecounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var htmlString = "";

    for(var i = 0; i < data.length; i++){
        htmlString += `
            <p> ${data[i].name} is a ${data[i].species}.</p>
        `;
    }
    mydata.insertAdjacentHTML('beforeend', htmlString);
}
