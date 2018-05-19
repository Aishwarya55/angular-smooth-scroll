class scrollabledivController {
    constructor($interval){
        "ngInject"
        this.data = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']  
        console.log(this.data,"data")
        this.scroll = (type) => {
            let element = angular.element(document.querySelector(".scroll"))
            let scrollLength = parseInt(this.scrollLength)
            let scrollDistance = 0
            let divideScroll = scrollLength / 5
            if(type === "right"){
                // element[0].scrollLeft += parseInt(this.scrollLength)
                   let smoothscroll =  $interval(() => {
                        element[0].scrollLeft += divideScroll
                        scrollDistance += divideScroll
                        if(scrollDistance == scrollLength)
                            $interval.cancel(smoothscroll)
                    },100) 
            }   
            else{
                let smoothscroll =  $interval(() => {
                    element[0].scrollLeft -= divideScroll
                    scrollDistance += divideScroll
                    if(scrollDistance == scrollLength)
                        $interval.cancel(smoothscroll)
                },100) 
            }
               
        }
    }
$onChanges(){
    console.log("changed", parseInt(this.scrollLength), this.data, this.width)
    // if(!angular.isDefined(this.data) || this.data.length === 0)
    // this.data = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']  
}

            
}

export default scrollabledivController