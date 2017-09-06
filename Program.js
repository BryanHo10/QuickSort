var numArray=[];
var numDisplay="|";
var arraySize=500;
var sortDisplay;
var count=0;
var w;
function setup(){
   //createSort();
    previewColor();
}
function draw(){
   
    //createTest();
    sortColor();
    console.log(count);
    console.log(arraySize*Math.log(arraySize));
    noLoop();
    
    
}
function previewColor(){
    createCanvas(window.innerWidth-20,window.innerHeight-20);
    background(0);
    //colorMode(HSB);
    w=width/arraySize;
    
    for(var i=0;i<arraySize;i++){
        numArray[i]=floor(random(0,225));
        noStroke();
        fill(0,numArray[i],0);
        rect(i*w,0,(i+1)*w,height/2);
    }
    
}
function sortColor(){
    quickSort(numArray);
    for(var i=0;i<arraySize;i++){
        noStroke();
         fill(0,numArray[i],0);
        rect(i*w,(height/2)+5,(i+1)*w,height);
    }
}







function createSort(){
        
    for(var i=0;i<arraySize;i++){
        numArray[i]=floor(random(1000));
        numDisplay+=numArray[i]+"| ";
    }

    var myP=createP(numDisplay);
    myP.style('text-align:center');
    myP.style('font-size','36px');
    
    sortDisplay=createP(numDisplay);
    sortDisplay.style('text-align:center');
    sortDisplay.style('font-size','36px');
    //frameRate(1);
    
}

function createTest(){
     quickSort(numArray);
    console.log(count);
    console.log(numArray.length*(Math.log(numArray.length)));
    
    numDisplay="|";
    for(var i=0;i<arraySize;i++){
        numDisplay+=numArray[i]+"| ";
    }
    sortDisplay.html(numDisplay);
   // count++;
}

function quickSort(arr){
    quickSortAlgo(arr,0,arr.length-1);
}
function quickSortAlgo(arr,left,right){
    count++;
    if(left>=right)
        return;
    //var pivot=arr[floor(random(left,right))];
    var pivot=arr[floor((left+right)/2)];
    var index=partitioner(arr,left,right,pivot);
    quickSortAlgo(arr,left,index-1);
    quickSortAlgo(arr,index,right);
    
}
function partitioner(arr,left,right,pivot){
    while(left<=right){
        while(arr[left]<pivot){
            left++;
        }
        while(arr[right]>pivot){
            right--;
        }
        if(left<=right){
            swapTwoElements(arr,left,right);
            left++;
            right--;
        }
    }
    return left;
}
function swapTwoElements(arr,index1,index2){
    var temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}