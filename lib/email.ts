"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
 
type FormData = {
  firstName: string
  lastName: string
  email: string
  contact: string
  company: string
  services: string[]
  message: string
}

export async function sendEmail(formData: FormData) {
  try {
    const servicesText = formData.services.length > 0 ? formData.services.join(", ") : "None selected"

    const { data, error } = await resend.emails.send({
      from: "Luminly Contact Form <onboarding@resend.dev>", 
      to: "luminly6@gmail.com", 
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      text: `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Contact: ${formData.contact}
Company: ${formData.company}
Services Interested In: ${servicesText}

Message:
${formData.message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Contact Form Submission</title>
  <style>
    @media only screen and (max-width: 620px) {
      table.body h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      
      table.body p,
      table.body ul,
      table.body ol,
      table.body td,
      table.body span,
      table.body a {
        font-size: 16px !important;
      }
      
      table.body .wrapper,
      table.body .article {
        padding: 10px !important;
      }
      
      table.body .content {
        padding: 0 !important;
      }
      
      table.body .container {
        padding: 0 !important;
        width: 100% !important;
      }
      
      table.body .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
    }
    
    @media all {
      .ExternalClass {
        width: 100%;
      }
      
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
    }
  </style>
</head>
<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">New contact form submission from ${formData.firstName} ${formData.lastName}</span>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
    <tr>
      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
      <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
        <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

          <!-- START CENTERED WHITE CONTAINER -->
          <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
            <!-- START HEADER -->
            <tr>
              <td class="header" style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #151b42; border-radius: 3px 3px 0 0; color: #ffffff; padding: 20px;" valign="top">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                      <h1 style="color: #ffffff; font-family: sans-serif; font-weight: 300; line-height: 1.4; margin: 0; margin-bottom: 5px; font-size: 24px;">Luminly</h1>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 0; color: rgba(255,255,255,0.7);">Contact-Form Notification</p>
                    </td>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: right;" valign="top" align="right">
                      <p style="font-family: sans-serif; font-size: 12px; font-weight: normal; margin: 0; color: rgba(255,255,255,0.7);">${new Date().toLocaleDateString()}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- END HEADER -->

            <!-- START MAIN CONTENT AREA -->
            <tr>
              <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">You have received a new contact form submission from your website.</p>
                      
                      <h2 style="color: #151b42; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; margin-bottom: 20px; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Contact Information</h2>
                      
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="info-table" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; margin-bottom: 20px;" width="100%">
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0; width: 30%;" width="30%" valign="top"><strong>Name:</strong></td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0;" valign="top">${formData.firstName} ${formData.lastName}</td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0; width: 30%;" width="30%" valign="top"><strong>Email:</strong></td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0;" valign="top"><a href="mailto:${formData.email}" style="text-decoration: none; color: #151b42;">${formData.email}</a></td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0; width: 30%;" width="30%" valign="top"><strong>Contact:</strong></td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0;" valign="top">${formData.contact}</td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0; width: 30%;" width="30%" valign="top"><strong>Company:</strong></td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 5px 0;" valign="top">${formData.company}</td>
                        </tr>
                      </table>
                      
                      <h2 style="color: #151b42; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Services Requested</h2>
                      
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 20px;">${servicesText}</p>
                      
                      <h2 style="color: #151b42; font-family: sans-serif; font-weight: 400; line-height: 1.4; margin: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Message</h2>
                      
                      <div style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; background-color: #f9f9f9; padding: 15px; border-left: 3px solid #ffd700; line-height: 1.6;">
                        ${formData.message.replace(/\n/g, "<br>")}
                      </div>
                      
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; margin-top: 25px;">You can reply directly to this email to respond to ${formData.firstName}.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- END MAIN CONTENT AREA -->
          </table>
          <!-- END CENTERED WHITE CONTAINER -->

          <!-- START FOOTER -->
          <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
              <tr>
                <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                  <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Luminly, Tej Bhawan, Uttar Dhoka Rd, Kathmandu 44600</span>
                  <br>This is an automated message from your website contact form.
                </td>
              </tr>
              <tr>
                <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                  © ${new Date().getFullYear()} Luminly. All rights reserved.
                </td>
              </tr>
            </table>
          </div>
          <!-- END FOOTER -->

        </div>
      </td>
      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}
