// delay function
let sleep = function(time) 
{
    return new Promise(function(r) {
      setTimeout(r, time)
    })
}

// acknowledge that message has been sent
async function sent()
{
    let texts = ['entry.1777739869', 'entry.252200460', 'entry.1506996381']

    // clear form
    for(let text of texts)
    {
        document.forms["form"][text].value = ''
    }
    
    // show sent message
    let element = document.getElementById('sent-banner')
    element.classList.add('show-sent')

    // hide message again after a delay
    await sleep(3000)
    element.classList.remove('show-sent')
}

// ensure all input fields contain content
function validateForm() 
{
    let ids = ["email", "name", 'message']
    let passed = true

    for(let id of ids)
    {
        let input = document.getElementById(id)
        let helperText = document.getElementById(`${id}Text`)
        if(input.value === '')
        {
            let fieldName = id.charAt(0).toUpperCase() + id.slice(1)
            helperText.innerHTML = `*${fieldName} cannot be empty`
            passed = false
        }
        else 
        {
            helperText.innerHTML = ''
        }
    }
    return passed
}