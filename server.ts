import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { sendLeadEmail } from "./src/lib/sendEmail";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route for Booking Lead SMTP Submission
  app.post("/api/booking", async (req, res) => {
    try {
      const { name, phone, apartmentType, sourceForm, timestamp } = req.body;

      await sendLeadEmail({ name, phone, apartmentType, sourceForm, timestamp });
      
      console.log(`[SMTP INFO] Email lead successfully sent for customer ${name} (${phone})`);
      return res.json({ success: true, message: "Email Sent Successfully" });
    } catch (err: any) {
      console.error("[SMTP ERROR] Failed to send email lead via Gmail SMTP:", err);
      return res.status(500).json({ 
        success: false, 
        error: "Lỗi kết nối SMTP Gmail. Chi tiết lỗi từ server: " + err.message 
      });
    }
  });

  // Serve static assets or use Vite in development mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER INFO] Full-stack Express server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
