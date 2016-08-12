document.getElementById('signin').addEventListener('click', function() {
    var formFields = {
        name: document.getElementById('username').value,
        password: document.getElementById('password').value
    }

    fetchApi('POST', '/login/', formFields, function(response, statusCode) {
        console.log(response)
//something like response.user.token, it might not be exactly that
        if (statusCode >= 200 && statusCode < 300) {
            redirect('/index.html')
        }
    })
})
