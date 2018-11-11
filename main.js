
window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
// window.$ = window.jQuery

window.jQuery.ajax = function({url,method,body,headers}){
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest()
        request.open(method,url)
        for( let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    // let string = request.responseText
                    // //把符合 JSON 语法的字符串转换成 JS 对应的值
                    // let object = window.JSON.parse(string)
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }
        request.send(body)
    })
}

$('.myButton').on('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method:'get',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'jin':'27',
            'hello':'boy',
        }
    }).then(
            (text)=>{
              console.log(text)
              $('.text').text(text)
            },
            (request)=>{console.log('error')}
        )
})

