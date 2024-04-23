fetch("http://localhost:3000/protected",{
    headers:{
        authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ0YWNvIiwiaWF0IjoxNzEzODkyNjk1LCJleHAiOjE3MTM4OTk4OTV9.yqCqm0EXD5dpJ2zRMjgBAS3TZOUSo9nIr2npUO_bpgk`
    }
}).then(res=>res.json()).then(data=>{
    console.log(data)
})