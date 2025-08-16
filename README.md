# Password Protected Site

A website with password protection using Netlify Functions.

## Deployment Instructions

1. Create a new GitHub repository and push this project
2. Connect the repository to Netlify
3. Set environment variables in Netlify:
   - `NETLIFY_PASSWORD`: Set this to a bcrypt hash of your password
     - Generate hash using: `node -e "console.log(require('bcryptjs').hashSync('yourpassword', 8))"`
4. Deploy the site on Netlify

## Password Management
- To change password:
  1. Generate new hash
  2. Update NETLIFY_PASSWORD in Netlify environment variables
  3. Redeploy site

## Project Structure
- `index.html`: Main page with login modal
- `protected/`: Contains password-protected content
- `netlify/functions/`: Contains serverless functions
