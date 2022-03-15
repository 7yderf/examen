
 const  useGetpersonajes = (API, page) => {
    let paginacion = false

    if (page > 0){
         paginacion = API +"?page="+page
         console.log("paginacion", paginacion)
    }

    return new Promise ((resolve, reject) => {

        fetch(paginacion? paginacion : API)
        .then(res => res.json())
        .then(res => {
            resolve(res.results)
        })

    })

}
 export {useGetpersonajes}

