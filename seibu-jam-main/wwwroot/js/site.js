// 天気コードマッピング
const weatherCode = {
    100: ["100.svg", "500.svg", "晴れ"],
    101: ["101.svg", "501.svg", "晴れ時々曇り"],
    102: ["102.svg", "502.svg", "晴れ一時雨"],
    103: ["102.svg", "502.svg", "晴れ時々雨"],
    104: ["104.svg", "504.svg", "晴れ一時雪"],
    105: ["104.svg", "504.svg", "晴れ時々雪"],
    106: ["102.svg", "502.svg", "晴れ一時雨か雪"],
    107: ["102.svg", "502.svg", "晴れ時々雨か雪"],
    108: ["102.svg", "502.svg", "晴れ一時雨か雷雨"],
    110: ["110.svg", "510.svg", "晴れ後時々曇り"],
    111: ["110.svg", "510.svg", "晴れ後曇り"],
    112: ["112.svg", "512.svg", "晴れ後一時雨"],
    113: ["112.svg", "512.svg", "晴れ後時々雨"],
    114: ["112.svg", "512.svg", "晴れ後雨"],
    115: ["115.svg", "515.svg", "晴れ後一時雪"],
    116: ["115.svg", "515.svg", "晴れ後時々雪"],
    117: ["115.svg", "515.svg", "晴れ後雪"],
    118: ["112.svg", "512.svg", "晴れ後雨か雪"],
    119: ["112.svg", "512.svg", "晴れ后雨か雷雨"],
    120: ["102.svg", "502.svg", "晴れ朝夕一時雨"],
    121: ["102.svg", "502.svg", "晴れ朝の内一時雨"],
    122: ["112.svg", "512.svg", "晴れ夕方一時雨"],
    123: ["100.svg", "500.svg", "晴れ山沿い雷雨"],
    124: ["100.svg", "500.svg", "晴れ山沿い雪"],
    125: ["112.svg", "512.svg", "晴れ午後は雷雨"],
    126: ["112.svg", "512.svg", "晴れ昼頃から雨"],
    127: ["112.svg", "512.svg", "晴れ夕方から雨"],
    128: ["112.svg", "512.svg", "晴れ夜は雨"],
    130: ["100.svg", "500.svg", "朝の内霧後晴れ"],
    131: ["100.svg", "500.svg", "晴れ明け方霧"],
    132: ["101.svg", "501.svg", "晴れ朝夕曇り"],
    140: ["102.svg", "502.svg", "晴れ時々雨と雷"],
    160: ["104.svg", "504.svg", "晴れ一時雪か雨"],
    170: ["104.svg", "504.svg", "晴れ時々雪か雨"],
    181: ["115.svg", "515.svg", "晴れ後雪か雨"],
    200: ["200.svg", "200.svg", "曇り"],
    201: ["201.svg", "601.svg", "曇り時々晴れ"],
    202: ["202.svg", "202.svg", "曇り一時雨"],
    203: ["202.svg", "202.svg", "曇り時々雨"],
    204: ["204.svg", "204.svg", "曇り一時雪"],
    205: ["204.svg", "204.svg", "曇り時々雪"],
    206: ["202.svg", "202.svg", "曇り一時雨か雪"],
    207: ["202.svg", "202.svg", "曇り時々雨か雪"],
    208: ["202.svg", "202.svg", "曇り一時雨か雷雨"],
    209: ["200.svg", "200.svg", "霧"],
    210: ["210.svg", "610.svg", "曇り後時々晴れ"],
    211: ["210.svg", "610.svg", "曇り後晴れ"],
    212: ["212.svg", "212.svg", "曇り後一時雨"],
    213: ["212.svg", "212.svg", "曇り後時々雨"],
    214: ["212.svg", "212.svg", "曇り後雨"],
    215: ["215.svg", "215.svg", "曇り後一時雪"],
    216: ["215.svg", "215.svg", "曇り後時々雪"],
    217: ["215.svg", "215.svg", "曇り後雪"],
    218: ["212.svg", "212.svg", "曇り後雨か雪"],
    219: ["212.svg", "212.svg", "曇り後雨か雷雨"],
    220: ["202.svg", "202.svg", "曇り朝夕一時雨"],
    221: ["202.svg", "202.svg", "曇り朝の内一時雨"],
    222: ["212.svg", "212.svg", "曇り夕方一時雨"],
    223: ["201.svg", "601.svg", "曇り日中時々晴れ"],
    224: ["212.svg", "212.svg", "曇り昼頃から雨"],
    225: ["212.svg", "212.svg", "曇り夕方から雨"],
    226: ["212.svg", "212.svg", "曇り夜は雨"],
    228: ["215.svg", "215.svg", "曇り昼頃から雪"],
    229: ["215.svg", "215.svg", "曇り夕方から雪"],
    230: ["215.svg", "215.svg", "曇り夜は雪"],
    231: ["200.svg", "200.svg", "曇り海岸霧か霧雨"],
    240: ["202.svg", "202.svg", "曇り時々雨と雷"],
    250: ["204.svg", "204.svg", "曇り時々雪と雷"],
    260: ["204.svg", "204.svg", "曇り一時雪か雨"],
    270: ["204.svg", "204.svg", "曇り時々雪か雨"],
    281: ["215.svg", "215.svg", "曇り後雪か雨"],
    300: ["300.svg", "300.svg", "雨"],
    301: ["301.svg", "701.svg", "雨時々晴れ"],
    302: ["302.svg", "302.svg", "雨時々止む"],
    303: ["303.svg", "303.svg", "雨時々雪"],
    304: ["300.svg", "300.svg", "雨か雪"],
    306: ["300.svg", "300.svg", "大雨"],
    308: ["308.svg", "308.svg", "雨で暴風を伴う"],
    309: ["303.svg", "303.svg", "雨一時雪"],
    311: ["311.svg", "711.svg", "雨後晴れ"],
    313: ["313.svg", "313.svg", "雨後曇り"],
    314: ["314.svg", "314.svg", "雨後時々雪"],
    315: ["314.svg", "314.svg", "雨後雪"],
    316: ["311.svg", "711.svg", "雨か雪後晴れ"],
    317: ["313.svg", "313.svg", "雨か雪後曇り"],
    320: ["311.svg", "711.svg", "朝の内雨後晴れ"],
    321: ["313.svg", "313.svg", "朝の内雨後曇り"],
    322: ["303.svg", "303.svg", "雨朝晩一時雪"],
    323: ["311.svg", "711.svg", "雨昼頃から晴れ"],
    324: ["311.svg", "711.svg", "雨夕方から晴れ"],
    325: ["311.svg", "711.svg", "雨夜は晴れ"],
    326: ["314.svg", "314.svg", "雨夕方から雪"],
    327: ["314.svg", "314.svg", "雨夜は雪"],
    328: ["300.svg", "300.svg", "雨一時強く降る"],
    329: ["300.svg", "300.svg", "雨一時みぞれ"],
    340: ["400.svg", "400.svg", "雪か雨"],
    350: ["300.svg", "300.svg", "雨で雷を伴う"],
    361: ["411.svg", "811.svg", "雪か雨後晴れ"],
    371: ["413.svg", "413.svg", "雪か雨後曇り"],
    400: ["400.svg", "400.svg", "雪"],
    401: ["401.svg", "801.svg", "雪時々晴れ"],
    402: ["402.svg", "402.svg", "雪時々止む"],
    403: ["403.svg", "403.svg", "雪時々雨"],
    405: ["400.svg", "400.svg", "大雪"],
    406: ["406.svg", "406.svg", "風雪強い"],
    407: ["406.svg", "406.svg", "暴風雪"],
    409: ["403.svg", "403.svg", "雪一時雨"],
    411: ["411.svg", "811.svg", "雪後晴れ"],
    413: ["413.svg", "413.svg", "雪後曇り"],
    414: ["414.svg", "414.svg", "雪後雨"],
    420: ["411.svg", "811.svg", "朝の内雪後晴れ"],
    421: ["413.svg", "413.svg", "朝の内雪後曇り"],
    422: ["414.svg", "414.svg", "雪昼頃から雨"],
    423: ["414.svg", "414.svg", "雪夕方から雨"],
    425: ["400.svg", "400.svg", "雪一時強く降る"],
    426: ["400.svg", "400.svg", "雪後みぞれ"],
    427: ["400.svg", "400.svg", "雪一時みぞれ"],
    450: ["400.svg", "400.svg", "雪で雷を伴う"],
};

