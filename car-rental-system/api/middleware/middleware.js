export const protect = async (req, res, next) => {
    const token = req.headers.authorization ? (req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.split(' ')[1] : null) : null
    if (!token) return makeResponse({ res, status: 403, message: 'Unauthorized' })
    const decodedUser = decodeJwtToken(token).data
    const user = decodedUser ? await getOneUser({ _id: decodedUser._id }, false) : null
    if (!user) return makeResponse({ res, status: 403, message: 'Unauthorized' })
    req.user = user
    next()
  }