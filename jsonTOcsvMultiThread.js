function worker_function() {
    var worker = new Worker('C://Users/gsPC/Documents/GitHub/whatsapp-group-download/cleanAndCreateCSV.js');


	worker.addEventListener('message',function(e){

	  console.log('Worker said: ', e.data);

},false);

worker.postMessage('Saved the File'); 
}
// This is in case of normal worker start
// "window" is not defined in web worker
// so if you load this file directly using `new Worker`
// the worker code will still execute properly
if(window!=self)
  worker_function();






