import axios from "axios";

export default {
    data: () => ({
        url: 'http://localhost:8083/v1'
    }),
    methods: {
        buscarUrls() {
            axios.get(this.url)
                .then((response) => {                                        
                    sessionStorage.setItem('linksUrls',JSON.stringify(response.data._links));                    
                })
                .catch((error) =>{
                    console.log(error)               
            });
        }
    }
}