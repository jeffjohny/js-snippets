function debounce(fn, ms){
    return ()=>{
        if(this.tm){
            clearTimeout(this.tm);
        }
        this.tm = setTimeout(fn, ms)
    }
}
