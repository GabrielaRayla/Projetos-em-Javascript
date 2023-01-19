export default function CustomEventFunc(url){
    

    const event =  new CustomEvent("onstatechange", {detail:{url: url}});
    return event;
}