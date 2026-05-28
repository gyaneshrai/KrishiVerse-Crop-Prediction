import React, { useState } from 'react';

const translations = {
  English: {
    farmName: 'Farm Name',
    location: 'Location',
    size: 'Farm Size (in acres)',
    soilType: 'Soil Type',
    climateZone: 'Climate Zone',
    language: 'Preferred Language',
    save: 'Save Details',
    soilOptions: {
      Sandy: 'Sandy',
      Clay: 'Clay',
      Loamy: 'Loamy',
      Silty: 'Silty'
    }
  },
  Hindi: {
    farmName: 'फार्म का नाम',
    location: 'स्थान',
    size: 'खेत का आकार (एकड़ में)',
    soilType: 'मिट्टी का प्रकार',
    climateZone: 'जलवायु क्षेत्र',
    language: 'पसंदीदा भाषा',
    save: 'विवरण सहेजें',
    soilOptions: {
      Sandy: 'रेतीली',
      Clay: 'चिकनी',
      Loamy: 'दोमट',
      Silty: 'गाद वाली'
    }
  },
  Tamil: {
    farmName: 'பண்ணையின் பெயர்',
    location: 'இடம்',
    size: 'பண்ணை அளவு (ஏக்கர்)',
    soilType: 'மண் வகை',
    climateZone: 'காலநிலை மண்டலம்',
    language: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    save: 'விவரங்களை சேமிக்கவும்',
    soilOptions: {
      Sandy: 'மணல் மண்',
      Clay: 'களிமண்',
      Loamy: 'மண்புழி மண்',
      Silty: 'கரை மண்'
    }
  }
  // Add more languages as needed
};

export default function FarmDetailsForm() {
  const [formData, setFormData] = useState({
    farmName: '',
    location: '',
    size: '',
    soilType: '',
    climateZone: '',
    language: 'English'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Farm Details Submitted:', formData);
  };

  const t = translations[formData.language] || translations.English;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{t.farmName} Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">{t.farmName}</label>
          <input
            type="text"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">{t.location}</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">{t.size}</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">{t.soilType}</label>
          <select
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="Sandy">{t.soilOptions.Sandy}</option>
            <option value="Clay">{t.soilOptions.Clay}</option>
            <option value="Loamy">{t.soilOptions.Loamy}</option>
            <option value="Silty">{t.soilOptions.Silty}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">{t.climateZone}</label>
          <input
            type="text"
            name="climateZone"
            value={formData.climateZone}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">{t.language}</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition-all"
        >
          {t.save}
        </button>
      </form>
    </div>
  );
}
