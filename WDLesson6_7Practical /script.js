let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.complaint_type}</h3>
                 <hr>
                 <p>${complaint.borough}</p>
                 <p>${complaint.zip_code}</p>
                 <p>${complaint.crash_time}</p>
                 <hr>
                 <p>${complaint.crash_date}</p>
                 <hr>
                 <p>${complaint.latitude}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.crash_time}</p>
                    <hr>
                    <p>${complaint.crash_date}</p>
                    <hr>
                    <p>${complaint.latitude}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function searchzip(){
  let zip= document.getElementById("zip").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.zip == zip){
      build += `<div class="fitted card">
                    <h3>${crash.crash_type}</h3>
                    <hr>
                    <p>${crash.borough}</p>
                    <p>${crash.zip_code}</p>
                    <p>${crash.descriptor}</p>
                    <hr>
                    <p>${crash.created_date}</p>
                    <hr>
                    <p>${crash.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}



// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function searchcollision(){
  let collision = document.getElementById("collision").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.complaint_type}</h3>
                 <hr>
                 <p>${collision.borough}</p>
                 <p>${collision.incident_zip}</p>
                 <p>${collision.descriptor}</p>
                 <hr>
                 <p>${collision.created_date}</p>
                 <hr>
                 <p>${collision.agency}</p>
              </div>`    
  }
  output.innerHTML = build;
}


}