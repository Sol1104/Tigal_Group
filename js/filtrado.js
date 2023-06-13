// JavaScript Document
$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catPortafolio = $(this).attr('category');
		console.log(catPortafolio);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.portafolio-item').css('transform', 'scale(0)');
		function hidePortafolio(){
			$('.portafolio-item').hide();
		} setTimeout(hidePortafolio,400);

		// MOSTRANDO PRODUCTOS =========================
		function showPortafolio(){
			$('.portafolio-item[category="'+catPortafolio+'"]').show();
			$('.portafolio-item[category="'+catPortafolio+'"]').css('transform', 'scale(1)');
		} setTimeout(showPortafolio,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.portafolio-item').show();
			$('.portafolio-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});

	// MOSTRAR UBICACION EN EL NAV

		let menuPortafolio = document.querySelectorAll('.category_item');

		menuPortafolio.forEach((item) => {
			console.log(item);
	
			item.addEventListener('click', function() {
	
				menuPortafolio.forEach((item) => {
					item.classList.remove('active');
				});
	
				item.classList.add('active');
	
			});
		});

});


// menu //

let navItems = document.querySelectorAll ('.nav_link_item');
//console.log(navItems);

navItems.forEach((item)=>{
	console.log(item);
	
	item.addEventListener ('click', function(){
	console.log('clic', item);
		
	navItems.forEach((item)=>{
	item.classList.remove('active');
	});
		
	item.classList.add('active');
	});
	
});













