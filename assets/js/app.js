function showAll() {

    var key = "";
    var list = "";
    var i = 0;
    var size = "";
    var total = 0;

    for (i = 0; i <= localStorage.length-1; i++) {
        key = localStorage.key(i);
        size = key.replace("Classic Tee", "");
        list += "<tr><td><img style='width:60px;margin:10px;' src='assets/img/classic-tee.jpg'></td><td>" + key + " <br>"
                + localStorage.getItem(key) + "x $75.00<br> Size:"+size+"</td><td><button onclick='removeItem(&quot;" + key + "&quot;)'>Remove</button></td></tr>\n";
        total += parseInt(localStorage.getItem(key));
    }

    //If no item exists in the cart.
    if (list == "") {
        list += "<i>Your cart is empty.";
    }
    $(".cart-qty").html("( " + total + " )")
    $(".list").html(list)
 
}

function saveItem() {
    if($("#size").val() != ''){
        var name = "Classic Tee " + $("#size").val();
        var qty = localStorage.getItem(name)
        console.log(qty)
        if(qty == null) qty = 0;
        var data = parseInt(qty)+1;
        localStorage.setItem(name, data);
        alert("Item has been added: " + name + " | Current Qty:" + data)
        showAll();
    }else{
        alert("Please select size.")
    }
}

function removeItem(name)
{
    console.log(name)
    localStorage.removeItem(name);
    alert("Item has been removed: " + name )
    showAll();
}

$("button").click(function() {
    var buttonSize = $(this).data('size');
    $(".option").removeClass('active-btn')
    $(this).addClass('active-btn');
    $("#size").val(buttonSize)
});
