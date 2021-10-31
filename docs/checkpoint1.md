# **Yandex Taxi Alternative**
## **Services:**
- **Authentication service + role detection :**
    - Register  
    - Log in  
    - Divization by roles(driver, customer, admin, CS) 
- **Order service :** 
    - For customer :
        - Create order 
        - Delete order 
        - Modify order 
        - Check order status
    - For driver :
        - Accept order 
        - Decline order
        - Check order status 
        - Finish order 
    - For admin :
        - Check order status 
        - Delete order 
        - Finish order
        - Modify order 
    - For CS :
        - Check order status 
- **Notification service :**
    - Send notifications for customers and drivers
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
    
    ![image](https://user-images.githubusercontent.com/56674975/139598142-e8df007d-0567-432c-a68b-34a554684414.png)

    
