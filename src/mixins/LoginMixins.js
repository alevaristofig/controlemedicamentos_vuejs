import axios from "axios";

export default {
    data: () => ({
        url: 'http://localhost:8083/v1'
    }),
    methods: {
        buscarUrls() {
            axios.get(this.url)
                .then((response) => {                    
                    console.log('resp',response.data._links)
                    sessionStorage.setItem('linksUrls',JSON.stringify(response.data._links));
                    console.log('urls',sessionStorage.getItem('linksUrls'))
                })
                .catch((error) =>{
                    console.log(error)               
            });
        }
    }
}