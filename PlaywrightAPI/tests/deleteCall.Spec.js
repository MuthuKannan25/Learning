import{test,expect} from "@playwright/test"
test("Authenticationcall", async ({request}) => {

    const authdata =
        {
    "username" : "admin",
    "password" : "password123"

    }

    const authdataresponse = await request.post("https://restful-booker.herokuapp.com/auth",
        {headers:{"Content-Type":"application/json"},
        data:authdata})

        const authdataresponsejson = await authdataresponse.json()
        const token = authdataresponsejson.token
        console.log(token)
        console.log("****token generation completed")
        console.log("***** create booking*************")

        //bookingjson

        const createBookingData =
        {
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

        const bookingresponse = await request.post("https://restful-booker.herokuapp.com/booking",
            {headers:{"Content-Type":"application/json"},
            data:createBookingData}
        )
        const bookingresponsejson =  await bookingresponse.json()
        const bookingid = await bookingresponsejson.bookingid
        console.log(bookingid)

        //delete call

        const deletebooking = await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingid,
            {
                headers:{
                    "Content-Type":"application/json",
                    "Cookie":"token="+token}
                })
            
    
    console.log(deletebooking.status())
    const statuscode = deletebooking.status()
    expect(statuscode).toBe(201)
    const statustext =deletebooking.statusText()
    console.log(statustext)
    expect(statustext).toBe("Created")

    //Get API call 

    const getbooking = await request.get("https://restful-booker.herokuapp.com/booking/"+bookingid,
        {
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }
    )

    const deletestatuscode = getbooking.status()
    console.log(deletestatuscode)
    expect(deletestatuscode).toBe(404)
    expect(deletestatuscode).toBeTruthy()
    const deletedbookingstatus= getbooking.statusText()
    console.log(deletedbookingstatus)
    
})