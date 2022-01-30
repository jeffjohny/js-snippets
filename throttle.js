function throttle(fn, ms){
    return ()=>{
        if(this.tm){
            return;
        }
        
        fn();
        this.tm = setTimeout(()=>{this.tm = null}, ms)
    }
}
