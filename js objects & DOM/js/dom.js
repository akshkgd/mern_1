// document.getElementById('title').style['background-color'] = 'indigo';
// document.getElementById('title').style.color = 'white';

changeColor = () =>{
    let colors = ['#09009B', '#091353', '#E02401', '#FF0075', '#1C7947', '#1DB9C3', '#FF4848', '#FA9905', '#28DF99']
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let randomColors = Math.floor(Math.random()*colors.length);
    let randomColor = "rgb("+r+","+g+","+b+")";
    document.getElementById('title').style.color = colors[randomColors];
}