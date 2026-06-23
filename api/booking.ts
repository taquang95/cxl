import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendLeadEmail } from "../src/lib/sendEmail";

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
    const { name, phone, apartmentType, sourceForm, timestamp } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: "Thiếu dữ liệu Họ tên hoặc Số điện thoại." });
    }

    await sendLeadEmail({ name, phone, apartmentType, sourceForm, timestamp });

    return res.status(200).json({ success: true, message: "Lead sent successfully via Vercel" });
  } catch (error: any) {
    console.error("[VERCEL SMTP ERROR] Error occurred:", error);
    return res.status(500).json({
      success: false,
      error: "Không thể kết nối SMTP Gmail từ Vercel. Lỗi: " + error.message
    });
  }
}
