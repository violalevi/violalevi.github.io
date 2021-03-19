function check(){
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var num_visitor = document.getElementById("numVisitor").value;
    var guide = document.getElementsByName("guide");
    var agreement = document.getElementById("agreement").checked;
    var visit_date = document.getElementById("visitDate").value;
    var test = parseInt(num_visitor,10);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var visited_date = new Date(visit_date);
    var ndd = visited_date.getDate();
    var nmm = visited_date.getMonth() + 1; 
    var nyyyy = visited_date.getFullYear();
   
    today = yyyy+'-'+mm+'-'+dd;
    visited_date = nyyyy+'-'+nmm+'-'+ndd;
    
    if (fullName == "" || email == "" || telephone == "" || num_visitor == "") {
        alert("form must be filled");
    }
    else{
        if (isNaN(fullName) == false) {
            alert("Full name must be alphabetics");  
        }
        if (fullName.length < 5 || fullName.length > 20) {
            alert("Full name must be between 5 to 20 characters");
        }
        if (email.includes("@") && email.includes(".")) {
            if (email.charAt(0) == "@"  || email.charAt(email.length-1) == "@") {
                alert("@ mustbe in proper condition");
            }
            else if(email.charAt(0) == "."  || email.charAt(email.length-1) == "."){
                alert(". mustbe in proper condition");
            }
        }
        else{
            alert("email must contain @ and .");
        }
        if (isNaN(telephone) == true) {
            alert("telephone must be number");
        }
        else{
            if(telephone.length < 10 || telephone.length > 12){
                alert("telephone must be between 10 and 12 characters");
            }
        }
        if (guide[0].checked == false || guide[1].checked == false) {
            alert("guide must be choose");
        }
        if (isNaN(num_visitor) == true) {
            alert("number of visitor must be number");
        }
        else{
            if (test <= 0) {
                alert("number of visitor must more than 0");
            }
        }
        if (ndd == dd && nmm == mm && nyyyy == yyyy) {
            alert("visit date must be other than today");
        
        }
        else{
           
            if (ndd <= dd) {
                alert("visit date must be forward");
            }
            if (nmm < mm) {
                alert("visit month must be forward");
            }
            if (nyyyy < yyyy) {
                alert("visit year must be forward");
            }
            
        }

        if (agreement == false) {
            alert("agreement must be checked");
            
        }


        
    }
   
   




}