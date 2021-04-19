/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
    })
  }
}
  
showMenu('nav-toggle','navbar','body-pd')
  
  /*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


function convertDate(dateString){
  var p = dateString.split(/\D/g)
  return [p[2],p[1],p[0] ].join("/")
}

function removeRow(oButton) {
  var empTab = document.getElementById('main-table');
  empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
}

function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

function addRows(){
  
  //Check if All Fields are Filled
  let allAreFilled = true;
  console.log(document.getElementById("add-data"));
  document.getElementById("add-data").querySelectorAll("[required]").forEach(function(i) {
    console.log(i);
    if (!allAreFilled) return;
    if (!i.value) allAreFilled = false;
  })
  if (!allAreFilled) {
    alert('Fill all the fields');
    return
  }

  //
  var table = document.getElementById('main-table');
  var rowCount = table.rows.length;
  var cellCount = table.rows[0].cells.length; 

  var row = table.insertRow(rowCount-1);

  cell = row.insertCell(0);

  var Row = table.rows[rowCount-2];
  var CellValue = Row.cells[0].innerText;

  if(rowCount==2){
    cell.innerHTML=1;
  }
  else{
    cell.innerHTML=parseInt(CellValue)+1;
  }

  for(var i = 2; i < cellCount; i++){
    var cell = row.insertCell(i-1);
    var copycel = document.getElementById('i'+i).value;
    if(i==4){
      copycel = convertDate(document.getElementById('i'+i).value);
    }
    else if(i==5 || i==6){
      copycel = tConvert(document.getElementById('i'+i).value);
    }
    else{
      copycel = document.getElementById('i'+i).value;
    }
    console.log(copycel);
    
    cell.innerHTML=copycel;
  }

  cell = row.insertCell(cellCount-1);
  var deletebtn = document.createElement('input');
  deletebtn.setAttribute('type', 'button');
  deletebtn.setAttribute('id', 'btndel');
  deletebtn.setAttribute('onclick', 'removeRow(this)');
  cell.appendChild(deletebtn);
  
  for(var i = 2; i < cellCount; i++){
    var cell = Row.cells[i-1];
    document.getElementById('i'+i).value = null;
  }
  
  //console.log(CellValue);
}


function search(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("meet-search");
  filter = input.value.toUpperCase();
  table = document.getElementById("main-table");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }    
  }
}
  
