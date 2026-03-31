function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  output.innerHTML = `
    <div class = "card">
     <h2>${school.name}</h2>
     <img src = "${school.image}"="${school.name}">
     <p>${school.address}</p>
    </div>`;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Kanye West",
    "image":"https://hips.hearstapps.com/hmg-prod/images/kanye-west-attends-the-2020-vanity-fair-oscar-party-hosted-news-photo-1742326400.pjpeg?crop=0.668xw:1.00xh;0.141xw,0",
    "album":"Graduation",
    "url":"https://yeezy.com/?srsltid=AfmBOoqeqCcoOuzyhpNbusu7SxdFdnow25TujBWhDBTBDLdgJsKiM9RE",
  };
  let output = document.getElementById("output");
  build = "";
  build += `<div>
              <h2>${artist.name}</h2>
              <p>${artist.album}</p>
              <img src = "${artist.image}">
              <br>
              <a href = "${artist.url}"target = blank></a>
            </div>`
  output.innerHTML = build;


  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.

}