const dayList = ["日", "月", "火", "水", "木", "金", "土"];

// 年間行事予定データ（Schedule.cshtmlから抽出）
// デフォルトの混雑度データ
const baseCongestion = [
    { time: "17時", percent: 10 },
    { time: "18時", percent: 50 },
    { time: "19時", percent: 70 },
    { time: "20時", percent: 40 },
    { time: "21時", percent: 50 },
    { time: "22時", percent: 30 },
    { time: "23時", percent: 20 }
];

// 試験期間用の混雑度データ
const testCongestion = [
    { time: "17時", percent: 40 },
    { time: "18時", percent: 50 },
    { time: "19時", percent: 50 },
    { time: "20時", percent: 40 },
    { time: "21時", percent: 40 },
    { time: "22時", percent: 30 },
    { time: "23時", percent: 30 }
];

const scheduleData = [
    // 4月
    { start: "4/1", end: "4/5", title: "春季休業" },
    { start: "4/3", end: "4/3", title: "開寮・入寮式・新入寮生オリエンテーション" },
    { start: "4/4", end: "4/4", title: "入学式・新入生オリエンテーション" },
    { start: "4/7", end: "4/7", title: "一斉健康診断・専攻科オリエンテーション" },
    { start: "4/8", end: "4/8", title: "前期授業開始" },
    { start: "4/16", end: "4/16", title: "新入生歓迎会・クラブ紹介" },
    { start: "4/24", end: "4/24", title: "開校記念日" },
    { start: "4/29", end: "4/29", title: "昭和の日" },
    
    // 5月
    { start: "5/3", end: "5/3", title: "憲法記念日" },
    { start: "5/4", end: "5/4", title: "みどりの日" },
    { start: "5/5", end: "5/5", title: "こどもの日" },
    { start: "5/7", end: "5/7", title: "校長訓辞・校長表彰・学生総会" },
    { start: "5/10", end: "5/10", title: "キャンパスウォーク" },
    { start: "5/12", end: "5/16", title: "いじめ防止週間" },
    { start: "5/26", end: "5/31", title: "前期中間学力確認週間" },
    
    // 6月
    { start: "6/4", end: "6/4", title: "球技大会" },
    { start: "6/16", end: "6/20", title: "前期公開授業週間" },
    { start: "6/21", end: "6/21", title: "専攻科入学者選抜（学力選抜）" },
    { start: "6/22", end: "6/22", title: "北陸地区高専体育大会（野球）" },
    { start: "6/28", end: "6/29", title: "北陸地区高専体育大会（各種競技）" },
    
    // 7月
    { start: "7/1", end: "7/2", title: "本科・専攻科期末試験" },
    { start: "7/4", end: "7/5", title: "本科・専攻科期末試験" },
    { start: "7/5", end: "7/5", title: "編入学試験" },
    { start: "7/6", end: "7/8", title: "試験返却日" },
    { start: "7/12", end: "7/12", title: "夏季休業開始" },
    { start: "7/19", end: "7/21", title: "北信越地区高専サッカー" },
    
    // 8月
    { start: "8/11", end: "8/11", title: "山の日" },
    { start: "8/1", end: "8/31", title: "夏季休業継続" },
    
    // 9月
    { start: "9/15", end: "9/15", title: "敬老の日・開寮" },
    { start: "9/16", end: "9/19", title: "学力強化期間" },
    { start: "9/20", end: "9/20", title: "キャンパスツアー" },
    { start: "9/23", end: "9/23", title: "秋分の日" },
    { start: "9/25", end: "9/25", title: "体育祭" },
    { start: "9/29", end: "9/29", title: "後期授業開始" },
    
    // 10月
    { start: "10/1", end: "10/1", title: "防災訓練" },
    { start: "10/4", end: "10/4", title: "専攻科・大学・大学院合同説明会" },
    { start: "10/5", end: "10/5", title: "高専ロボットコンテスト東海北陸地区大会" },
    { start: "10/8", end: "10/8", title: "60周年記念式典" },
    { start: "10/11", end: "10/12", title: "全国高専プログラミングコンテスト" },
    { start: "10/17", end: "10/19", title: "高専祭" },
    
    // 11月
    { start: "11/3", end: "11/3", title: "文化の日" },
    { start: "11/8", end: "11/9", title: "全国高専デザインコンペティション" },
    { start: "11/10", end: "11/14", title: "読書週間" },
    { start: "11/16", end: "11/16", title: "全国高専ロボットコンテスト" },
    { start: "11/23", end: "11/23", title: "勤労感謝の日" },
    { start: "11/26", end: "11/28", title: "後期中間学力確認週間" },
    
    // 12月
    { start: "12/1", end: "12/3", title: "後期中間学力確認週間" },
    { start: "12/6", end: "12/6", title: "キャリア教育セミナー" },
    { start: "12/11", end: "12/17", title: "後期公開授業週間" },
    { start: "12/25", end: "12/25", title: "冬季休業開始・閉寮" },
    
    // 1月
    { start: "1/1", end: "1/1", title: "元日" },
    { start: "1/7", end: "1/7", title: "開寮" },
    { start: "1/8", end: "1/8", title: "授業再開" },
    { start: "1/10", end: "1/10", title: "入学者選抜（推薦選抜）" },
    { start: "1/13", end: "1/13", title: "成人の日" },
    { start: "1/21", end: "1/21", title: "校長表彰・校長訓辞・学生総会" },
    
    // 2月
    { start: "2/2", end: "2/2", title: "本科５年卒業研究発表" },
    { start: "2/8", end: "2/8", title: "入学者選抜（学力選抜）" },
    { start: "2/11", end: "2/11", title: "建国記念の日" },
    { start: "2/12", end: "2/18", title: "本科・専攻科期末試験" },
    { start: "2/23", end: "2/23", title: "天皇誕生日" },
    { start: "2/28", end: "2/29", title: "専攻科特別研究発表会" },
    
    // 3月
    { start: "3/3", end: "3/3", title: "第3ブロック専攻科研究フォーラム" },
    { start: "3/18", end: "3/18", title: "卒業・修了式" },
    { start: "3/19", end: "3/19", title: "学年末休業開始" },
    { start: "3/20", end: "3/20", title: "春分の日" }
];

