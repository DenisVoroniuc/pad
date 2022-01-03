curl -X POST 'http://localhost:3000/users/create' -H "Content-Type: application/json" \
    -d '{
    "email":"12@email.com",
    "password":"123456",
    "passwordConfirmation":"123456",
    "name":"asda"
    }' \
    