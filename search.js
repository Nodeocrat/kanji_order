
function getPageNumber(){

  var kanjiList = document.getElementById("search-box").value; // get user input
  if(kanjiList == null){ 
    document.getElementById("results").innerHTML = "got NULL :/ <br> Enter a kanji baka yaro >_<";  
  }  

  document.getElementById("results").innerHTML = ""; // clean all text of previous search
  
  if(!isNaN (parseInt(kanjiList))){
    searchByID(kanjiList);  // if input is number id
  }

  if(isLetter(kanjiList[0])){
    searchByMeaning(kanjiList); // if input is character
  }  
  else {
    searchByKanji(kanjiList); // if input is kanji
  }   

}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function printResults (kanji){
  kanjiBlock = "<div id='kanji-block'><h2>" +  database[kanji]["page"] + "</h2>"                                                 
    + "<div id='character'>" + kanji + "</div>" 
    // + "page" + " : " + database[kanji]["page"] + "<br>"
    + "<div><span id='id'>" + database[kanji]["id"] + "</span></div>"
    + "<div id='meaning'>" + database[kanji]["meaning"] + "</div></div>";

//  document.getElementById("character").innerHTML += kanji; 
  document.getElementById("results").innerHTML += kanjiBlock; // append to 'results' for multiple kanjis 
}

function searchByID(kanjiList){
  var id = kanjiList; 
  for(var kanji in database){
    if(id == database[kanji]["id"]){
      printResults(kanji); 
    }
  }
}

function searchByKanji (kanjiList){
  for (var i = 0; i < kanjiList.length; i++){
    var kanji = kanjiList [i]; 
    for (var prop in database){
      if (prop == kanji){
        printResults (kanji); 
      }
    }
  }
}

function searchByMeaning(kanjiList){
  var name = kanjiList; 
  for(var kanji in database){
    var meaningList = database[kanji]["meaning"].split(/,/); // store multiple meanings in an array
    for(var index in meaningList){
      meaning = meaningList[index].trim(); // remove white spaces before and after meaning
      if(name.toUpperCase() == meaning){
        printResults(kanji);
      }
    }
  }
}


