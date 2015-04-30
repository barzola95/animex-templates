$(document).ready(function(){
//Variables
var $search = $('#search-form'),
	$lens = $('#lens'),
	$input_search = $('#search'),
	$articles = $('.articles-list').first()


//Functions
function search(){
	$search.submit()
}  

function searchrealtime(e){
	e.preventDefault()
	$clone = $articles.clone()
	$('.articles').prepend($clone)
	$('.articles-list:last').remove()
	$input_search.val('')
}

//Events

$lens.click(search)
$search.on('submit',searchrealtime)

})