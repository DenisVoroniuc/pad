curl -X POST 'http://localhost:3001/orders/create' -H "Content-Type: application/json" \
    -d '{
        "startingPoint":"startingPoint",
        "destinationPoint":"destinationPoint"
    }' \