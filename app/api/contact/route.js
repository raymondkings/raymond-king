// app/api/contact/route.js
import nodemailer from 'nodemailer';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function POST(request) {
    try {
        const { name, companyName, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'raymondkingz18@gmail.com',
                pass: 'tknq fjfs crad edgp',
            },
        });

        // Email options
        const mailOptions = {
            from: `${email}`,
            to: 'raymondkingz18@gmail.com',
            subject: `New Contact Form Submission from ${name} over personal website`,
            text: `
      Name: ${name}
      Company: ${companyName}
      Email: ${email}
      Message: ${message}
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
