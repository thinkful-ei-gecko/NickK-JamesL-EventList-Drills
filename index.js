
//any thumbnail that is clicked on it becomes the target
$('.thumbnail').on('click', e => {
    
    //show clicked img on the top
    const heroCat = $('.hero img'); //get a handle to top cat img
    const clickedCat = $(e.target);//get handle of clicked cat
    
    //get img src frm clickedCat
    const imgSource = clickedCat.attr('src');

    //get alt attr frm clickedCat
    const imgAlt = clickedCat.attr('alt')
    
    //update hero with img src
    heroCat.attr('src', imgSource);
    
    //update hero with alt attr
    heroCat.attr('alt', imgAlt);
    
    console.log(e.target);


    //also update the alt attr of top img
    //test keyboard interactivity
  });