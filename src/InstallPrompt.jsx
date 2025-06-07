import { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true); // پاپ‌آپ را نمایش بده
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setShowPrompt(false);
      });
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div style={popupStyle}>
      <p style={{ margin: 0 }}>Install this app?</p>
      <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
        <button onClick={handleInstallClick} style={buttonStyle}>Yes</button>
        <button onClick={handleClose} style={buttonStyle}>No</button>
      </div>
    </div>
  );
};

export default InstallPrompt;

// استایل ساده و شیک پاپ‌آپ
const popupStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "15px",
  borderRadius: "8px",
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  maxWidth: "250px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};
