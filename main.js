const textArrElem = document.getElementById('textArr');
let mobilenet;
let textArr = '';
let imgForMobileNet;



modelReady = () => {
    console.log('ready');
    mobilenet.predict(imgForMobileNet, gotResults);
}

gotResults = (error, results) => {
if (error) {
    console.error(error);
} else {
    console.log(results);
    let result1 = results[0].className;
    let prob = results[0].probability;
    var newArray = results.map( function( el ){ 
        return JSON.stringify(el); 
       });
    var list = document.createElement('ul');
    newArray.forEach(function (result) {
        var li = document.createElement('li');
        li.textContent = result;
        list.appendChild(li);
        var textArea = document.querySelector('#textArea');
        textArea.appendChild(list);
    })



}
}



imageReady = () => {
    image(imgForMobileNet, 0, 0, width, height);
}

setup = () => {
    createCanvas(600,600);
    background(0);
    imgForMobileNet = createImg('../eiffel.jpg', imageReady);
    imgForMobileNet.hide();
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}   
