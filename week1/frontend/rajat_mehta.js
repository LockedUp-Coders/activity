var right=document.querySelector("#right");
var name=document.querySelector("#text");
var email=document.querySelector("#email");
var btn=document.querySelector("#myform");
let empty=true;
let firstime=true;
btn.addEventListener("submit",func);
function func(e){
    e.preventDefault();
    if(text.value!=''  && email.value!=''){
      
    if(firstime){
            right.removeChild(right.lastElementChild);
            firstime=false;
            var newchild=document.createElement("h1");
            newchild.appendChild(document.createTextNode("List:"));
            right.append(newchild);
            var table=document.createElement("table");
            table.setAttribute("id","mytable");
            table.className="table";
            table.innerHTML=`<thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>`;
          right.append(table);
          var tbody=document.createElement("tbody");
          tbody.setAttribute("id","tablebody");
          table.appendChild(tbody);
 

    }
    var tbody=document.querySelector("#tablebody");
    var tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${text.value}</td>
    <td>${email.value}</td>
        
    `
    tbody.appendChild(tr);
    text.value='';
    email.value='';
  }
}
