import React, { useState, useEffect } from 'react';
import { Banknote, StickyNote, Plus, Trash2 } from 'lucide-react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('JPY');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  // อัตราแลกเปลี่ยนล่าสุด (อัปเดตได้ตามต้องการ)
  const rates = {
    JPY: 1,
    THB: 0.23, // 1 เยน ≈ 0.23 บาท
    USD: 0.0067 // 1 เยน ≈ 0.0067 ดอลลาร์
  };

  const currencySymbols = {
    JPY: '¥',
    THB: '฿',
    USD: '$'
  };

  const currencyNames = {
    JPY: 'เยน (JPY)',
    THB: 'บาท (THB)',
    USD: 'ดอลลาร์ (USD)'
  };

  // โหลดโน๊ตจาก storage
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const result = await window.storage.list('note:');
      if (result && result.keys) {
        const loadedNotes = await Promise.all(
          result.keys.map(async (key) => {
            try {
              const data = await window.storage.get(key);
              return data ? JSON.parse(data.value) : null;
            } catch {
              return null;
            }
          })
        );
        setNotes(loadedNotes.filter(n => n !== null));
      }
    } catch (error) {
      console.log('No saved notes yet');
    }
  };

  const convertCurrency = (value, from) => {
    if (!value || isNaN(value)) return { JPY: 0, THB: 0, USD: 0 };
    
    const numValue = parseFloat(value);
    const inJPY = numValue / rates[from];
    
    return {
      JPY: inJPY,
      THB: inJPY * rates.THB,
      USD: inJPY * rates.USD
    };
  };

  const converted = convertCurrency(amount, selectedCurrency);

  const addNote = async () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now().toString(),
        text: newNote.trim(),
        timestamp: new Date().toISOString()
      };
      
      try {
        await window.storage.set(`note:${note.id}`, JSON.stringify(note));
        setNotes([...notes, note]);
        setNewNote('');
        setShowNoteInput(false);
      } catch (error) {
        console.error('Error saving note:', error);
      }
    }
  };

  const deleteNote = async (id) => {
    try {
      await window.storage.delete(`note:${id}`);
      setNotes(notes.filter(n => n.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('th-TH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Header */}
        <div className="text-center py-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Banknote className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">แปลงสกุลเงิน</h1>
          </div>
          <p className="text-sm text-gray-600">เยน • บาท • ดอลลาร์</p>
        </div>

        {/* Currency Converter Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              เลือกสกุลเงินที่จะใส่
            </label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            >
              {Object.keys(currencyNames).map(code => (
                <option key={code} value={code}>{currencyNames[code]}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              จำนวนเงิน
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
                {currencySymbols[selectedCurrency]}
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-12 pr-4 py-4 text-2xl border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {amount && (
            <div className="space-y-3 pt-4 border-t-2 border-gray-100">
              <h3 className="text-sm font-medium text-gray-700">ผลลัพธ์</h3>
              {Object.keys(currencyNames).map(code => (
                code !== selectedCurrency && (
                  <div key={code} className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4">
                    <span className="text-gray-700 font-medium">{currencyNames[code]}</span>
                    <span className="text-xl font-bold text-indigo-600">
                      {currencySymbols[code]} {formatNumber(converted[code])}
                    </span>
                  </div>
                )
              ))}
            </div>
          )}
        </div>

        {/* Notes Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StickyNote className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-bold text-gray-800">โน๊ตของฉัน</h2>
            </div>
            <button
              onClick={() => setShowNoteInput(!showNoteInput)}
              className="p-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {showNoteInput && (
            <div className="space-y-2">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addNote()}
                placeholder="เช่น: 100 เยน = 20 บาท"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                onClick={addNote}
                className="w-full py-3 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-colors"
              >
                บันทึกโน๊ต
              </button>
            </div>
          )}

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {notes.length === 0 ? (
              <p className="text-center text-gray-400 py-8">ยังไม่มีโน๊ต</p>
            ) : (
              notes.map(note => (
                <div
                  key={note.id}
                  className="flex items-start justify-between bg-amber-50 rounded-lg p-3 group"
                >
                  <p className="text-gray-700 flex-1">{note.text}</p>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="ml-2 p-1 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="bg-white/50 backdrop-blur rounded-xl p-4 text-center text-sm text-gray-600">
          <p>อัตราแลกเปลี่ยนโดยประมาณ</p>
          <p className="text-xs mt-1">1 เยน ≈ 0.23 บาท ≈ 0.0067 ดอลลาร์</p>
        </div>
      </div>
    </div>
  );
}