// 日付文字列をDateオブジェクトに変換する関数（年度考慮）
function parseScheduleDate(dateStr) {
    const [month, day] = dateStr.split('/').map(Number);
    const currentYear = new Date().getFullYear();
    
    // 4月以降は今年度、1-3月は次年度として扱う
    const year = month >= 4 ? currentYear : currentYear + 1;
    
    return new Date(year, month - 1, day);
}

// 今日が試験期間かどうかを判定する関数
function isExamPeriod() {
    const today = new Date();
    
    for (const event of scheduleData) {
        const startDate = parseScheduleDate(event.start);
        const endDate = parseScheduleDate(event.end);
        
        // 今日が期間内かチェック
        if (today >= startDate && today <= endDate) {
            // タイトルに「中間」または「期末」が含まれているかチェック
            if (event.title.includes('中間') || event.title.includes('期末')) {
                console.log(`試験期間中: ${event.title}`);
                return true;
            }
        }
    }
     return false;
}
// 混雑度グラフを作成する関数（修正版）
function createCongestionChart(weatherData = null) {
    let adjustedCongestion = [...baseCongestion];
    
    // まず試験期間かどうかをチェック
    if (isExamPeriod()) {
        adjustedCongestion = [...testCongestion];
        console.log('試験期間のため混雑度を変更しました');
    } else if (weatherData) {
        const currentDate = new Date(weatherData.date);
        const dayOfWeek = currentDate.getDay();
        
        // 金土日の場合は混雑度を下げる
        if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
            adjustedCongestion = adjustedCongestion.map(item => ({
                time: item.time,
                percent: Math.round(item.percent * 0.2)
            }));
        } else if (weatherData.telop && weatherData.telop.includes("雨")) {
            // 雨の場合は早い時間にシフト
            for (let i = 2; i > 0; i--) {
                const movePercent = Math.min(20, adjustedCongestion[i].percent);
                adjustedCongestion[i].percent -= movePercent;
                adjustedCongestion[i - 1].percent += movePercent;
            }
        }
    }
    
    const labels = adjustedCongestion.map(item => item.time);
    const data = adjustedCongestion.map(item => item.percent);
    
    const ctx = document.getElementById('congestionChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '混雑度（%）',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { stepSize: 10 }
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });
    }
}

