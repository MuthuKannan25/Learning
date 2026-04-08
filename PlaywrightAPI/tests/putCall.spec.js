import {test, expect} from "@playwright/test"

test("PUT CALL API TESTING", async ({request}) => {
const AuthData ={
    "username" : "admin",
    "password" : "password123"
}
    const authresponse = await request.post("https://restful-booker.herokuapp.com/auth",{headers:
     {"Content-Type":"application/json"},data:AuthData})

const authresponsejson = await authresponse.json()
console.log(authresponsejson)

const token = await authresponsejson.token
console.log(token)

console.log("********************")
const bookingdata = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"

}
const booking = await request.post("https://restful-booker.herokuapp.com/booking",
    {headers:{"Content-Type":"application/json","Accept":"application/json"},data:bookingdata})

    const bookingjson = await booking.json()
    console.log(bookingjson)

    const bookingid = await bookingjson.bookingid
    console.log(bookingid)

    console.log("********PUT CALL**********")

    const updatebookingdata =
    {
    "firstname" : "Muthu",
    "lastname" : "Kannan",
    "totalprice" : 130,
    "depositpaid" : false,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"

    }

    const updatebooking = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
        {headers:{"Content-Type":"application/json",
            "Accept":"application/json",
            "Cookie":`token=${token}`},
            data:updatebookingdata})

        console.log(updatebooking)
        const updatebookingjson = await updatebooking.json()
        console.log(updatebookingjson)

        //validations
        

})