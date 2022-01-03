# **Yandex Taxi Alternative**

## **Services:**

- **Authentication service + role detection :**
  - Register (using user's email username and password). When user creates he can create customer or driver
  - Log in (using username and password)
- **Order service :**
  - For customer :
    - Create order (origin and destination point needed)
    - Delete order (order id needed)
    - Check order status (can be waiting | in progress | finished)
  - For driver :
    - Accept order (order id needed)
    - Decline order (order id needed)
    - Check order status (order id needed)
    - Finish order (current location and order id needed)
  - For admin :
    - Check order status (order id needed)
    - Delete order (order id needed)
    - Finish order (order id needed)
  - For CS :
    - Check order status (order id needed)
- **Notification service :**
  - Send notification to the customer if the order is accepted
  - Send notification to the driver if the order is placed
  - Send notification to the customer and driver if the order is finished

## **List of the endpoints:**

- **User endpoints :**
  - Create (Post)
  - Get (GET)
  - Update (Put)
  - Delete (Delete)
- **Order :**
  - Create (Post)
  - Get (GET)
  - Update (Put)
  - Delete (Delete)
  - Accept (Post)
  - Decline (Post)

## **List of Technologies :**

    - GRPC
    - node
    - Docker
    - ruby
    - redis
    - postgreSQL

## **Service Diagram :**

![image](/ServiceDiagram.png)
