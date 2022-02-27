// let $count =0;

$("#name").keyup(function(){
    // $('span.error-keyup-2').remove();
    $('span.name-err').remove()
    let $val1 = $(this).val();
    let $patten = /^[a-zA-z\.]+$/;
    if(!$patten.test($val1)){
        $(this).after('<span class="name-err">enter valied name.</span>')
    }
})


$("#email").keyup(function(){
    $('span.name-err').remove()

    let $val1 = $(this).val();
    let $patten = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if(!$patten.test($val1)){
        $(this).after('<span class="name-err">enter valied email.</span>')
        $('span.low').remove()

    }
    if($patten.test($val1)){
        $('span.name-err').remove()
        // $count++
        
    }
   
    
})

$("#con-password").change(function(){
    let $val1 = $('#password').val();
    let $con_passwd = $(this).val();
    if($val1 === $con_passwd){
        $('span.pass-match').remove()
        $('span.pass-err').remove()
        $(this).after('<span class="pass-match">Password Match</span>')
        // $count ++
    }if($val1 !== $con_passwd){
        $('span.pass-match').remove()
        $('span.pass-err').remove()
        $(this).after('<span class="pass-err">Password not Match</span>')
    }
})


$("#password").keyup(function(){
    $('span.name-err').remove()

    let $val1 = $(this).val();
    let $patten = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
    let $patten1 = /^[A-Za-z0-9]$/ 
    let $low =/^[A-Za-z]$/
    if($val1 === ""){
      $(this).after('<span class="name-err">enter valied Password.</span>')
    }
    if($patten.test($val1)){
        $('span.strong').remove()
        $('span.name-err').remove()
        $('span.midium').hide()
        $('span.low').hide()

        $(this).after('<span class="strong">strong</span>')
        // $count++
     
    }
    // if(!$patten1.test($val1)){
    //     $('span.name-err').remove()
    //     // $(this).after('<span class="name-err">enter valied Password.</span>')

    // }
    if($patten1.test($val1)){
        $('span.midium').remove()
        $('span.name-err').remove()
        $('span.low').remove()
        
        $(this).after('<span class="midium">midium</span>')
    }
   if($low.test($val1)){
    $('span.midium').remove()
    $('span.name-err').remove()
    $('span.low').remove()

    $(this).after('<span class="low">low</span>')
   }
   
})

