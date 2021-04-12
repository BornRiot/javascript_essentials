var select = document.getElementsByName('cars')[0]

// Use onclick function outside HTML document
select.onclick = function(event){
  console.log(event);
};
select.addEventListener('click', function(){
  console.log('clicked by addEventListener');
});

// Be careful when adding functions that may need to be removed later. If they're likely to removed, add a getElementsByName
function some_func(event){
  console.log('clicked by an addEventListener');

}
select.addEventListener('click', some_func);

// Remove addEventListener
select.removeEventListener('click', some_func);
