# Backend documentation


## To-do
- [ ]  Create a Token Refresh Endpoint
	Add a new /refresh endpoint that:
	Verifies the refresh token from the cookie
	Checks if the refresh token is valid and not revoked
	Generates a new access token
	Optionally rotates the refresh token for enhanced security

- [ ] Update Authentication Middleware
	Modify your `authenticate` middleware to:

	Look for the access token in the Authorization header
	Verify the access token, not the refresh token
	Return 401 errors when the access token is missing or invalid

- [ ] Client-Side Storage
	The client would:

	Store the access token in memory (not in localStorage for security)
	Use the access token for all API requests in the Authorization header
	Call the refresh endpoint when the access token expires