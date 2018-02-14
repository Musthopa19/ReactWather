var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=313056954712a8ab041256789bcdfb1b&units=imperial';
//313056954712a8ab041256789bcdfb1b

module.exports={
    getTemp: function(location){
        var encodeLocation= encodeURIComponent(location);
        var requestURL=`${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

       return axios.get(requestURL).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }

        }, function(res){
            throw new Error(res.data.message);
        });
    }
}