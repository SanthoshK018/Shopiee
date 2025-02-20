var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function()
{
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count <productlist.length;count=count+1)
    {
        var productName = productlist [count].querySelector("p").textContent
        if(productName.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display= "none";
        }
        else{
            productlist[count].style.display= "block";
        }



        }




    })