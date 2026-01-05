// data.js - 您的数据库文件
const cases = [
    // === 这里是第一章的数据 (V6.0) ===
    {
        "id": "01",
        "name": "上海临港新城滴水湖站地下交通枢纽",
        "city": "上海",
        "page_range": "P.1-12",
        "tags": ["地铁保护", "半圆形基坑", "砂质粉土"],
        "precision_level": "High",
        "data": { "area": "61000 m²", "depth": "11.13 m", "wall": "600mm地连墙, 深22.5m", "ratio": "1:1.02 [文中表4]", "system": "2道钢筋混凝土支撑", "deformation": "70.8 mm [实测]", "reinforcement": "地铁侧8m宽三轴搅拌桩" },
        "narrative": { "difficulty": "紧贴已建地铁16号线车站；地层为巨厚砂质粉土(>10m)，易流砂。", "solution": "采用半圆形基坑设计利用拱效应；分三阶段对称施工。" }
    },
    // ... 把我之前生成的其他8个案例粘贴在这里 ...
    {
        "id": "02",
        "name": "上海虹口提篮桥街道66街坊",
        "city": "上海",
        "page_range": "P.13-21",
        "tags": ["地铁保护", "伺服系统", "历史建筑"],
        "precision_level": "High",
        "data": { "area": "11035 m²", "depth": "20.3 m", "wall": "1000mm地连墙, 深43.0m", "ratio": "1:1.12 [推算]", "system": "2道砼 + 4道伺服钢支撑", "deformation": "B区 7 mm [伺服区实测]", "reinforcement": "槽壁加固 + 坑内被动区抽条" },
        "narrative": { "difficulty": "距地铁仅38m，且坑深>站深；常规支撑无法满足微变形要求。", "solution": "引入轴力伺服系统主动控制变形（对比A区常规支撑变形达88mm）。" }
    }
    // === 下次有新案例，直接在后面加逗号，然后粘贴新数据 ===
];
