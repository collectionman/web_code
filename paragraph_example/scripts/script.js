const paragraph = document.querySelector( 'p' ) ;

paragraph.addEventListener( 'click', function(){
    let newName = prompt( 'Enter a new name' ) ;
    paragraph.textContent = `Player 1: ${ newName }` ;  
});