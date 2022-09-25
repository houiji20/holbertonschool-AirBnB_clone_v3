$( document ).ready(function () {

<<<<<<< HEAD
	  /*****************************************************
	   *     display list of checkboxes clicked
	   *        *****************************************************/
	  let ls_amen = [];
	  $('input[type=checkbox]').change (function () {
		      let name = $(this).attr('data-name');
		        if ($(this).is(':checked')) {
					ls_amen.push(name);
				      } else {
					      	ls_amen = ls_amen.filter(amen => amen !== name);
					            }
		      $('.amenities h4').text(ls_amen.join(', '));
		    });
=======
  /*****************************************************
    display list of checkboxes clicked
   *****************************************************/
  let ls_amen = [];
  $('input[type=checkbox]').change (function () {
    let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
	ls_amen.push(name);
      } else {
	ls_amen = ls_amen.filter(amen => amen !== name);
      }
    $('.amenities h4').text(ls_amen.join(', '));
  });
>>>>>>> 2e347f2fff627473bea84e9e6899b7994681ac26

});