// 天気データを取得する関数
async function fetchWeatherData() {
    try {
        const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/180000.json";
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('天気データの取得に失敗しました');
        }
        
        const weather = await response.json();
        
        // 地域名を表示
        const locationElement = document.getElementById("location");
        if (locationElement && weather[1]) {
            locationElement.innerHTML = 
                `${weather[1].publishingOffice}: ${weather[1].timeSeries[0].areas[0].area.name} ` +
                `<a href="https://www.jma.go.jp/bosai/forecast/" target="_blank">気象庁のデータを元に作成</a>`;
        }
        
        // 気温データの解析とリスト作成
        const temperatureData = analyzeTemperatureData(weather);
        
        // 天気予報を表示
        displayWeatherForecast(weather, temperatureData);
        
        // 現在の天気データを取得
        const currentWeatherData = getCurrentWeatherData(weather);
        
        // 混雑度グラフを作成
        createCongestionChart(currentWeatherData);
        
    } catch (error) {
        console.error('天気データの取得エラー:', error);
        
        // エラー時は現在の日付で基本の混雑度グラフを表示
        const currentWeatherText = document.getElementById("currentWeatherText");
        if (currentWeatherText) {
            currentWeatherText.textContent = "天気データの取得に失敗しました。基本の混雑度を表示しています。";
        }
        
        createCongestionChart();
    }
}

