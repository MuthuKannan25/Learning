import {test,expect} from "@playwright/test"

test("post method learning", async ({request}) => {
    
    const data ={
    "username" : "admin",
    "password" : "password123"
}
const authresponse = request.post("https://restful-booker.herokuapp.com/auth",{
    headers:{"Content-Type":"application/json"},data:data})

const statuscode = (await authresponse).status()

console.log(statuscode)

const resposnejson = await (await authresponse).json()
console.log(resposnejson)

expect(resposnejson.token).not.toBeNull()

})

//bad credentials message verification 

test("bad credentials message verfication", async ({request}) => {
    
    const data ={
    "username" : "admin1",
    "password" : "password123"
}
const authresponse = request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:data})

const statuscode = (await authresponse).status()

console.log(statuscode)

const resposnejson = await (await authresponse).json()
console.log(resposnejson)

expect(resposnejson.reason).toContain("Bad credentials")



})

//create booking id 

test("create booking id", async ({request}) => {
    
    const bookingdata ={
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
const authresponse = request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:bookingdata})

const statuscode = (await authresponse).status()

console.log(statuscode)
expect(statuscode).toBe(200)

const resposnejson = await (await authresponse).json()
console.log(resposnejson)

expect (resposnejson.bookingid).not.toBeNull
expect (resposnejson.booking.firstname).toBe(bookingdata.firstname)
expect (resposnejson.booking.lastname).toBe(bookingdata.lastname)
//expect (resposnejson.totalprice).toStrictEqual(bookingdata.totalprice)

const firstname = await resposnejson.booking.firstname
console.log(firstname)

})