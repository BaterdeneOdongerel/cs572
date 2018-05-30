const tree = { 
  name : "home", 
  files : ["notes.txt","todo.txt"], 
  subFolders: [  
    { name : "payroll", 
      files : ["paper.pdf","funds.csv"], 
      subFolders: [] 
    }, 
    { name: "misc", 
      files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
      subFolders: [
      { name : "logs", 
        files : ["logs1","logs2","logs3","logs4"], 
        subFolders: [] 
      }] 
  }] 
}; 
var find = name => file => {
  
    if ( file != null && file["subFolders"].length > 0 ) {
      for (let i = 0; i < file["files"].length; i ++ ) {
        if ( file["files"][i] == name) 
          return true;
      }
      for (let i = 0; i < file["subFolders"].length; i ++ ) {
          if( find(name)(file["subFolders"][i]) ) 
            return true;
      }
    } 
    return false;
  
}
console.log( find("summer1.jpg")(tree));