// 気温データを解析する関数（参考コードを元に修正）
function analyzeTemperatureData(weather) {
    const tempsMinList = [];
    const tempsMaxList = [];
    
    try {
        // 今日・明日の気温データ
        const isTodaysData = weather[0].timeSeries[2].timeDefines.length === 4;
        const temps = weather[0].timeSeries[2].areas[0].temps;
        
        if (isTodaysData) {
            tempsMinList.push(temps[0] === temps[1] ? "--" : temps[0], temps[2]);
            tempsMaxList.push(temps[1], temps[3]);
        } else {
            tempsMinList.push("--", temps[0]);
            tempsMaxList.push("--", temps[1]);
        }
        
        // 週間予報の気温データ
        if (weather[1] && weather[1].timeSeries && weather[1].timeSeries[1]) {
            const weeklyTempsMin = weather[1].timeSeries[1].areas[0].tempsMin;
            const weeklyTempsMax = weather[1].timeSeries[1].areas[0].tempsMax;
            
            // 明日の翌日から5日分
            const timeDefines = weather[0].timeSeries[0].timeDefines;
            const startCount = weather[1].timeSeries[0].timeDefines.indexOf(timeDefines[1]) + 1;
            
            for (let i = startCount; i < startCount + 5 && i < weeklyTempsMin.length; i++) {
                tempsMinList.push(weeklyTempsMin[i] || "--");
                tempsMaxList.push(weeklyTempsMax[i] || "--");
            }
        }
        
        return { tempsMinList, tempsMaxList };
        
    } catch (error) {
        console.error('気温データの解析エラー:', error);
        return { tempsMinList: [], tempsMaxList: [] };
    }
}

