const{test, expect} = require('@playwright/test');

var userid;

test("GET Method", async ({request}) => {
   const response = await request.get('https://reqres.in/api/users?page=2')
   console.log(await response.json())
   expect(response.status()).toBe(200)

})

test("POST Method", async ({request}) => {
const response = await request.post('https://reqres.in/api/users',
                                     {
                                        data:{"name":"Raghavendra","job": "Global Tester"},
                                        headers:{"Accept":"application/json"}
                                     });
   console.log(await response.json())
   expect(response.status()).toBe(201)

   var res = await response.json()
   userid=res.id     
})

test("PUT Method", async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/'+userid,
        {
           data:{"name":"Raghavendra","job": "Global Testing Engineer"},
           headers:{"Accept":"application/json"}
        });
console.log(await response.json())
expect(response.status()).toBe(200)
        
})


test("DELETE Method", async ({request}) => {
const response = await request.delete('https://reqres.in/api/users/'+userid)
expect(response.status()).toBe(204)       
})