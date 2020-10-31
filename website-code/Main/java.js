drawCanvas();

//this only close when the window open by itself
function callExit(input){   
    if (input=='exit')
    {
        open(location, '_self').close();
    }   
    return false;  
}
