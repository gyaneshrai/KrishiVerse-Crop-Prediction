


import React, { useState } from "react";
import axios from "axios";

const KrishiAIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Krishi AI",
      text: "Hi, I'm here to help you with farming tips! 🌾 Select one of the options below or type your question.",
    },
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en");
  const [chatOpen, setChatOpen] = useState(false);

  const quickOptions = [
    "Today's Weather",
    "Best Organic Fertilizer",
    "Best Crops This Season",
    "Pest Control Tips",
    "Improve Soil Health",
    "More Options",
  ];

  const botAnswers = {
    en: {
      "Best Organic Fertilizer":
        "Vermicompost, cow manure, and bone meal are great organic fertilizers. 🌿",
      "Best Crops This Season":
        "You can grow rice, maize, millets, tomatoes, and cucumbers this season. 🥒🍅",
      "Pest Control Tips":
        "Use neem oil spray, attract ladybugs, and rotate crops for pest control. 🐞🌱",
      "Improve Soil Health":
        "Add organic compost, practice no-till farming, and rotate crops to improve soil. 🌾",
      "More Options":
        "You can ask about irrigation, organic methods, seasonal crops, and soil testing! 🚜",
    },
    hi: {
      "Best Organic Fertilizer":
        "वर्मी कम्पोस्ट, गोबर की खाद और बोन मील बेहतरीन जैविक उर्वरक हैं। 🌿",
      "Best Crops This Season":
        "आप इस मौसम में चावल, मक्का, ज्वार, टमाटर और खीरा उगा सकते हैं। 🥒🍅",
      "Pest Control Tips":
        "नीम के तेल का छिड़काव करें, लाभकारी कीटों को आकर्षित करें और फसल चक्रीकरण करें। 🐞🌱",
      "Improve Soil Health":
        "जैविक खाद डालें, बिना जुताई खेती करें और फसल चक्रीकरण से मिट्टी की गुणवत्ता बढ़ाएं। 🌾",
      "More Options":
        "आप सिंचाई, जैविक खेती के तरीके, मौसमी फसलों और मिट्टी परीक्षण के बारे में पूछ सकते हैं! 🚜",
    },
  };

  const handleSendMessage = async (text) => {
    setMessages((prev) => [...prev, { sender: "You", text }]);

    if (text === "Today's Weather" || text === "आज का मौसम") {
      try {
        const city = "Ghaziabad"; // You can replace this with dynamic city input if needed
        const API_KEY = "05a796c5e1ef913ac4c8a72db58c8a01";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const weather = response.data;

        const weatherMsg =
          language === "en"
            ? `📍 ${weather.name}\n🌡 Temp: ${weather.main.temp}°C\n🌥 Condition: ${weather.weather[0].description}\n💧 Humidity: ${weather.main.humidity}%\n🌬 Wind: ${weather.wind.speed} m/s`
            : `📍 ${weather.name}\n🌡 तापमान: ${weather.main.temp}°C\n🌥 स्थिति: ${weather.weather[0].description}\n💧 आर्द्रता: ${weather.main.humidity}%\n🌬 हवा: ${weather.wind.speed} m/s`;

        setMessages((prev) => [...prev, { sender: "Krishi AI", text: weatherMsg }]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "Krishi AI",
            text:
              language === "en"
                ? "⚠️ Unable to fetch weather data."
                : "⚠️ मौसम की जानकारी लाने में समस्या हो रही है।",
          },
        ]);
      }
    } else {
      const botReply =
        botAnswers[language][text] ||
        (language === "en"
          ? "Sorry, I don't have an answer for that yet. 🌱"
          : "माफ़ कीजिए, मेरे पास अभी इसका उत्तर नहीं है। 🌱");

      setMessages((prev) => [...prev, { sender: "Krishi AI", text: botReply }]);
    }
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    handleSendMessage(input);
    setInput("");
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setMessages([
      {
        sender: "Krishi AI",
        text:
          lang === "en"
            ? "Hi, I'm here to help you with farming tips! 🌾 Select one of the options below or type your question."
            : "नमस्ते, मैं आपकी खेती से जुड़ी मदद के लिए यहाँ हूँ! 🌾 नीचे विकल्प चुनें या अपना प्रश्न टाइप करें।",
      },
    ]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 relative">
      {!chatOpen ? (
        <button
          onClick={() => setChatOpen(true)}
          className="bg-green-500 text-white px-8 py-4 text-xl rounded-full shadow-lg hover:bg-green-600 transition"
        >
          Start Krishi AI Chat 🌾
        </button>
      ) : (
        <div className="absolute inset-0 bg-white flex flex-col">
          {/* Header */}
          <div className="bg-green-500 text-white flex justify-between items-center p-4 text-xl font-semibold">
            <div>Krishi AI 🌱</div>
            <div className="flex gap-2 items-center">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="text-black text-sm rounded-md p-1"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white text-lg font-bold px-2 py-1 hover:bg-green-600 rounded"
              >
                ✖
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-xs whitespace-pre-line ${
                    msg.sender === "You"
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <strong>{msg.sender}:</strong> <br /> {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Options */}
            <div className="grid grid-cols-2 gap-2 pt-4">
              {quickOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(option)}
                  className="bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-left"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 p-2 outline-none"
              placeholder={
                language === "en"
                  ? "Type your query here..."
                  : "अपना प्रश्न यहाँ लिखें..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
            >
              {language === "en" ? "Send" : "भेजें"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KrishiAIChatbot;
