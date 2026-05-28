import React, { useState, useEffect } from 'react';
import LandUsePieChart from '../LandPieChart';


const translations = {
  English: {
    addNewFarm: 'Add New Farm',
    farmName: 'Farm Name',
    location: 'Location',
    totalArea: 'Total Area (acres)',
    cultivatedArea: 'Cultivated Area (acres)',
    soilType: 'Soil Type',
    waterSource: 'Water Source',
    selectSoilType: 'Select Soil Type',
    addFarm: 'Add Farm',
    farmDetails: 'Farm Details',
    loading: 'Loading...',
    soilOptions: {
      Sandy: 'Sandy',
      Clay: 'Clay',
      Loamy: 'Loamy',
      Silty: 'Silty'
    }
  },
  Hindi: {
    addNewFarm: 'नया खेत जोड़ें',
    farmName: 'खेत का नाम',
    location: 'स्थान',
    totalArea: 'कुल क्षेत्र (एकड़)',
    cultivatedArea: 'कृषि क्षेत्र (एकड़)',
    soilType: 'मिट्टी का प्रकार',
    waterSource: 'जल स्रोत',
    selectSoilType: 'मिट्टी का प्रकार चुनें',
    addFarm: 'खेत जोड़ें',
    farmDetails: 'खेत का विवरण',
    loading: 'लोड हो रहा है...',
    soilOptions: {
      Sandy: 'रेतीली',
      Clay: 'चिकनी',
      Loamy: 'दोमट',
      Silty: 'गाद वाली'
    }
  },
  Tamil: {
    addNewFarm: 'புதிய பண்ணை சேர்க்க',
    farmName: 'பண்ணையின் பெயர்',
    location: 'இடம்',
    totalArea: 'மொத்த பரப்பளவு (ஏக்கர்)',
    cultivatedArea: 'பயிரிடப்பட்ட பகுதி (ஏக்கர்)',
    soilType: 'மண் வகை',
    waterSource: 'நீர் ஆதாரம்',
    selectSoilType: 'மண் வகையைத் தேர்ந்தெடுக்கவும்',
    addFarm: 'பண்ணையைச் சேர்க்கவும்',
    farmDetails: 'பண்ணை விவரங்கள்',
    loading: 'ஏற்றுகிறது...',
    soilOptions: {
      Sandy: 'மணல் மண்',
      Clay: 'களிமண்',
      Loamy: 'வண்டல் மண்',
      Silty: 'மெல்லிய மண்'
    }
  }
};

export default function FarmDetail() {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('English');
  const [formData, setFormData] = useState({
    farmName: '',
    location: '',
    totalArea: '',
    cultivatedArea: '',
    soilType: '',
    waterSource: ''
  });

  useEffect(() => {
    fetchFarms();
  }, []);

  const fetchFarms = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/farms');
      if (!response.ok) {
        throw new Error('Failed to fetch farms');
      }
      const data = await response.json();
      setFarms(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
 // for delete icon
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this farm?')) return;
  
    try {
      const response = await fetch(`http://localhost:5000/api/farms/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete farm');
      }
  
      // Refresh the list after deletion
      fetchFarms();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete the farm.');
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a temporary userId for testing
      const farmDataWithUser = {
        ...formData,
        userId: "65f1234567890abcdef12345" // Temporary MongoDB ObjectId format
      };

      const response = await fetch('http://localhost:5000/api/farms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(farmDataWithUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create farm');
      }

      // Refresh the farms list
      fetchFarms();
      
      // Reset form
      setFormData({
        farmName: '',
        location: '',
        totalArea: '',
        cultivatedArea: '',
        soilType: '',
        waterSource: ''
      });
    } catch (error) {
      setError(error.message);
      console.error('Error details:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  const t = translations[language] || translations.English;

  return (
    <div className="p-6 bg-[#F5F5DC]">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-800">{t.addNewFarm}</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
            <option value="Tamil">தமிழ்</option>
          </select>
        </div>
        <form onSubmit={handleSubmit} className="bg-green-200 rounded-lg shadow-md p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black mb-2">{t.farmName}</label>
              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-black mb-2">{t.location}</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-black mb-2">{t.totalArea}</label>
              <input
                type="number"
                name="totalArea"
                value={formData.totalArea}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-black mb-2">{t.cultivatedArea}</label>
              <input
                type="number"
                name="cultivatedArea"
                value={formData.cultivatedArea}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-black mb-2">{t.soilType}</label>
              <select
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">{t.selectSoilType}</option>
                {Object.entries(t.soilOptions).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-black mb-2">{t.waterSource}</label>
              <input
                type="text"
                name="waterSource"
                value={formData.waterSource}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {t.addFarm}
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-green-800">{t.farmDetails}</h2>
      {loading ? (
        <div className="text-center p-4">{t.loading}</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farms.map((farm) => (  //edited
            <div key={farm._id} className="bg-white rounded-lg shadow-md p-6 relative">
            <button
              onClick={() => handleDelete(farm._id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-lg"
              title="Delete Farm"
            >
              ❌
            
            </button>
            <h3 className="text-xl font-semibold mb-2">{farm.farmName}</h3>
            <div className="space-y-2">
              <p><span className="font-medium">{t.location}:</span> {farm.location}</p>
              <p><span className="font-medium">{t.totalArea}:</span> {farm.totalArea} acres</p>
              <p><span className="font-medium">{t.cultivatedArea}:</span> {farm.cultivatedArea} acres</p>
              <p><span className="font-medium">{t.soilType}:</span> {t.soilOptions[farm.soilType] || farm.soilType}</p>
              <p><span className="font-medium">{t.waterSource}:</span> {farm.waterSource}</p>
            </div>
          </div>
          
          ))}
        </div>
      )}
      <div className='p-10'>
      <LandUsePieChart/>
      </div>
      
    </div>
  );
}   

