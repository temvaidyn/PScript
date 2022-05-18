// MAKE SURE THIS REMAINS UNCHANGED
function piratize(input){
    var ptext = [];
    var newTxt = input.split (/[^A-Za-z0-9]/);

    console.log(newTxt);
  
    numberOfWords = newTxt.length;

    for (i=0; i<numberOfWords; i++){
        word = newTxt[i];
        var replace = " ";
        n = word.length; 
  
        if (word == "pounds"){
            replace = "doubloons"
        }
  
        else if (word === "Pounds"){
            replace = "Doubloons"
        }
  
        else if (isNaN(word) === true){
            replace = word.substr(1,n-1);
            replace = replace + word[0];
            replace = replace + 'arr';
        }
  
        else {
            replace = word; 
        }
  
        ptext.push (replace);
    }
    return ptext.join(' ');
    // add you code in here
  } 
  
  console.log (piratize("hello"));
  console.log (piratize("hello world"));
  console.log (piratize("pizza costs 20 pounds"));