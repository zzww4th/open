// 注意：实际部署时请更换为您自己的密码
const CORRECT_PASSWORD = "ZDGR9527";

exports.handler = async (event, context) => {
  // 只允许POST请求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }

  try {
    const { password } = JSON.parse(event.body);
    
    // 验证密码
    const success = password === CORRECT_PASSWORD;
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};