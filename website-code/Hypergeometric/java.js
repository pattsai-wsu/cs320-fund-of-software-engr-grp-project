drawCanvas();

//this only close when the window open by itself
function callExit(input){   
    if (input=='exit')
    {
        open(location, '_self').close();
    }   
    return false;  
}

    //     function drawCanvas() {
    //         let Canvas = document.getElementById('canvas');
    //         let context = Canvas.getContext('2d');
            
    //         start();

    //        function start() {
    //            window.addEventListener('resize', resizeCanvas, false);
    //            resizeCanvas();
    //         }

    //         function resizeCanvas() {
    //             Canvas.width = window.innerWidth;
    //             Canvas.height = window.innerHeight;
    //             redraw();
    //         }

    //         function redraw() {
    //             // context.strokeStyle = '#D5F0F2';
    //             // context.lineWidth = '10';
    //             // context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
    //             context.fillStyle="#271F3F";
    //             context.fillRect(5,5,window.innerWidth-10,window.innerHeight-10);
    //             context.shadowColor='#D4F5F8';
    //             context.shadowBlur=5;
    //             context.strokeStyle = '#C3F6FB';
    //             context.lineWidth = '10';
    //             context.strokeRect(0, 0, window.innerWidth, window.innerHeight);

    //             context.drawImage(logo,0,0)
    //             context.drawImage(star1,window.innerWidth,window.innerHeight)
    //             context.drawImage(star2,window.innerWidth,window.innerHeight)
    //         }
    // };