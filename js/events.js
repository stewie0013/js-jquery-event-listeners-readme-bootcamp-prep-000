function getIt() 
{
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt()
{
  $('img').on('load', function() {
    
  })
}

function pressIt()
{
  $('form').on('keydown', function(key) {
    if (key.which === 'G')
    {
      alert('You pressed "G".')
    }
  })
}

function submitIt()
{
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});
