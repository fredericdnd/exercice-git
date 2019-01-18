$(function() {
	
	$('.form-group select').change(function() {
		let value = $(this).val();
		$(this).next("input").attr("data-value", value).keyup();
	})

	$('.form-group').keyup(function() {

		let children = $(this).children("input");
		let quotient = children.attr("data-value");
		let value = children.val();
		
		let next_children = $(this).prev().length > 0 ? $(this).prev().children("input") : $(this).next().children("input")
		let next_quotient = next_children.attr("data-value");

		let new_value = (value/quotient*next_quotient).toFixed(2)

		next_children.val(new_value)	
	})


})