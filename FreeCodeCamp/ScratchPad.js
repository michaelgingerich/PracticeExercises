var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

function updateRecords(id, prop, value){
  //Block removes the property corresponding to prop when the value is empty.
  if(value === ""){
    delete collection[id][prop];
  }
  else{
	if(prop === "tracks"){
		//Block appends a track to "tracks".
		if(collection[id].hasOwnProperty(prop)){
			collection[id][prop].push(value);
		}
		//Block creates an empty array in "tracks" and appends a track to that array.
		else{
			collection[id][prop] = [];
			collection[id][prop].push(value);
		}
	}
	//Block sets the value of a property other than "tracks".
	else{
		collection[id][prop] = value;
	}
  }
  return collection;
}

updateRecords(1245, "tracks", "Addicted to Love");
