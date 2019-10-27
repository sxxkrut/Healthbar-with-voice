$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;
        $(".container").css("display",data.show? "none":"block");
        $("#boxHeal").css("width",data.health + "%");
        $("#boxArmor").css("width",data.armor + "%");
        $("#boxStamina").css("width",data.stamina + "%");
        if (event.data.action == "updateStatus") {
            updateStatus(event.data.st);
        }
    })
})


function updateStatus(status){
    $('#boxHunger').css('width', status[0].percent+'%')
    $('#boxThirst').css('width', status[1].percent+'%')
    $('#boxDrunk').css('width', status[2].percent+'%')
}