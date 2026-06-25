import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

interface BookingLead {
  name: string;
  phone: string;
  apartmentType?: string;
  sourceForm?: string;
  timestamp: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration for Vercel functions
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    // Gracefully handle parsed body vs plain string/Buffer body
    let body = req.body;
    if (body && typeof body === "object" && Buffer.isBuffer(body)) {
      try {
        body = JSON.parse(body.toString("utf-8"));
      } catch (parseError) {
        console.warn("Failed to parse body Buffer as JSON:", parseError);
      }
    } else if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (parseError) {
        console.warn("Failed to parse body string as JSON:", parseError);
      }
    }

    const { name, phone, apartmentType, sourceForm, timestamp } = body || {};

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: "Thiếu dữ liệu Họ tên hoặc Số điện thoại." });
    }

    // SMTP configuration fallback / environment variables
    const smtpUser = process.env.SMTP_USER || "tadinh.bds@gmail.com";
    const rawPass = process.env.SMTP_PASS || "vdit fied trhd wqbq";
    const smtpPass = rawPass.replace(/\s+/g, "");
    
    const defaultRecipients = [
      "tadinh.bds@gmail.com",
      "thanhthuyy281291@gmail.com"
    ];
    const recipient = process.env.RECIPIENT_EMAIL || defaultRecipients.join(", ");

    let authUser = smtpUser;
    if (authUser && !authUser.includes("@")) {
      authUser = `${authUser}@gmail.com`;
    }

    // Connect to Gmail SMTP (SSL Port 465) with safe timeouts
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: authUser,
        pass: smtpPass,
      },
      connectionTimeout: 5000, // 5 seconds connection timeout
      greetingTimeout: 5000,   // 5 seconds greeting timeout
      socketTimeout: 5000,     // 5 seconds socket timeout
    });

    const mailOptions = {
      from: `"Web Lead Seasons Garden" <${authUser}>`,
      to: recipient,
      subject: `[LEAD MỚI DEPLOY] ${name.toUpperCase()} - SĐT: ${phone}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #CB7037; border-radius: 12px; overflow: hidden; background-color: #fafafa; box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
          
          <!-- Email Header -->
          <div style="background-color: #131E1B; padding: 25px 20px; text-align: center; border-bottom: 2px solid #CB7037;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 1px; font-family: 'Georgia', serif;">HÀ NỘI SEASONS GARDEN</h2>
            <p style="color: #D4AF37; margin: 6px 0 0 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">Cơ hội vàng - Đăng ký khách hàng mới</p>
          </div>
          
          <!-- Email Content -->
          <div style="padding: 25px; color: #333333; line-height: 1.6;">
            <p style="font-size: 15px; margin-top: 0; color: #555555;">Xin chào, hệ thống vừa ghi nhận một khách hàng mới đăng ký nhận thông tin bảng giá từ Website của dự án. Chi tiết khách hàng như sau:</p>
            
            <!-- Lead Details Table -->
            <table style="width: 100%; border-collapse: collapse; margin: 25px 0; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
              <tr style="background-color: #f7f9f8;">
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #2A3A35; font-size: 14px; width: 35%;">Họ và tên:</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; color: #111111; font-size: 15px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #2A3A35; font-size: 14px;">Số điện thoại:</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; color: #CB7037; font-size: 17px; font-weight: bold;">
                  <a href="tel:${phone}" style="color: #CB7037; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr style="background-color: #f7f9f8;">
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #2A3A35; font-size: 14px;">Căn hộ quan tâm:</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; color: #111111; font-size: 14px; font-weight: 500;">${apartmentType || "Yêu cầu nhận bảng giá"}</td>
              </tr>
              <tr>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #2A3A35; font-size: 14px;">Nguồn đăng ký:</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; color: #666666; font-size: 13px;">${sourceForm || "Form đăng ký"}</td>
              </tr>
              <tr style="background-color: #f7f9f8;">
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #2A3A35; font-size: 14px;">Thời gian đăng ký:</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid #eeeeee; color: #666666; font-size: 13px;">${timestamp}</td>
              </tr>
            </table>

            <!-- Call to Action button -->
            <div style="text-align: center; margin: 30px 0 10px 0;">
              <a href="tel:${phone}" style="background-color: #CB7037; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 4px 6px rgba(203, 112, 55, 0.2); transition: all 0.2s;">
                📞 GỌI ĐIỆN TƯ VẤN NGAY
              </a>
            </div>
          </div>

          <!-- Email Footer -->
          <div style="background-color: #eff2f1; padding: 18px; text-align: center; font-size: 11px; color: #666666; border-top: 1px solid #e1e4e3; line-height: 1.5;">
            Hộp thư nhận Lead tự động & bảo mật - Hà Nội Seasons Garden Nguyễn Trãi.<br/>
            <em>Yêu cầu phân phối xử lý lead gấp để tránh bị nguội thông tin khách hàng.</em>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Lead sent successfully via Vercel" });
  } catch (error: any) {
    console.error("[VERCEL SMTP ERROR] Error occurred:", error);
    return res.status(500).json({
      success: false,
      error: "Không thể kết nối SMTP Gmail từ Vercel. Lỗi: " + error.message
    });
  }
}

