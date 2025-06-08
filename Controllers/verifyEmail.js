import axios from "axios";

const verifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await axios.get("https://mailcheck.p.rapidapi.com/email/validate", {
      params: { email },
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY, // 👈 apni API key
        'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
      }
    });



    const data = response.data;
    console.log("MailCheck Data: ", data);

    // Validate email based on response
    if (data.status === "valid" && !data.disposable) {
      return res.status(200).json({
        valid: true,
        email: data.address,
        info: data
      });
    } else {
      return res.status(200).json({
        valid: false,
        email: data.address,
        info: data,
        message: "Email is not valid or disposable."
      });
    }

  } catch (error) {
    console.error("ERROR verifying email:", error.message);
    return res.status(500).json({ error: "Failed to verify email" });
  }
};

export { verifyEmail };
