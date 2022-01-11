curl -X POST 'http://localhost:5000/users/create' -H "Content-Type: application/json" \
    -d '{
        "email":"4@email.com",
        "name":"name",
        "password":"password",
        "passwordConfirmation":"password",
        "userType":"client"
    }' \