changeCategory = () => {
    let category = document.getElementById("category");
    let subcategory = document.getElementById("subcategory");

    if(category.value === "education"){
        subcategory.innerHTML = "";
        subcategory.options.add(new Option("School"));
        subcategory.options.add(new Option("College"));
        subcategory.options.add(new Option("University"));
    }
    if(category.value === "entertainment"){
        subcategory.innerHTML = "";
        subcategory.options.add(new Option("Cinema"));
        subcategory.options.add(new Option("Thheatre"));
    }

}

// Check if Phone number is filled
checkPhone = () => {
    let phone = document.getElementById("phone");
    let testphone = /[^+0-9]/;
    if(testphone.test(phone.value)){
        alert("Phone should contain only digits, spaces and plus sign");
        return false;
    }
    if(phone.value === ""){
        alert("Form should not be empty");
        return false;
    }
    else{
        return true;
    }


}