function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
        };//adds new items to the list
            
     li.on('dblclick', function crossOut() {
         li.toggleClass('strike')
     }); //crosses out item upon double click as well as vice versa
        
     let crossOutButton = $('<crossOutButton></crossOutButton');
     li.append(crossOutButton);
     crossOutButton.append('X'); //creates close button on item

     crossOutButton.on('click', deleteListItem);
     function deleteListItem() {
         li.addClass('delete'); //initiates removal of item upon click of X button
     }
     $('#list').sortable(); //allows user to re-arrange items
    };