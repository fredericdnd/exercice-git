$(function() {
	$('.currency_form .form-group').keyup(function() {

		var children = $(this).children("input");
		var quotient = children.attr("data-value");
		var value = children.val();
		
		var over_value = (value*quotient).toFixed(2)
		
		var over_element = $(this).prev().length > 0 ? $(this).prev().children("input").val(over_value) : $(this).next().children("input").val(over_value)
	})
})