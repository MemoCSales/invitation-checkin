# Explanations

## Controller vs. Service
- **Controller:** Handler "how" the request is processed (HTTP protocol concerns)
- **Service:** Handles "what" happens during authentication (business logic)

In this project the `authentication-service.js` does the following:
- Contain methods for credential validation
- Handle database queries for user lookup
- Perform password comparison with bcrypt
- Be completely unaware of HTTP context (no request/reply objects)

The `login-controller` does the following:
- Extract data from the request
- Validate the request format and required fields
- Call the authentication service methods
- Transform service responses into appropriate HTTP responses
- Handle HTTP-specific errors

## Implementing Access Token and Refresh Token Authentication
- **Access tokens:** Short-lived (minutes to hours), used for API authorization. Stored in memory only
- **Refresh tokens:** Long-lived (days to weeks), used only to obtain new access tokens. Stored in an HTTP-only cookie that JavaScript cannot access.