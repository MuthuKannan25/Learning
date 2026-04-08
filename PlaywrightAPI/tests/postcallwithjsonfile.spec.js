import {test} from "@playwright/test"
import fs from "fs"
import { json } from "stream/consumers"


test("createbookingwithjsonfilelearning",async ({request}) => {
    
    //readfile

    const file = fs.readFileSync("./testdata/booking.json")
    const bookingfile = JSON.parse(file)

    const response = await request.post("https://restful-booker.herokuapp.com/booking",
        {headers:{"Content-Type":"application/json"},
        data:bookingfile
    })
    
    const boookingres =await response.json()
    console.log(boookingres)
})