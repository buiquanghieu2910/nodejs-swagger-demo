/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of users
 *
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       description: User data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *               company_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: User created
 */

var express = require("express");
var router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "List of users" });
});

router.post("/users", (req, res) => {
  const { full_name, company_name } = req.body;
  res.json({ message: "User created", data: { full_name, company_name } });
});

module.exports = router;
