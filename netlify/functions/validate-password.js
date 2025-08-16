const bcrypt = require('bcryptjs');

exports.handler = async (event, context) => {
    try {
        const { password } = JSON.parse(event.body);
        const storedPassword = process.env.NETLIFY_PASSWORD;
        
        if (!storedPassword) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Password not configured' })
            };
        }

        const isValid = await bcrypt.compare(password, storedPassword);
        
        if (isValid) {
            // Generate simple token (in production use JWT with expiration)
            const token = Buffer.from(Date.now().toString()).toString('base64');
            return {
                statusCode: 200,
                body: JSON.stringify({ token })
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ error: 'Invalid password' })
            };
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        };
    }
};
