import {test,expect} from "@playwright/test"

test("GetAPICALL",async ({request}) => {
    const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1")
   // console.log(resp)
    const responsebody = await resp.body()
   // console.log(responsebody) // print hexa decimal value 
    const respbody = await resp.json()
    console.log(respbody) // print the values in json format
    const headers = resp.headers()
   // console.log(headers) // print headers
    const headersarray = resp.headersArray()
   // console.log(headersarray) // print headers in array format 
    const status = resp.status()
    expect(status).toBe(200)
    expect(resp.ok()).toBeTruthy()
    expect(respbody).toHaveProperty("id",1)
    expect (respbody).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    //expect (respbody.body).toContain(1)
})