const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const db = router.db

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.post("/users", (req, res) => {
  const userInput = req.body
  const existingUser = db.get('users')
  .filter(user => {
    // Kiểm tra xem userName hoặc email của người dùng có trùng với chuỗi tìm kiếm hay không
    return user.userName === userInput?.userName || user.email === userInput?.userName;
  })
  .value()[0]

  if(existingUser) {

    return res.status(409).json({
      message: "An account is already registered with your email address. Please log in.",
      data: null
    })
  }
  const {password, ...restInfo} = db.get('users').push(userInput)
  res.status(200).json({
    message: "An account is successfully created. Please log in.",
    data: restInfo
  })

})
server.use(router)


server.listen(3000, () => {
  console.log('JSON Server is running')
})