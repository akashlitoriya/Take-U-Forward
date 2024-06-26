const db = require("../configs/database");

exports.insertCodeSubmission = async (req, res) => {
  try {
    const { username, programming_language, stdin, code, token } = req.body;
    console.log("INSERT CODE SUBMISSION");
    if (!username || !programming_language || !stdin || !code || !token) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
    const connection = await db.getConnection();
    const results = await connection.query(
      `INSERT INTO codeSubmission (username, programming_language, stdin, code, token) VALUES (?,?,?,?,?)`,
      [username, programming_language, stdin, code, token]
    );
    connection.release();
    return res.status(200).json({
      success: true,
      message: "Code Submission successful",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCodeSubmission = async (req, res) => {
  try {
    const connection = await db.getConnection();
    console.log("GET CODE SUBMISSION");
    const [results] = await connection.query(`SELECT * FROM codeSubmission`);
    connection.release();
    return res.status(200).json({
      success: true,
      message: "Code Submissions retrieved successfully",
      data: results,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Code Submissions retrieval failed",
      error: err,
    });
  }
};
