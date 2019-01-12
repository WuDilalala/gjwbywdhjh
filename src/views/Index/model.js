import axios from "axios";
function getFilm() {
    return axios({
        url: "http://m.gjw.com/BtCApi/Home/GetHomePageImg"
    }).then(res => {
       // console.log(res.data);
        return res.data;
    })
}

function getTime() {
    return axios({
        url:"http://m.gjw.com/BtCApi/Home/SeckillList?userid=0"
    }).then(res => {
        console.log(res.data)
        var a = res.data;
        var b = res.data.data[0].AppSeckill.AppSeckillProList;
        console.log(a,b)
        return { a, b };
        // console.log(a)
        // return { a };
        //.datalist[length]
    })
}
// function getSwipe() {
//     return axios({
//         url:"http://m.gjw.com/BtCApi/Home/SeckillList?userid=0"
//     }).then(res => {
//         console.log(res.data.data[0].AppSeckill.AppSeckillProList)
//         return res.data.data[0].AppSeckill.AppSeckillProList;
//     })
// }

export {getFilm,getTime};