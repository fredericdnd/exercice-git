$(function() {
	
	$('.form-group select').change(function() {
		var value = $(this).val();
		$(this).next("input").attr("data-value", value).keyup();
	})

	$('.form-group').keyup(function() {

		var children = $(this).children("input");
		var quotient = children.attr("data-value");
		var value = children.val();
		
		var next_children = $(this).prev().length > 0 ? $(this).prev().children("input") : $(this).next().children("input")
		var next_quotient = next_children.attr("data-value");

		var new_value = (value/quotient*next_quotient).toFixed(2)

		next_children.val(new_value)	
	})


})