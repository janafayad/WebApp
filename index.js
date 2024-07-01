function getTutorials(){
    fetch('https://webapi-qig1.onrender.com/all')
      .then(response => response.json())
      .then(json => {
        let ddl_tutorials = document.getElementById("ddl_tutorials");
        json.forEach(t => {
            let _opt = document.createElement('option');
            _opt.innerHTML= t.title;
            ddl_tutorials.appendChild(_opt);
        });
      })
}

getTutorials();