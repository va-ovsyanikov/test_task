$(document).ready(function () {


//owlCarousel
$(".owl-carousel").owlCarousel({
	items: 1,
	smartSpeed: 450,
	loop: true,
	autoplay: true,
	dots:true

});

//magnificPopup
$('.f_popup').magnificPopup({
	type: 'inline',
	midClick: true,
	removalDelay: 300

});


// //отправка  формы
// $('#form').on('submit',function(e){
// 	var errors = false;
// 	$('.my_input').next().empty();
// 	$('.my_input').removeClass('error')
// 	$(this).find('.my_input').each(function(){
// 		if($.trim($(this).val()) == ''){
// 			$(this).addClass('error')
// 			// alert("Заполните поля")
// 			// $(this).next().text('Заполните пожалуйста это поле');
// 			  errors = true; 
// 		}
// 	});
// 	if(!errors){
// 		$.ajax({
// 			url: 'contact.php',
// 			type: 'POST',
// 			contentType: false,
// 			processData: false,
// 			data:  new FormData(this),
// 			beforeSend:function(){
// 				$('.form_popup__call input[type="submit"]').prev().text('Отправка...')
// 			},
// 			success: function(res){
				
// 				if(res == '1'){ 
// 				  $('#form').find('.my_input, textarea').val('');
// 				  $('.form_popup__call input[type="submit"]').prev().empty();
// 				  $.magnificPopup.open({
// 					  items: {
// 						  src: '#success',
// 						  type: 'inline'
// 					  },
// 					  closeBtnInside: true
// 					});

				
// 				}else{
// 					alert('Ошибка отправки')
// 				}
		
// 			},
// 			error: function(){
// 				alert('Ошибка');
// 			}
// 		});
// 	}

// 	return false;
// });

})


