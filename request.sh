curl -X POST 'http://localhost:5001/users/get' -H "Content-Type: application/json" \
    -d '{
        "email":"4@email.com",
        "name":"name",
        "password":"password",
        "passwordConfirmation":"password",
        "userType":"client"
    }' \