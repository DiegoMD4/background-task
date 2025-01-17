import jwt from 'jsonwebtoken';


function verifyToken(req, res, next) {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token not provied" });
    }
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      // console.log('Token Payload:', payload);
      req.email = payload.email;
      req.id = payload.id;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Token not valid" });
    }
  }


  export {verifyToken}