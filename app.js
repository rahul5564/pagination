var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
var requestdata = []
request.onload  = () =>{
  var lower = document.getElementById('lower');
  var upper = document.getElementById('upper');
 requestdata = JSON.parse(request.response);
  var prev = document.createElement('input');
  prev.setAttribute('id','prev');
      prev.setAttribute('type', 'button');
      prev.setAttribute('value', 'Prev');
      prev.setAttribute('onClick','prev()');
      lower.append(prev);
for(var i=1;i<=10;i++){
    var button = document.createElement('input');
      button.setAttribute('id',i);
      button.setAttribute('type', 'button');
      button.setAttribute('value', i);
      button.setAttribute('onClick','show(id)');
      lower.append(button)
    }
    var next = document.createElement('input');
  next.setAttribute('id','next');
      next.setAttribute('type', 'button');
      next.setAttribute('value', 'next');
      next.setAttribute('onClick','next()');
      lower.append(next);
  }
  var table = document.createElement('table');
var gid = 1;
  function show(id){
      var id  = parseInt(id);
      gid = id;
      table.innerHTML="";
       table.setAttribute("class", "test");
       var tr = document.createElement('tr');
       var td = document.createElement('td');
       td.innerText = 'ID';
       td.style.borderTop = '3px solid black';
       td.style.borderBottom = '3px solid black';
       td.style.borderRight = '2px solid black';
       var td1 = document.createElement('td');
       td1.innerText = 'NAME';
       td1.style.borderTop = '3px solid black'
       td1.style.borderBottom = '3px solid black'
       td1.style.borderRight = '2px solid black';
       var td2 = document.createElement('td');
       td2.innerText = 'EMAIL';
       td2.style.borderTop = '3px solid black'
       td2.style.borderBottom = '3px solid black';
       td2.style.borderRight = '2px solid black';
       tr.append(td,td1,td2);
       table.append(tr)
      for(var i=(id*10)-10;i<id*10;i++){
        var tr = document.createElement('tr');
        var td1  = document.createElement('td');
        td1.style.borderBottom = '1px solid black';
        td1.style.borderRight = '1px solid black';
        var td2  = document.createElement('td');
        td2.style.borderBottom = '1px solid black';
        td2.style.borderRight = '1px solid black';
        var td3  = document.createElement('td');
        td3.style.borderBottom = '1px solid black';
        td3.style.borderRight = '1px solid black';
       
        td1.innerText = requestdata[i].id;
        td2.innerText = requestdata[i].name;
        td3.innerText = requestdata[i].email;
        
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        table.append(tr);
      }
      upper.append(table)
  }

  function prev(){
  if(gid>1){
    gid --;
      show(gid);
    }
  }

    function next(){
  if(gid<10){
    gid ++;
      show(gid);
    }
  }

request.send();

