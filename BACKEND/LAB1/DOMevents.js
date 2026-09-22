import {EventEmitter } from "node:events";

function createDOMelements(){
    const emitter =new EventEmitter();
    return{
      addEventListener(eventType,listener){
        emitter.on(eventType,listener);
      },
      removeEventListener(eventType,listener){
        emitter.off(eventType,listener);
      },
      dispatchEvent(event){
        // event.target=this;
        // event.currentTarget=this;
        emitter.emit(event.eventType,event);
      }
    };
}
const button =createDOMelements();
button.addEventListener('save',()=>{
    console.log("saving...");
})
button.dispatchEvent({
    eventType:"save"
});
