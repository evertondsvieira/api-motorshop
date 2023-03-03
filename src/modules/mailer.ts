import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "motorsshop32@gmail.com",
    pass: "qfkkjzcjiolcydhk",
  },
});
