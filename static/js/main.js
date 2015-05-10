$(document).ready(function(){
//Variables
var $search = $('#search-form'),
	$lens = $('#lens'),
	$contact = $('#footer-form'),
	$show_form_contact = $('#show-form'),
	$hide_form_contact = $('#hide-form') 
	


//Functions
function search(){
	$search.submit()
}  

function show_contact(e){
	e.preventDefault()
	$contact.slideToggle()
	$hide_form_contact.show()
	$show_form_contact.hide()
}
function hide_contact(e){
	e.preventDefault()
	$contact.slideToggle()
	$hide_form_contact.hide()
	$show_form_contact.show()
}

//Events

$lens.click(search)
$show_form_contact.click(show_contact)
$hide_form_contact.click(hide_contact)
})