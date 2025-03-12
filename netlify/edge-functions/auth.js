export default async (request, context) => {
  if (request.url.match(/\.(css|js|jpg|png|svg|ico|woff|woff2)$/)) {
    return context.next()
  }

  const authHeader = request.headers.get('Authorization')
  const username = Netlify.env.get('AUTH_USERNAME')
  const password = Netlify.env.get('AUTH_PASSWORD')
  const expectedAuth = 'Basic ' + btoa(`${username}:${password}`)

  if (!authHeader || authHeader !== expectedAuth) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
        'Content-Type': 'text/plain',
      },
    })
  }

  return context.next()
}
