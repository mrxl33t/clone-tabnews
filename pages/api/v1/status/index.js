function status(request,response){
    response.status(200).json({"status" : "Server Online"})
}

export default status