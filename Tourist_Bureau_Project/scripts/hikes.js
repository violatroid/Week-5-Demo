function getHikeDetail(hike){
    const path = "./data/HikingPage/";    
    return `
<pre>
    id:             ${hike.id} 
    name:           ${hike.name} 
     
    length:         ${hike.length} 
    difficulty:     ${hike.difficulty} 
</pre>
<p>${hike.description}</p>
    <div class="hikeImage">Scenic Image:   <br> <img src="${ path + hike.scenicImage}"> </div>
    <div class="hikeImage">Trail Map Image: <br> <img src="${ path + hike.trailMapImage}"> </div>
    `;
}

document.addEventListener("DOMContentLoaded",()=>{

    for( h of hikes){
        hikeSelect.appendChild(new Option(h.name));
    }

    hikeSelect.addEventListener("change", ()=>{
        for(hike of hikes){
            if(hikeSelect.value === hike.name){
                hikeDiv.innerHTML = getHikeDetail(hike);
            }
        }
    });

});// end content loaded