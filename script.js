$(document).ready(function(){
    $('#form-sub').validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            }
        }
    })
})