// 天気予報を表示する関数
function displayWeatherForecast(weather, temperatureData) {
    const weatherForecast = document.getElementById("weatherForecast");
    if (!weatherForecast) return;
    weatherForecast.innerHTML = '';

    try {
        const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
        const timeDefines = weather[0].timeSeries[0].timeDefines;
        
        // 今日・明日の2日分を表示
        for (let i = 0; i < Math.min(2, weatherCodes.length); i++) {
            const temperatures = {
                min: temperatureData.tempsMinList[i] || "--",
                max: temperatureData.tempsMaxList[i] || "--"
            };
            const weatherItem = createWeatherItem(weatherCodes[i], timeDefines[i], temperatures);
            weatherForecast.appendChild(weatherItem);
        }
    } catch (error) {
        console.error('天気予報の表示エラー:', error);
        weatherForecast.innerHTML = '<div class="weather-item">天気データの表示に失敗しました</div>';
    }
}

// 天気アイテムを作成する関数
function createWeatherItem(weatherCodeValue, timeDefine, temperatures = { min: "--", max: "--" }) {
    const weatherItem = document.createElement('div');
    weatherItem.className = 'weather-item';
    
    const dt = new Date(timeDefine);
    const weekdayCount = dt.getDay();
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const day = String(dt.getDate()).padStart(2, '0');
    
    const weatherInfo = weatherCode[weatherCodeValue] || ["", "", "不明"];
    
    weatherItem.innerHTML = `
        <div class="date" style="color: ${weekdayCount === 0 ? 'red' : weekdayCount === 6 ? 'blue' : 'black'}">
            ${month}/${day}(${dayList[weekdayCount]})
        </div>
        <img class="weather-img" src="https://www.jma.go.jp/bosai/forecast/img/${weatherInfo[0]}" alt="${weatherInfo[2]}">
        <div class="weather-telop">${weatherInfo[2]}</div>
        <div><span class="temp-min">${temperatures.min}℃</span>/<span class="temp-max">${temperatures.max}℃</span></div>
    `;
    
    return weatherItem;
}

// 現在の天気データを取得する関数
function getCurrentWeatherData(weather) {
    try {
        const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
        const timeDefines = weather[0].timeSeries[0].timeDefines;
        
        const currentWeatherData = {
            date: timeDefines[0],
            telop: weatherCode[weatherCodes[0]] ? weatherCode[weatherCodes[0]][2] : "不明",
            tempMin: "--",
            tempMax: "--"
        };
        
        // 現在の天気テキストを表示
        const currentWeatherText = document.getElementById("currentWeatherText");
        if (currentWeatherText) {
            currentWeatherText.textContent = 
                `現在の天気: ${currentWeatherData.telop} (${new Date(currentWeatherData.date).toLocaleDateString()})`;
        }
        
        return currentWeatherData;
        
    } catch (error) {
        console.error('現在の天気データ取得エラー:', error);
        return null;
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    // Chart.jsが読み込まれるまで少し待つ
    setTimeout(() => {
        fetchWeatherData();
    }, 100);
});
