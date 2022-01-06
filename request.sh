curl -X PUT 'http://localhost:3000/users/edit/61d33258e9d85d6108c1eca2' -H "Content-Type: application/json" \
    -d '{
    "email":"123@email.com",
    "password":"123456",
    "passwordConfirmation":"123456",
    "name":"asda"
    }' \