fetch("data.json")
	.then(function(response){ return response.json(); })
	.then(function(data){ 
		profile(data.profile);
        summary(data.summary);
        skillset(data.skillset);
	 })
    .catch(function(error){ console.warn(error); });
    
function profile(profile) {
    console.log(profile);

    document.getElementById("name").textContent = profile.name;
    document.getElementById("role").textContent = profile.role;

    var email = document.createElement("a");
    email.href="mailto:" + profile.email;
    email.textContent = profile.email;
    document.getElementById("email").appendChild(email);

    var linkedin = document.createElement("a");
    linkedin.href=profile.linkedin;
    linkedin.textContent = profile.name;
    document.getElementById("linkedin").appendChild(linkedin);

    var telnum = document.createElement("a");
    telnum.href="tel:" + profile.mobile;
    telnum.textContent = profile.mobile;
    document.getElementById("mobile").appendChild(telnum);
}

function summary(summary) {
    console.log(summary);

    var list = document.createElement("ul");
    summary.map( (i) => {
        var item = document.createElement("li");
        item.innerText = i;
        list.appendChild(item);
    });

    document.getElementById("summary").appendChild(list);
}

function skillset(skillset) {
    console.log(skillset);

    var list = document.createElement("div");

    skillset.map( (i) => {        

        var header = document.createElement("h5");
        header.innerText = i.skill;

        list.appendChild(header);
        
        var tech = i.technologies;

        tech.map( (t) => {
            var span = document.createElement("span");
            span.textContent = t;
            span.className = "badge badge-pill badge-primary";

            list.appendChild(span);
        });
    });

    document.getElementById("skillset").appendChild(list);
}