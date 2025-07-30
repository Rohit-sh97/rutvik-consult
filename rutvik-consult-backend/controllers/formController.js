import nodemailer from "nodemailer";

export const handleFormSubmit = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      age,
      city,
      sessionType,
      problem,
      goals,
      contactTime,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const onlineLink = "https://meet.google.com/xyz-abc-pqr"; // Replace with your link

// Mail to Rutvik
const mailToFriend = {
  from: process.env.EMAIL_USER,
  to: process.env.FRIEND_EMAIL,
  subject: "New Session Request - Rutvik Nutrition",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4fdf6; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <div style="display:inline-block;">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#22c55e" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      </div>
      <h2 style="margin: 10px 0; font-size: 26px; color: #22c55e;">
        New Session Request - <span style="color:#16a34a;">Rutvik Nutrition</span>
      </h2>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
      <h3 style="color:#22c55e; margin-bottom: 10px;">Client Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Preferred Session:</strong> ${sessionType}</p>
      <p><strong>Goals:</strong> ${goals}</p>
      <p><strong>Preferred Contact Time:</strong> ${contactTime}</p>
      <p><strong>Problem Description:</strong><br/>${problem}</p>

      ${
        sessionType === "online"
          ? `<div style="margin-top:20px; padding:15px; border:2px solid #22c55e; text-align:center;">
               <h3 style="color:#22c55e; margin-bottom:10px;">Google Meet Link</h3>
               <a href="${onlineLink}" style="font-size:18px; color:#22c55e; text-decoration:none; font-weight:bold;">
                 ${onlineLink}
               </a>
             </div>`
          : ""
      }
    </div>
  </div>
  `,
};

// Mail to Customer
const mailToCustomer = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Your Session Booking - Rutvik Nutrition",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4fdf6; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <div style="display:inline-block;">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#22c55e" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      </div>
      <h2 style="margin: 10px 0; font-size: 28px; color: #22c55e;">
        Thank you for booking with <span style="color:#16a34a;">Rutvik Nutrition</span>
      </h2>
    </div>

    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); text-align:center;">
      <h3 style="color:#22c55e; margin-bottom: 15px;">Hi ${name},</h3>
      <p style="font-size:16px; color:#444; margin-bottom: 20px;">
        We have received your booking request. We will contact you shortly to discuss your health goals.
      </p>

      ${
        sessionType === "online"
          ? `<div style="margin-top:10px; padding:20px; border:2px solid #22c55e; border-radius:8px;">
               <h3 style="color:#22c55e; margin-bottom:10px;">Join Your Online Session</h3>
               <a href="${onlineLink}" style="display:inline-block; background:#22c55e; color:white; padding:12px 20px; font-size:18px; font-weight:bold; text-decoration:none; border-radius:5px;">
                 Join Google Meet
               </a>
             </div>`
          : `<p style="font-size:16px; color:#444;">
               You have selected <strong>Offline / In-person</strong> mode. Rutvik will reach out with location details soon.
             </p>`
      }

      <p style="margin-top: 20px; font-size: 14px; color: #666;">
        Stay committed to your journey of health and transformation!
      </p>
    </div>
  </div>
  `,
};

    await transporter.sendMail(mailToFriend);
    await transporter.sendMail(mailToCustomer);

    res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, message: "Form submission failed" });
  }
};
