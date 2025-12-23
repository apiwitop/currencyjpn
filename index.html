<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แปลงสกุลเงิน - เยน บาท ดอลลาร์</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Prompt', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="p-4">
        <div class="max-w-md mx-auto space-y-4">
            <!-- Header -->
            <div class="text-center py-6">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <h1 class="text-2xl font-bold text-gray-800">แปลงสกุลเงิน</h1>
                </div>
                <p class="text-sm text-gray-600">เยน • บาท • ดอลลาร์</p>
            </div>

            <!-- Currency Converter Card -->
            <div class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                <div class="space-y-3">
                    <label class="block text-sm font-medium text-gray-700">
                        เลือกสกุลเงินที่จะใส่
                    </label>
                    <select id="currencySelect" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg">
                        <option value="JPY">เยน (JPY)</option>
                        <option value="THB">บาท (THB)</option>
                        <option value="USD">ดอลลาร์ (USD)</option>
                    </select>
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">
                        จำนวนเงิน
                    </label>
                    <div class="relative">
                        <span id="currencySymbol" class="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
                            ¥
                        </span>
                        <input type="number" id="amountInput" placeholder="0.00" class="w-full pl-12 pr-4 py-4 text-2xl border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    </div>
                </div>

                <div id="resultsContainer" class="space-y-3 pt-4 border-t-2 border-gray-100 hidden">
                    <h3 class="text-sm font-medium text-gray-700">ผลลัพธ์</h3>
                    <div id="results"></div>
                </div>
            </div>

            <!-- Exchange Rate Settings -->
            <div class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                        <h2 class="text-lg font-bold text-gray-800">ตั้งค่าอัตราแลกเปลี่ยน</h2>
                    </div>
                    <button id="toggleRateBtn" class="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </button>
                </div>

                <div id="currentRateDisplay" class="text-center text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    <p class="font-medium mb-1">อัตราแลกเปลี่ยนปัจจุบัน</p>
                    <p class="text-xs" id="rateDisplayText">1 เยน = 0.23 บาท | 1 เยน = 0.0067 ดอลลาร์</p>
                </div>

                <div id="rateInputContainer" class="space-y-3 hidden">
                    <p class="text-sm text-gray-600">ใส่อัตราแลกเปลี่ยนที่ต้องการ (เทียบกับ 1 เยน)</p>
                    
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">1 เยน (JPY) =</label>
                        <div class="flex items-center gap-2">
                            <input type="number" id="rateJPY" value="1" disabled class="flex-1 px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500" step="0.0001">
                            <span class="text-gray-600 font-medium">JPY</span>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">1 เยน (JPY) =</label>
                        <div class="flex items-center gap-2">
                            <input type="number" id="rateTHB" value="0.23" class="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" step="0.0001">
                            <span class="text-gray-600 font-medium">THB</span>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">1 เยน (JPY) =</label>
                        <div class="flex items-center gap-2">
                            <input type="number" id="rateUSD" value="0.0067" class="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" step="0.0001">
                            <span class="text-gray-600 font-medium">USD</span>
                        </div>
                    </div>

                    <button id="saveRateBtn" class="w-full py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors">
                        บันทึกอัตราแลกเปลี่ยน
                    </button>
                </div>
            </div>

            <!-- Notes Section -->
            <div class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                        </svg>
                        <h2 class="text-lg font-bold text-gray-800">โน๊ตของฉัน</h2>
                    </div>
                    <button id="toggleNoteBtn" class="p-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </button>
                </div>

                <div id="noteInputContainer" class="space-y-2 hidden">
                    <input type="text" id="noteInput" placeholder="เช่น: 100 เยน = 20 บาท" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <button id="addNoteBtn" class="w-full py-3 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-colors">
                        บันทึกโน๊ต
                    </button>
                </div>

                <div id="notesList" class="space-y-2 max-h-64 overflow-y-auto">
                    <p class="text-center text-gray-400 py-8">ยังไม่มีโน๊ต</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        var rates = {
            JPY: 1,
            THB: 0.23,
            USD: 0.0067
        };

        var currencySymbols = {
            JPY: '¥',
            THB: '฿',
            USD: '$'
        };

        var currencyNames = {
            JPY: 'เยน (JPY)',
            THB: 'บาท (THB)',
            USD: 'ดอลลาร์ (USD)'
        };

        var notes = [];

        var currencySelect = document.getElementById('currencySelect');
        var amountInput = document.getElementById('amountInput');
        var currencySymbol = document.getElementById('currencySymbol');
        var resultsContainer = document.getElementById('resultsContainer');
        var results = document.getElementById('results');
        var toggleNoteBtn = document.getElementById('toggleNoteBtn');
        var noteInputContainer = document.getElementById('noteInputContainer');
        var noteInput = document.getElementById('noteInput');
        var addNoteBtn = document.getElementById('addNoteBtn');
        var notesList = document.getElementById('notesList');
        var toggleRateBtn = document.getElementById('toggleRateBtn');
        var rateInputContainer = document.getElementById('rateInputContainer');
        var rateJPY = document.getElementById('rateJPY');
        var rateTHB = document.getElementById('rateTHB');
        var rateUSD = document.getElementById('rateUSD');
        var saveRateBtn = document.getElementById('saveRateBtn');
        var rateDisplayText = document.getElementById('rateDisplayText');

        function loadNotes() {
            var saved = localStorage.getItem('currencyNotes');
            if (saved) {
                notes = JSON.parse(saved);
                renderNotes();
            }
        }

        function loadRates() {
            var saved = localStorage.getItem('currencyRates');
            if (saved) {
                rates = JSON.parse(saved);
                updateRateInputs();
                updateRateDisplay();
            }
        }

        function saveNotes() {
            localStorage.setItem('currencyNotes', JSON.stringify(notes));
        }

        function saveRates() {
            localStorage.setItem('currencyRates', JSON.stringify(rates));
        }

        function updateRateInputs() {
            rateTHB.value = rates.THB;
            rateUSD.value = rates.USD;
        }

        function updateRateDisplay() {
            rateDisplayText.textContent = '1 เยน = ' + rates.THB + ' บาท | 1 เยน = ' + rates.USD + ' ดอลลาร์';
        }

        function formatNumber(num) {
            return new Intl.NumberFormat('th-TH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(num);
        }

        function convertCurrency(value, from) {
            if (!value || isNaN(value)) return null;
            
            var numValue = parseFloat(value);
            var inJPY = numValue / rates[from];
            
            return {
                JPY: inJPY,
                THB: inJPY * rates.THB,
                USD: inJPY * rates.USD
            };
        }

        function updateResults() {
            var amount = amountInput.value;
            var selectedCurrency = currencySelect.value;

            if (!amount) {
                resultsContainer.classList.add('hidden');
                return;
            }

            var converted = convertCurrency(amount, selectedCurrency);
            if (!converted) {
                resultsContainer.classList.add('hidden');
                return;
            }

            resultsContainer.classList.remove('hidden');
            results.innerHTML = '';

            Object.keys(currencyNames).forEach(function(code) {
                if (code !== selectedCurrency) {
                    var div = document.createElement('div');
                    div.className = 'flex justify-between items-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4';
                    div.innerHTML = '<span class="text-gray-700 font-medium">' + currencyNames[code] + '</span><span class="text-xl font-bold text-indigo-600">' + currencySymbols[code] + ' ' + formatNumber(converted[code]) + '</span>';
                    results.appendChild(div);
                }
            });
        }

        function updateCurrencySymbol() {
            currencySymbol.textContent = currencySymbols[currencySelect.value];
        }

        function renderNotes() {
            if (notes.length === 0) {
                notesList.innerHTML = '<p class="text-center text-gray-400 py-8">ยังไม่มีโน๊ต</p>';
                return;
            }

            notesList.innerHTML = notes.map(function(note) {
                return '<div class="flex items-start justify-between bg-amber-50 rounded-lg p-3 group"><p class="text-gray-700 flex-1">' + note.text + '</p><button onclick="deleteNote(\'' + note.id + '\')" class="ml-2 p-1 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>';
            }).join('');
        }

        function addNote() {
            var text = noteInput.value.trim();
            if (!text) return;

            var note = {
                id: Date.now().toString(),
                text: text,
                timestamp: new Date().toISOString()
            };

            notes.push(note);
            saveNotes();
            renderNotes();
            noteInput.value = '';
            noteInputContainer.classList.add('hidden');
        }

        window.deleteNote = function(id) {
            notes = notes.filter(function(n) { return n.id !== id; });
            saveNotes();
            renderNotes();
        };

        currencySelect.addEventListener('change', function() {
            updateCurrencySymbol();
            updateResults();
        });

        amountInput.addEventListener('input', updateResults);

        toggleNoteBtn.addEventListener('click', function() {
            noteInputContainer.classList.toggle('hidden');
        });

        addNoteBtn.addEventListener('click', addNote);

        noteInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addNote();
            }
        });

        toggleRateBtn.addEventListener('click', function() {
            rateInputContainer.classList.toggle('hidden');
        });

        saveRateBtn.addEventListener('click', function() {
            rates.THB = parseFloat(rateTHB.value) || 0.23;
            rates.USD = parseFloat(rateUSD.value) || 0.0067;
            saveRates();
            updateRateDisplay();
            updateResults();
            rateInputContainer.classList.add('hidden');
            
            var originalText = saveRateBtn.textContent;
            saveRateBtn.textContent = '✓ บันทึกเรียบร้อย';
            saveRateBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
            saveRateBtn.classList.add('bg-green-600');
            setTimeout(function() {
                saveRateBtn.textContent = originalText;
                saveRateBtn.classList.remove('bg-green-600');
                saveRateBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            }, 2000);
        });

        loadRates();
        loadNotes();
        updateCurrencySymbol();
    </script>
</body>
</html>
